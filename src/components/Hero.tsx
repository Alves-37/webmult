import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-white/10 backdrop-blur-sm p-1.5 sm:p-2 rounded-2xl border border-white/20">
            <img
              src="/nelson.jpg"
              alt="Nelson Mult-Service"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-white/70 shadow-lg"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2">
          Nelson Mult-Service
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-3 sm:mb-4 font-light px-4">
          Soluções Completas para o Seu Negócio
        </p>

        <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
          5 estabelecimentos estrategicamente localizados em Gurué e Molumbo,
          oferecendo serviços de Reprografia, Papelaria, Gráfica, Eletrônica e Ferragem
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Conheça Nossos Serviços
          </button>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 active:bg-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 border border-white/30 text-center"
          >
            Entre em Contato
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
