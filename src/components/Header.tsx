
import { Car, Droplets, Sun } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-white via-fuchsia-50 to-pink-50 shadow-lg border-b-4 border-gradient-to-r from-fuchsia-500 to-pink-500">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Car className="h-12 w-12 text-fuchsia-600" />
              <Droplets className="h-6 w-6 text-fuchsia-400 absolute -top-1 -right-1" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">LEUCWASH</h2>
              <p className="text-sm text-gray-600">Station Écoresponsable</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-50 to-fuchsia-50 px-3 py-2 rounded-lg border border-fuchsia-200">
              <Sun className="h-5 w-5 text-yellow-500" />
              <span>Énergie Solaire</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-fuchsia-50 px-3 py-2 rounded-lg border border-fuchsia-200">
              <Droplets className="h-5 w-5 text-blue-500" />
              <span>Recyclage d'Eau</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
