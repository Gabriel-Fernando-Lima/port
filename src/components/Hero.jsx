import { useEffect, useState } from "react";

const roles = ["Desenvolvedor Full Stack", "QA Engineer", "DevOps Enthusiast"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIdx];
    let i = typing ? 0 : role.length;
    let timeout;

    const tick = () => {
      if (typing) {
        setDisplayed(role.slice(0, i + 1));
        i++;
        if (i <= role.length) timeout = setTimeout(tick, 60);
        else setTimeout(() => setTyping(false), 1800);
      } else {
        setDisplayed(role.slice(0, i - 1));
        i--;
        if (i >= 0) timeout = setTimeout(tick, 35);
        else {
          setRoleIdx((prev) => (prev + 1) % roles.length);
          setTyping(true);
        }
      }
    };

    timeout = setTimeout(tick, 120);
    return () => clearTimeout(timeout);
  }, [roleIdx, typing]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00aaff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 animate-fadeUp">
          <p className="font-mono text-[#00aaff] text-sm mb-4 tracking-widest uppercase">
            // Olá, mundo 👋
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            Gabriel
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00aaff] to-[#7c3aed]">
              Fernando
            </span>
          </h1>
          <div className="flex items-center gap-2 mb-6 h-8">
            <span className="font-mono text-slate-300 text-lg md:text-xl">
              {displayed}
            </span>
            <span className="w-0.5 h-6 bg-[#00aaff] animate-blink" />
          </div>
          <p className="text-slate-400 max-w-md leading-relaxed mb-8">
            Cursando Desenvolvimento de Software Multiplataforma na Fatec SJC.
            Focado em construir soluções robustas do back-end ao front-end, com
            atenção a qualidade e boas práticas.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#contato">
              <button className="px-6 py-3 bg-[#00aaff] hover:bg-[#008fcc] text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#00aaff]/25">
                Me contate
              </button>
            </a>
            <a href="#projetos">
              <button className="px-6 py-3 border border-white/10 hover:border-[#00aaff]/50 text-slate-300 hover:text-white font-medium rounded-lg transition-all duration-200 backdrop-blur-sm">
                Ver projetos
              </button>
            </a>
          </div>
        </div>

        {/* Avatar placeholder estilizado */}
        <div className="relative flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-[#00aaff]/20 to-[#7c3aed]/20 border border-white/10 flex items-center justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
              <img
                src="/main1.jpeg"
                alt="Gabriel Fernando"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Orbiting dot */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-[#00aaff] rounded-full shadow-lg shadow-[#00aaff]/50" />
          <div className="absolute bottom-8 left-2 w-2 h-2 bg-[#7c3aed] rounded-full shadow-lg shadow-[#7c3aed]/50" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs font-mono animate-bounce">
        <span>scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
