import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1c1b1b] border-t border-white/5 py-24 px-6">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-['Noto_Serif'] italic tracking-tighter mb-8 block">
            DIRECTOR
          </Link>
          <p className="text-xs opacity-40 leading-relaxed max-w-sm">
            Stanford Emporium is a creative studio dedicated to the intersection of cinematic narrative and spatial design. We craft experiences that resonate across physical and digital boundaries.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-[#CC0000]">Navigation</h4>
          <ul className="space-y-4">
            {['About', 'Investment Opportunities', 'Disciplines', 'Spatial Resonance™', 'Investor Inquiry'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(' ', '-').replace('™', '')}`}
                  className="text-[10px] tracking-[0.2em] opacity-50 hover:opacity-100 hover:text-[#CC0000] transition-all"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-[#CC0000]">Legal</h4>
          <ul className="space-y-4">
            {['Privacy Policy', 'Terms of Service', 'Investor Relations'].map((item) => (
              <li key={item}>
                <a href="#" className="text-[10px] tracking-[0.2em] opacity-50 hover:opacity-100 transition-all">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[9px] tracking-[0.3em] opacity-30 uppercase">
          © 2026 Stanford Emporium. All Rights Reserved.
        </p>
        <p className="text-[9px] tracking-[0.3em] opacity-30 uppercase">
          Designed for the Future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
