import React from "react";
import Hyperspeed from "./components/Hyperspeed";
import InvitationTabs from "./components/Tabs";

function App() {
  return (
    <section className="relative w-screen h-screen bg-black overflow-hidden">
      {/* 🔥 Background */}
      <div className="absolute inset-0">
        <Hyperspeed
          effectOptions={{
            distortion: "LongRaceDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 5,
            lanesPerRoad: 2,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 50,
            lightPairsPerRoadWay: 70,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [20, 60],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.2, 0.2],
            carFloorSeparation: [0.05, 1],
            colors: {
              roadColor: 526344,
              islandColor: 657930,
              background: 0,
              shoulderLines: 1250072,
              brokenLines: 1250072,
              leftCars: [16736115, 15158624, 16715818],
              rightCars: [10806246, 8442324, 5489350],
              sticks: 10806246,
            },
          }}
        />
      </div>

      {/* 🧊 Contenido encima */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="w-full max-w-5xl">
          <div className="w-full flex flex-col my-12 gap-4">
            <h1 className="text-white text-4xl md:text-7xl font-bold text-center">
              Fiesta Gay
            </h1>
            <p className="text-2xl text-white text-center">
              Dos hombres. Un mismo día. Un destino inevitable.
            </p>
          </div>

          <div className="w-full backdrop-blur-sm bg-white/10 border border-white/20 p-8 md:p-12 rounded-2xl shadow-2xl text-white text-center gap-4">
            <InvitationTabs />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
