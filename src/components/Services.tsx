import { FileText, BookOpen, Printer, Cpu, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Reprografia',
      description: 'Cópias, impressões e encadernações com qualidade profissional',
      features: ['Cópias em preto e branco', 'Impressões coloridas', 'Encadernações', 'Plastificações'],
    },
    {
      icon: BookOpen,
      title: 'Papelaria',
      description: 'Material escolar e de escritório completo',
      features: ['Material escolar', 'Artigos de escritório', 'Livros e cadernos', 'Acessórios diversos'],
    },
    {
      icon: Printer,
      title: 'Gráfica',
      description: 'Soluções gráficas personalizadas para seu negócio',
      features: ['Cartões de visita', 'Panfletos e folders', 'Banners e placas', 'Materiais promocionais'],
    },
    {
      icon: Cpu,
      title: 'Eletrônica',
      description: 'Produtos eletrônicos e acessórios tecnológicos',
      features: ['Componentes eletrônicos', 'Acessórios de informática', 'Equipamentos diversos', 'Suporte técnico'],
    },
    {
      icon: Wrench,
      title: 'Ferragem',
      description: 'Ferramentas e materiais para construção',
      features: ['Ferramentas manuais', 'Ferramentas elétricas', 'Material de construção', 'Acessórios diversos'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de serviços para atender todas as suas necessidades
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl mb-4 sm:mb-6 shadow-lg">
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
