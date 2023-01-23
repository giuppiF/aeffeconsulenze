import { CheckIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Costo del lavoro",
    description:
      "Calcolo del costo del lavoro per colf, baby sitter, assistenti familiari",
  },
  {
    name: "CNNL del lavoro domestico",
    description:
      "Lettera di assunzione e stipula del contratto secondo il CCNL del lavoro domestico.",
  },
  {
    name: "Adempimenti",
    description:
      "Adempimenti obbligatori per la regolarizzazione del rapporto di lavoro domestico.",
  },
  {
    name: "INPS",
    description: "Assunzioni, cessazioni e variazioni posizione INPS.",
  },
  {
    name: "Buste paga",
    description: "Calcolo di buste paga mensili.",
  },
  {
    name: "Dichiarazione sostitutiva",
    description:
      "Elaborazione della dichiarazione sostitutiva delle somme erogate ( ex CUD).",
  },
  {
    name: "Calcolo contributi",
    description:
      "Calcolo dei contributi INPS e compilazione bollettini trimestrali.",
  },
  {
    name: "TFR",
    description: "Conteggio annuale del TFR.",
  },
  {
    name: "Gestione TFR",
    description:
      "Gestione del trattamento di fine rapporto ed eventuali anticipi.",
  },
  {
    name: "Infortuini",
    description: "Denunce infortuni per il lavoro domestico.",
  },
  {
    name: "Conteggi",
    description: "Conteggi per vertenze e risoluzioni consensuali.",
  },
];

export default function Services() {
  return (
    <div className="bg-white" id="services">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:px-8 lg:py-40">
        <div>
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-sky-700">
            Come possiamo aiutarti
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            I nostri servizi
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
        </div>
        <div className="mt-20 lg:col-span-2 lg:mt-0">
          <dl className="grid grid-cols-1 gap-12  sm:grid-cols-2 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute mt-1 h-6 w-6 text-sky-700"
                    aria-hidden="true"
                  />
                  <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
