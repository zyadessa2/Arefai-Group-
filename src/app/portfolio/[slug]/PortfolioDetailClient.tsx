'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Tag, 
  Share2, 
  ChevronLeft, 
  ChevronRight,
  X,
  ExternalLink,
  User,
  Lightbulb,
  CheckCircle,
  Target
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioData, type PortfolioItem } from '@/data/portfolio';

interface Props {
  project: PortfolioItem;
}

export default function PortfolioDetailClient({ project }: Props) {
  const { language } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const relatedProjects = portfolioData
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: language === 'ar' ? project.titleAr : project.title,
          text: language === 'ar' ? project.descriptionAr : project.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(language === 'ar' ? 'تم نسخ الرابط' : 'Link copied!');
    }
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-[#1F3A44]">
      <section className="relative pt-24 pb-12 bg-gradient-to-b from-[#1F3A44] to-[#1F3A44]/95">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <Link 
              href="/#portfolio"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-[#FFC300]/30 transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>{language === 'ar' ? 'العودة للمعرض' : 'Back to Portfolio'}</span>
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/20 text-white hover:bg-[#FFC300]/20 transition-all duration-300"
              aria-label={language === 'ar' ? 'مشاركة المشروع' : 'Share project'}
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{language === 'ar' ? 'مشاركة' : 'Share'}</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00B5AD]/10 border border-[#00B5AD]/20 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#00B5AD]" />
              <span className="text-sm text-white">
                {language === 'ar' ? project.typeAr : project.type}
              </span>
            </div>

            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {language === 'ar' ? project.titleAr : project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{language === 'ar' ? project.clientAr : project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                <span className="capitalize">{project.category}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl mb-4 group cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
          >
            <Image
              src={project.images[selectedImageIndex]}
              alt={`${language === 'ar' ? project.titleAr : project.title} - Image ${selectedImageIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
              quality={90}
            />
            
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ExternalLink className="w-12 h-12 text-white" />
            </div>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                  aria-label={language === 'ar' ? 'الصورة السابقة' : 'Previous image'}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                  aria-label={language === 'ar' ? 'الصورة التالية' : 'Next image'}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
              {selectedImageIndex + 1} / {project.images.length}
            </div>
          </motion.div>

          {project.images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
            >
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImageIndex === idx
                      ? 'border-[#FFC300] scale-105'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-16 bg-[#1F3A44]">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h2 className="hero-subtitle text-2xl text-white mb-4 flex items-center gap-3">
                  <div className="w-1 h-8 bg-[#FFC300] rounded-full" />
                  {language === 'ar' ? 'نظرة عامة' : 'Overview'}
                </h2>
                <p className="text-white/80 leading-relaxed text-lg">
                  {language === 'ar' ? project.descriptionAr : project.description}
                </p>
              </motion.div>

              {project.challenge && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                >
                  <h2 className="hero-subtitle text-2xl text-white mb-4 flex items-center gap-3">
                    <Target className="w-6 h-6 text-[#FFC300]" />
                    {language === 'ar' ? 'التحدي' : 'The Challenge'}
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    {language === 'ar' ? project.challengeAr : project.challenge}
                  </p>
                </motion.div>
              )}

              {project.solution && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                >
                  <h2 className="hero-subtitle text-2xl text-white mb-4 flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-[#FFC300]" />
                    {language === 'ar' ? 'الحل' : 'The Solution'}
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    {language === 'ar' ? project.solutionAr : project.solution}
                  </p>
                </motion.div>
              )}

              {project.results && project.results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                >
                  <h2 className="hero-subtitle text-2xl text-white mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#FFC300]" />
                    {language === 'ar' ? 'النتائج' : 'Results'}
                  </h2>
                  <ul className="space-y-4">
                    {(language === 'ar' ? project.resultsAr : project.results)?.map((result, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#FFC300] mt-2 flex-shrink-0" />
                        <span>{result}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h3 className="hero-subtitle text-lg text-white mb-4">
                  {language === 'ar' ? 'الوسوم' : 'Tags'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(language === 'ar' ? project.tagsAr : project.tags).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#FFC300]/10 to-[#00B5AD]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#FFC300]/20"
              >
                <h3 className="hero-subtitle text-xl text-white mb-3">
                  {language === 'ar' ? 'هل لديك مشروع مماثل؟' : 'Have a similar project?'}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {language === 'ar' 
                    ? 'دعنا نناقش كيف يمكننا مساعدتك في تحقيق أهدافك'
                    : "Let's discuss how we can help you achieve your goals"}
                </p>
                <Link
                  href="/#contact"
                  className="cta-button w-full text-center inline-block"
                >
                  {language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-16 bg-[#1F3A44]">
          <div className="mx-auto w-full max-w-7xl px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hero-subtitle text-3xl text-white mb-8"
            >
              {language === 'ar' ? 'مشاريع مشابهة' : 'Related Projects'}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject, idx) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={`/portfolio/${relatedProject.slug}`}
                    className="block group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-[#FFC300]/30 transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={relatedProject.thumbnail}
                        alt={language === 'ar' ? relatedProject.titleAr : relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-bold mb-2 group-hover:text-[#FFC300] transition-colors">
                        {language === 'ar' ? relatedProject.titleAr : relatedProject.title}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {language === 'ar' ? relatedProject.typeAr : relatedProject.type}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              aria-label={language === 'ar' ? 'إغلاق' : 'Close'}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full aspect-[16/9]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.images[selectedImageIndex]}
                alt={`${language === 'ar' ? project.titleAr : project.title} - Fullscreen`}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
