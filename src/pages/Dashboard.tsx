import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8" style={{ background: 'linear-gradient(135deg, #2D1B2E 0%, #1A1A1A 100%)' }}>

      {/* Top left profile dp */}
      <div className="absolute top-8 left-8">
        <img 
          src="/lovable-uploads/040fe752-80fa-44cd-95b6-fc053e71628d.png" 
          alt="Profile"
          className="w-12 h-12 rounded-full cursor-pointer"
        />
      </div>

      {/* Top right disconnect button */}
      <div className="absolute top-8 right-8">
        <button 
          className="px-6 py-2 rounded-lg text-white font-semibold"
          style={{ backgroundColor: '#666666' }}
        >
          DISCONNECT
        </button>
      </div>

      <div className="flex gap-8 mt-16">
        {/* Left Profile Card */}
        <div 
          className="w-80 rounded-3xl p-6 text-black relative"
          style={{ backgroundColor: '#E6D7A3' }}
        >

          {/* Main profile display - enlarged */}
          <div className="bg-black rounded-2xl w-64 h-48 mx-auto mb-6 flex items-center justify-center">
            <img 
              src="/lovable-uploads/08b05b65-b315-4408-b5b6-43d1614b3a37.png" 
              alt="Profile Display"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Wallet Info - centered */}
          <div className="space-y-2 mb-6 text-center">
            <div>
              <span className="font-semibold">Wallet: </span>
              <span className="font-mono">0xEdgh...200</span>
            </div>
            <div>
              <span className="font-semibold">Username: </span>
              <span>Fizzo</span>
            </div>
          </div>

          {/* Settings icon - bottom right */}
          <div className="absolute bottom-4 right-4">
            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer">
              <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Navigation Grid */}
        <div className="flex-1 space-y-6">
          {/* Badges Section */}
          <div 
            className="rounded-3xl p-6"
            style={{ backgroundColor: '#E6D7A3' }}
          >
            <h2 className="text-2xl font-bold text-black mb-6">BADGES</h2>
            <div className="grid grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-2 mx-auto transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="w-12 h-12 bg-black rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-black">MEMBERSHIP</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-2 mx-auto transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="w-12 h-12 bg-black rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-black">SPIN WHEELS</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-2 mx-auto transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="w-12 h-12 bg-black rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-black">COLLECTIBLES</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-2 mx-auto transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="w-12 h-12 bg-black rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-black">HOLDER</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Characters Section */}
            <div 
              className="rounded-3xl cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg overflow-hidden relative"
              onClick={() => navigate('/characters')}
            >
              <img 
                src="/lovable-uploads/5ee87b37-6f04-45cb-a72b-3f576fe71651.png" 
                alt="Characters"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <span className="text-white font-bold text-lg drop-shadow-lg">CHARACTERS</span>
              </div>
            </div>

            {/* Spin Wheel Section */}
            <div 
              className="rounded-3xl cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg overflow-hidden relative"
              onClick={() => navigate('/spin-wheel')}
            >
              <img 
                src="/lovable-uploads/f45b7c2c-72f5-4a2b-a47e-e8929562e146.png" 
                alt="Spin Wheel"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <span className="text-white font-bold text-lg drop-shadow-lg">SPIN WHEEL</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Collectibles Section */}
            <div 
              className="rounded-3xl cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg overflow-hidden relative"
              onClick={() => navigate('/collectibles')}
            >
              <img 
                src="/lovable-uploads/b55cd3cc-c2a2-4154-befe-9c7d5d039fe5.png" 
                alt="Collectibles"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <span className="text-white font-bold text-lg drop-shadow-lg">COLLECTIBLES</span>
              </div>
            </div>

            {/* Quest Section */}
            <div 
              className="rounded-3xl cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg overflow-hidden relative"
              onClick={() => navigate('/quest')}
            >
              <img 
                src="/lovable-uploads/18e459c9-2759-4ff4-8be4-7037fe7bb08b.png" 
                alt="Quest"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <span className="text-white font-bold text-lg drop-shadow-lg">QUEST</span>
              </div>
            </div>
          </div>

          {/* Socials Section */}
          <div 
            className="rounded-3xl p-4"
            style={{ backgroundColor: '#E6D7A3' }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-black">SOCIALS</h2>
              <div className="flex space-x-4">
                <img 
                  src="/lovable-uploads/040fe752-80fa-44cd-95b6-fc053e71628d.png" 
                  alt="Social Icon"
                  className="w-8 h-8 cursor-pointer"
                />
                <div className="w-8 h-8 bg-teal-400 rounded-full cursor-pointer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;