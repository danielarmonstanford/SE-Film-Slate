import { Link } from 'react-router-dom';

const SpatialResonance = () => {
  return (
    <div className="bg-[#131313] pt-48 pb-32">
      <div className="max-w-[1800px] mx-auto px-6 mb-32">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-6">04 / SPATIAL</span>
        <h1 className="font-['Noto_Serif'] text-5xl md:text-8xl italic mb-12">
          Spatial Resonance™
        </h1>
        <p className="text-sm opacity-50 max-w-2xl leading-relaxed">
          I design environments that influence perception, emotion, and energy through composition, geometry, and visual flow.
        </p>
      </div>

      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <div className="relative aspect-video overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80"
            alt="Spatial Hero"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
              <span className="material-symbols-outlined text-4xl">play_arrow</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-4">
            <h2 className="font-['Noto_Serif'] text-3xl italic mb-8">Atmospheric Architecture</h2>
            <p className="text-sm opacity-50 leading-relaxed mb-12">
              Our spatial work focuses on the psychological impact of physical space. We use light, shadow, and material to create environments that tell a story before a single word is spoken.
            </p>
            <div className="aspect-square overflow-hidden">
              <img src="https://images.unsplash.com/photo-1590593162211-f9827b7ad6a4?w=800&q=80" alt="Detail 1" className="w-full h-full object-cover grayscale" />
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="aspect-[16/9] overflow-hidden mb-16">
              <img src="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=1200&q=80" alt="Detail 2" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {[
                { label: 'Resolution', value: '8K RAW' },
                { label: 'Audio', value: 'Dolby Atmos' },
                { label: 'Optics', value: 'Panavision' },
                { label: 'Color', value: 'DCI-P3' },
              ].map((item) => (
                <div key={item.label} className="bg-[#1c1b1b] p-8 border border-white/5 text-center">
                  <span className="text-[9px] uppercase tracking-[0.2em] opacity-40 block mb-2">{item.label}</span>
                  <span className="text-xs font-bold tracking-widest">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-6 text-center bg-[#1c1b1b]">
        <h2 className="font-['Noto_Serif'] text-4xl md:text-6xl italic mb-12">"The future belongs to those who design it."</h2>
        <Link
          to="/investor-inquiry"
          className="bg-[#CC0000] text-white text-[10px] uppercase tracking-[0.3em] font-bold px-16 py-6 hover:bg-[#930000] transition-colors duration-500 inline-block"
        >
          INITIATE PROJECT
        </Link>
      </section>
    </div>
  );
};

export default SpatialResonance;
