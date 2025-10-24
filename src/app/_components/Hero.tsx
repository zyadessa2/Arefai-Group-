"use client";

import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { useLanguage } from "@/contexts/LanguageContext";

function DemoHeroGeometric() {
    const { t } = useLanguage();
    
    return <HeroGeometric 
            title1={t.hero.title1}
            title2={t.hero.title2}
            subtitle={t.hero.subtitle}
            ctaPrimary={t.hero.ctaPrimary}
            ctaSecondary={t.hero.ctaSecondary}
            stats={t.hero.stats}
            />
}

export { DemoHeroGeometric }