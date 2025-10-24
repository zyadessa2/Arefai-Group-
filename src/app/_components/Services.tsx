'use client';
import { 
	Calendar, 
	Video, 
	Share2, 
	Target, 
	PenTool, 
	MessageCircle, 
	Palette, 
	ArrowRight, 
	Sparkles,
	TrendingUp,
	Users
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
	const { t } = useLanguage();

	const features = [
		{
			key: 'strategy',
			title: t.services.items.strategy.title,
			icon: Calendar,
			description: t.services.items.strategy.description,
			gradient: 'from-[#FFC300] to-[#FFA500]',
			iconBg: 'bg-[#FFC300]/10',
			iconColor: 'text-[#FFC300]',
			borderColor: 'border-[#FFC300]/20',
			hoverBg: 'hover:bg-[#FFC300]/5',
		},
		{
			key: 'mediaProduction',
			title: t.services.items.mediaProduction.title,
			icon: Video,
			description: t.services.items.mediaProduction.description,
			gradient: 'from-[#00B5AD] to-[#008B84]',
			iconBg: 'bg-[#00B5AD]/10',
			iconColor: 'text-[#00B5AD]',
			borderColor: 'border-[#00B5AD]/20',
			hoverBg: 'hover:bg-[#00B5AD]/5',
		},
		{
			key: 'socialMedia',
			title: t.services.items.socialMedia.title,
			icon: Share2,
			description: t.services.items.socialMedia.description,
			gradient: 'from-[#FFC300] to-[#FFA500]',
			iconBg: 'bg-[#FFC300]/10',
			iconColor: 'text-[#FFC300]',
			borderColor: 'border-[#FFC300]/20',
			hoverBg: 'hover:bg-[#FFC300]/5',
		},
		{
			key: 'adsManagement',
			title: t.services.items.adsManagement.title,
			icon: Target,
			description: t.services.items.adsManagement.description,
			gradient: 'from-[#00B5AD] to-[#008B84]',
			iconBg: 'bg-[#00B5AD]/10',
			iconColor: 'text-[#00B5AD]',
			borderColor: 'border-[#00B5AD]/20',
			hoverBg: 'hover:bg-[#00B5AD]/5',
		},
		{
			key: 'contentCreation',
			title: t.services.items.contentCreation.title,
			icon: PenTool,
			description: t.services.items.contentCreation.description,
			gradient: 'from-[#FFC300] to-[#FFA500]',
			iconBg: 'bg-[#FFC300]/10',
			iconColor: 'text-[#FFC300]',
			borderColor: 'border-[#FFC300]/20',
			hoverBg: 'hover:bg-[#FFC300]/5',
		},
		{
			key: 'moderation',
			title: t.services.items.moderation.title,
			icon: MessageCircle,
			description: t.services.items.moderation.description,
			gradient: 'from-[#00B5AD] to-[#008B84]',
			iconBg: 'bg-[#00B5AD]/10',
			iconColor: 'text-[#00B5AD]',
			borderColor: 'border-[#00B5AD]/20',
			hoverBg: 'hover:bg-[#00B5AD]/5',
		},
		{
			key: 'branding',
			title: t.services.items.branding.title,
			icon: Palette,
			description: t.services.items.branding.description,
			gradient: 'from-[#FFC300] to-[#FFA500]',
			iconBg: 'bg-[#FFC300]/10',
			iconColor: 'text-[#FFC300]',
			borderColor: 'border-[#FFC300]/20',
			hoverBg: 'hover:bg-[#FFC300]/5',
		},
	];

	return (
		<section className="py-20 md:py-32 bg-[#1F3A44] relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00B5AD]/5 to-transparent pointer-events-none" />
			
			<div className="absolute inset-0 opacity-5 pointer-events-none">
				<Calendar className="absolute top-32 left-[10%] w-20 h-20 text-[#FFC300] animate-pulse" style={{ animationDelay: '0s' } as any} />
				<Share2 className="absolute top-20 right-[15%] w-16 h-16 text-[#00B5AD] animate-pulse" style={{ animationDelay: '1s' } as any} />
				<Target className="absolute bottom-32 left-[20%] w-24 h-24 text-[#FFC300] animate-pulse" style={{ animationDelay: '2s' } as any} />
				<Video className="absolute top-[50%] right-[25%] w-18 h-18 text-[#00B5AD] animate-pulse" style={{ animationDelay: '3s' } as any} />
				<Palette className="absolute bottom-24 right-[12%] w-16 h-16 text-[#FFC300] animate-pulse" style={{ animationDelay: '4s' } as any} />
				<TrendingUp className="absolute top-[60%] left-[15%] w-16 h-16 text-[#00B5AD] animate-pulse" style={{ animationDelay: '5s' } as any} />
				<Users className="absolute bottom-40 right-[30%] w-20 h-20 text-[#FFC300] animate-pulse" style={{ animationDelay: '6s' } as any} />
			</div>

			<motion.div
				className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#FFC300]/10 blur-3xl"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#00B5AD]/10 blur-3xl"
				animate={{
					scale: [1, 1.3, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
			/>

			<div className="mx-auto w-full max-w-7xl space-y-16 px-4 relative z-10">
				<AnimatedContainer className="mx-auto max-w-3xl text-center space-y-4">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/20 mb-4"
					>
						<Sparkles className="w-4 h-4 text-[#FFC300]" />
						<span className="text-sm font-medium text-white">{t.services.badge}</span>
					</motion.div>

					<h2 className="hero-title text-4xl md:text-5xl lg:text-6xl text-white mb-6">
						{t.services.title}
					</h2>
					<p className="hero-subtitle text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
						{t.services.subtitle}
					</p>
				</AnimatedContainer>

				<AnimatedContainer delay={0.3} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, i) => (
						<ServiceCard key={feature.key} feature={feature} index={i} />
					))}
				</AnimatedContainer>

				<AnimatedContainer delay={0.6} className="text-center">
					<motion.button
						className="cta-button px-8 py-4 text-lg inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
					>
						{t.services.cta}
						<ArrowRight className="w-5 h-5" />
					</motion.button>
				</AnimatedContainer>
			</div>
		</section>
	);
}

interface ServiceCardProps {
	feature: {
		key: string;
		title: string;
		icon: any;
		description: string;
		gradient: string;
		iconBg: string;
		iconColor: string;
		borderColor: string;
		hoverBg: string;
	};
	index: number;
}

function ServiceCard({ feature, index }: ServiceCardProps) {
	const Icon = feature.icon;
	
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{ y: -8, transition: { duration: 0.3 } }}
			className={`group relative bg-white/5 backdrop-blur-sm border-2 ${feature.borderColor} rounded-2xl p-8 ${feature.hoverBg} transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}
		>
			<motion.div
				className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
			/>

			<div className="relative z-10 space-y-4">
				<motion.div
					className={`${feature.iconBg} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
					whileHover={{ rotate: [0, -10, 10, -10, 0] }}
					transition={{ duration: 0.5 }}
				>
					<Icon className={`w-8 h-8 ${feature.iconColor}`} />
				</motion.div>

				<h3 className="hero-subtitle text-xl font-bold text-white group-hover:text-[#FFC300] transition-colors duration-300">
					{feature.title}
				</h3>

				<p className="hero-subtitle text-white/70 text-sm leading-relaxed">
					{feature.description}
				</p>

				<motion.div
					className="flex items-center gap-2 text-sm font-medium text-[#FFC300] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					initial={{ x: -10 }}
					whileHover={{ x: 0 }}
				>
					<span>Learn More</span>
					<ArrowRight className="w-4 h-4" />
				</motion.div>
			</div>

			<motion.div
				className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`}
			/>
		</motion.div>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
