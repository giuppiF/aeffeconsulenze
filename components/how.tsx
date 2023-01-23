import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Cog6ToothIcon,
  EnvelopeIcon,
  PhoneIcon,
  PlusIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

export default function How() {
  return (
    <div className="bg-sky-700" id="how">
      <div className="mx-auto max-w-7xl py-4 px-6 sm:py-24 lg:flex lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-5xl lg:text-4xl">
            Come funziona
          </h2>
          <p className="mt-5 text-xl text-gray-50">
            È sufficiente un telefono o una mail per trasmetterci la
            documentazione necessaria agli adempimenti per la gestione del
            servizio. Senza troppa fatica puoi inviarci i documenti tramite il
            canale whatsapp del vostro cellulare, o tramite mail.
          </p>
          <p className="mt-5 text-xl text-gray-50">
            {" "}
            Comunicaci la data in cui intendi ricevere il prospetto paga e lo
            riceverai via mail in modo semplice e immediato.
          </p>
        </div>
        <div className="mt-10 w-full max-w-xs text-white flex items-center">
          <PhoneIcon className="w-40" /> <PlusIcon className="w-32" />{" "}
          <EnvelopeIcon className="w-40" />
        </div>
      </div>
    </div>
  );
}
