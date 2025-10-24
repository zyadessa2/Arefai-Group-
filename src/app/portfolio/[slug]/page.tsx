import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { portfolioData, getPortfolioBySlug, type PortfolioItem } from '@/data/portfolio';
import PortfolioDetailClient from './PortfolioDetailClient';

export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getPortfolioBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found | Al-Refai Group',
    };
  }

  return {
    title: `${project.title} | Portfolio | Al-Refai Group`,
    description: project.description,
    keywords: project.tags.join(', '),
    authors: [{ name: 'Al-Refai Group' }],
    openGraph: {
      title: `${project.title} | Al-Refai Group`,
      description: project.description,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: 'article',
      publishedTime: `${project.year}-01-01`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Al-Refai Group`,
      description: project.description,
      images: [project.thumbnail],
    },
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
  };
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const project = getPortfolioBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.images,
    author: {
      '@type': 'Organization',
      name: 'Al-Refai Group',
      url: 'https://al-refaigroup.com',
    },
    datePublished: `${project.year}-01-01`,
    keywords: project.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PortfolioDetailClient project={project} />
    </>
  );
}
