'use client';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { id: 'all', label: 'الكل', labelEn: 'All' },
  { id: 'branding', label: 'الهوية البصرية', labelEn: 'Branding' },
  { id: 'photography', label: 'التصوير', labelEn: 'Photography' },
  { id: 'designs', label: 'التصاميم', labelEn: 'Designs' },
  { id: 'videos', label: 'الفيديوهات', labelEn: 'Videos' },
];

const Portfolio = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState(6);

  const filteredProjects = useMemo(() => {
    return activeCategory === 'all' 
      ? portfolioData 
      : portfolioData.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleItems);
  }, [filteredProjects, visibleItems]);

  const hasMore = visibleItems < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleItems(prev => Math.min(prev + 6, filteredProjects.length));
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setVisibleItems(6);
  };

  return (
    <section 
      className="py-20 md:py-32 bg-[#1F3A44] relative overflow-hidden"
      aria-label={language === 'ar' ? 'معرض أعمالنا' : 'Our Portfolio'}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00B5AD]/5 to-transparent pointer-events-none" aria-hidden="true" />
      
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#FFC300]/10 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center space-y-4 mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/20 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#FFC300]" aria-hidden="true" />
            <span className="text-sm font-medium text-white">
              {language === 'ar' ? 'أعمالنا' : 'Our Work'}
            </span>
          </motion.div>

          <h2 className="hero-title text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {language === 'ar' ? (
              <>
                <span className="inline-flex items-center gap-4">
                  <span className="text-6xl md:text-7xl lg:text-8xl text-[#FFC300]">"</span>
                  <span>آخر أعمالنا</span>
                </span>
              </>
            ) : (
              <>
                <span className="inline-flex items-center gap-4">
                  <span className="text-6xl md:text-7xl lg:text-8xl text-[#FFC300]">"</span>
                  <span>Our Last Work</span>
                </span>
              </>
            )}
          </h2>
          <p className="hero-subtitle text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'نفتخر بإنجازاتنا ونشارك معكم أحدث مشاريعنا الإبداعية' 
              : 'We take pride in our achievements and share our latest creative projects'}
          </p>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label={language === 'ar' ? 'تصفية المشاريع' : 'Filter projects'}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#FFC300] text-[#1F3A44] shadow-lg shadow-[#FFC300]/30'
                  : 'bg-white/5 text-white border-2 border-white/20 hover:bg-white/10 hover:border-[#FFC300]/30'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls="portfolio-grid"
            >
              {language === 'ar' ? category.label : category.labelEn}
            </motion.button>
          ))}
        </motion.nav>

        <motion.div 
          id="portfolio-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="tabpanel"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <PortfolioCard 
                key={project.id} 
                project={project} 
                index={index} 
                language={language} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={handleLoadMore}
              className="cta-button px-8 py-4 text-lg inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={language === 'ar' ? 'عرض المزيد من المشاريع' : 'Load more projects'}
            >
              {language === 'ar' ? 'عرض المزيد' : 'Load More'}
              <span className="text-sm opacity-70">
                ({filteredProjects.length - visibleItems})
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const PortfolioCard = ({ project, index, language }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <Link 
        href={`/portfolio/${project.slug}`}
        className="block bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-white/10 hover:border-[#FFC300]/30 transition-all duration-500 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#FFC300] focus:ring-offset-2 focus:ring-offset-[#1F3A44]"
        aria-label={`${language === 'ar' ? 'عرض مشروع' : 'View project'}: ${language === 'ar' ? project.titleAr : project.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#1F3A44]/50">
          <Image
            src={project.thumbnail}
            alt={language === 'ar' ? project.titleAr : project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            loading={index < 6 ? 'eager' : 'lazy'}
            quality={85}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A44] via-[#1F3A44]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center gap-3">
            <motion.div 
              className="h-1 w-12 bg-gradient-to-r from-[#FFC300] to-[#FFA500] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
            <h3 className="hero-subtitle text-xl font-bold text-white group-hover:text-[#FFC300] transition-colors duration-300">
              {language === 'ar' ? project.titleAr : project.title}
            </h3>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00B5AD]/10 border border-[#00B5AD]/20 group-hover:bg-[#00B5AD]/20 group-hover:border-[#00B5AD]/30 transition-all duration-300">
            <div className="w-2 h-2 rounded-full bg-[#00B5AD]" />
            <span className="text-sm text-white/80 group-hover:text-white transition-colors">
              {language === 'ar' ? project.typeAr : project.type}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {(language === 'ar' ? project.tagsAr : project.tags).slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10 group-hover:bg-white/10 group-hover:text-white/80 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FFC300]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </motion.article>
  );
};

export default Portfolio;
