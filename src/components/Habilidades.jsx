const grupos = [
  {
    categoria: "Linguagens & Frameworks",
    icon: "⚡",
    skills: [
      "JavaScript", "TypeScript", "React", "Node.js",
      "Java", "Spring Boot", "Python", "Flask",
      "HTML", "CSS", "Dart", "Flutter",
    ],
  },
  {
    categoria: "Banco de Dados & Cloud",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB", "AWS", "Docker"],
  },
  {
    categoria: "Ferramentas & Práticas",
    icon: "🛠️",
    skills: [
      "Git", "GitHub", "GitHub Actions", "Jira",
      "Scrum", "Figma", "REST APIs", "CI/CD",
      "Jest", "Tailwind", "Bootstrap",
    ],
  },
  {
    categoria: "QA & DevOps",
    icon: "🔍",
    skills: [
      "Testes Automatizados", "Cobertura de Código",
      "Conventional Commits", "Métricas QA",
      "Pipeline CI/CD", "Discord Bot",
    ],
  },
];

const idiomas = [
  { idioma: "Português", nivel: "Nativo", pct: 100 },
  { idioma: "Inglês", nivel: "Intermediário", pct: 60 },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-24 bg-[#0a0f1b]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-2">
            // stack
          </p>
          <h2 className="text-4xl font-bold text-white">Habilidades</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {grupos.map((g, i) => (
            <div
              key={i}
              className="gradient-border bg-[#131a29] rounded-xl p-6 hover:bg-[#1a2235] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{g.icon}</span>
                <h3 className="font-semibold text-white">{g.categoria}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Idiomas */}
        <div className="bg-[#131a29] rounded-xl p-6">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <span>🌐</span> Idiomas
          </h3>
          <div className="space-y-4">
            {idiomas.map((l) => (
              <div key={l.idioma}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{l.idioma}</span>
                  <span className="font-mono text-[#00aaff] text-xs">{l.nivel}</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#00aaff] to-[#7c3aed] transition-all duration-1000"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
