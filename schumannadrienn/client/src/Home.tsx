import "./Home.css";
import ServiceCard from "./ServiceCard";
import ContactForm from "./ContactForm";

//import React from "react";
import { motion } from "framer-motion";

// Single-file React component for schumannadrienn.com
// Tailwind CSS utility classes are used for styling (no extra imports required here).
// Default export a React component that can be dropped into a Next.js page or CRA app.

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-white text-gray-800 antialiased">
      {/* Top navigation */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center shadow">
            <span className="font-serif text-lg">SA</span>
          </div>
          <div>
            <div className="text-sm text-gray-500">Schumann</div>
            <div className="font-semibold">Adrienn — Természetgyógyász</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#services" className="hover:underline">
            Szolgáltatások
          </a>
          <a href="#about" className="hover:underline">
            Rólam
          </a>
          <a
            href="#contact"
            className="text-white bg-rose-600 px-4 py-2 rounded-lg shadow hover:brightness-95"
          >
            Foglalás
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Schumann Adrienn
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Természetgyógyász — holisztikus, gyengéd és tudatos támogatás a
              testi-lelki egyensúlyért.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#services"
                className="inline-block bg-rose-600 text-white px-5 py-3 rounded-lg shadow"
              >
                Szolgáltatások
              </a>
              <a
                href="#contact"
                className="inline-block border border-rose-600 text-rose-600 px-5 py-3 rounded-lg"
              >
                Kapcsolat
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-sm text-gray-500">
              <div className="flex flex-col">
                <span className="font-semibold">Időtartam</span>
                <span>60–90 perc</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Nyelvek</span>
                <span>Magyar, angol (alap)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Helyszín</span>
                <span>Budapest XIII. 1135 Béke utca 5.</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-first md:order-last flex justify-center"
          >
            <div className="w-full max-w-md rounded-2xl bg-white/60 p-6 shadow-lg backdrop-blur">
              <div className="h-64 rounded-lg bg-gradient-to-br from-rose-100 via-amber-100 to-emerald-50 flex items-end p-6">
                <div>
                  <div className="text-sm text-gray-700">
                    Nyugalom & regeneráció
                  </div>
                  <div className="text-2xl font-semibold">
                    Tiszta, gondoskodó tér
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Foglalj időpontot személyes konzultációra — az első beszélgetés
                mindig a bizalomról és a célok feltérképezéséről szól.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#contact"
                  className="flex-1 text-center bg-rose-600 text-white py-2 rounded-lg"
                >
                  Időpont kérés
                </a>
                <a
                  href="#contact"
                  className="flex-1 text-center border border-gray-200 py-2 rounded-lg"
                >
                  Telefon: +36 70 410 3545
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="py-10">
          <h2 className="text-3xl font-bold">Szolgáltatások</h2>
          <p className="mt-2 text-gray-600">
            Átfogó módszerek a lelki és testi harmóniáért — személyre szabott
            ülések.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title="Wingwave"
              description="Gyors, fókuszált stresszoldás, amely a szemmozgások és coaching elemek kombinációjával segít feloldani blokkokat és fókuszt adni a célok eléréséhez."
              items={[
                "Állapotfelmérés",
                "Célorientált gyakorlatok",
                "Gyors feszültségcsökkentés",
              ]}
              delay={0.05}
            />

            <ServiceCard
              title="Biorezonancia"
              description="Eszközalapú energetikai támogatás: a biorezonancia célja az energetikai egyensúly visszaállítása, miközben kiegészítő terápiaként alkalmazható különböző élethelyzetekben."
              items={[
                "Részletes konzultáció",
                "Személyre szabott protokoll",
                "Kiegészítő életmódtanácsok",
              ]}
              delay={0.12}
            />

            <ServiceCard
              title="Tibeti hangfürdő"
              description="Hangfürdő tibeti hangtálakkal — meditációs és regeneráló élmény, amely segít elmélyülni, oldani a stresszt és újrahangolni a testet."
              items={[
                "Kiscsoportos és egyéni ülések",
                "Vezetett meditáció",
                "Fizikai és lelki relaxáció",
              ]}
              delay={0.18}
            />
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Rólam</h2>
              <p className="text-gray-600">
                Schumann Adrienn vagyok, természetgyógyász — szenvedélyem, hogy
                egyszerű, hatásos és melegszívű módszerekkel segítsem az
                embereket visszatalálni önmagukhoz. Munkám alapja az
                odafigyelés, a biztonság és a személyre szabott támogatás.
              </p>

              <ul className="mt-4 text-sm text-gray-500 space-y-2">
                <li>Tapasztalat: több éves privát praxis</li>
                <li>
                  Képzések: wingwave coaching, biorezonancia tanfolyamok,
                  hangterápia
                </li>
                <li>Megközelítés: holisztikus, empatikus, eredményorientált</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h4 className="font-semibold">Milyen ügyfeleknek ajánlott?</h4>
              <p className="mt-2 text-sm text-gray-600">
                Stressz, alvászavarok, teljesítményblokkok, energetikai
                egyensúly helyreállítása, és mindazoknak, akik szeretnének
                mélyebb, nyugalmasabb életminőséget.
              </p>

              <div className="mt-4">
                <a
                  href="#contact"
                  className="inline-block bg-rose-100 border border-rose-200 px-4 py-2 rounded-lg"
                >
                  Ingyenes 15 perc bemutatkozó beszélgetés (online)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-10">
          <h2 className="text-2xl font-bold">Kapcsolat</h2>
          <p className="mt-2 text-gray-600">
            Szeretnél időpontot foglalni vagy kérdésed van? Írj üzenetet vagy
            hívd a megadott telefonszámot.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <ContactForm></ContactForm>

            <div className="bg-white p-6 rounded-2xl shadow flex flex-col gap-4">
              {/* Elérhetőség */}
              <h4 className="font-semibold text-lg">Elérhetőség</h4>
              <div className="flex justify-between items-center text-sm text-gray-600 gap-4">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@kortvelyessyadrienn.com"
                    className="text-rose-600"
                  >
                    info@kortvelyessyadrienn.com
                  </a>
                </p>
                <p>Telefon: +36 70 410 3545</p>
              </div>
              <p className="text-sm text-gray-600">
                Cím: 1135 Budapest Béke u. 5
              </p>
              {/* Google Maps iframe */}
              <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2676.301534907225!2d19.07888947619045!3d47.53198509312734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741db942ae638d3%3A0x89459a235eb08ffa!2sBudapest%2C%20B%C3%A9ke%20u.%205%2C%201131!5e1!3m2!1sen!2shu!4v1757781147172!5m2!1sen!2shu"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
              {/* Közösségi oldalak */}
              <div className="mt-2 text-sm text-gray-500 flex justify-center gap-6">
                <a href="#" className="underline">
                  Facebook
                </a>
                <a href="#" className="underline">
                  Instagram
                </a>
                <a href="#" className="underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-gray-500">
          <div>
            © {new Date().getFullYear()} Schumann Adrienn — schumannadrienn.com
          </div>
          <div className="mt-2">Kezelési feltételek · Adatvédelem</div>
        </footer>
      </main>
    </div>
  );
}
