import { Link } from 'react-router-dom';
import { EMAIL_CONTACT, SOCIAL_LINKS } from '../constants';

const About = () => {
  return (
    <div className="bg-[#131313] pt-32">

      {/* HERO */}
      <section className="relative h-[70vh] w-full overflow-hidden mb-32">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80"
          alt="Stanford Emporium"
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="font-['Noto_Serif'] text-5xl md:text-8xl italic text-center leading-tight">
            About
          </h1>
        </div>
      </section>

      {/* STUDIO PHILOSOPHY */}
      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 md:sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">EST. 2018</span>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-75">The Studio Philosophy</h3>
          </div>

          <div className="md:col-span-6 space-y-10">
            <p className="text-lg md:text-2xl leading-relaxed font-light">
              Cinema is not merely a sequence of images. It is emotional architecture — built through rhythm, restraint, and precision.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              Our approach is rooted in Visual Silence: the moments between the action where the real narrative breathes. Where tension forms. Where character reveals itself without dialogue. Where atmosphere becomes meaning.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              Founded by Daniel Armon Stanford, Stanford Emporium evolved from boutique creative agency roots into a full-scale creative studio spanning feature film development, commercial direction, fine art, and cinematic branding. We specialize in projects that require a strong aesthetic hand — work that demands discipline, clarity, and intentional visual authorship.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              From concept to final delivery, we oversee the entire creative pipeline — direction, packaging, design, casting support, and visual execution. Our global network of collaborators allows us to scale production rapidly while maintaining the intimate, hands-on control that defines the studio.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-90 leading-loose font-medium tracking-wide">
              We build projects for audiences who can feel the difference.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="border-l border-[#CC0000] pl-8 py-4">
              <blockquote className="italic text-xl font-['Noto_Serif'] leading-relaxed opacity-80">
                "To create is to define the boundaries of the unknown."
              </blockquote>
              <cite className="block mt-4 text-[10px] uppercase tracking-[0.3em] opacity-75 not-italic">
                — Daniel Armon Stanford
              </cite>
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

      {/* FOUNDER */}
      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 md:sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">Founder</span>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-75">Daniel Armon Stanford</h3>
          </div>

          <div className="md:col-span-7 space-y-8">
            <h2 className="font-['Noto_Serif'] text-3xl md:text-4xl italic leading-snug">
              Daniel Armon Stanford
            </h2>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              Daniel Armon Stanford is a Creative Director, Brand Strategist, and Executive Producer with 30 years of experience producing high-impact visual work across fashion campaigns, feature film development, fine art, commercial video, architecture, music, and emerging technology.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              He has led creative direction and produced campaigns for GUESS, Victoria's Secret, Intimissimi, Lancôme, Revlon, La Maison Simons, SSENSE, and Aldo, overseeing productions across five continents — from Rio to Morocco to Southeast Asia.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              His fine art has been exhibited at MIS — Museum of Image & Sound (São Paulo) and the Cornell Art Museum (Florida), with work shown during Art Basel Miami week. He is also the co-founder of NuLab, an audio-visual intelligence studio operating at the intersection of AI, sound, and spatial media (nulab.space). His work spans NFT art, cryptocurrency-native creative strategy, and AI-generated image systems for luxury and editorial brands.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              As Executive Producer and Art Director on the international co-production 400XY (Canada · China · Greece), Stanford brings casting instinct, visual authority, and cross-cultural production fluency into feature film development. His creative approach is defined by precision — the same discipline applied to global fashion campaigns, now brought into tone, character, and cinematic world-building.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              Stanford's broader work includes research into modern modular sustainable housing systems (passive and positive house architecture), wellness brand architecture, and large-scale fashion show production. He operates from Montréal with reach into New York, London, and Los Angeles.
            </p>
          </div>
        </div>
      </section>

      {/* SELECT RECOGNITION */}
      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 md:sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">Recognition</span>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-['Noto_Serif'] text-3xl italic mb-12">Select Recognition</h2>
            <ul className="space-y-6">
              <li className="border-t border-[rgba(244,239,230,0.2)] pt-6 text-sm text-[#F5F0E6] opacity-85 leading-relaxed">
                London International Advertising Award — Art Direction, GUESS Set Me Free
              </li>
              <li className="border-t border-[rgba(244,239,230,0.2)] pt-6 text-sm text-[#F5F0E6] opacity-85 leading-relaxed">
                Silver &amp; Honourable Mentions — Canadian National Magazine Awards (Fashion &amp; Beauty / Eye Candy)
              </li>
              <li className="border-t border-[rgba(244,239,230,0.2)] pt-6 text-sm text-[#F5F0E6] opacity-85 leading-relaxed">
                Fine art exhibited at MIS São Paulo and the Cornell Art Museum Florida
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section className="px-6 max-w-[1800px] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">Connect</span>
          </div>
          <div className="md:col-span-7">
            <div className="flex flex-wrap gap-10 items-center">
              <a
                href={`mailto:${EMAIL_CONTACT}`}
                className="text-sm text-white hover:text-[#CC0000] transition-all"
              >
                {EMAIL_CONTACT}
              </a>
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-text text-[10px] uppercase tracking-[0.2em] text-white opacity-85 hover:opacity-100 hover:text-[#CC0000] transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT / CTA */}
      <section className="py-48 px-6 text-center bg-[#1c1b1b]">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm opacity-80 uppercase tracking-[0.3em] mb-8">Stanford Emporium</p>
          <h2 className="font-['Noto_Serif'] text-3xl md:text-5xl italic mb-8 leading-snug">
            Not a traditional production company.
          </h2>
          <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose mb-6 max-w-xl mx-auto">
            A creative intelligence studio — producing work at the highest level across media, brands, and cultures for three decades.
          </p>
          <blockquote className="font-['Noto_Serif'] italic text-xl opacity-90 mb-16">
            "To create is to define the boundaries of the unknown."
            <cite className="block mt-3 text-[10px] uppercase tracking-[0.3em] opacity-60 not-italic">
              — Daniel Armon Stanford
            </cite>
          </blockquote>
          <Link
            to="/inquire"
            className="bg-[#CC0000] text-white text-[10px] uppercase tracking-[0.3em] font-bold px-16 py-6 hover:bg-[#930000] transition-colors duration-500 inline-block"
          >
            INITIATE INQUIRY
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
