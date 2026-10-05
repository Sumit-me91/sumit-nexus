'use client';

import { motion } from 'framer-motion';

interface LoadingScreenProps {
  fullScreen?: boolean;
  message?: string;
}

const LoadingScreen = ({ 
  fullScreen = true, 
  message = 'Loading...' 
}: LoadingScreenProps) => {
  return (
    <div className={`
      flex items-center justify-center 
      ${fullScreen ? 'fixed inset-0 z-50 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm' : 'w-full py-12'}
    `}>
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="text-4xl md:text-6xl font-bold text-gradient">Sumit</div>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full w-40 mb-6"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
          className="text-sm text-gray-600 dark:text-gray-300"
        >
          {message}
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen; 