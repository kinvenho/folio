import { Intro } from '../layouts';

export default function GeckoIntro({ project }) {
    return (
        <Intro
            project={project}
            image="/images/projects/gecko-hr/intro.png"
            imageAlt="Gecko HR Introduction"
        />
    );
}
