import { MapPin, Store } from 'lucide-react';

export default function Locations() {
  const locations = [
    {
      city: 'Gurué',
      stores: [
        {
          name: 'Nelson Mult-Service - Reprografia',
          services: ['Reprografia', 'Papelaria'],
          address: 'Bairro Barragem, a 50 metros do IMIG',
        },
        {
          name: 'Nelson Mult-Service - Gráfica',
          services: ['Gráfica', 'Papelaria'],
          address: 'Bairro Barragem, a 50 metros do IMIG',
        },
      ],
    },
    {
      city: 'Molumbo',
      stores: [
        {
          name: 'Nelson Mult-Service - Papelaria',
          services: ['Papelaria', 'Material Escolar'],
          address: 'Bairro 7 de Abril, perto da Escola Primária',
        },
        {
          name: 'Nelson Mult-Service - Eletrônica',
          services: ['Eletrônica', 'Informática'],
          address: 'Bairro 7 de Abril, perto da Escola Primária',
        },
        {
          name: 'Nelson Mult-Service - Ferragem',
          services: ['Ferragem', 'Construção'],
          address: 'Bairro 7 de Abril, perto da Escola Primária',
        },
      ],
    },
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nossas Lojas
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            5 estabelecimentos estrategicamente localizados para melhor atendê-lo
          </p>
        </div>

        <div className="space-y-12">
          {locations.map((location, index) => (
            <div key={index}>
              <div className="flex items-center mb-8">
                <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">{location.city}</h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {location.stores.map((store, storeIndex) => (
                  <div
                    key={storeIndex}
                    className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4 sm:p-6 border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="flex items-start mb-3 sm:mb-4">
                      <div className="bg-blue-600 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                        <Store className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
                          {store.name}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                          {store.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {store.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-blue-700 border border-blue-200"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Visite-nos em Qualquer Uma das Nossas Lojas
          </h3>
          <p className="text-xl mb-6 text-blue-100">
            Estamos prontos para atender você com qualidade e profissionalismo
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
