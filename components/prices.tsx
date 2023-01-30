import { CheckCircleIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Prospetto paga mensule",
  "Calcolo 13ma mensilità",
  "Gestione ferie e TFR",
  "Calcolo prospetto contributi trimestrali",
  "Gestione cassa colf",
  "Dichiarazione sostitutiva delle somme erogate",
  "Pratiche di variazione del rapporto di lavoro",
];

export default function Prices() {
  return (
    <div className="bg-gray-100" id="prices">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Prezzi
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Un servizio completo con un prezzo trasparente.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                  Tutto incluso
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  Con il servizio annuo è tutto incluso, nessun costo di
                  servizio aggiuntivo!
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-sky-700">
                      Servizi inclusi
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
                  >
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                <div className="mt-4 flex items-end justify-center text-5xl font-bold tracking-tight text-gray-900">
                  <span>€ 300</span>
                  <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                    /anno
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
