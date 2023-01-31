/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LogoSmall } from "./logo-small";
import { Logo } from "./logo";
import { Background } from "./background";

const navigation = [
  { name: "Servizi", href: "#services" },
  { name: "Chi siamo", href: "#ourstory" },
  { name: "Come funziona", href: "#how" },
  { name: "Prezzi", href: "#prices" },
  { name: "Contatti", href: "#contact" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate bg-white">
      <Background />
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">AeFFe Consulenze</span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Apri menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-semibold text-sky-700 hover:text-sky-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Chiudi menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-16">
          <div className="mx-auto max-w-5xl pt-20 pb-32 sm:pt-32 sm:pb-40">
            <div>
              <Logo className="w-full h-full  text-sky-700" />
              <p className="mt-6 text-2xl leading-8 text-gray-600 sm:text-center">
                Offriamo una{" "}
                <span className="font-bold">soluzione completa</span> per la
                gestione amministrativa del
                <span className="font-bold"> lavoro domestico</span>.
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <a
                  href="#services"
                  className="cursor-pointer inline-block rounded-lg bg-sky-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-600 hover:bg-sky-700 hover:ring-sky-700"
                >
                  I nostri servizi{" "}
                  <span className="text-sky-200" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
                <a
                  href="#contact"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Contatti{" "}
                  <span className="text-gray-400" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
