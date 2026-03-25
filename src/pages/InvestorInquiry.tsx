import { Link } from 'react-router-dom';

const InvestorInquiry = () => {
  return (
    <div className="bg-[#131313] pt-48 pb-32 min-h-screen flex flex-col">
      <div className="max-w-[1800px] mx-auto px-6 flex-grow">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-6">05 / CONTACT</span>
        <h1 className="font-['Noto_Serif'] text-5xl md:text-8xl italic mb-24 leading-none">
          Let's craft the next sequence.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
          <div className="md:col-span-7">
            <div className="aspect-video overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80"
                alt="Contact Hero"
                className="w-full h-full object-cover grayscale opacity-50"
              />
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="mb-16">
              <span className="text-[9px] uppercase tracking-[0.4em] opacity-40 block mb-6">Direct Inquiry</span>
              <a
                href="mailto:studio@stanfordemporium.com"
                className="text-2xl md:text-4xl font-['Noto_Serif'] italic hover:text-[#CC0000] transition-colors"
              >
                studio@stanfordemporium.com
              </a>
            </div>

            <div className="grid grid-cols-2 gap-12 mb-16">
              <div>
                <span className="text-[9px] uppercase tracking-[0.4em] opacity-40 block mb-4">Studio Base</span>
                <ul className="text-xs space-y-2 tracking-widest">
                  <li>LOS ANGELES</li>
                  <li>LONDON</li>
                  <li>NEW YORK</li>
                </ul>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.4em] opacity-40 block mb-4">Availability</span>
                <p className="text-xs tracking-widest text-[#CC0000] font-bold">
                  NOW ACCEPTING <br /> NEW INQUIRIES
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:studio@stanfordemporium.com?subject=Schedule%20Investor%20Call"
                className="bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold px-12 py-5 hover:bg-[#CC0000] hover:text-white transition-all duration-500 text-center"
              >
                Schedule Investor Call
              </a>
              <a
                href="mailto:studio@stanfordemporium.com?subject=Request%20Investment%20Materials"
                className="border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] font-bold px-12 py-5 hover:bg-white hover:text-black transition-all duration-500 text-center"
              >
                Request Investment Materials
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER QUOTE */}
      <section className="py-32 px-6 text-center mt-32 border-t border-white/5">
        <h2 className="font-['Noto_Serif'] text-3xl italic opacity-30">"The architecture of performance."</h2>
      </section>
    </div>
  );
};

export default InvestorInquiry;
