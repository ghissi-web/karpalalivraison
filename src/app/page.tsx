"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center p-4 sm:p-8 relative">
      {/* Logo et titre */}
      <header className="flex flex-col items-center gap-2 mt-6 mb-10 w-full">
        <div className="flex items-center gap-4 w-full justify-between max-w-3xl">
          <div className="flex items-center gap-4">
            <Image
              src="/livreur.png"
              alt="Logo livreur sur moto"
              width={256}
              height={256}
              className="rounded-full border border-gray-200 shadow"
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1a202c] tracking-tight">
              Karpala livraison
            </h1>
          </div>
          {/* Menu hamburger */}
          <button
            className="sm:mr-2 p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Ouvrir le menu"
          >
            <span className="block w-7 h-1 bg-gray-800 mb-1 rounded"></span>
            <span className="block w-7 h-1 bg-gray-800 mb-1 rounded"></span>
            <span className="block w-7 h-1 bg-gray-800 rounded"></span>
          </button>
        </div>
      </header>

      {/* Menu déroulant */}
      {menuOpen && (
        <div className="absolute top-24 right-6 z-20 bg-white border rounded-lg shadow-lg w-48 animate-fade-in flex flex-col">
          <button
            className="py-3 px-4 text-left hover:bg-gray-100 border-b"
            onClick={() => handleMenuClick("contact")}
          >
            Contact
          </button>
          <button
            className="py-3 px-4 text-left hover:bg-gray-100 border-b"
            onClick={() => handleMenuClick("services")}
          >
            Services
          </button>
          <button
            className="py-3 px-4 text-left hover:bg-gray-100 border-b"
            onClick={() => handleMenuClick("apropos")}
          >
            À propos
          </button>
          <a
            href="/inscription-livreur"
            className="py-3 px-4 text-left hover:bg-green-100 text-green-700 border-t border-b border-gray-200"
          >
            🚀 Devenir livreur
          </a>
        </div>
      )}

      {/* Affichage de la section sélectionnée */}
      <main className="w-full max-w-3xl flex flex-col items-center mt-4">
        {!selectedMenu && (
          <div className="text-gray-500 text-center mt-10">
            <span>Sélectionnez un menu pour afficher les informations.</span>
          </div>
        )}
        {selectedMenu === "contact" && (
          <section className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center w-full">
            <h2 className="text-xl font-semibold mb-2 text-[#2d3748]">Contact</h2>
            <div className="text-gray-700 text-center">
              <div className="mb-1">
                <a 
                  href="https://wa.me/22665122106" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 underline cursor-pointer flex items-center gap-2 justify-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  +226 65 12 21 06
                </a>
              </div>
              <div className="mb-1">📞 +226 05241938</div>
              <div className="mb-1">📞 +226 62 63 26 82</div>
              <div>✉️ karpalalivraison1@gmail.com</div>
            </div>
          </section>
        )}
        {selectedMenu === "services" && (
          <section className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center w-full">
            <h2 className="text-xl font-semibold mb-2 text-[#2d3748]">Services</h2>
            <div className="text-gray-700 mb-3">
              <Image
                src="/livraison.png"
                alt="Service de livraison"
                width={1400}
                height={1050}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>
        )}
        {selectedMenu === "apropos" && (
          <section className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center w-full">
            <h2 className="text-xl font-semibold mb-2 text-[#2d3748]">À propos</h2>
            <p className="text-gray-700 text-sm text-justify">
              Fondée en 2020 par Mare Roland et Ghislain Mare, notre entreprise s’est rapidement imposée comme un acteur fiable et dynamique dans le secteur de la livraison. Animés par une vision commune de moderniser et de simplifier les services de transport de colis, les deux fondateurs ont mis en place une structure innovante, axée sur la rapidité, la sécurité et la satisfaction client.<br/><br/>
              Depuis sa création, l’entreprise s’est spécialisée dans la livraison de proximité, mais aussi dans les envois interurbains, en mettant l’accent sur la ponctualité, la traçabilité des colis, et un service client personnalisé. Grâce à une flotte adaptée et une équipe engagée, elle répond efficacement aux besoins des particuliers comme des professionnels.<br/><br/>
              Aujourd’hui, l’entreprise continue de croître, portée par des valeurs fortes : professionnalisme, intégrité, et engagement. Elle ambitionne de devenir une référence nationale en matière de logistique urbaine et de solutions de livraison durables.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
