import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'react-icons/fa' {
  import { IconType } from 'react-icons';
  export const FaGithub: IconType;
  export const FaLinkedin: IconType;
  export const FaTwitter: IconType;
  export const FaEnvelope: IconType;
  export const FaPhone: IconType;
  export const FaMapMarkerAlt: IconType;
  export const FaHtml5: IconType;
  export const FaCss3Alt: IconType;
  export const FaJs: IconType;
  export const FaReact: IconType;
  export const FaNodeJs: IconType;
  export const FaDatabase: IconType;
  export const FaGitAlt: IconType;
  export const FaFigma: IconType;
  export const FaExternalLinkAlt: IconType;
}

declare module 'react-icons/si' {
  import { IconType } from 'react-icons';
  export const SiTypescript: IconType;
  export const SiNextdotjs: IconType;
  export const SiTailwindcss: IconType;
  export const SiMongodb: IconType;
  export const SiExpress: IconType;
  export const SiFirebase: IconType;
}

declare module 'framer-motion' {
  export interface AnimationProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
  }

  export const motion: {
    [key: string]: React.FC<React.HTMLAttributes<HTMLElement> & AnimationProps>;
  };
} 