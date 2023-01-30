import { CameraIcon } from "@heroicons/react/20/solid";
import { Background } from "./background";

export default function OurStory() {
  return (
    <div className="overflow-hidden bg-white isolate relative" id="ourstory">
      <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Chi siamo</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-sky-700 sm:text-4xl">
              Esperti al tuo servizio
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1 isolate ">
            <Background />

            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-3 aspect-h-3 ">
                  <img
                    className="rounded-lg object-cover  object-center shadow-lg"
                    src="/experts.jpeg"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={300}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-500">
                Siamo specializzati nella gestione amministrativa del lavoro
                domestico.
              </p>
              <p className="text-lg text-gray-500">
                Ci avvaliamo della collaborazione di collaboratori qualificati e
                di consulenti del lavoro con esperienza ventennale, per fornirti
                la competenza necessaria e soluzioni immediate alle tue
                problematiche.
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p className="text-lg text-gray-500">
                Abbiamo scelto un software specializzato esclusivamente al
                lavoro domestico in modo da offrirti un servizio mirato e
                qualificato.
              </p>
              <p className="text-lg text-gray-500">
                Contattaci senza impegno per sapere la soluzione più adatta a
                te!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
