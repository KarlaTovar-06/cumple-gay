import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function InvitationTabs() {
  const [activeTab, setActiveTab] = useState("intro");

  const tabs = [
    { id: "intro", label: "¿Qué celebramos?" },
    { id: "location", label: "¿Dónde?" },
    { id: "dresscode", label: "¿Qué llevo?" },
    { id: "fun", label: "¿Cuándo?" },
  ];

  const handleAddToCalendar = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    const title = "Fiesta Marcos & Guapi 🏎️⚽";
    const description =
      "27 + 26 años de caos combinado. Temática Cars + Real Madrid. ¡No faltes!";
    const location = "Ciudad de Mexico";
    const startDate = "20250306T190000";
    const endDate = "20250307T030000";

    if (isIOS) {
      const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
DTSTART:${startDate}
DTEND:${endDate}
END:VEVENT
END:VCALENDAR
      `.trim();

      const blob = new Blob([icsContent], { type: "text/calendar" });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "fiesta-marcos-alan.ics";
      a.click();
    } else {
      const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        title
      )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
        description
      )}&location=${encodeURIComponent(location)}`;

      window.open(googleUrl, "_blank");
    }
  };

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative px-4 py-2 text-sm md:text-base text-white"
          >
            {tab.label}

            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/20 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Animated Content */}
      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-white/90 text-lg text-center"
          >
            {activeTab === "intro" && (
              <div className="space-y-3">
                <p className="text-2xl font-bold">
                  🏎️ El cumpleaños de nuestros gays favoritos ⚽
                </p>
                <p>
                  {" "}
                  <strong>Marcos</strong> cumple 27. <strong>Guapi</strong>{" "}
                  cumple 26.
                </p>
                <p className="text-white/60 text-base">
                  Sí, el mismo día. No, no es coincidencia, es destino✨
                </p>
              </div>
            )}

            {activeTab === "location" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <p className="text-xl font-semibold">
                  📍 En el depa de nuestros gays favoritos:
                </p>

                <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps?q=Ciudad%20de%20Mexico&output=embed"
                    loading="lazy"
                  ></iframe>
                </div>

                <a
                  href="https://maps.app.goo.gl/hHSopqC5db387MBz7?g_st=ic"
                  target="_blank"
                  className="inline-block mt-4 px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
                >
                  Abrir en Google Maps
                </a>
              </motion.div>
            )}

            {activeTab === "dresscode" && (
              <div className="space-y-3">
                <p className="text-2xl">🏁 Alcohol y más alcohol 🏁</p>
                <p>La meta es empedar a los cumpleaÑEROS</p>
                <p className="text-white/60 text-base">
                  Shot si llegas con algo de Rayo McQueen.
                </p>
              </div>
            )}

            {activeTab === "fun" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 text-center"
              >
                <p className="text-2xl">🎂 6 de marzo · 7:00 PM</p>
                <p className="text-white/60 text-base">
                  No faltes. Te esperamos!
                </p>

                <button
                  onClick={handleAddToCalendar}
                  className="px-8 py-4 rounded-full border border-gray-200 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  📅 Agendar la fiesta
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default InvitationTabs;
