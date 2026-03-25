import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <div className="bg-[#131313] pt-32">
      <section className="relative h-[70vh] w-full overflow-hidden mb-32">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80"
          alt="Work Hero"
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-['Noto_Serif'] text-5xl md:text-8xl italic text-center">
            Disciplines.
          </h1>
        </div>
      </section>

      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">OUR WORK</span>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-40">Areas of Practice</h3>
          </div>
          <div className="md:col-span-6 space-y-12">
            <p className="text-lg md:text-2xl leading-relaxed font-light">
              From narrative film to spatial design, our disciplines span the full spectrum of the cinematic arts.
            </p>
            <p className="text-sm opacity-50 leading-loose">
              Each project is approached with the same commitment to craft and intention, regardless of medium or scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-48 px-6 text-center bg-[#1c1b1b]">
        <h2 className="font-['Noto_Serif'] text-4xl md:text-6xl italic mb-12">Start a project.</h2>
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

export default Work;
