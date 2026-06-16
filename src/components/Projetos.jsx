const projects = [
  {
    semester: "1º Semestre",
    title: "Plataforma de Transparência Parlamentar",
    subtitle: "DemoQuerycy",
    client: "Fatec SJC",
    stack: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"],
    description:
      "Plataforma que aumenta a transparência e o engajamento político fora do período eleitoral, permitindo que cidadãos acompanhem a atuação de vereadores na câmara de São José dos Campos.",
    contributions: [
      "Implementei lógica de pesquisa e filtragem por nome e partido no front-end",
      "Criei telas de listagem geral e perfil individual de vereadores",
      "Contribuí na integração Flask + MySQL",
    ],
    link: "https://github.com/AgileKrakens/DemoQuerycy",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "#00aaff",
  },
  {
    semester: "2º Semestre",
    title: "Dashboard de Indicadores de Crescimento",
    subtitle: "Helpnei Platform",
    client: "Helpnei",
    stack: ["React", "Node.js", "TypeScript", "MySQL"],
    description:
      "Dashboard para monitoramento de indicadores de crescimento com lógica de compatibilidade geográfica e cadastro de usuários integrado à API.",
    contributions: [
      "Full-stack: refatorei rotas e controllers no back-end e ajustei queries SQL",
      "Criei lógica de compatibilidade por geolocalização",
      "Construí tela de cadastro no React com integração completa à API",
    ],
    link: "https://github.com/GeneSys-fatec/API-2DSM",
    color: "from-purple-500/20 to-violet-500/20",
    accent: "#7c3aed",
  },
  {
    semester: "3º Semestre",
    title: "Gerenciador de Tarefas Corporativo",
    subtitle: "GSW Task Manager",
    client: "GSW",
    stack: ["Java", "Spring Boot", "React", "TypeScript", "MongoDB"],
    description:
      "Sistema corporativo de gestão de tarefas com dashboard em tempo real, filtros avançados e API REST padronizada.",
    contributions: [
      "Implementei filtros de busca avançados por palavra-chave e responsável",
      "Desenvolvi o Dashboard completo (front-end + back-end) com atualizações em tempo real",
      "Construí a API REST de listagem e padronizei rotas com exceptions customizadas",
    ],
    link: "https://github.com/GeneSys-fatec/API-3DSM",
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "#10b981",
  },
  {
    semester: "4º Semestre",
    title: "Sistema de Estações Meteorológicas IoT",
    subtitle: "Inception IoT – Tecsus",
    client: "Tecsus",
    stack: ["React", "TypeScript", "Node.js", "Python", "Docker", "GitHub Actions"],
    description:
      "Plataforma IoT para coleta, processamento e visualização de dados meteorológicos de estações distribuídas. Projeto desenvolvido em equipe Scrum (Inception) com foco em qualidade e DevOps.",
    contributions: [
      "Desenvolvi o back-end e front-end completos do módulo de estações meteorológicas",
      "Atuei como QA Engineer: estruturei pipeline de testes automatizados com Jest e cobertura de código",
      "Implementei workflow de CI/CD com GitHub Actions para relatórios de qualidade por sprint",
      "Apliquei práticas de DevOps: automação de métricas QA, integração Jira + GitHub e boas práticas de Conventional Commits",
    ],
    link: "https://github.com/Inception-Fatec/api-4",
    color: "from-orange-500/20 to-amber-500/20",
    accent: "#f59e0b",
    highlight: true,
  },
];

function Card({ p }) {
  const inner = (
    <div className="flex flex-col md:flex-row md:items-start gap-6">
      <div className="flex-shrink-0">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center border border-white/5`}>
          <span className="font-mono text-xs font-bold text-white/70 text-center leading-tight px-1">
            {p.semester.split(" ")[0]}
            <br />
            {p.semester.split(" ")[1]}
          </span>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h3 className="text-xl font-bold" style={{ color: p.accent }}>
            {p.subtitle}
          </h3>
          {p.highlight && (
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              ★ Mais recente
            </span>
          )}
          {p.link && (
            <span className="ml-auto text-xs font-mono text-slate-500 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              abrir no GitHub
            </span>
          )}
        </div>
        <p className="text-slate-400 text-sm mb-1">
          {p.title} · Cliente: <span className="text-slate-300">{p.client}</span>
        </p>
        <p className="text-slate-300 text-sm leading-relaxed mt-3 mb-4">
          {p.description}
        </p>

        <ul className="space-y-1.5 mb-5">
          {p.contributions.map((c, ci) => (
            <li key={ci} className="flex items-start gap-2 text-sm text-slate-400">
              <span style={{ color: p.accent }} className="mt-0.5 flex-shrink-0">▸</span>
              {c}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );

  const baseClass = `gradient-border block bg-[#131a29] rounded-xl p-6 md:p-8 transition-all duration-300 hover:bg-[#1a2235] ${
    p.highlight ? "ring-1 ring-amber-500/30" : ""
  }`;

  if (p.link) {
    return (
      <a href={p.link} target="_blank" rel="noopener noreferrer" className={baseClass}>
        {inner}
      </a>
    );
  }

  return <div className={baseClass}>{inner}</div>;
}

export default function Projetos() {
  return (
    <section id="projetos" className="py-24 bg-[#0a0f1b]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-2">
            // portfolio
          </p>
          <h2 className="text-4xl font-bold text-white">Projetos Acadêmicos</h2>
          <p className="text-slate-400 mt-3">
            APIs desenvolvidas na Fatec SJC com clientes reais.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <Card key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
