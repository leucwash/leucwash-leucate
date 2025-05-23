
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Wrench, Droplets, Sparkles } from "lucide-react";

const ProjectOverview = () => {
  return (
    <div className="grid gap-6">
      {/* Hero Section avec image */}
      <Card className="overflow-hidden">
        <div className="relative h-64 bg-gradient-to-r from-fuchsia-600 to-pink-600">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=400&fit=crop" 
            alt="Station de lavage moderne"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-2">LEUCWASH</h2>
              <p className="text-xl">Station de Lavage Automobile Écoresponsable</p>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-gray-600 mb-4">
            Projet d'implantation d'une station de lavage automobile moderne et écoresponsable à Leucate, 
            équipée des dernières technologies Istobal pour offrir un service de qualité premium.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-fuchsia-50 rounded-lg">
              <MapPin className="h-8 w-8 text-fuchsia-600 mx-auto mb-2" />
              <p className="font-semibold">Localisation</p>
              <p className="text-sm text-gray-600">Zone artisanale, Leucate</p>
            </div>
            <div className="text-center p-4 bg-pink-50 rounded-lg">
              <Users className="h-8 w-8 text-pink-600 mx-auto mb-2" />
              <p className="font-semibold">Marché cible</p>
              <p className="text-sm text-gray-600">80 000 personnes en été</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Sparkles className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="font-semibold">Technologie</p>
              <p className="text-sm text-gray-600">Équipements Istobal</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Services avec images */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            Gamme de Services
          </CardTitle>
          <CardDescription>Solutions complètes de lavage automobile</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&h=200&fit=crop" 
                alt="Portiques de lavage"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 className="font-semibold text-fuchsia-800 mb-2">Portiques Automatiques</h4>
              <p className="text-sm text-gray-600">2 portiques Istobal dernière génération</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=300&h=200&fit=crop" 
                alt="Pistes haute pression"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 className="font-semibold text-fuchsia-800 mb-2">Pistes Haute Pression</h4>
              <p className="text-sm text-gray-600">4 pistes de lavage self-service</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=300&h=200&fit=crop" 
                alt="Aspiration"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 className="font-semibold text-fuchsia-800 mb-2">Aspiration</h4>
              <p className="text-sm text-gray-600">8 pistes d'aspiration haute performance</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Localisation avec image */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-green-500" />
            Localisation Stratégique
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&h=300&fit=crop" 
                alt="Vue aérienne de Leucate"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Zone Artisanale</h4>
                <p className="text-sm text-green-700">Emplacement stratégique au rond-point central avec accès direct depuis la D627</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Accessibilité</h4>
                <p className="text-sm text-blue-700">Visibilité maximale et facilité d'accès pour la clientèle locale et touristique</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Environnement</h4>
                <p className="text-sm text-purple-700">Proximité immédiate des services : garage, fitness, restauration</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Équipements Istobal avec images */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-orange-500" />
            Équipements Istobal Premium
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-orange-800">Technologies Avancées</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Système de lavage écoresponsable avec recyclage d'eau</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Portiques automatiques avec détection véhicule</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Système de paiement sans contact intégré</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Produits Istobal : shampoings et cires premium (100-150€/bidon)</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&h=300&fit=crop" 
                alt="Équipements de lavage modernes"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-2">Planning d'Installation</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-orange-700 mb-1"><strong>Durée de montage :</strong> 1 mois et demi</p>
                <p className="text-sm text-orange-700"><strong>Maintenance :</strong> 1 bidon shampoing + 1 bidon cire/mois (fonctionnement optimal)</p>
              </div>
              <div>
                <p className="text-sm text-orange-700 mb-1"><strong>Support technique :</strong> Formation incluse</p>
                <p className="text-sm text-orange-700"><strong>Garantie :</strong> Équipements dernière génération</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectOverview;
