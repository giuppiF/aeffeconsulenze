const navigation = {
  main: [
    { name: "Servizi", href: "#services" },
    { name: "Chi siamo", href: "#ourstory" },
    { name: "Come funziona", href: "#how" },
    { name: "Prezzi", href: "#prices" },
    { name: "Contatti", href: "#contact" },
  ],
  social: [],
};

export default function Footer() {
  return (
    <footer className="bg-sky-700">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-2 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-50 hover:text-gray-100"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item: any) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-50">
          &copy; 2023 AeFFe Consulenze. Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
}
