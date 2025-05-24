
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, Wrench, Droplets, Sparkles, Wind, Car } from "lucide-react";

const ProjectOverview = () => {
  return (
    <div className="grid gap-6">
      {/* Hero Section avec image */}
      <Card className="overflow-hidden">
        <div className="relative h-64 bg-gradient-to-r from-fuchsia-600 to-pink-600">
          <img 
            src="/lovable-uploads/c39bfbcf-ee5d-4012-9572-585f1c5f01d0.png" 
            alt="Portique Istobal en action"
            className="w-full h-full object-cover opacity-30"
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

      {/* Services avec images réelles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            Gamme de Services
          </CardTitle>
          <CardDescription>Solutions complètes de lavage automobile</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <img 
                src="/lovable-uploads/136b8ef4-ce47-4957-b4e4-09238d691006.png" 
                alt="Portiques Istobal automatiques"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 className="font-semibold text-fuchsia-800 mb-2">Portiques Automatiques</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <p>• Programme Express (5€)</p>
                <p>• Programme Confort (8€)</p>
                <p>• Programme Premium (12€)</p>
                <p>• Programme Luxe (15€)</p>
                <p>• Programme VIP (20€)</p>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/3f284cd4-a120-4372-8563-6dac6b1f81d3.png" 
                alt="Pistes haute pression"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 className="font-semibold text-fuchsia-800 mb-2">Pistes Haute Pression</h4>
              <p className="text-sm text-gray-600">4 pistes de lavage self-service</p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-3 flex items-center justify-center">
                <Wind className="h-12 w-12 text-blue-600" />
              </div>
              <h4 className="font-semibold text-fuchsia-800 mb-2">Aspiration</h4>
              <p className="text-sm text-gray-600">2 pistes d'aspiration haute performance</p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-3 flex items-center justify-center">
                <Car className="h-12 w-12 text-green-600" />
              </div>
              <h4 className="font-semibold text-fuchsia-800 mb-2">Services Complémentaires</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <p>• Gonflage des pneus</p>
                <p>• Souffleur</p>
                <p>• Parfumeur d'habitacle</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Localisation stratégique */}
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
                <p className="text-sm text-blue-700">Accès très facile pour la clientèle locale et touristique depuis la D627</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Environnement</h4>
                <p className="text-sm text-purple-700">Proximité immédiate des services : garage, fitness, restauration</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Équipements Istobal avec images réelles */}
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
                  <span>Portiques automatiques avec détection véhicule intelligente</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Système de paiement sans contact intégré</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Éclairage LED spectaculaire pour une expérience premium</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/lovable-uploads/7d11ad53-bd61-467a-8045-e276b622ab80.png" 
                alt="Équipements Istobal en action"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-2">Planning d'Installation</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-orange-700 mb-1"><strong>Génie civil :</strong> 3 mois</p>
                <p className="text-sm text-orange-700 mb-1"><strong>Installation équipements :</strong> 1 mois et demi</p>
                <p className="text-sm text-orange-700"><strong>Maintenance :</strong> Coûts réduits grâce à la technologie Istobal</p>
              </div>
              <div>
                <p className="text-sm text-orange-700 mb-1"><strong>Support technique :</strong> Formation incluse</p>
                <p className="text-sm text-orange-700 mb-1"><strong>Garantie :</strong> Équipements dernière génération</p>
                <p className="text-sm text-orange-700"><strong>Validation :</strong> Projet à l'ordre du jour de la mairie de Leucate</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectOverview;
