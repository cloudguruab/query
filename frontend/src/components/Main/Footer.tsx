import { Container } from "@chakra-ui/react";

const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Substack", href: "https://thebriefnewsletter.com" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
};

export default function Footer() {
  return (
    <>
      <Container marginTop="10%">
        <footer className="bg-white">
          <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
            <nav
              className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
              aria-label="Footer"
            >
              {navigation.main.map((item) => (
                <div key={item.name} className="pb-6">
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </footer>
      </Container>
    </>
  );
}
