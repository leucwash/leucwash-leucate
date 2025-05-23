
import { Car, Droplets } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-fuchsia-600 via-pink-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-full">
              <Car className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">LEUCWASH</h1>
              <p className="text-sm opacity-90">Station Écoresponsable</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4" />
              <span className="text-sm">Technologies Istobal</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">Leucate, Aude</p>
              <p className="text-xs opacity-90">Zone Artisanale D627</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-32 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&h=200&fit=crop" 
          alt="Paysage de Leucate"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/30 to-transparent"></div>
      </div>
    </header>
  );
};

export default Header;
