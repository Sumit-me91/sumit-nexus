'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [emailjsLoaded, setEmailjsLoaded] = useState(false);

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.emailjs.com/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      (window as any).emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS Public Key
      setEmailjsLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map form field names to state properties
    const fieldMap: {[key: string]: string} = {
      'user_name': 'name',
      'user_email': 'email',
      'subject': 'subject',
      'message': 'message'
    };
    
    const stateKey = fieldMap[name] || name;
    setFormData(prev => ({ ...prev, [stateKey]: value }));
  };

  const sendEmail = async () => {
    if (!emailjsLoaded || !form.current) {
      console.error('EmailJS not loaded or form not available');
      return false;
    }

    try {
      // Using emailjs directly from the CDN
      const result = await (window as any).emailjs.sendForm(
        'service_n8jlu2n', // Replace with your EmailJS service ID
        'template_tjcqdan', // Replace with your EmailJS template ID
        form.current,
        'W4qjV1Bk060-9by0t' // Replace with your EmailJS public key
      );
      
      console.log('Email sent successfully:', result.text);
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  };

  const sendWhatsAppMessage = () => {
    // Format the WhatsApp message
    const phoneNumber = '918390912864'; // Your phone number with country code, no + sign
    const message = `
*New Portfolio Message*
*From:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp API URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email directly using EmailJS
      const emailSent = await sendEmail();
      
      // Send WhatsApp message
      const whatsappSent = sendWhatsAppMessage();
      
      if (emailSent || whatsappSent) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
      
      // Reset form after successful submission
      if (emailSent || whatsappSent) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error sending messages:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary" size={24} />,
      title: 'Email',
      content: 'kaware882@gmail.com',
      link: 'mailto:kaware882@gmail.com',
    },
    {
      icon: <FaPhone className="text-primary" size={24} />,
      title: 'Phone',
      content: '+91 8390912864',
      link: 'tel:+918390912864',
    },
    {
      icon: <FaWhatsapp className="text-primary" size={24} />,
      title: 'WhatsApp',
      content: '+91 8390912864',
      link: 'https://wa.me/918390912864',
    },
    {
      icon: <FaMapMarkerAlt className="text-primary" size={24} />,
      title: 'Location',
      content: 'Mumbai, Maharashtra, India',
      link: 'https://maps.google.com/?q=Mumbai',
    },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out to me for any inquiries, project discussions, or just to say hello!
              I'm always open to new opportunities and collaborations.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mt-1">{info.icon}</div>
                  <div>
                    <h4 className="font-bold">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Thank you for your message! I've received it and will get back to you as soon as possible.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                There was an error sending your message. Please try contacting me directly via WhatsApp or email.
              </div>
            )}
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="user_name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 