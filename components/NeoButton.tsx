import React from 'react';
import { motion } from 'framer-motion';

interface NeoButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent-red' | 'accent-green' | 'accent-yellow';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  darkMode?: boolean;
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  size = 'md',
  darkMode = false
}) => {
  
  const baseStyles = "font-bold border-2 border-black transition-all duration-200 flex items-center justify-center gap-2";
  
  const sizeStyles = {
    sm: "px-3 py-1 text-sm shadow-neo-sm active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
    md: "px-6 py-3 text-base shadow-neo active:shadow-none active:translate-x-[5px] active:translate-y-[5px]",
    lg: "px-8 py-4 text-xl shadow-neo-lg active:shadow-none active:translate-x-[8px] active:translate-y-[8px]"
  };

  const variants = {
    primary: "bg-google-blue text-white hover:bg-blue-600",
    secondary: darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-white text-black hover:bg-gray-50",
    'accent-red': "bg-google-red text-white hover:bg-red-600",
    'accent-green': "bg-google-green text-white hover:bg-green-600",
    'accent-yellow': "bg-google-yellow text-black hover:bg-yellow-500",
  };

  // Dark mode specific adjustments for shadows
  const shadowClass = darkMode ? 'shadow-white' : 'shadow-black';
  // Note: Tailwind config shadow-neo uses black by default, we might need custom style for dark mode white shadow if strictly required, 
  // but usually neobrutalism keeps black borders/shadows even in dark mode for high contrast if the background is dark grey, 
  // OR creates a white glow. Let's stick to the config definition but override border color if needed.
  
  const darkBorder = darkMode ? 'border-white' : 'border-black';
  const darkShadow = darkMode ? 'shadow-[4px_4px_0px_0px_#ffffff]' : 'shadow-[4px_4px_0px_0px_#000000]';
  const activeDarkShadow = 'active:shadow-none active:translate-x-[4px] active:translate-y-[4px]';

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        ${baseStyles} 
        ${size === 'sm' ? 'px-4 py-2 text-sm' : size === 'lg' ? 'px-10 py-4 text-xl' : 'px-6 py-3'}
        ${variants[variant]} 
        ${darkBorder}
        ${darkShadow}
        ${activeDarkShadow}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};