import { Award, Users, TrendingUp, MapPin } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: MapPin, label: 'Estabelecimentos', value: '5' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '1000+' },
    { icon: Award, label: 'Anos de Experiência', value: '10+' },
    { icon: TrendingUp, label: 'Serviços Oferecidos', value: '5' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Sobre a Nelson Mult-Service
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa consolidada no mercado, oferecendo soluções completas
            em reprografia, papelaria, gráfica, eletrônica e ferragem. Com 5 estabelecimentos
            estrategicamente localizados, estamos sempre perto de você.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full mb-3 sm:mb-4">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</p>
              <p className="text-xs sm:text-base text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Nossa Missão
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Fornecer produtos e serviços de alta qualidade com excelência no atendimento,
            suprindo as necessidades dos nossos clientes com eficiência e profissionalismo.
            Estamos comprometidos em ser a escolha número um para soluções empresariais e pessoais
            em Gurué e Molumbo.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">Qualidade</h4>
              <p className="text-gray-600 text-sm">Produtos e serviços de excelência</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">Confiança</h4>
              <p className="text-gray-600 text-sm">Parceria duradoura com clientes</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-900 mb-2">Inovação</h4>
              <p className="text-gray-600 text-sm">Sempre à frente das necessidades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
