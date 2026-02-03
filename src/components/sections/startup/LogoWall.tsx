
import Container from '@/components/layout/Container';

export default function LogoWall() {
  return (
    <section className="border-b border-slate-800 bg-slate-900 pb-16">
      <Container size="7xl" className="overflow-hidden">
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale transition-opacity duration-500 hover:opacity-70">
          <div className="text-xl font-bold text-white">ACME Corp</div>
          <div className="text-xl font-bold text-white">Nebula AI</div>
          <div className="text-xl font-bold text-white">Quantum Leap</div>
          <div className="text-xl font-bold text-white">HyperGrowth</div>
          <div className="hidden text-xl font-bold text-white md:block">
            Stark Industries
          </div>
        </div>
      </Container>
    </section>
  );
}
