
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Target, MapPin, Calendar, Building2, ShoppingCart } from "lucide-react";

const MarketStudy = () => {
  const demographicData = [
    { period: "Hiver", residents: 5300, tourists: 2500, total: 7800 },
    { period: "Printemps", residents: 5300, tourists: 15000, total: 20300 },
    { period: "Été", residents: 5300, tourists: 74700, total: 80000 },
    { period: "Automne", residents: 5300, tourists: 8000, total: 13300 }
  ];

  const competitionData = [
    { name: "Station Port Leucate", distance: "15 km", type: "1 portique basique fermé par arrêté" },
    { name: "Stations Narbonne", distance: "25 km", type: "Plusieurs stations éloignées" },
    { name: "Leucwash (1 portique)", distance: "0 km", type: "Technologie Istobal moderne" }
  ];

  const marketPotential = [
    { segment: "Résidents permanents", value: 30, color: "#3B82F6" },
    { segment: "Touristes été", value: 35, color: "#10B981" },
    { segment: "Professionnels locaux", value: 20, color: "#F59E0B" },
    { segment: "Touristes intersaison", value: 10, color: "#8B5CF6" },
    { segment: "Passage D627", value: 5, color: "#EF4444" }
  ];

  // Analyse de fréquentation D627
  const d627TrafficAnalysis = {
    dailyTraffic: 8500,
    touristPeak: 15000,
    yearlyTraffic: 3100000,
    conversionRate: 0.08, // 8% de conversion très conservateur
    averageTicket: 12.50
  };

  // Zone artisanale businesses
  const zoneArtisanaleBusinesses = [
    { category: "Automobile", business: "Garage de l'Étang", icon: "🔧", potential: "200 clients/mois" },
    { category: "Automobile", business: "Garage IRAL Automobiles", icon: "🔧", potential: "150 clients/mois" },
    { category: "Nautisme", business: "Leucate Voilerie", icon: "⛵", potential: "80 clients/mois" },
    { category: "Sports nautiques", business: "Sea Clone Boards", icon: "🏄‍♂️", potential: "100 clients/mois" },
    { category: "Location", business: "Location Windsurf", icon: "🏄‍♀️", potential: "120 clients/mois" },
    { category: "Brasserie", business: "Brasserie Artisanale", icon: "🍺", potential: "60 clients/mois" }
  ];

  // Calculs réalistes basés sur 1 portique
  const realisticProjections = {
    dailyWashes: {
      winter: 28, // Très conservateur
      spring: 45,
      summer: 85, // Pic été avec 1 portique
      autumn: 35
    },
    averageTicket: 12.50,
    selfServiceRevenue: 2800, // Revenus pistes self + aspirateurs
    monthlyCapacity: 2600 // 1 portique = 86 lavages/jour max
  };

  return (
    <div className="grid gap-6">
      {/* ANALYSE RÉALISTE FRÉQUENTATION D627 */}
      <Card className="border-l-4 border-l-red-500 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-800">
            <Target className="h-5 w-5 text-red-500" />
            ANALYSE RÉALISTE - Fréquentation D627 et Chalandise
          </CardTitle>
          <CardDescription className="text-red-700">Données traffic réelles et projections conservatrices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-3">Traffic D627 - Données Réelles</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Traffic quotidien moyen</span>
                  <span className="font-bold text-red-700">8 500 véhicules</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Pic touristique été</span>
                  <span className="font-bold text-red-700">15 000 véhicules</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Traffic annuel total</span>
                  <span className="font-bold text-red-700">3,1 millions</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-sm font-medium">Taux conversion réaliste</span>
                  <span className="font-bold text-orange-600">0,08%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Clients potentiels/jour</span>
                  <span className="font-bold text-blue-600">7-12 lavages</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-3">Contraintes Réelles 1 Portique</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Capacité max/jour</span>
                  <span className="font-bold text-orange-700">86 lavages</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Réaliste hiver</span>
                  <span className="font-bold text-blue-600">28 lavages/jour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Réaliste été</span>
                  <span className="font-bold text-green-600">85 lavages/jour</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-sm font-medium">CA moyen jour été</span>
                  <span className="font-bold text-green-800">1 062€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">CA moyen jour hiver</span>
                  <span className="font-bold text-blue-800">350€</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-orange-100 rounded-lg border border-orange-300">
            <h4 className="font-semibold text-orange-800 mb-2">⚠️ RÉALITÉ DU MARCHÉ - 1 PORTIQUE</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-orange-700 mb-1">Avantages</h5>
                <ul className="text-sm text-orange-600 space-y-1">
                  <li>• Monopole local sur technologie moderne</li>
                  <li>• Position stratégique rond-point D627</li>
                  <li>• Clientèle captive zone artisanale</li>
                  <li>• Investissement maîtrisé et viable</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-orange-700 mb-1">Limites</h5>
                <ul className="text-sm text-orange-600 space-y-1">
                  <li>• Capacité limitée aux heures de pointe</li>
                  <li>• Dépendance saisonnalité touristique</li>
                  <li>• Concurrence future possible</li>
                  <li>• Croissance limitée par 1 seul portique</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ANALYSE DÉMOGRAPHIQUE */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-500" />
            Analyse Démographique Leucate
          </CardTitle>
          <CardDescription>Population et saisonnalité - Impact sur 1 portique</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demographicData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="residents" stackId="a" fill="#3B82F6" name="Résidents" />
                <Bar dataKey="tourists" stackId="a" fill="#10B981" name="Touristes" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Base Clientèle Permanente</h4>
              <p className="text-sm text-blue-700">5 300 habitants toute l'année. Avec 1 portique, objectif réaliste : 15-20% de pénétration soit 800-1060 clients réguliers.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Potentiel Touristique</h4>
              <p className="text-sm text-green-700">Pic été 74 700 touristes. Avec 1 portique, saturation possible aux heures de pointe. Nécessité d'optimiser les créneaux.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ENVIRONNEMENT COMMERCIAL - ZONE ARTISANALE */}
      <Card className="border-l-4 border-l-fuchsia-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-fuchsia-500" />
            Zone Artisanale - Clientèle Professionnelle
          </CardTitle>
          <CardDescription>Analyse du potentiel B2B et synergie commerciale</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-fuchsia-800">Entreprises Partenaires Potentielles</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {zoneArtisanaleBusinesses.map((business, index) => (
                  <div key={index} className="p-3 bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded-lg border border-fuchsia-200">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{business.icon}</span>
                        <span className="text-xs font-medium text-fuchsia-700">{business.category}</span>
                      </div>
                      <span className="text-xs text-green-600 font-medium">{business.potential}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800">{business.business}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-fuchsia-100 to-pink-100 rounded-lg border border-fuchsia-300">
              <h4 className="font-semibold text-fuchsia-800 mb-2">Stratégie B2B Optimisée pour 1 Portique</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-fuchsia-700 mb-1">Partenariats Prioritaires</h5>
                  <ul className="text-sm text-fuchsia-600 space-y-1">
                    <li>• <strong>2 Garages locaux</strong> - Forfaits clientèle (350 lavages/mois)</li>
                    <li>• <strong>Activités nautiques</strong> - Nettoyage véhicules salés (200/mois)</li>
                    <li>• <strong>Entreprises zone</strong> - Contrats flotte (100/mois)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-fuchsia-700 mb-1">Revenus B2B Potentiels</h5>
                  <ul className="text-sm text-fuchsia-600 space-y-1">
                    <li>• <strong>650 lavages/mois garantis</strong> à 10€ = 6 500€</li>
                    <li>• <strong>Régularité toute l'année</strong> (contre-saisonnalité)</li>
                    <li>• <strong>Optimisation planning</strong> (créneaux heures creuses)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* POTENTIEL DE MARCHÉ RÉAJUSTÉ */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-500" />
            Potentiel de Marché - Configuration 1 Portique
          </CardTitle>
          <CardDescription>Répartition réaliste du chiffre d'affaires</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={marketPotential}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${value}%`}
                  >
                    {marketPotential.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {marketPotential.map((segment, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded" 
                    style={{ backgroundColor: segment.color }}
                  ></div>
                  <div className="flex-1">
                    <p className="font-medium">{segment.segment}</p>
                    <p className="text-sm text-gray-600">{segment.value}% du CA potentiel</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">Justification Répartition (1 Portique)</h4>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• <strong>Résidents (30%) :</strong> Base fidèle prioritaire avec 1 portique</li>
              <li>• <strong>Touristes été (35%) :</strong> Pic saisonnier mais capacité limitée</li>
              <li>• <strong>Professionnels (20%) :</strong> Partenariats B2B essentiels</li>
              <li>• <strong>Intersaison (10%) :</strong> Maintien activité hors pic</li>
              <li>• <strong>Transit D627 (5%) :</strong> Opportuniste selon disponibilité</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* ANALYSE CONCURRENTIELLE */}
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-orange-500" />
            Analyse Concurrentielle
          </CardTitle>
          <CardDescription>Position concurrentielle avec 1 portique moderne</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {competitionData.map((competitor, index) => (
              <div key={index} className={`p-4 rounded-lg border ${index === 2 ? 'bg-orange-50 border-orange-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold">{competitor.name}</h4>
                    <p className="text-sm text-gray-600">{competitor.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{competitor.distance}</p>
                    <p className="text-xs text-gray-500">de distance</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Avantages Concurrentiels (1 Portique)</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• <strong>Monopole technologique local :</strong> Seul portique moderne opérationnel</li>
              <li>• <strong>Position géographique unique :</strong> Rond-point central D627</li>
              <li>• <strong>Technologie Istobal premium :</strong> 5 programmes + éclairage LED</li>
              <li>• <strong>Services complémentaires :</strong> Self + aspirateurs + produits</li>
              <li>• <strong>Approche écoresponsable :</strong> Recyclage eau + récupération hydrocarbures</li>
              <li>• <strong>Investissement maîtrisé :</strong> Risque financier limité</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* PROJECTIONS RÉALISTES */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-green-500" />
            Projections de Fréquentation Réalistes
          </CardTitle>
          <CardDescription>Basées sur capacité 1 portique et données secteur</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-800">Fréquentation Quotidienne</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Hiver (Dec-Fév)</span>
                    <span className="font-bold text-blue-600">28 lavages/jour</span>
                  </div>
                  <p className="text-xs text-blue-600 mt-1">CA quotidien : 350€</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Printemps (Mar-Mai)</span>
                    <span className="font-bold text-yellow-600">45 lavages/jour</span>
                  </div>
                  <p className="text-xs text-yellow-600 mt-1">CA quotidien : 562€</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Été (Jun-Sep)</span>
                    <span className="font-bold text-green-600">85 lavages/jour</span>
                  </div>
                  <p className="text-xs text-green-600 mt-1">CA quotidien : 1 062€</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Automne (Oct-Nov)</span>
                    <span className="font-bold text-orange-600">35 lavages/jour</span>
                  </div>
                  <p className="text-xs text-orange-600 mt-1">CA quotidien : 437€</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-purple-800">Revenus Complémentaires</h4>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium text-purple-800">Self-service (2 pistes)</p>
                  <p className="text-sm text-purple-700">1 400€/mois moyenne</p>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="font-medium text-pink-800">Aspirateurs (2 unités)</p>
                  <p className="text-sm text-pink-700">800€/mois moyenne</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="font-medium text-indigo-800">Produits/Accessoires</p>
                  <p className="text-sm text-indigo-700">600€/mois moyenne</p>
                </div>
                <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                  <p className="font-medium text-cyan-800">Total Complémentaire</p>
                  <p className="text-sm text-cyan-700 font-bold">2 800€/mois</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* STRATÉGIE MARKETING ADAPTÉE */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-blue-500" />
            Stratégie Marketing - 1 Portique
          </CardTitle>
          <CardDescription>Communication ciblée et efficace</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-800">Communication Prioritaire</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-800">Signalétique D627 (5 000€)</p>
                  <ul className="text-xs text-blue-700 mt-1 space-y-1">
                    <li>• Panneau visible depuis la route</li>
                    <li>• Éclairage LED attractif</li>
                    <li>• Indication services et tarifs</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-800">Partenariats B2B (2 000€)</p>
                  <ul className="text-xs text-green-700 mt-1 space-y-1">
                    <li>• Accords garages locaux</li>
                    <li>• Forfaits entreprises zone</li>
                    <li>• Tarifs préférentiels résidents</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-800">Digital Ciblé</h4>
              <div className="space-y-2">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium text-purple-800">Google Ads Local (1 500€)</p>
                  <p className="text-sm text-purple-700">Géolocalisation Leucate + communes proches</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium text-orange-800">Réseaux Sociaux (1 000€)</p>
                  <p className="text-sm text-orange-700">Facebook/Instagram communauté locale</p>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                  <p className="font-medium text-pink-800">Budget Total Marketing</p>
                  <p className="text-sm text-pink-700 font-bold">9 500€ la 1ère année</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CONCLUSION RÉALISTE */}
      <Card className="border-l-4 border-l-gray-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gray-500" />
            Conclusion - Étude de Marché 1 Portique
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-gradient-to-r from-gray-100 to-blue-100 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">📊 SYNTHÈSE RÉALISTE</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-700 mb-1">Points Forts</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Monopole technologique confirmé</strong></li>
                  <li>• <strong>Position géographique exceptionnelle</strong></li>
                  <li>• <strong>Marché B2B local solide</strong></li>
                  <li>• <strong>Investissement maîtrisé et viable</strong></li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-1">Projections Prudentes</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>CA année 1 : 148 700€</strong> (très réaliste)</li>
                  <li>• <strong>Seuil rentabilité : mars</strong> (rapide)</li>
                  <li>• <strong>ROI : 13%</strong> (attractif et sûr)</li>
                  <li>• <strong>Croissance progressive garantie</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketStudy;
