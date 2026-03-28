import { Link } from 'react-router-dom';

const moodBoard = [
  { url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80', label: 'Atmosphere & Tone' },
  { url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80', label: 'Practical Lighting' },
  { url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80', label: 'Cinematic Space' },
  { url: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&q=80', label: 'Location Reference' },
  { url: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&q=80', label: 'Texture & Surface' },
  { url: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&q=80', label: 'Set Architecture' },
];

const capabilities = [
  { num: '01', title: 'Production Design', desc: 'Full visual world-building from script through final frame — colour, texture, architecture, and object.' },
  { num: '02', title: 'Art Direction', desc: 'Day-to-day set execution and visual consistency across every location and department.' },
  { num: '03', title: 'Pre-Visualization', desc: 'Storyboard, animatic, and 3D pre-vis to lock the visual language before a single light is hung.' },
  { num: '04', title: 'Virtual Production', desc: 'LED Volume integration for real-time environments — eliminating location costs without sacrificing scale.' },
  { num: '05', title: 'Casting & Tone', desc: 'Strategic casting aligned with the visual and emotional register of the project.' },
  { num: '06', title: 'NuLab VFX', desc: 'AI-driven image systems, spatial audio-visual intelligence, and post-production finishing via NuLab.' },
];

const ProductionDesign = () => {
  return (
    <div className="bg-[#131313] pt-32">

      {/* HEADER */}
      <section className="px-6 max-w-[1800px] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 md:sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">
              Art Department · Production Design
            </span>
          </div>
          <div className="md:col-span-7">
            <h1 className="font-['Noto_Serif'] text-4xl md:text-6xl leading-tight font-light">
              The Architecture of{' '}
              <em className="text-[#CC0000] not-italic italic">Visual World-Building.</em>
            </h1>
            <p className="mt-10 text-sm text-[#F5F0E6] opacity-85 leading-loose max-w-2xl">
              Every surface, every shadow, every prop placement is a decision. Production design is not decoration — it is the grammar of visual storytelling. At Stanford Emporium, we treat the physical and virtual environment as a primary creative instrument.
            </p>
          </div>
        </div>
      </section>

      {/* MOOD BOARD */}
      <section className="px-6 max-w-[1800px] mx-auto mb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {moodBoard.map((item) => (
            <div key={item.label} className="group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.url}
                  alt={item.label}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="pt-3 pb-6">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[rgba(244,239,230,0.5)]">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIRTUAL PRODUCTION */}
      <section className="px-6 max-w-[1800px] mx-auto mb-32">
        <div className="border-t border-[rgba(244,239,230,0.14)] pt-16 grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 md:sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">Technology</span>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[rgba(244,239,230,0.75)]">Virtual Production &amp; The LED Volume</h3>
          </div>
          <div className="md:col-span-7 space-y-10">
            <p className="text-lg md:text-2xl leading-relaxed font-light font-['Noto_Serif'] italic">
              The future of location filmmaking is already here — and it shoots indoors.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              LED Volume technology allows entire environments — city streets, alien landscapes, foreign coastlines — to be rendered in real-time on a massive curved display surrounding the actors. The result is physically accurate light interaction, genuine actor performance reaction, and director-controlled environmental consistency across every take.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              For <strong className="text-white font-normal">400XY</strong> — our international co-production spanning Canada, China, and Greece — LED Volume integration is central to the financial and creative architecture of the film. Rather than building three full location units across three continents, key sequences are designed to be produced against high-resolution LED environments, dramatically reducing travel, logistics, and weather exposure while maintaining the visual scale of a studio tentpole.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              This is not compromise. This is intelligence applied to production design.
            </p>
            <div className="relative w-full mt-8" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/gUnxzVOs3rk"
                title="Virtual Production & The LED Volume"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="px-6 max-w-[1800px] mx-auto mb-32">
        <div className="border-t border-[rgba(244,239,230,0.14)] pt-16">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-16">Capabilities</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(244,239,230,0.08)]">
            {capabilities.map((cap) => (
              <div key={cap.num} className="bg-[#131313] p-10 space-y-4">
                <div className="text-[10px] tracking-[0.4em] text-[#CC0000] font-bold">{cap.num}</div>
                <h4 className="font-['Noto_Serif'] text-xl italic font-light">{cap.title}</h4>
                <p className="text-xs text-[rgba(244,239,230,0.7)] leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-6 text-center bg-[#1c1b1b]">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[rgba(244,239,230,0.5)] block mb-8">Stanford Emporium</span>
          <h2 className="font-['Noto_Serif'] text-3xl md:text-5xl italic mb-8 leading-snug font-light">
            Every great film is designed before it's shot.
          </h2>
          <p className="text-sm text-[#F5F0E6] opacity-70 leading-loose mb-12 max-w-xl mx-auto">
            Bring us into your project at the concept stage and we'll build the visual world from the ground up.
          </p>
          <a
            href="mailto:studio@stanfordemporium.com?subject=Production Design Inquiry"
            className="bg-[#CC0000] text-white text-[10px] uppercase tracking-[0.3em] font-bold px-16 py-6 hover:bg-[#930000] transition-colors duration-500 inline-block"
          >
            INITIATE INQUIRY
          </a>
        </div>
      </section>

    </div>
  );
};

export default ProductionDesign;
