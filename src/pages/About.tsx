import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-[#131313] pt-32">
      {/* HERO */}
      <section className="relative h-[70vh] w-full overflow-hidden mb-32">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80"
          alt="About Hero"
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-['Noto_Serif'] text-5xl md:text-8xl italic text-center">
            Sculpting Light & Shadow.
          </h1>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">EST. 2018</span>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-40">The Studio Philosophy</h3>
          </div>
          
          <div className="md:col-span-6 space-y-12">
            <p className="text-lg md:text-2xl leading-relaxed font-light">
              We believe that cinema is not merely a sequence of images, but an architecture of emotion. Our approach is rooted in the "Visual Silence"—the moments between the action where the true narrative breathes.
            </p>
            <p className="text-sm opacity-50 leading-loose">
              Founded by Daniel Stanford, the studio has evolved from a boutique creative agency into a full-scale production powerhouse. We specialize in high-concept narratives that demand a specific aesthetic rigor. Our work is characterized by a commitment to the cinematic medium and a relentless pursuit of visual excellence.
            </p>
            <p className="text-sm opacity-50 leading-loose">
              From the initial concept to the final frame, we oversee every detail of the creative process. Our network of global collaborators allows us to scale production to meet the demands of any project, while maintaining the intimate, hands-on approach that defines our studio.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="border-l border-[#CC0000] pl-8 py-4">
              <blockquote className="italic text-xl font-['Noto_Serif'] leading-relaxed opacity-80">
                "To create is to define the boundaries of the unknown."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINES BENTO */}
      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <h2 className="font-['Noto_Serif'] text-3xl italic mb-16">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { title: 'Narrative Film', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80' },
            { title: 'Spatial Design', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80' },
            { title: 'Creative Direction', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
          ].map((item, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden group">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h4 className="font-['Noto_Serif'] text-2xl italic">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-6 text-center bg-[#1c1b1b]">
        <h2 className="font-['Noto_Serif'] text-4xl md:text-6xl italic mb-12">Join the vision.</h2>
        <Link
          to="/investor-inquiry"
          className="bg-[#CC0000] text-white text-[10px] uppercase tracking-[0.3em] font-bold px-16 py-6 hover:bg-[#930000] transition-colors duration-500 inline-block"
        >
          INITIATE INQUIRY
        </Link>
      </section>
    </div>
  );
};

export default About;
