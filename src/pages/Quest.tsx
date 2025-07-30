import { useNavigate } from "react-router-dom";

const Quest = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/lovable-uploads/873d80b4-8b98-48ff-89fa-95087a83eb63.png')" }}
    >
      {/* Top left profile icon */}
      <div className="absolute top-8 left-8">
        <button 
          onClick={() => navigate('/')}
          className="cursor-pointer"
        >
          <img 
            src="/lovable-uploads/040fe752-80fa-44cd-95b6-fc053e71628d.png" 
            alt="Back to Dashboard"
            className="w-12 h-12"
          />
        </button>
      </div>

      {/* Quest Content - Centered */}
      <div className="min-h-screen flex items-center justify-center">
        <div 
          className="rounded-3xl p-8 max-w-md w-full mx-4"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
        >
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm">
              <span className="text-black font-bold text-lg">FOLLOW CHUFFS</span>
              <button className="bg-black text-white px-6 py-2 rounded-full font-bold">
                DONE
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm">
              <span className="text-black font-bold text-lg">FOLLOW FOUNDER</span>
              <button className="bg-black text-white px-6 py-2 rounded-full font-bold">
                DONE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quest;