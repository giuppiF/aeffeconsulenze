import { BoltIcon, GlobeAltIcon, ScaleIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Consulenza",
    description:
      "La consulenza e il costo del tuo collaboratore domestico sono gratuiti.",
    icon: GlobeAltIcon,
    price: "Incluso",
    yearly: false,
  },
  {
    name: "Gestione del rapporto di lavoro",
    description:
      "La gestione completa del rapporto di lavoro il costo totale è pari a 300,00€/ anno.",
    icon: ScaleIcon,
    price: "€ 300",
    yearly: true,
  },
  {
    name: "Pratiche",
    description:
      "Il costo del servizio di pratiche singole varia a seconda della complessità della stessa.",
    icon: BoltIcon,
    price: "Su richiesta",
    yearly: false,
  },
];

export default function Prices() {
  return (
    <div className="bg-white py-20 sm:py-24 lg:py-32" id="prices">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl">
          Prezzi
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-600">
          Un servizio completo con un prezzo trasparente.
        </p>
      </div>
      <div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8 pt-5">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="grid grid-cols-1 gap-16 lg:grid lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10"
            >
              <div className="p-6 sm:p-6">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-sky-700">
                  {feature.name}
                </h3>
                <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                  {feature.price}
                  {feature.yearly && (
                    <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                      /anno
                    </span>
                  )}
                </div>
              </div>
              <dd className="text-base leading-7 text-gray-600 p-5">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
