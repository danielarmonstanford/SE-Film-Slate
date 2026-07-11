import { Link } from 'react-router-dom';

const Lab = () => {
  return (
    <div className="bg-[var(--bg-2)] pt-32">
      <section className="relative h-[70vh] w-full overflow-hidden mb-32">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
          alt="Lab Hero"
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-['Noto_Serif'] text-5xl md:text-8xl italic text-center">
            The Lab.
          </h1>
        </div>
      </section>

      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">EXPERIMENTAL</span>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-40">Research & Development</h3>
          </div>
          <div className="md:col-span-6 space-y-12">
            <p className="text-lg md:text-2xl leading-relaxed font-light">
              The Lab is where we push the boundaries of form, testing new ideas before they reach the screen.
            </p>
            <p className="text-sm opacity-50 leading-loose">
              Experimental work, prototypes, and research projects that inform the studio's evolving creative language.
            </p>
          </div>
        </div>
      </section>

      <section className="py-48 px-6 text-center bg-[var(--bg-3)]">
        <h2 className="font-['Noto_Serif'] text-4xl md:text-6xl italic mb-12">Explore the unknown.</h2>
        <Link
          to="/inquire"
          className="bg-[#CC0000] text-[var(--text)] text-[10px] uppercase tracking-[0.3em] font-bold px-16 py-6 hover:bg-[#930000] transition-colors duration-500 inline-block"
        >
          INITIATE INQUIRY
        </Link>
      </section>
    </div>
  );
};

export default Lab;
