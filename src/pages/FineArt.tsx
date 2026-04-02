const works = [
  {
    src: '/D80_9144.jpg',
    title: 'Kerala Dusk',
    medium: 'Archival Pigment Print',
    edition: 'Limited Edition 1/10',
  },
  {
    src: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800',
    title: 'Spatial Series I',
    medium: 'AI-Assisted Fine Art Print',
    edition: 'Edition 3/5',
  },
  {
    src: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=800',
    title: 'Cinematic Landscape II',
    medium: 'Large Format Photography',
    edition: 'Open Edition',
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800',
    title: 'Architectural Void',
    medium: 'NuLab AI Art',
    edition: 'Limited Digital + Print Edition',
  },
];

const PAYHIP_URL = 'https://payhip.com/DanielArmonStanford';

const FineArt = () => {
  return (
    <div className="bg-[#131313] pt-32">

      {/* HEADER */}
      <section className="px-6 max-w-[1800px] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 md:sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">
              Collectable Fine Art
            </span>
          </div>
          <div className="md:col-span-7 space-y-10">
            <h1 className="font-['Noto_Serif'] text-4xl md:text-6xl leading-tight font-light">
              Fine Art &amp;{' '}
              <em className="text-[#CC0000] not-italic italic">Collectable Works.</em>
            </h1>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose max-w-2xl">
              The fine art practice of Daniel Armon Stanford spans large-format photography, AI-assisted image systems, and Digital Collection editions — exhibited at <strong className="text-white font-normal">MIS — Museum of Image &amp; Sound, São Paulo</strong>, the <strong className="text-white font-normal">Cornell Art Museum, Florida</strong>, and shown during <strong className="text-white font-normal">Art Basel Miami</strong> week. Each work is produced in strictly limited editions with archival standards.
            </p>
            {/* FASCINASIA — mix media painting series */}
            <div className="max-w-[800px]" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="https://www.youtube.com/embed/vr0fI6bZGa4?controls=1&rel=0&modestbranding=1"
                title="FASCINASIA — The Mix Media Painting Series"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ border: 'none', display: 'block' }}
              />
            </div>

            <div>
              <a
                href={PAYHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[rgba(244,239,230,0.4)] text-[#F5F0E6] text-[10px] uppercase tracking-[0.35em] px-12 py-5 hover:border-[#CC0000] hover:text-[#CC0000] transition-all duration-500"
              >
                Enter Collection →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="px-6 max-w-[1800px] mx-auto mb-32">
        <div className="border-t border-[rgba(244,239,230,0.14)] pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(244,239,230,0.08)]">
            {works.map((work) => (
              <div key={work.title} className="group bg-[#131313] overflow-hidden">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={work.src}
                    alt={work.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-8 border-t border-[rgba(244,239,230,0.08)]">
                  <h3 className="font-['Noto_Serif'] text-xl italic font-light mb-2">{work.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-[rgba(244,239,230,0.55)]">{work.medium}</span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#CC0000]">{work.edition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-48 px-6 text-center bg-[#1c1b1b]">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[rgba(244,239,230,0.5)] block mb-8">Stanford Emporium</span>
          <h2 className="font-['Noto_Serif'] text-3xl md:text-5xl italic mb-8 leading-snug font-light">
            Works available in strictly limited editions.
          </h2>
          <p className="text-sm text-[#F5F0E6] opacity-70 leading-loose mb-12 max-w-xl mx-auto">
            Archival prints, Digital Collection editions, and AI-assisted works — each authenticated and numbered. Shipped globally.
          </p>
          <a
            href={PAYHIP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CC0000] text-white text-[10px] uppercase tracking-[0.3em] font-bold px-16 py-6 hover:bg-[#930000] transition-colors duration-500 inline-block"
          >
            Browse Full Collection on Payhip
          </a>
        </div>
      </section>

    </div>
  );
};

export default FineArt;
