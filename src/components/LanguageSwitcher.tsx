"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { language, setLanguage, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00B5AD]/10 border border-[#00B5AD]/30 hover:bg-[#00B5AD]/20 transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Languages className="h-5 w-5 text-[#FFC300] group-hover:rotate-12 transition-transform duration-300" />
      <span className="text-sm font-medium text-white/80 group-hover:text-white">
        {language === 'ar' ? 'EN' : 'عربي'}
      </span>
      
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFC300] to-[#00B5AD]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
