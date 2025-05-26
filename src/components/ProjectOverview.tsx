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
            équipée des dernières technologies Istobal M'WASH3 + lave-tapis + services complémentaires.
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
              <p className="text-sm text-gray-600">Équipements Istobal Premium</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Services complets */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            Gamme de Services Complète
          </CardTitle>
          <CardDescription>M'WASH3 + Lave-tapis + 2 Pistes HP + Aire d'aspiration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* M'WASH3 */}
            <div className="space-y-4">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/136b8ef4-ce47-4957-b4e4-09238d691006.png" 
                  alt="Portique M'WASH3"
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-fuchsia-800 mb-3">Portique M'WASH3 Premium</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-800">Express - 8€</p>
                  <ul className="text-xs text-blue-700 mt-1 space-y-1">
                    <li>• Prélavage HP</li>
                    <li>• Lavage mousse</li>
                    <li>• Rinçage osmosé</li>
                    <li>• Séchage soufflerie</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-800">Confort - 12€</p>
                  <ul className="text-xs text-green-700 mt-1 space-y-1">
                    <li>• Prélavage HP</li>
                    <li>• Mousse premium</li>
                    <li>• Cire protection</li>
                    <li>• Séchage renforcé</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="font-semibold text-purple-800">Premium - 16€</p>
                  <ul className="text-xs text-purple-700 mt-1 space-y-1">
                    <li>• Prélavage décontaminant</li>
                    <li>• Mousse nacrée</li>
                    <li>• Cire longue durée</li>
                    <li>• Traitement jantes</li>
                  </ul>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-yellow-800">VIP Céramique - 24€</p>
                  <ul className="text-xs text-yellow-700 mt-1 space-y-1">
                    <li>• Protection céramique</li>
                    <li>• Polish diamond</li>
                    <li>• Nano-protection</li>
                    <li>• Séchage pro</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Lave-tapis + Services */}
            <div className="space-y-6">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/3f284cd4-a120-4372-8563-6dac6b1f81d3.png" 
                  alt="Lave-tapis automatique"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-fuchsia-800 mb-2">Lave-tapis Automatique</h4>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-bold text-green-800 text-lg">6€/tapis</p>
                  <p className="text-sm text-green-700">Service unique sur Leucate</p>
                  <p className="text-xs text-green-600">Capacité: 50 tapis/jour</p>
                </div>
              </div>
              
              <div className="text-center">
                <img 
                  src="/lovable-uploads/3f284cd4-a120-4372-8563-6dac6b1f81d3.png" 
                  alt="Pistes haute pression"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-fuchsia-800 mb-2">2 Pistes Haute Pression</h4>
                <div className="space-y-2">
                  <div className="p-2 bg-blue-50 rounded text-xs">
                    <p className="font-medium text-blue-800">Programmes variés 2-6€</p>
                    <p className="text-blue-600">Mousse, cire, rinçage, jantes</p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded text-xs">
                    <p className="font-medium text-purple-800">Capacité optimale</p>
                    <p className="text-purple-600">150 passages/jour possible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Aire d'aspiration complète */}
          <div className="mt-6">
            <h4 className="font-semibold text-center mb-4 text-fuchsia-800">Aire d'Aspiration Complète</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg">
                <img 
                  src="/lovable-uploads/6962fa8f-0603-40c2-ad9e-6faf280bca59.png" 
                  alt="Aspirateurs"
                  className="w-full h-20 object-cover rounded mb-2"
                />
                <h5 className="font-semibold text-cyan-800 mb-1">2 Aspirateurs</h5>
                <p className="text-sm text-cyan-700">Haute performance</p>
                <p className="text-xs text-cyan-600">1-2€ par utilisation</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
                <Car className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h5 className="font-semibold text-green-800 mb-1">Gonflage Pneus</h5>
                <p className="text-sm text-green-700">Station automatique</p>
                <p className="text-xs text-green-600">1€ par gonflage</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                <Wind className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h5 className="font-semibold text-blue-800 mb-1">Souffleur HP</h5>
                <p className="text-sm text-blue-700">Séchage complémentaire</p>
                <p className="text-xs text-blue-600">1€ par utilisation</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg">
                <Sparkles className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h5 className="font-semibold text-purple-800 mb-1">Parfumeur</h5>
                <p className="text-sm text-purple-700">4 parfums premium</p>
                <p className="text-xs text-purple-600">1€ par parfum</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Investissement révisé */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-500" />
            Investissement Total Révisé
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-orange-800">Détail des Coûts</h4>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium">Équipements Istobal clés en main</span>
                  <span className="font-bold text-orange-600">305 236€</span>
                </div>
                <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Couverture GS Industrie</span>
                  <span className="font-bold text-blue-600">65 000€</span>
                </div>
                <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Génie Civil</span>
                  <span className="font-bold text-green-600">150 000€</span>
                </div>
                <div className="flex justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">Cuves + Séparateur hydrocarbures</span>
                  <span className="font-bold text-purple-600">10 000€</span>
                </div>
                <div className="flex justify-between p-3 bg-pink-50 rounded-lg">
                  <span className="font-medium">Local technique</span>
                  <span className="font-bold text-pink-600">30 000€</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-800">Structure Financière</h4>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-800 mb-2">Investissement Total</p>
                  <p className="text-3xl font-bold text-green-900">560 236€</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-800">Apport Personnel</p>
                    <p className="text-xl font-bold text-blue-900">50 000€</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="font-medium text-purple-800">Garantie Nantissement</p>
                    <p className="text-xl font-bold text-purple-900">280 000€</p>
                    <p className="text-xs text-purple-600">(garantie, non déductible)</p>
                  </div>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-medium text-red-800">Prêt Nécessaire</p>
                  <p className="text-2xl font-bold text-red-900">510 236€</p>
                  <p className="text-sm text-red-600">Mensualité: 7 120€ sur 8 ans</p>
                </div>
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
                <p className="text-sm text-purple-700">Proximité immédiate des services : garage, cave à bières, restauration</p>
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
          <CardDescription>Technologie environnementale avancée Istobal</CardDescription>
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
                  <li>• Séparateur d'hydrocarbures automatique Istobal</li>
                  <li>• Traitement des eaux polluées par décantation</li>
                  <li>• Filtration multi-étapes des résidus</li>
                  <li>• Respect strict normes environnementales</li>
                  <li>• Évacuation sécurisée certifiée</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Économies d'Eau Exceptionnelles</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Recyclage de 85% de l'eau utilisée</li>
                  <li>• Système de filtration Istobal 4 étapes</li>
                  <li>• Réduction consommation de 70%</li>
                  <li>• Réutilisation optimisée pour prélavage</li>
                  <li>• Économies annuelles : 15 000€</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">Impact Environnemental Positif</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Réduction empreinte carbone -60%</li>
                  <li>• Produits 100% biodégradables</li>
                  <li>• Gestion responsable déchets</li>
                  <li>• Certification éco-responsable Istobal</li>
                  <li>• Conformité réglementaire totale</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plan Opérationnel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange-500" />
            Plan Opérationnel et Installation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-orange-800">Planning d'Exécution</h4>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="font-semibold text-orange-800">Phase 1 : Travaux VRD</p>
                  <p className="text-sm text-orange-700 mb-1"><strong>Durée :</strong> 3 mois</p>
                  <ul className="text-xs text-orange-600 space-y-1">
                    <li>• Terrassement et fondations</li>
                    <li>• Réseaux eau, électricité, évacuation</li>
                    <li>• Dalles béton et canalisations</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-800">Phase 2 : Équipements</p>
                  <p className="text-sm text-blue-700 mb-1"><strong>Durée :</strong> 1 mois et demi</p>
                  <ul className="text-xs text-blue-600 space-y-1">
                    <li>• Montage portiques automatiques</li>
                    <li>• Installation pistes haute pression</li>
                    <li>• Mise en place aire d'aspiration</li>
                    <li>• Tests et mise en service</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-800">Financement du Projet</h4>
              <div className="space-y-3">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-800 mb-2">Investissement Total</p>
                  <p className="text-2xl font-bold text-green-900">560 236€</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="font-medium text-blue-800">Apport Personnel</p>
                    <p className="text-lg font-semibold text-blue-900">50 000 €</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="font-medium text-purple-800">Nantissement</p>
                    <p className="text-lg font-semibold text-purple-900">280 000 €</p>
                    <p className="text-xs text-purple-700">Bien immobilier</p>
                  </div>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="font-medium text-orange-800">Financement Bancaire</p>
                  <p className="text-lg font-semibold text-orange-900">510 236 €</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Équipements Istobal avec maintenance */}
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
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Coûts d'Exploitation Optimisés</h4>
                <div className="space-y-2">
                  <p className="text-sm text-green-700"><strong>Maintenance mensuelle :</strong> 1 200€</p>
                  <p className="text-xs text-green-600">• Coûts réduits grâce à la technologie Istobal</p>
                  <p className="text-xs text-green-600">• Maintenance préventive incluse</p>
                  <p className="text-xs text-green-600">• Support technique 24h/24</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/7d11ad53-bd61-467a-8045-e276b622ab80.png" 
                alt="Équipements Istobal en action"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectOverview;
