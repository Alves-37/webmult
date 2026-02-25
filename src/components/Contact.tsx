import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos sempre disponíveis para atendê-lo. Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-start">
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Telefone</h4>
                    <p className="text-gray-600 text-sm sm:text-base">86 800 3108 (Gurué)</p>
                    <p className="text-gray-600 text-sm sm:text-base">87 808 0102 (Molumbo)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="min-w-0 break-words">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600 text-sm sm:text-base break-all">contato@nelsonmultservice.co.mz</p>
                    <p className="text-gray-600 text-sm sm:text-base break-all">info@nelsonmultservice.co.mz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Localização</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Gurué – Bairro Barragem, a 50 metros do IMIG
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Molumbo – Bairro 7 de Abril, perto da Escola Primária
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Horário de Funcionamento</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Segunda a Sexta: 8h - 18h</p>
                    <p className="text-gray-600 text-sm sm:text-base">Sábado: 8h - 13h</p>
                    <p className="text-gray-600 text-sm sm:text-base">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
