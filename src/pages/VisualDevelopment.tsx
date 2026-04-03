const capabilities = [
  { num: '01', title: 'Production Design', desc: 'Set design, colour world, spatial architecture, period authenticity.' },
  { num: '02', title: 'Art Direction', desc: 'On-set execution, department management, visual consistency across every frame.' },
  { num: '03', title: 'Pre-Visualization', desc: 'AI-assisted concept development, mood board systems, storyboard direction.' },
  { num: '04', title: 'Virtual Production', desc: 'LED Volume art department integration. Unreal Engine. NuLab pipeline.' },
  { num: '05', title: 'Casting & Ensemble', desc: 'Character-to-environment visual coherence. Instinctive eye for talent.' },
  { num: '06', title: 'NuLab Audio Visual', desc: 'Co-founder. AI-visual intelligence for VFX and special effects.' },
];

const moodBoard = [
  { src: '/ref-scifi-woman.jpg',    filter: true },
  { src: '/ref-speedboat-night.jpg', filter: true },
  { src: '/ref-scifi-desert.jpg',   filter: true },
  { src: '/ref-rooftop-pool.jpg',   filter: true },
  { src: '/ref-underwater.jpg',     filter: true },
  { src: '/birth-diptych.jpg',      filter: false },
];

const VisualDevelopment = () => {
  // Browser tab title
  if (typeof document !== 'undefined') {
    document.title = 'Visual Development · Daniel Stanford';
  }

  return (
    <div className="bg-[#131313] pt-32">

      {/* SECTION 1 — HEADER */}
      <section className="relative mb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/visual-dev-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-[rgba(8,7,5,0.65)]" />
        <div className="relative px-6 max-w-[1800px] mx-auto py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-3 md:sticky top-32 h-fit">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">
                Art Direction · Production Design · Visual Worlds
              </span>
            </div>
            <div className="md:col-span-7 space-y-10">
              <h1 className="font-['Noto_Serif'] text-4xl md:text-6xl leading-tight font-light">
                <span style={{ color: '#e5e2e1' }}>Worldbuilding</span><br />
                <em style={{ color: '#CC0000' }}>for Cinema.</em>
              </h1>
              <p style={{
                maxWidth: '700px',
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                lineHeight: '1.9',
                color: 'rgba(229,226,225,0.75)',
              }}>
                Production Design is the architecture of belief. Thirty years directing visual environments — from Guess campaigns in Morocco to feature film pre-visualization — has produced a visual language that operates at cinematic scale. This is the proof.
              </p>
            </div>
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

          {/* SEA OF DUNES — Video Showcase */}
          <div className="mb-16">
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '14px' }}>
              Sea of Dunes · Brazil · 2024
            </p>
            <h3 style={{ fontFamily: "'Noto Serif', serif", fontStyle: 'italic', fontSize: '1.8rem', color: '#e5e2e1', fontWeight: 300, marginBottom: '16px' }}>
              Environmental Worldbuilding Study
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'rgba(229,226,225,0.65)', lineHeight: 1.9, maxWidth: '600px' }}>
              A cinematic study of the Brazilian dune landscape as production design environment — scale, light, texture, and atmosphere documented as location reference and background plate material.
            </p>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginTop: '32px', marginBottom: '48px' }}>
              <iframe
                src="https://player.vimeo.com/video/1179698917?byline=0&title=0&portrait=0&color=CC0000"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Sea of Dunes — Environmental Worldbuilding Study"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[rgba(244,239,230,0.08)]">
            {moodBoard.map((item, i) => (
              <div key={i} className="bg-[#131313] overflow-hidden">
                <div className={`relative overflow-hidden group ${i === 5 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={item.src}
                    alt={i === 5 ? 'The Birth · Photomontage · Fine Art' : `Visual reference ${i + 1}`}
                    className={`w-full h-full object-cover transition-all duration-700 ${item.filter ? 'grayscale group-hover:grayscale-0 group-hover:scale-105' : ''}`}
                    style={i === 5 ? { objectPosition: 'center center' } : {}}
                  />
                  {i === 5 && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}>
                      <p style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e5e2e1', marginBottom: '2px' }}>The Birth · Photomontage · Fine Art</p>
                      <p style={{ fontSize: '0.5rem', letterSpacing: '0.1em', color: 'rgba(229,226,225,0.5)' }}>Concept Direction &amp; Composite</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* THE BIRTH — Full Series Horizontal Progression */}
          <div className="mt-16">
            <p style={{ fontSize: '0.55rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '6px' }}>
              The Birth · La Naissance · Fine Art Series
            </p>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.08em', color: 'rgba(229,226,225,0.35)', marginBottom: '20px' }}>
              Concept Direction &amp; Photomontage — Daniel Armon Stanford
            </p>
            <div style={{ overflowX: 'auto', display: 'flex', background: '#000', scrollbarWidth: 'none' }}
              className="[&::-webkit-scrollbar]:hidden">
              {[
                '/birth-001-title.jpg',
                '/birth-diptych.jpg',
                '/birth-003.jpg',
                '/birth-004.jpg',
              ].map((src, i) => (
                <div key={i} style={{ flexShrink: 0, height: '420px', background: '#000', display: 'flex', alignItems: 'center' }}>
                  <img
                    src={src}
                    alt={`The Birth — frame ${i + 1}`}
                    style={{ height: '100%', width: 'auto', objectFit: 'contain', display: 'block' }}
                  />
                </div>
              ))}
            </div>
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
