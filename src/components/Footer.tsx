import { Building2, Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center mb-3 sm:mb-4">
              <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400 mr-2" />
              <span className="text-lg sm:text-xl font-bold">Nelson Mult-Service</span>
            </div>
            <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Soluções completas em reprografia, papelaria, gráfica, eletrônica e ferragem.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 active:bg-white/30 p-2 rounded-lg transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 active:bg-white/30 p-2 rounded-lg transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <a href="#services" className="hover:text-blue-400 active:text-blue-300 transition-colors">
                  Reprografia
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 active:text-blue-300 transition-colors">
                  Papelaria
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 active:text-blue-300 transition-colors">
                  Gráfica
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 active:text-blue-300 transition-colors">
                  Eletrônica
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 active:text-blue-300 transition-colors">
                  Ferragem
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Localizações</h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <a href="#locations" className="hover:text-blue-400 active:text-blue-300 transition-colors">
                  Gurué - Reprografia
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-blue-400 active:text-blue-300 transition-colors">
                  Gurué - Gráfica
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-blue-400 active:text-blue-300 transition-colors">
                  Molumbo - Papelaria
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-blue-400 active:text-blue-300 transition-colors">
                  Molumbo - Eletrônica
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-blue-400 active:text-blue-300 transition-colors">
                  Molumbo - Ferragem
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contato</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li className="flex items-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400 flex-shrink-0" />
                <span>86 800 3108 (Gurué)</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400 flex-shrink-0" />
                <span>87 808 0102 (Molumbo)</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="break-all">contato@nelsonmultservice.co.mz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Nelson Mult-Service. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
