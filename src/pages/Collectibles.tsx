import { useNavigate } from "react-router-dom";

const Collectibles = () => {
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

      {/* Collectibles Display - Centered */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <img 
            src="/lovable-uploads/b55cd3cc-c2a2-4154-befe-9c7d5d039fe5.png" 
            alt="Collectibles Collection"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Collectibles;