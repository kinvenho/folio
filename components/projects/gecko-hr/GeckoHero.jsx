import { Hero } from '../layouts';

export default function GeckoHero({ project }) {
    return (
        <Hero
            project={project}
            heroImage="/images/projects/gecko-hr/hero.png"
            heroImageAlt="Gecko HR Hero"
        />
    );
}
