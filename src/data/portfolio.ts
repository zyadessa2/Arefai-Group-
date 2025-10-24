export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  category: 'branding' | 'photography' | 'designs' | 'videos';
  type: string;
  typeAr: string;
  client: string;
  clientAr: string;
  year: string;
  thumbnail: string;
  images: string[];
  description: string;
  descriptionAr: string;
  tags: string[];
  tagsAr: string[];
  challenge?: string;
  challengeAr?: string;
  solution?: string;
  solutionAr?: string;
  results?: string[];
  resultsAr?: string[];
}

export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    slug: 'topkapi-branding',
    title: 'TOPKAPI',
    titleAr: 'توب كابي',
    category: 'branding',
    type: 'Brand Identity Design',
    typeAr: 'تصميم الهوية البصرية',
    client: 'TOPKAPI Coffee',
    clientAr: 'توب كابي للقهوة',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=800&fit=crop',
    ],
    description: 'Complete brand identity design for a premium coffee brand, including logo, packaging, and brand guidelines.',
    descriptionAr: 'تصميم هوية بصرية متكاملة لعلامة تجارية فاخرة للقهوة، تشمل الشعار والتغليف ودليل الهوية.',
    tags: ['Branding', 'Logo Design', 'Packaging', 'Brand Guidelines'],
    tagsAr: ['هوية بصرية', 'تصميم شعار', 'تغليف', 'دليل العلامة'],
    challenge: 'Creating a modern yet warm brand identity that appeals to coffee enthusiasts.',
    challengeAr: 'إنشاء هوية بصرية عصرية ودافئة تجذب عشاق القهوة.',
    solution: 'We developed a sophisticated visual language combining minimalist design with warm coffee tones.',
    solutionAr: 'طورنا لغة بصرية راقية تجمع بين التصميم البسيط والألوان الدافئة للقهوة.',
    results: ['+150% brand recognition', '+80% customer engagement', 'Award-winning packaging design'],
    resultsAr: ['+150% في узнاваемости العلامة', '+80% في تفاعل العملاء', 'تصميم تغليف حائز على جوائز'],
  },
  {
    id: '2',
    slug: 'bon-bouch-branding',
    title: 'BON BOUCH',
    titleAr: 'بون بوش',
    category: 'branding',
    type: 'Food & Beverage Branding',
    typeAr: 'هوية الأطعمة والمشروبات',
    client: 'BON BOUCH Ice Cream',
    clientAr: 'بون بوش للآيس كريم',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=1200&h=800&fit=crop',
    ],
    description: 'Fresh and playful brand identity for an artisanal ice cream shop, emphasizing natural ingredients.',
    descriptionAr: 'هوية بصرية مرحة ومنعشة لمحل آيس كريم حرفي، مع التركيز على المكونات الطبيعية.',
    tags: ['Branding', 'Packaging', 'Menu Design', 'Signage'],
    tagsAr: ['هوية بصرية', 'تغليف', 'تصميم قائمة', 'لافتات'],
  },
  {
    id: '3',
    slug: 'glg-restaurant',
    title: 'GLG Restaurant',
    titleAr: 'مطعم GLG',
    category: 'branding',
    type: 'Restaurant Branding',
    typeAr: 'هوية المطاعم',
    client: 'GLG Gastronomy',
    clientAr: 'GLG للمأكولات الفاخرة',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop',
    ],
    description: 'Luxury restaurant branding with elegant visual identity and premium menu design.',
    descriptionAr: 'هوية فاخرة لمطعم راقي مع تصميم بصري أنيق وقائمة طعام فاخرة.',
    tags: ['Branding', 'Menu Design', 'Interior Graphics'],
    tagsAr: ['هوية بصرية', 'تصميم قائمة', 'جرافيكس داخلي'],
  },
  {
    id: '4',
    slug: 'product-photography-campaign',
    title: 'Product Photography',
    titleAr: 'تصوير المنتجات',
    category: 'photography',
    type: 'Commercial Photography',
    typeAr: 'التصوير التجاري',
    client: 'Various Clients',
    clientAr: 'عملاء متنوعون',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=800&fit=crop',
    ],
    description: 'High-quality product photography for e-commerce and marketing campaigns.',
    descriptionAr: 'تصوير احترافي للمنتجات للتجارة الإلكترونية والحملات التسويقية.',
    tags: ['Photography', 'Product Styling', 'E-commerce'],
    tagsAr: ['تصوير', 'تنسيق منتجات', 'تجارة إلكترونية'],
  },
  {
    id: '5',
    slug: 'fashion-photography',
    title: 'Fashion Shoot',
    titleAr: 'تصوير أزياء',
    category: 'photography',
    type: 'Fashion Photography',
    typeAr: 'تصوير الأزياء',
    client: 'Fashion Brand',
    clientAr: 'علامة أزياء',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=800&fit=crop',
    ],
    description: 'Creative fashion photography campaign featuring the latest collection.',
    descriptionAr: 'حملة تصوير أزياء إبداعية تعرض أحدث المجموعات.',
    tags: ['Photography', 'Fashion', 'Editorial'],
    tagsAr: ['تصوير', 'أزياء', 'تحريري'],
  },
  {
    id: '6',
    slug: 'social-media-designs',
    title: 'Social Media Graphics',
    titleAr: 'تصاميم سوشيال ميديا',
    category: 'designs',
    type: 'Digital Design',
    typeAr: 'التصميم الرقمي',
    client: 'Tech Startup',
    clientAr: 'شركة ناشئة تقنية',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop',
    ],
    description: 'Engaging social media graphics designed to boost engagement and brand awareness.',
    descriptionAr: 'تصاميم سوشيال ميديا جذابة لزيادة التفاعل والوعي بالعلامة التجارية.',
    tags: ['Design', 'Social Media', 'Instagram', 'Facebook'],
    tagsAr: ['تصميم', 'سوشيال ميديا', 'إنستغرام', 'فيسبوك'],
  },
  {
    id: '7',
    slug: 'mobile-app-design',
    title: 'Mobile App UI/UX',
    titleAr: 'تصميم تطبيق موبايل',
    category: 'designs',
    type: 'UI/UX Design',
    typeAr: 'تصميم واجهات',
    client: 'E-commerce Platform',
    clientAr: 'منصة تجارة إلكترونية',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
    ],
    description: 'Intuitive mobile app design focused on user experience and conversion optimization.',
    descriptionAr: 'تصميم تطبيق موبايل سهل الاستخدام مع التركيز على تجربة المستخدم وتحسين التحويلات.',
    tags: ['UI/UX', 'Mobile Design', 'Figma', 'Prototyping'],
    tagsAr: ['واجهات', 'تصميم موبايل', 'فيجما', 'نماذج أولية'],
  },
  {
    id: '8',
    slug: 'promotional-video',
    title: 'Brand Promo Video',
    titleAr: 'فيديو ترويجي',
    category: 'videos',
    type: 'Video Production',
    typeAr: 'إنتاج فيديو',
    client: 'Corporate Client',
    clientAr: 'عميل مؤسسي',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop',
    ],
    description: 'Dynamic promotional video showcasing brand values and products.',
    descriptionAr: 'فيديو ترويجي ديناميكي يعرض قيم العلامة التجارية والمنتجات.',
    tags: ['Video', 'Motion Graphics', 'Storytelling'],
    tagsAr: ['فيديو', 'موشن جرافيكس', 'سرد قصصي'],
  },
  {
    id: '9',
    slug: 'brand-story-video',
    title: 'Brand Story',
    titleAr: 'قصة العلامة',
    category: 'videos',
    type: 'Storytelling Video',
    typeAr: 'فيديو سردي',
    client: 'Heritage Brand',
    clientAr: 'علامة تراثية',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=800&fit=crop',
    ],
    description: 'Emotional brand storytelling video highlighting the company heritage and values.',
    descriptionAr: 'فيديو عاطفي يروي قصة العلامة ويسلط الضوء على تراث الشركة وقيمها.',
    tags: ['Video', 'Documentary', 'Cinematography'],
    tagsAr: ['فيديو', 'وثائقي', 'تصوير سينمائي'],
  },
];

export const getPortfolioBySlug = (slug: string): PortfolioItem | undefined => {
  return portfolioData.find(item => item.slug === slug);
};

export const getPortfolioByCategory = (category: string): PortfolioItem[] => {
  if (category === 'all') return portfolioData;
  return portfolioData.filter(item => item.category === category);
};
