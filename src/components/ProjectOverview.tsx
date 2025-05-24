
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

      {/* Services avec détails complets */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            Gamme de Services Premium
          </CardTitle>
          <CardDescription>Solutions complètes de lavage automobile haute technologie</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-full lg:col-span-2">
              <div className="text-center mb-4">
                <img 
                  src="/lovable-uploads/136b8ef4-ce47-4957-b4e4-09238d691006.png" 
                  alt="Portiques Istobal automatiques"
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-fuchsia-800 mb-3">Portiques Automatiques Premium</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-800">Programme Express - 8€</p>
                    <ul className="text-xs text-blue-700 mt-1 space-y-1">
                      <li>• Prélavage haute pression</li>
                      <li>• Lavage shampoing actif</li>
                      <li>• Rinçage osmosé</li>
                      <li>• Séchage soufflerie</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="font-semibold text-green-800">Programme Confort - 12€</p>
                    <ul className="text-xs text-green-700 mt-1 space-y-1">
                      <li>• Prélavage haute pression</li>
                      <li>• Lavage shampoing premium</li>
                      <li>• Rinçage cire protectrice</li>
                      <li>• Rinçage osmosé</li>
                      <li>• Séchage soufflerie renforcé</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="font-semibold text-purple-800">Programme Premium - 16€</p>
                    <ul className="text-xs text-purple-700 mt-1 space-y-1">
                      <li>• Prélavage décontaminant</li>
                      <li>• Lavage shampoing nacrée</li>
                      <li>• Cire protection longue durée</li>
                      <li>• Traitement jantes spécifique</li>
                      <li>• Rinçage osmosé brillance</li>
                      <li>• Séchage soufflerie premium</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="font-semibold text-orange-800">Programme Luxe - 18€</p>
                    <ul className="text-xs text-orange-700 mt-1 space-y-1">
                      <li>• Prélavage décontaminant renforcé</li>
                      <li>• Lavage shampoing triple action</li>
                      <li>• Cire protection céramique</li>
                      <li>• Traitement jantes premium</li>
                      <li>• Polish anti-traces</li>
                      <li>• Rinçage osmosé ultra-pur</li>
                      <li>• Séchage soufflerie haute performance</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-300">
                    <p className="font-semibold text-yellow-800">Programme VIP Céramique - 24€</p>
                    <ul className="text-xs text-yellow-700 mt-1 space-y-1">
                      <li>• Prélavage décontaminant professionnel</li>
                      <li>• Lavage shampoing haute technologie</li>
                      <li>• Finition céramique nano-protection</li>
                      <li>• Traitement jantes céramique</li>
                      <li>• Polish diamond brillance</li>
                      <li>• Protection longue durée 6 mois</li>
                      <li>• Rinçage osmosé ultra-pur</li>
                      <li>• Séchage soufflerie professionnelle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/3f284cd4-a120-4372-8563-6dac6b1f81d3.png" 
                  alt="Pistes haute pression"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-fuchsia-800 mb-2">2 Pistes Haute Pression</h4>
                <div className="text-xs text-gray-600 space-y-2 text-left">
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="font-medium text-blue-800">Canon à mousse actif</p>
                    <p>Mousse décontaminante haute adhérence pour prélavage optimal</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded">
                    <p className="font-medium text-green-800">Produit jantes spécialisé</p>
                    <p>Dégraissant professionnel anti-pollution de freinage</p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded">
                    <p className="font-medium text-purple-800">Multi-programmes</p>
                    <p>Rinçage, shampoing, cire, dégraissant moteur</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <img 
                  src="/lovable-uploads/6defc244-9937-498d-b2b2-93899b7c265a.png" 
                  alt="Aspiration Istobal"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-fuchsia-800 mb-2">8 Pistes d'Aspiration</h4>
                <div className="text-xs text-gray-600 space-y-1 text-left">
                  <p>• Aspirateurs haute performance Istobal</p>
                  <p>• Puissance d'aspiration professionnelle</p>
                  <p>• Embouts spécialisés sièges et tapis</p>
                  <p>• Système anti-colmatage</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
              <Car className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-green-800 mb-2">Gonflage Pneus</h4>
              <p className="text-sm text-green-700">Station de gonflage automatique avec manomètre digital</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
              <Wind className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800 mb-2">Souffleur</h4>
              <p className="text-sm text-blue-700">Soufflerie haute pression pour séchage complémentaire</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg">
              <Sparkles className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold text-purple-800 mb-2">Parfumeur d'Habitacle</h4>
              <p className="text-sm text-purple-700">Gamme de parfums premium pour habitacle</p>
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

      {/* Système de Recyclage Écologique */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            Système de Recyclage Écoresponsable
          </CardTitle>
          <CardDescription>Technologie environnementale avancée</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src="/lovable-uploads/d344d3ba-eb87-47b8-91a4-84e43e8958d9.png" 
                alt="Système de recyclage Istobal"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Récupération des Hydrocarbures</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Séparateur d'hydrocarbures automatique</li>
                  <li>• Traitement des eaux polluées</li>
                  <li>• Respect normes environnementales</li>
                  <li>• Évacuation sécurisée des résidus</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Économies d'Eau</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Recyclage de 80% de l'eau utilisée</li>
                  <li>• Système de filtration multi-étapes</li>
                  <li>• Réduction de la consommation de 60%</li>
                  <li>• Réutilisation pour prélavage</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">Impact Environnemental</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Réduction empreinte carbone</li>
                  <li>• Produits biodégradables</li>
                  <li>• Gestion responsable des déchets</li>
                  <li>• Certification éco-responsable</li>
                </ul>
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
                <p className="text-sm text-orange-700"><strong>Validation :</strong> Projet approuvé à l'ordre du jour</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectOverview;
