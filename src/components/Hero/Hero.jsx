import HeroSlider from './HeroSlider';
import HeroContent from './HeroContent';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden mb-2">
            <HeroSlider />
            <HeroContent />
        </section>
    );
}