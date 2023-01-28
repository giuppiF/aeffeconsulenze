import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { SkypeLogo } from "./skype";
import { WhatsappIcon } from "./whatsapp";

export default function Contact() {
  return (
    <div className="bg-sky-700" id="contact">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:py-24 lg:px-8">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-bold text-gray-50 sm:text-3xl sm:tracking-tight">
              I nostri contatti
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-50 flex gap-1">
                  <PhoneIcon width={24} />
                  Telefono
                </h3>
                <dl className="mt-2 text-base text-gray-50">
                  <div className="mt-1">
                    <dt className="sr-only">Telefono</dt>
                    <dd>+39 3758026800</dd>
                    <dd>+39 3756267022</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-50 flex gap-1">
                  <EnvelopeIcon width={24} />
                  Email
                </h3>
                <dl className="mt-2 text-base text-gray-50">
                  <div className="mt-1">
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a href="mailto:info@affeconsulenze.it">
                        info@aeffeconsulenze.it
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-50 flex gap-1">
                  <WhatsappIcon /> Whatsapp
                </h3>
                <dl className="mt-2 text-base text-gray-50 ">
                  <div className="mt-1">
                    <dt className="sr-only">Whatsapp</dt>
                    <dd>+39 3758026800</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-50 flex gap-1">
                  <SkypeLogo className="w-7 h-7" /> Skype
                </h3>
                <dl className="mt-2 text-base text-gray-50 ">
                  <div className="mt-1">
                    <dt className="sr-only">Skype</dt>
                    <dd>AeFFe Consulenze</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
