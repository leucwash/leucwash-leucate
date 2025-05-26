
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Target, MapPin, Calendar, Building2, ShoppingCart, Calculator } from "lucide-react";

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
    { name: "Leucwash M'WASH3", distance: "0 km", type: "M'WASH3 + lave-tapis (MONOPOLE TOTAL)" }
  ];

  const marketPotential = [
    { segment: "Résidents permanents", value: 25, color: "#3B82F6" },
    { segment: "Touristes été", value: 30, color: "#10B981" },
    { segment: "Professionnels B2B", value: 25, color: "#F59E0B" },
    { segment: "Lave-tapis unique", value: 15, color: "#8B5CF6" },
    { segment: "Passage D627", value: 5, color: "#EF4444" }
  ];

  // Analyse de fréquentation D627 révisée
  const d627TrafficAnalysis = {
    dailyTraffic: 8500,
    touristPeak: 15000,
    yearlyTraffic: 3100000,
    conversionRate: 0.08,
    averageTicket: 13.50
  };

  // Zone artisanale + lave-tapis professionnels
  const zoneArtisanaleBusinesses = [
    { category: "Automobile", business: "Garage de l'Étang", icon: "🔧", potential: "200 clients/mois + 80 tapis" },
    { category: "Automobile", business: "Garage IRAL", icon: "🔧", potential: "150 clients/mois + 60 tapis" },
    { category: "Hôtellerie", business: "Hôtels Leucate", icon: "🏨", potential: "100 tapis/mois" },
    { category: "Nautisme", business: "Leucate Voilerie", icon: "⛵", potential: "80 clients/mois + 40 tapis" },
    { category: "Commerces", business: "Zone commerciale", icon: "🏪", potential: "120 tapis/mois" },
    { category: "Restaurants", business: "Restaurants locaux", icon: "🍽️", potential: "80 tapis/mois" }
  ];

  // Projections réalistes avec M'WASH3 + lave-tapis
  const realisticProjections = {
    dailyWashes: {
      winter: 30,
      spring: 50,
      summer: 90, // M'WASH3 capacité supérieure
      autumn: 38
    },
    carpetCleaning: {
      winter: 25, // tapis/jour
      spring: 35,
      summer: 45,
      autumn: 30
    },
    averageTicket: 13.50,
    carpetPrice: 6.00,
    selfServiceRevenue: 3200 // Avec lave-tapis
  };

  return (
    <div className="grid gap-6">
      {/* AVANTAGE CONCURRENTIEL EXCEPTIONNEL */}
      <Card className="border-l-4 border-l-green-500 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Target className="h-5 w-5 text-green-500" />
            MONOPOLE ABSOLU - M'WASH3 + Lave-tapis Automatique
          </CardTitle>
          <CardDescription className="text-green-700">Seule station moderne + service lave-tapis unique sur Leucate</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">Monopole Technologique</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Portique moderne</span>
                  <span className="font-bold text-green-700">M'WASH3 seul sur Leucate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Capacité quotidienne</span>
                  <span className="font-bold text-green-700">90 lavages/jour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Programmes disponibles</span>
                  <span className="font-bold text-green-700">6 (8€ à 26€)</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-sm font-medium">Concurrence directe</span>
                  <span className="font-bold text-red-600">AUCUNE</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">Innovation Lave-tapis</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Service unique Leucate</span>
                  <span className="font-bold text-green-700">Monopole total</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Capacité lave-tapis</span>
                  <span className="font-bold text-green-700">50 tapis/jour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Prix tapis</span>
                  <span className="font-bold text-green-700">6€/tapis</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-sm font-medium">Clientèle B2B garantie</span>
                  <span className="font-bold text-blue-600">480 tapis/mois</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-300">
            <h4 className="font-semibold text-green-800 mb-2">✅ AVANTAGES CONCURRENTIELS DECISIFS</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm text-green-700 space-y-1">
                <li>• <strong>Position géographique unique</strong> (rond-point D627)</li>
                <li>• <strong>Technologie M'WASH3 premium</strong> (dernière génération)</li>
                <li>• <strong>Service lave-tapis exclusif</strong> (premier sur Leucate)</li>
                <li>• <strong>Diversification revenus</strong> (lavage + tapis + services)</li>
              </ul>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• <strong>Clientèle professionnelle captive</strong> (hotels, garages)</li>
                <li>• <strong>Barrière à l'entrée élevée</strong> (investissement lourd)</li>
                <li>• <strong>Marché touristique porteur</strong> (75k visiteurs été)</li>
                <li>• <strong>Évolutivité technique</strong> (extension possible)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ANALYSE DÉMOGRAPHIQUE RÉVISÉE */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-500" />
            Marché Leucate - Potentiel M'WASH3 + Lave-tapis
          </CardTitle>
          <CardDescription>Population et saisonnalité - Impact sur revenus diversifiés</CardDescription>
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
              <p className="text-sm text-blue-700">5 300 habitants + zone artisanale. Avec M'WASH3 premium, objectif 20-25% de pénétration soit 1 060-1 325 clients réguliers + 480 tapis professionnels/mois.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Potentiel Touristique Optimisé</h4>
              <p className="text-sm text-green-700">Pic été 74 700 touristes. M'WASH3 capacité 90 lavages/jour permet de satisfaire la demande. Lave-tapis attire clientèle hôtellerie/location.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CLIENTÈLE LAVE-TAPIS PROFESSIONNELLE */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-purple-500" />
            Marché Lave-tapis - Clientèle Professionnelle Captive
          </CardTitle>
          <CardDescription>Service unique générant des revenus réguliers toute l'année</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-purple-800">Clients Professionnels Identifiés</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {zoneArtisanaleBusinesses.map((business, index) => (
                  <div key={index} className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{business.icon}</span>
                        <span className="text-xs font-medium text-purple-700">{business.category}</span>
                      </div>
                      <span className="text-xs text-green-600 font-medium">{business.potential}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800">{business.business}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border border-purple-300">
              <h4 className="font-semibold text-purple-800 mb-2">Revenus Lave-tapis Garantis</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-purple-700 mb-1">Professionnels B2B</h5>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• <strong>Garages locaux :</strong> 140 tapis/mois (840€)</li>
                    <li>• <strong>Hôtels/Restaurants :</strong> 180 tapis/mois (1 080€)</li>
                    <li>• <strong>Commerces zone :</strong> 120 tapis/mois (720€)</li>
                    <li>• <strong>Nautisme :</strong> 40 tapis/mois (240€)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-700 mb-1">Particuliers</h5>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• <strong>Résidents :</strong> 100 tapis/mois (600€)</li>
                    <li>• <strong>Touristes :</strong> 150 tapis/mois été (900€)</li>
                    <li>• <strong>Total professionnel :</strong> 480 tapis/mois</li>
                    <li>• <strong>CA lave-tapis :</strong> 2 880€/mois minimum</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* POTENTIEL DE MARCHÉ RÉAJUSTÉ */}
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-500" />
            Potentiel de Marché - Configuration M'WASH3 + Lave-tapis
          </CardTitle>
          <CardDescription>Répartition optimisée avec services diversifiés</CardDescription>
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
                    <p className="text-sm text-gray-600">{segment.value}% du CA total</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 p-4 bg-orange-50 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">Justification Répartition (M'WASH3 + Lave-tapis)</h4>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• <strong>Résidents (25%) :</strong> Base fidèle avec technologie premium</li>
              <li>• <strong>Touristes été (30%) :</strong> Capacité M'WASH3 optimale</li>
              <li>• <strong>Professionnels B2B (25%) :</strong> Partenariats lavage + tapis</li>
              <li>• <strong>Lave-tapis unique (15%) :</strong> Service exclusif rentable</li>
              <li>• <strong>Transit D627 (5%) :</strong> Opportuniste selon disponibilité</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* ANALYSE CONCURRENTIELLE RENFORCÉE */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-red-500" />
            Position Concurrentielle Dominante
          </CardTitle>
          <CardDescription>Monopole technologique et service exclusif</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {competitionData.map((competitor, index) => (
              <div key={index} className={`p-4 rounded-lg border ${index === 2 ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
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
            <h4 className="font-semibold text-green-800 mb-2">Domination Concurrentielle Totale</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• <strong>Monopole géographique :</strong> Seule station moderne opérationnelle Leucate</li>
              <li>• <strong>Monopole technologique :</strong> M'WASH3 vs équipements basiques fermés</li>
              <li>• <strong>Monopole service :</strong> Seul lave-tapis automatique dans un rayon de 50km</li>
              <li>• <strong>Barrière à l'entrée :</strong> Investissement 560k€ + autorisation complexe</li>
              <li>• <strong>Position stratégique :</strong> Rond-point D627 = passage obligé</li>
              <li>• <strong>Diversification unique :</strong> Lavage + tapis + services = offre complète</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* PROJECTIONS RÉALISTES RÉVISÉES */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-green-500" />
            Projections de Fréquentation - M'WASH3 + Lave-tapis
          </CardTitle>
          <CardDescription>Capacités techniques et revenus diversifiés</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-800">Fréquentation M'WASH3</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Hiver (Dec-Fév)</span>
                    <span className="font-bold text-blue-600">30 lavages/jour</span>
                  </div>
                  <p className="text-xs text-blue-600 mt-1">CA quotidien : 405€</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Printemps (Mar-Mai)</span>
                    <span className="font-bold text-yellow-600">50 lavages/jour</span>
                  </div>
                  <p className="text-xs text-yellow-600 mt-1">CA quotidien : 675€</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Été (Jun-Sep)</span>
                    <span className="font-bold text-green-600">90 lavages/jour</span>
                  </div>
                  <p className="text-xs text-green-600 mt-1">CA quotidien : 1 215€</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Automne (Oct-Nov)</span>
                    <span className="font-bold text-orange-600">38 lavages/jour</span>
                  </div>
                  <p className="text-xs text-orange-600 mt-1">CA quotidien : 513€</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-purple-800">Revenus Lave-tapis</h4>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium text-purple-800">Hiver : 25 tapis/jour</p>
                  <p className="text-sm text-purple-700">150€/jour - 4 500€/mois</p>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="font-medium text-pink-800">Printemps : 35 tapis/jour</p>
                  <p className="text-sm text-pink-700">210€/jour - 6 300€/mois</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="font-medium text-indigo-800">Été : 45 tapis/jour</p>
                  <p className="text-sm text-indigo-700">270€/jour - 8 100€/mois</p>
                </div>
                <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                  <p className="font-medium text-cyan-800">Services Complémentaires</p>
                  <p className="text-sm text-cyan-700">Self + aspirateurs : 3 200€/mois</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* STRATÉGIE MARKETING PREMIUM */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-blue-500" />
            Stratégie Marketing - Services Premium
          </CardTitle>
          <CardDescription>Communication ciblée pour M'WASH3 + lave-tapis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-800">Communication Grand Public</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-800">Signalétique Premium D627 (6 000€)</p>
                  <ul className="text-xs text-blue-700 mt-1 space-y-1">
                    <li>• Panneau LED "M'WASH3 - Dernière Technologie"</li>
                    <li>• Indication "Lave-tapis Automatique - Unique"</li>
                    <li>• Éclairage spectaculaire visible de loin</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-800">Digital Premium (2 500€)</p>
                  <ul className="text-xs text-green-700 mt-1 space-y-1">
                    <li>• Google Ads "lave-tapis Leucate"</li>
                    <li>• Site web vitrine avec réservation</li>
                    <li>• Réseaux sociaux avec vidéos équipements</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-800">Marketing B2B Spécialisé</h4>
              <div className="space-y-2">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium text-purple-800">Partenariats Professionnels (3 000€)</p>
                  <p className="text-sm text-purple-700">Contrats garantis hôtels, garages, commerces</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium text-orange-800">Formation/Démonstrations (1 500€)</p>
                  <p className="text-sm text-orange-700">Présentation lave-tapis aux professionnels</p>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                  <p className="font-medium text-pink-800">Budget Marketing Total</p>
                  <p className="text-sm text-pink-700 font-bold">13 000€ la 1ère année</p>
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
            Conclusion - Étude de Marché M'WASH3 + Lave-tapis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-gradient-to-r from-gray-100 to-green-100 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">📊 SYNTHÈSE MARCHÉ EXCEPTIONNEL</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-700 mb-1">Avantages Décisifs</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Monopole technologique total</strong> (M'WASH3 seul)</li>
                  <li>• <strong>Service lave-tapis exclusif</strong> (premier dans la région)</li>
                  <li>• <strong>Position géographique unique</strong> (rond-point D627)</li>
                  <li>• <strong>Clientèle B2B captive identifiée</strong></li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-1">Projections Solides</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>CA année 1 : 156 500€</strong> (diversifié)</li>
                  <li>• <strong>Lave-tapis : 34 560€/an</strong> (revenus réguliers)</li>
                  <li>• <strong>Monopole durable</strong> (barrière entrée élevée)</li>
                  <li>• <strong>Croissance garantie</strong> (services uniques)</li>
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
