import { Link } from 'react-router-dom';

const Spatial = () => {
  return (
    <div className="bg-[#131313] pt-32">

      {/* BREADCRUMB */}
      <div className="px-6 max-w-[1800px] mx-auto mb-12">
        <Link
          to="/visual-development"
          style={{ fontSize: '0.6rem', letterSpacing: '0.12em', color: 'rgba(229,226,225,0.4)' }}
          className="uppercase hover:text-[rgba(229,226,225,0.75)] transition-colors duration-300"
        >
          ← Visual Development
        </Link>
      </div>

      {/* VISUAL WORLDS & NFT ART */}
      <section className="px-6 max-w-[1800px] mx-auto mb-24">
        <span className="block text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold mb-4">
          Multimedia · NFT · Sound
        </span>
        <h1 className="font-['Noto_Serif'] text-4xl md:text-6xl italic leading-snug mb-12">
          Visual Worlds &amp; NFT Art
        </h1>

        {/* Text block */}
        <div className="max-w-[640px] space-y-6">
          <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
            NuLab Audio Visual Intelligence — sound, image, and frequency as a unified creative field.
            Where digital art, motion, and NFT editions converge into a single authorial vision.
          </p>
          <a
            href="https://nulab.space"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[rgba(244,239,230,0.3)] text-[#F5F0E6] text-[10px] uppercase tracking-[0.3em] px-8 py-4 hover:border-white hover:text-white transition-all duration-300"
          >
            Explore NuLab →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center bg-[#1c1b1b] mt-24">
        <h2 className="font-['Noto_Serif'] text-3xl md:text-5xl italic mb-12 font-light">
          Commission original NFT &amp; digital editions.
        </h2>
        <Link
          to="/inquire"
          className="bg-[#CC0000] text-white text-[10px] uppercase tracking-[0.3em] font-bold px-16 py-6 hover:bg-[#930000] transition-colors duration-500 inline-block"
        >
          INITIATE INQUIRY
        </Link>
      </section>

    </div>
  );
};

export default Spatial;
