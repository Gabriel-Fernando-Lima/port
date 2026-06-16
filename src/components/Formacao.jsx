const formacoes = [
  {
    instituicao: "IDEIA",
    titulo: "Ensino Médio Técnico em Informática",
    periodo: "2020 – 2023",
    icon: "🎓",
  },
  {
    instituicao: "Fatec São José dos Campos",
    titulo: "Tecnólogo em Desenvolvimento de Software Multiplataforma",
    periodo: "2024 – 2027",
    detalhe: "4º semestre",
    icon: "🏛️",
    destaque: true,
  },
];

export default function Formacao() {
  return (
    <section id="formacao" className="py-24 bg-[#131a29]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-2">
            // educação
          </p>
          <h2 className="text-4xl font-bold text-white">Formação</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {formacoes.map((f, i) => (
            <div
              key={i}
              className={`gradient-border flex-1 bg-[#1e293b] rounded-xl p-6 transition-all duration-300 hover:bg-[#243047] ${
                f.destaque ? "ring-1 ring-[#00aaff]/20" : ""
              }`}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <p className="font-mono text-[#00aaff] text-xs tracking-widest uppercase mb-1">
                {f.periodo}
              </p>
              <h3 className="text-lg font-bold text-white mb-1">
                {f.instituicao}
              </h3>
              <p className="text-slate-400 text-sm">{f.titulo}</p>
              {f.detalhe && (
                <span className="mt-3 inline-block tag">{f.detalhe}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
