
import { Car, Droplets, Sun } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b-4 border-gradient-to-r from-blue-500 to-green-500">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Car className="h-12 w-12 text-blue-600" />
              <Droplets className="h-6 w-6 text-blue-400 absolute -top-1 -right-1" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">LEUCWASH</h2>
              <p className="text-sm text-gray-600">Station Écoresponsable</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Sun className="h-5 w-5 text-yellow-500" />
              <span>Énergie Solaire</span>
            </div>
            <div className="flex items-center space-x-2">
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
