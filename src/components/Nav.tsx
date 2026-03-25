import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'ABOUT', path: '/about' },
    { name: 'INVESTMENT OPPORTUNITIES', path: '/investment-opportunities' },
    { name: 'DISCIPLINES', path: '/disciplines' },
    { name: 'SPATIAL RESONANCE™', path: '/spatial' },
    { name: 'INVESTOR INQUIRY', path: '/investor-inquiry' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#131313]/80 backdrop-blur-md border-b border-white/5 px-6 py-6 flex items-center justify-between">
      <Link to="/" className="text-xl font-['Noto_Serif'] italic tracking-tighter hover:text-[#CC0000] transition-colors">
        DIRECTOR
      </Link>

      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-[9px] tracking-[0.4em] font-bold transition-colors hover:text-[#CC0000] ${
              location.pathname === link.path ? 'text-[#CC0000]' : 'text-white'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <Link
        to="/investor-inquiry"
        className="bg-[#CC0000] text-white text-[9px] tracking-[0.3em] font-bold px-6 py-3 hover:bg-[#930000] transition-colors"
      >
        GET IN TOUCH
      </Link>
    </nav>
  );
};

export default Nav;
