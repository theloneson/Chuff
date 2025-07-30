import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SpinWheel = () => {
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const segments = [
    { label: "WL", color: "#0EA5E9", probability: 5 },        // Sky Blue
    { label: "Try Again", color: "#F43F5E", probability: 40 }, // Rose
    { label: "1x Spin", color: "#A855F7", probability: 15 },   // Violet
    { label: "Try Again", color: "#FB7185", probability: 40 }, // Light Red
  ];

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const random = Math.random() * 100;
    let selectedSegment = 0;
    let cumulativeProbability = 0;

    for (let i = 0; i < segments.length; i++) {
      cumulativeProbability += segments[i].probability;
      if (random <= cumulativeProbability) {
        selectedSegment = i;
        break;
      }
    }

    const segmentAngle = 360 / segments.length;
    const targetAngle = selectedSegment * segmentAngle + segmentAngle / 2;
    const randomSpins = 5 + Math.random() * 2; // 5–7 spins
    const finalRotation = (randomSpins * 360) + (360 - targetAngle);

    setRotation(prev => prev + finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
    }, 5500); // Match animation duration
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/lovable-uploads/afd3f9ce-a0e3-421c-8795-6f3995afad03.png')" }}
    >
      {/* Navigation */}
      <div className="absolute top-8 left-8">
        <button
          onClick={() => navigate("/")}
          className="text-white text-sm underline hover:text-gray-300"
        >
          Back to Dashboard
        </button>
      </div>

      {/* Connect Wallet */}
      <div className="absolute top-6 right-6">
        <button className="px-4 py-2 rounded text-white text-sm bg-white/30 hover:bg-white/50">
          Connect Wallet
        </button>
      </div>

      {/* Header */}
      <div className="text-center pt-16 mb-8">
        <h1 className="text-6xl font-bold text-white mb-4">Spin to Win</h1>
        <p className="text-white text-lg">
          Try your luck and win exciting rewards like whitelist spots and extra spins!
        </p>
      </div>

      {/* Characters + Wheel */}
      <div className="flex justify-center items-center relative">
        {/* Optional Left & Right Character placeholders */}
        <div className="absolute left-32 top-1/2 -translate-y-1/2">
          <div className="w-16 h-20 bg-yellow-300 rounded-xl shadow-md" />
        </div>
        <div className="absolute right-32 top-1/2 -translate-y-1/2">
          <div className="w-16 h-20 bg-cyan-400 rounded-xl shadow-md" />
        </div>

        {/* Wheel */}
        <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="relative w-80 h-80 mx-auto">
            {/* Spinning Wheel */}
            <div
              className="absolute w-full h-full rounded-full transition-transform duration-[5500ms] ease-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {segments.map((segment, index) => {
                const angle = 360 / segments.length;
                const rotate = index * angle;
                const wedgePath = `polygon(50% 50%, 100% 0, 100% 100%)`; // For simplicity, use styling not precise math here.

                return (
                  <div
                    key={index}
                    className="absolute w-full h-full origin-center"
                    style={{
                      transform: `rotate(${rotate}deg)`,
                      clipPath: "polygon(50% 50%, 100% 0, 100% 100%)",
                      backgroundColor: segment.color,
                      borderRadius: "50%"
                    }}
                  >
                    <div
                      className="absolute w-full h-full flex justify-center items-start pt-4"
                      style={{ transform: `rotate(${angle / 2}deg)` }}
                    >
                      <span className="text-white font-semibold text-sm tracking-wide drop-shadow-sm">
                        {segment.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Dot */}
            <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-orange-400 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

            {/* Pointer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-yellow-300 drop-shadow-lg"></div>
            </div>
          </div>

          {/* Spin Button */}
          <div className="text-center mt-6">
            <button
              onClick={handleSpin}
              disabled={isSpinning}
              className="px-8 py-3 rounded-lg font-bold text-lg text-white transition bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90 disabled:opacity-50"
            >
              {isSpinning ? "Spinning..." : "SPIN"}
            </button>
          </div>

          {/* Info Text */}
          <p className="text-center mt-4 text-white text-sm">
            Every spin gives you a shot at whitelist, more spins, or surprises!
          </p>

          {/* Logo */}
          <div className="absolute bottom-2 left-4">
            <div className="bg-black/60 text-white px-2 py-1 rounded text-xs">Chuffs</div>
          </div>

          {/* Status light */}
          <div className="absolute bottom-2 right-4 flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-white text-xs">SPIN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinWheel;
