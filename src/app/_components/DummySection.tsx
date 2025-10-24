'use client';

import React from "react";
import { Vortex } from "../../components/ui/vortex";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function VortexDemoSecond() {
  const { t } = useLanguage();

  return (
    <div className="w-full mx-auto overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F3A44] via-white/85  to-[#1F3A44]" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#00B5AD]/5 via-transparent to-[#FFC300]/5 opacity-50" />
      
      <Vortex
        backgroundColor="transparent"
        rangeY={600}
        particleCount={300}
        baseHue={45}
        className="flex items-center flex-col justify-center px-4 md:px-10 py-16 md:py-24 w-full min-h-[60vh] relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/20 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#FFC300]" />
            <span className="text-sm font-medium text-[#1F3A44]">
              {t.cta.subtitle}
            </span>
          </motion.div>

          <h2 className="hero-title text-3xl md:text-5xl lg:text-6xl text-[#1F3A44] mb-6">
            {t.cta.title}
          </h2>

          <p className="hero-subtitle text-[#1F3A44]/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {t.cta.description}
          </p>

          <motion.button
            className="cta-button px-8 py-4 text-lg inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.cta.button}
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 text-white/60"
            >
              <div className="w-2 h-2 rounded-full bg-[#FFC300]" />
              <span className="text-sm">✓ استشارة مجانية</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 text-white/60"
            >
              <div className="w-2 h-2 rounded-full bg-[#00B5AD]" />
              <span className="text-sm">✓ خطة تسويقية مخصصة</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 text-white/60"
            >
              <div className="w-2 h-2 rounded-full bg-[#FFC300]" />
              <span className="text-sm">✓ دعم على مدار الساعة</span>
            </motion.div>
          </div>
        </motion.div>
      </Vortex>
    </div>
  );
}

export function CustomStyleDemo() {
  return <VortexDemoSecond />;
}
