import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

const InvestmentOpportunities = () => {
  return (
    <div className="bg-[#131313] pt-48 pb-32">
      <div className="max-w-[1800px] mx-auto px-6 mb-32">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-6">02 / SLATE</span>
        <h1 className="font-['Noto_Serif'] text-5xl md:text-8xl italic mb-12">
          Investment Opportunities
        </h1>
        <p className="text-sm opacity-50 max-w-2xl leading-relaxed">
          We offer strategic investment opportunities in high-concept cinematic narratives. Each project is meticulously developed to ensure both artistic integrity and commercial viability.
        </p>
      </div>

      <div className="space-y-48">
        {PROJECTS.map((project, idx) => (
          <section key={project.slug} className="px-6 max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className={`md:col-span-7 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="aspect-video overflow-hidden group relative">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute top-8 left-8 flex gap-4">
                    {project.urgency && (
                      <span className="bg-[#CC0000] text-white text-[8px] font-bold px-3 py-1 tracking-widest">⚡ URGENT</span>
                    )}
                    {project.funded && (
                      <span className="bg-green-600 text-white text-[8px] font-bold px-3 py-1 tracking-widest">FUNDED</span>
                    )}
                  </div>
                </div>
              </div>

              <div className={`md:col-span-5 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <span className="text-[10px] text-[#CC0000] font-bold mb-4 block tracking-[0.3em]">{project.number}</span>
                <h2 className="font-['Noto_Serif'] text-4xl md:text-6xl italic mb-8 leading-tight">
                  {project.title}
                </h2>
                <p className="text-sm opacity-50 mb-12 leading-relaxed">
                  {project.logline}
                </p>

                <div className="grid grid-cols-2 gap-8 mb-12 border-t border-white/10 pt-8">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] opacity-40 block mb-2">Budget</span>
                    <span className="text-sm font-bold tracking-widest">{project.budget}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] opacity-40 block mb-2">Equity Available</span>
                    <span className="text-sm font-bold tracking-widest">{project.equityAvailable}</span>
                  </div>
                </div>

                <Link
                  to={`/project/${project.slug}`}
                  className="bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold px-12 py-5 hover:bg-[#CC0000] hover:text-white transition-all duration-500 inline-block w-full md:w-auto text-center"
                >
                  View Investment Overview
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-48 px-6 text-center bg-[#1c1b1b] mt-48">
        <h2 className="font-['Noto_Serif'] text-4xl md:text-6xl italic mb-12">Secure your position.</h2>
        <Link
          to="/investor-inquiry"
          className="bg-[#CC0000] text-white text-[10px] uppercase tracking-[0.3em] font-bold px-16 py-6 hover:bg-[#930000] transition-colors duration-500 inline-block"
        >
          REQUEST FULL SLATE
        </Link>
      </section>
    </div>
  );
};

export default InvestmentOpportunities;
