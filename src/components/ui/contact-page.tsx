'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
Check,
Copy,
LucideIcon,
Mail,
MapPin,
Phone,
Send,
Sparkles,
ArrowRight,
MessageCircle,
Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Social Media Icons as SVG for better customization
const FacebookIcon = () => (
	<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
		<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
	</svg>
);

const TikTokIcon = () => (
	<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
		<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
	</svg>
);

const InstagramIcon = () => (
	<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
		<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
	</svg>
);

const BehanceIcon = () => (
	<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
		<path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
	</svg>
);

const socialLinks = [
{
icon: FacebookIcon,
label: 'Facebook',
href: 'https://www.facebook.com/share/1BU1Y1epNe/',
color: 'hover:text-[#1877F2]',
},
{
icon: TikTokIcon,
label: 'TikTok',
href: 'https://www.tiktok.com/@alrefaiigroup?_t=ZS-90g8jgcowgn&_r=1',
color: 'hover:text-white',
},
{
icon: InstagramIcon,
label: 'Instagram',
href: 'https://www.instagram.com/alrefaigroup?igsh=NWp5Ym1hcXZvdGM=',
color: 'hover:text-[#E4405F]',
},
{
icon: BehanceIcon,
label: 'Behance',
href: 'https://www.behance.net/alrefaigroup',
color: 'hover:text-[#1769FF]',
},
];

export function ContactPage() {
const { t } = useLanguage();
const [formData, setFormData] = useState({
name: '',
email: '',
phone: '',
company: '',
message: '',
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<
'idle' | 'success' | 'error'
>('idle');

const handleChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setIsSubmitting(true);
setSubmitStatus('idle');

try {
await new Promise((resolve) => setTimeout(resolve, 2000));
setSubmitStatus('success');
setFormData({
name: '',
email: '',
phone: '',
company: '',
message: '',
});
} catch (error) {
setSubmitStatus('error');
} finally {
setIsSubmitting(false);
}
};

	return (
		<section className="relative min-h-screen bg-[#1F3A44] text-white py-20 px-4 overflow-hidden">
			<Mail
				className="absolute top-20 right-20 w-24 h-24 text-white opacity-5 animate-pulse"
				style={{ animationDelay: '0s' }}
			/>
			<Phone
				className="absolute bottom-40 left-10 w-32 h-32 text-white opacity-5 animate-pulse"
				style={{ animationDelay: '1s' }}
			/>
			<Send
				className="absolute top-1/3 right-1/4 w-20 h-20 text-white opacity-5 animate-pulse"
				style={{ animationDelay: '2s' }}
			/>
			<MessageCircle
				className="absolute bottom-1/4 right-10 w-28 h-28 text-white opacity-5 animate-pulse"
				style={{ animationDelay: '3s' }}
			/>
			<Zap
				className="absolute top-1/2 left-20 w-16 h-16 text-white opacity-5 animate-pulse"
				style={{ animationDelay: '4s' }}
			/>

			<div className="max-w-7xl mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
					>
						<Sparkles className="w-4 h-4 text-[#FFC300]" />
						<span className="text-sm font-medium text-white">
							{t.contact.badge}
						</span>
					</motion.div>
					<h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
						{t.contact.title}
					</h1>
					<p className="hero-subtitle text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
						{t.contact.subtitle}
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-6"
					>
						<ContactCard
							icon={Mail}
							title={t.contact.email.title}
							description={t.contact.email.description}
							gradient="from-[#00B5AD] to-[#008B84]"
						>
							<div className="flex items-center gap-2">
								<a
									href={`mailto:${t.contact.email.address}`}
									className="text-white font-medium hover:text-[#FFC300] transition-colors duration-300 text-lg"
								>
									{t.contact.email.address}
								</a>
								<CopyButton text={t.contact.email.address} />
							</div>
						</ContactCard>

						<ContactCard
							icon={Phone}
							title={t.contact.phone.title}
							description={t.contact.phone.description}
							gradient="from-[#00B5AD] to-[#008B84]"
						>
							<div className="flex items-center gap-2">
								<a
									href={`tel:${t.contact.phone.primary}`}
									className="text-white font-medium hover:text-[#FFC300] transition-colors duration-300 text-lg"
								>
									{t.contact.phone.primary}
								</a>
								<CopyButton text={t.contact.phone.primary} />
							</div>
						</ContactCard>

						<ContactCard
							icon={MapPin}
							title={t.contact.office.title}
							description={t.contact.office.description}
							gradient="from-[#FFC300] to-[#FFA500]"
						>
							<p className="text-white font-medium text-lg">
								{t.contact.office.address}
							</p>
						</ContactCard>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 shadow-lg"
						>
							<h3 className="hero-subtitle text-xl font-bold text-white mb-6">
								{t.contact.social.title}
							</h3>
							<div className="flex flex-wrap gap-3">
								{socialLinks.map((link, index) => {
									const IconComponent = link.icon;
									return (
										<motion.a
											key={link.label}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className={cn(
												"flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border-2 border-white/20 transition-all duration-300 shadow-sm hover:shadow-md hover:bg-white/10 hover:border-[#FFC300]/30",
												link.color
											)}
											whileHover={{ scale: 1.05, y: -2 }}
											whileTap={{ scale: 0.95 }}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3, delay: index * 0.1 }}
										>
											<div className="text-white">
												<IconComponent />
											</div>
											<span className="font-medium text-white text-sm">
												{link.label}
											</span>
										</motion.a>
									);
								})}
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border-2 border-white/20 shadow-xl"
					>
						<h3 className="hero-subtitle text-2xl font-bold text-white mb-6">
							{t.contact.form.title}
						</h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-white mb-2"
								>
									{t.contact.form.name}
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 rounded-xl border-2 border-white/20 focus:border-[#FFC300] focus:outline-none focus:ring-2 focus:ring-[#FFC300]/20 transition-all duration-300 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/50"
									placeholder={t.contact.form.name}
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-white mb-2"
								>
									{t.contact.form.email}
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 rounded-xl border-2 border-white/20 focus:border-[#FFC300] focus:outline-none focus:ring-2 focus:ring-[#FFC300]/20 transition-all duration-300 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/50"
									placeholder={t.contact.form.email}
								/>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-white mb-2"
									>
										{t.contact.form.phone}
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 rounded-xl border-2 border-white/20 focus:border-[#FFC300] focus:outline-none focus:ring-2 focus:ring-[#FFC300]/20 transition-all duration-300 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/50"
										placeholder={t.contact.form.phone}
									/>
								</div>

								<div>
									<label
										htmlFor="company"
										className="block text-sm font-medium text-white mb-2"
									>
										{t.contact.form.company}
									</label>
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-xl border-2 border-white/20 focus:border-[#FFC300] focus:outline-none focus:ring-2 focus:ring-[#FFC300]/20 transition-all duration-300 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/50"
										placeholder={t.contact.form.company}
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-white mb-2"
								>
									{t.contact.form.message}
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={6}
									className="w-full px-4 py-3 rounded-xl border-2 border-white/20 focus:border-[#FFC300] focus:outline-none focus:ring-2 focus:ring-[#FFC300]/20 transition-all duration-300 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/50 resize-none"
									placeholder={t.contact.form.message}
								/>
							</div>

							<motion.button
								type="submit"
								disabled={isSubmitting}
								className="cta-button w-full py-4 text-lg inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
								whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
								whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
							>
								{isSubmitting ? (
									<>
										<div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
										{t.contact.form.sending}
									</>
								) : (
									<>
										{t.contact.form.submit}
										<Send className="w-5 h-5" />
									</>
								)}
							</motion.button>

							{submitStatus === 'success' && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className="flex items-center gap-2 text-[#00B5AD] bg-[#00B5AD]/10 border border-[#00B5AD]/20 rounded-xl p-4"
								>
									<Check className="w-5 h-5" />
									<span>{t.contact.form.success}</span>
								</motion.div>
							)}

							{submitStatus === 'error' && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-4"
								>
									<ArrowRight className="w-5 h-5 rotate-180" />
									<span>{t.contact.form.error}</span>
								</motion.div>
							)}
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

interface ContactCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
	gradient: string;
	children: React.ReactNode;
}

function ContactCard({
	icon: Icon,
	title,
	description,
	gradient,
	children,
}: ContactCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
		>
			<div
				className={cn(
					'absolute top-0 left-0 w-full h-1 bg-gradient-to-r',
					gradient
				)}
			/>

			<div className="flex items-start gap-4">
				<div
					className={cn(
						'p-3 rounded-xl bg-gradient-to-br',
						gradient,
						'bg-opacity-10'
					)}
				>
					<Icon className="w-6 h-6 text-white" />
				</div>
				<div className="flex-1">
					<h3 className="hero-subtitle text-lg font-bold text-white mb-1">
						{title}
					</h3>
					<p className="text-sm text-white/70 mb-4">{description}</p>
					<div className="space-y-2">{children}</div>
				</div>
			</div>
		</motion.div>
	);
}

function CopyButton({ text }: { text: string }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	return (
		<motion.button
			onClick={handleCopy}
			className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
		>
			{copied ? (
				<Check className="w-4 h-4 text-[#00B5AD]" />
			) : (
				<Copy className="w-4 h-4 text-white" />
			)}
		</motion.button>
	);
}
