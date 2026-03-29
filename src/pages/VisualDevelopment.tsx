const capabilities = [
  { num: '01', title: 'Production Design', desc: 'Set design, colour world, spatial architecture, period authenticity.' },
  { num: '02', title: 'Art Direction', desc: 'On-set execution, department management, visual consistency across every frame.' },
  { num: '03', title: 'Pre-Visualization', desc: 'AI-assisted concept development, mood board systems, storyboard direction.' },
  { num: '04', title: 'Virtual Production', desc: 'LED Volume art department integration. Unreal Engine. NuLab pipeline.' },
  { num: '05', title: 'Casting & Ensemble', desc: 'Character-to-environment visual coherence. Instinctive eye for talent.' },
  { num: '06', title: 'NuLab Audio Visual', desc: 'Co-founder. AI-visual intelligence for VFX and special effects.' },
];

const moodBoard = [
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
  'https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&q=80',
  'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&q=80',
  'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&q=80',
];

const VisualDevelopment = () => {
  return (
    <div className="bg-[#131313] pt-32">

      {/* SECTION 1 — HEADER */}
      <section className="px-6 max-w-[1800px] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 md:sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">
              Art Direction · Production Design · Visual Worlds
            </span>
          </div>
          <div className="md:col-span-7 space-y-10">
            <h1 className="font-['Noto_Serif'] text-4xl md:text-6xl leading-tight font-light">
              Visual Development<br />
              <em className="text-[#CC0000] not-italic italic">&amp; Art Direction.</em>
            </h1>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose max-w-2xl">
              Thirty years of directing visual environments — from global fashion campaigns to feature film pre-visualization, LED volume production design, and fine art exhibited internationally. This is the capability behind every project on this slate.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CAPABILITIES GRID */}
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

      {/* SECTION 3 — VIRTUAL PRODUCTION */}
      <section className="px-6 max-w-[1800px] mx-auto mb-32">
        <div className="border-t border-[rgba(244,239,230,0.14)] pt-16 grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 md:sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">Technology</span>
          </div>
          <div className="md:col-span-7 space-y-8">
            <h2 className="font-['Noto_Serif'] text-3xl md:text-4xl italic font-light leading-snug">
              The LED Volume &amp; Virtual Production
            </h2>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              For productions like <strong className="text-white font-normal">400XY</strong> spanning three countries, LED Volume virtual production reduces location costs by up to 60% while maintaining full cinematic scope. NuLab provides the AI-visual pipeline for real-time environment integration.
            </p>
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/gUnxzVOs3rk"
                title="The LED Volume & Virtual Production"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MOOD BOARD */}
      <section className="px-6 max-w-[1800px] mx-auto mb-32">
        <div className="border-t border-[rgba(244,239,230,0.14)] pt-16">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-16">Visual Reference</span>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[rgba(244,239,230,0.08)]">
            {moodBoard.map((url, i) => (
              <div key={i} className="bg-[#131313] overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    src={url}
                    alt={`Visual reference ${i + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FINE ART */}
      <section className="relative mb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/fineart-wall.jpg)' }}
        />
        <div className="absolute inset-0 bg-[rgba(8,7,5,0.72)]" />
        <div className="relative px-6 max-w-[1800px] mx-auto py-24">
        <div className="border-t border-[rgba(244,239,230,0.14)] pt-16 grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 md:sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">Fine Art</span>
          </div>
          <div className="md:col-span-7 space-y-8">
            <h2 className="font-['Noto_Serif'] text-3xl md:text-4xl italic font-light leading-snug">
              Collectable Fine Art
            </h2>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              Exhibited at <strong className="text-white font-normal">MIS São Paulo</strong>, <strong className="text-white font-normal">Cornell Art Museum Florida</strong>, and <strong className="text-white font-normal">Art Basel Miami</strong>. Limited edition prints, AI fine art, and large-format photography.
            </p>
            <div>
              <a
                href="https://payhip.com/DanielArmonStanford"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[rgba(244,239,230,0.4)] text-[#F5F0E6] text-[10px] uppercase tracking-[0.35em] px-12 py-5 hover:border-[#CC0000] hover:text-[#CC0000] transition-all duration-500"
              >
                Browse Collection
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>

    </div>
  );
};

export default VisualDevelopment;
