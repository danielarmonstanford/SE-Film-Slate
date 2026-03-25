import { Link } from 'react-router-dom';

const Disciplines = () => {
  const disciplines = [
    { title: 'Directing', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80' },
    { title: 'Production Design', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80' },
    { title: 'Creative Strategy', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
    { title: 'Cinematography', img: 'https://images.unsplash.com/photo-1590593162211-f9827b7ad6a4?w=800&q=80' },
    { title: 'Visual Direction', img: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80' },
    { title: 'Concept Design', img: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&q=80' },
  ];

  return (
    <div className="bg-[#131313] pt-48 pb-32">
      <div className="max-w-[1800px] mx-auto px-6 mb-32">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-6">03 / EXPERTISE</span>
        <h1 className="font-['Noto_Serif'] text-5xl md:text-8xl italic mb-12">
          Directed Disciplines
        </h1>
        <p className="text-sm opacity-50 max-w-2xl leading-relaxed">
          Our studio operates at the intersection of multiple creative fields, allowing us to maintain a cohesive vision from concept to completion.
        </p>
      </div>

      <div className="px-6 max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {disciplines.map((item, idx) => (
          <div key={idx} className="relative aspect-square overflow-hidden group">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex flex-col justify-end p-12">
              <span className="text-[10px] text-[#CC0000] font-bold mb-4 block tracking-[0.3em]">0{idx + 1}</span>
              <h4 className="font-['Noto_Serif'] text-3xl italic">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="py-48 px-6 text-center bg-[#1c1b1b] mt-32">
        <h2 className="font-['Noto_Serif'] text-4xl md:text-6xl italic mb-12">Explore the vision.</h2>
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

export default Disciplines;
