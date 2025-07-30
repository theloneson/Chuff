import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SpinWheel = () => {
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const segments = [
    { label: "WL", color: "#00BFFF", probability: 5 }, // Light Blue - 5%
    { label: "Try Again", color: "#FF4444", probability: 40 }, // Red - 40%
    { label: "1x Spin", color: "#8A2BE2", probability: 15 }, // Purple - 15%
    { label: "Try Again", color: "#FF69B4", probability: 40 } // Pink - 40%
  ];

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    
    // Probability-based outcome selection
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
    
    // Calculate rotation to land on selected segment
    const segmentAngle = 360 / segments.length;
    const targetAngle = selectedSegment * segmentAngle + (segmentAngle / 2);
    const randomSpins = 3 + Math.random() * 2; // 3-5 full rotations
    const finalRotation = (randomSpins * 360) + (360 - targetAngle);
    
    setRotation(prev => prev + finalRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
    }, 4000);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/lovable-uploads/afd3f9ce-a0e3-421c-8795-6f3995afad03.png')" }}
    >
      {/* Back button */}
      <div className="absolute top-8 left-8">
        <button 
          onClick={() => navigate('/')}
          className="text-white text-sm underline hover:text-gray-300"
        >
          Back to Dashboard
        </button>
      </div>

      {/* Top right connect wallet button */}
      <div className="absolute top-6 right-6">
        <button 
          className="px-4 py-2 rounded text-white text-sm"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        >
          Connect Wallet
        </button>
      </div>

      {/* Title */}
      <div className="text-center pt-16 mb-8">
        <h1 className="text-6xl font-bold text-white mb-4">Spin to Win</h1>
        <p className="text-white text-lg">
          Try your luck and win amazing rewards including<br />
          whitelist spots!
        </p>
      </div>

      {/* Main Content Container */}
      <div className="flex justify-center items-center">
        {/* Left Character */}
        <div className="absolute left-32 top-1/2 transform -translate-y-1/2">
          <div className="w-24 h-32 flex items-center justify-center">
            <div className="w-16 h-20 bg-yellow-400 rounded-lg"></div>
          </div>
        </div>

        {/* Right Character */}
        <div className="absolute right-32 top-1/2 transform -translate-y-1/2">
          <div className="w-24 h-32 flex items-center justify-center">
            <div className="w-16 h-20 bg-teal-400 rounded-lg"></div>
          </div>
        </div>


        {/* Wheel Container */}
        <div 
          className="relative rounded-3xl p-8"
          style={{ backgroundColor: 'rgba(120, 120, 120, 0.8)' }}
        >
          <div className="relative w-80 h-80 mx-auto">
            {/* Wheel */}
            <div 
              className="relative w-full h-full rounded-full border-4 border-white transition-transform duration-[4000ms] ease-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {segments.map((segment, index) => (
                <div
                  key={index}
                  className="absolute w-full h-full flex items-center justify-center text-white font-bold text-lg"
                  style={{
                    backgroundColor: segment.color,
                    clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((index * 90 - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((index * 90 - 90) * Math.PI / 180)}%, ${50 + 50 * Math.cos(((index + 1) * 90 - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin(((index + 1) * 90 - 90) * Math.PI / 180)}%)`
                  }}
                >
                  <span 
                    className="absolute font-bold text-sm"
                    style={{ 
                      transform: `rotate(${index * 90 + 45}deg)`,
                      top: '25%',
                      left: '50%',
                      transformOrigin: '0 150%'
                    }}
                  >
                    {segment.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-400 rounded-full border-2 border-white"></div>
            
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-3 border-r-3 border-b-6 border-l-transparent border-r-transparent border-b-white z-10"></div>
          </div>

          {/* Spin Button */}
          <div className="text-center mt-6">
            <button 
              onClick={handleSpin}
              disabled={isSpinning}
              className="px-8 py-3 rounded-lg font-bold text-lg text-white"
              style={{ backgroundColor: isSpinning ? '#666666' : '#333333' }}
            >
              SPIN
            </button>
          </div>

          {/* Bottom text */}
          <div className="text-center mt-4">
            <p className="text-white text-sm">
              Each spin gives you a chance to win whitelist spots, extra<br />
              spins, or other exciting rewards!
            </p>
          </div>

          {/* Chuffs logo */}
          <div className="absolute bottom-2 left-4">
            <div className="bg-brown-600 text-white px-2 py-1 rounded text-xs">
              Chuffs
            </div>
          </div>

          {/* Spin indicator */}
          <div className="absolute bottom-2 right-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-white text-xs">SPIN</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SpinWheel;