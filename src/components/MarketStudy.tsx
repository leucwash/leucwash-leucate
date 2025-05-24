
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Target, MapPin, Calendar, Building2, ShoppingCart } from "lucide-react";

const MarketStudy = () => {
  const demographicData = [
    { period: "Hiver", residents: 5300, tourists: 0, total: 5300 },
    { period: "Printemps", residents: 5300, tourists: 15000, total: 20300 },
    { period: "Été", residents: 5300, tourists: 74700, total: 80000 },
    { period: "Automne", residents: 5300, tourists: 8000, total: 13300 }
  ];

  const competitionData = [
    { name: "Station existante 1", distance: "15 km", type: "Traditionnelle" },
    { name: "Station existante 2", distance: "22 km", type: "Self-service" },
    { name: "Leucwash", distance: "0 km", type: "Éco-moderne" }
  ];

  const marketPotential = [
    { segment: "Résidents permanents", value: 35, color: "#3B82F6" },
    { segment: "Touristes été", value: 45, color: "#10B981" },
    { segment: "Professionnels", value: 15, color: "#F59E0B" },
    { segment: "Passage D627", value: 5, color: "#EF4444" }
  ];

  // Zone artisanale businesses - corrigé avec les vraies entreprises
  const zoneArtisanaleBusinesses = [
    { category: "Services d'urgence", business: "Pompiers", icon: "🚒" },
    { category: "Glaçons", business: "Leucice - Fabrication de glaçons", icon: "🧊" },
    { category: "Sport & Loisirs", business: "P42 Club Fitness", icon: "💪" },
    { category: "Nautisme", business: "Leucate Voilerie", icon: "⛵" },
    { category: "Automobile", business: "Garage de l'Étang", icon: "🔧" },
    { category: "Restauration", business: "Cave à bières", icon: "🍺" },
    { category: "Restauration", business: "Plats à emporter asiatique", icon: "🥡" }
  ];

  // Leucate village businesses
  const leucateVillageBusinesses = [
    { category: "Grande surface", business: "Carrefour City", icon: "🛒" },
    { category: "Carburant", business: "Station-service", icon: "⛽" },
    { category: "Commerces", business: "Commerces de proximité", icon: "🏪" },
    { category: "Services", business: "Mairie de Leucate", icon: "🏛️" },
    { category: "Tourisme", business: "Office de tourisme", icon: "ℹ️" },
    { category: "Restauration", business: "Restaurants locaux", icon: "🍽️" },
    { category: "Services", business: "Pharmacie", icon: "💊" },
    { category: "Services", business: "Banque", icon: "🏦" }
  ];

  return (
    <div className="grid gap-6">
      {/* Analyse Démographique */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-500" />
            Analyse Démographique de Leucate
          </CardTitle>
          <CardDescription>Évolution de la population selon les saisons</CardDescription>
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
              <h4 className="font-semibold text-blue-800 mb-2">Population Permanente</h4>
              <p className="text-sm text-blue-700">5 300 habitants toute l'année, représentant une clientèle fidèle et régulière pour les services de lavage automobile.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Pic Estival</h4>
              <p className="text-sm text-green-700">Multiplication par 15 de la population en été (80 000 personnes), créant un potentiel de revenus exceptionnel.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Environnement Commercial */}
      <Card className="border-l-4 border-l-fuchsia-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-fuchsia-500" />
            Environnement Commercial
          </CardTitle>
          <CardDescription>Analyse de l'écosystème économique local</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-fuchsia-800">Zone Artisanale de Leucate</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {zoneArtisanaleBusinesses.map((business, index) => (
                  <div key={index} className="p-3 bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded-lg border border-fuchsia-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{business.icon}</span>
                      <span className="text-xs font-medium text-fuchsia-700">{business.category}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800">{business.business}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-pink-800">Leucate Village</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {leucateVillageBusinesses.map((business, index) => (
                  <div key={index} className="p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{business.icon}</span>
                      <span className="text-xs font-medium text-pink-700">{business.category}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800">{business.business}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-fuchsia-100 to-pink-100 rounded-lg border border-fuchsia-300">
              <h4 className="font-semibold text-fuchsia-800 mb-2">Avantage Concurrentiel de Localisation</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-fuchsia-700 mb-1">Synergies Commerciales</h5>
                  <ul className="text-sm text-fuchsia-600 space-y-1">
                    <li>• Clientèle du Garage de l'Étang (entretien véhicules)</li>
                    <li>• Employés des entreprises locales (P42, Leucice, Voilerie)</li>
                    <li>• Membres du club fitness P42</li>
                    <li>• Flux de la zone de restauration</li>
                    <li>• Personnel des services d'urgence</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-fuchsia-700 mb-1">Position Stratégique</h5>
                  <ul className="text-sm text-fuchsia-600 space-y-1">
                    <li>• Rond-point central entre zone artisanale et village</li>
                    <li>• Proximité Carrefour City (côté village)</li>
                    <li>• Accès direct D627 très fréquentée</li>
                    <li>• Facilité d'accès depuis les deux zones</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Soutien Institutionnel */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-green-500" />
            Soutien Institutionnel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Mairie de Leucate</h4>
            <p className="text-sm text-green-700 mb-2">
              <strong>Projet approuvé à l'ordre du jour</strong> de la mairie de Leucate
            </p>
            <ul className="text-sm text-green-600 space-y-1">
              <li>• Validation du projet en cours</li>
              <li>• Soutien au développement économique local</li>
              <li>• Intégration dans la stratégie touristique</li>
              <li>• Respect des normes environnementales</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Potentiel de Marché */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-500" />
            Répartition du Potentiel de Marché
          </CardTitle>
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
                    <p className="text-sm text-gray-600">{segment.value}% du marché potentiel</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analyse Concurrentielle */}
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-orange-500" />
            Analyse Concurrentielle
          </CardTitle>
          <CardDescription>Positionnement par rapport à la concurrence existante</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {competitionData.map((competitor, index) => (
              <div key={index} className={`p-4 rounded-lg border ${index === 2 ? 'bg-orange-50 border-orange-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{competitor.name}</h4>
                    <p className="text-sm text-gray-600">Type: {competitor.type}</p>
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
            <h4 className="font-semibold text-green-800 mb-2">Avantages Concurrentiels Spécifiques</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• <strong>Monopole local :</strong> Première et seule station de lavage moderne directement sur Leucate</li>
              <li>• <strong>Technologie premium :</strong> Équipements Istobal dernière génération avec éclairage LED spectaculaire</li>
              <li>• <strong>Approche écoresponsable unique :</strong> Système de recyclage d'eau avec récupération des hydrocarbures</li>
              <li>• <strong>Gamme complète :</strong> 5 programmes de portique (8€ à 24€) + 2 pistes self-service + 8 aspirateurs + services complémentaires</li>
              <li>• <strong>Position géographique optimale :</strong> Rond-point central D627 entre zone artisanale et village</li>
              <li>• <strong>Validation institutionnelle :</strong> Projet approuvé à l'ordre du jour de la mairie de Leucate</li>
              <li>• <strong>Écosystème commercial favorable :</strong> Synergie avec entreprises locales et flux touristique</li>
              <li>• <strong>Finition céramique exclusive :</strong> Programme VIP à 24€ unique sur le marché local</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Stratégie Marketing Optimisée */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-blue-500" />
            Stratégie Marketing et Communication
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-800">Approche Freelance Optimisée</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-800">Marketing Digital (2 500€)</p>
                  <ul className="text-xs text-blue-700 mt-1 space-y-1">
                    <li>• Site web professionnel responsive</li>
                    <li>• Réseaux sociaux (Facebook, Instagram)</li>
                    <li>• Référencement local SEO</li>
                    <li>• Campagnes Google Ads ciblées</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-800">Communication Locale (1 500€)</p>
                  <ul className="text-xs text-green-700 mt-1 space-y-1">
                    <li>• Flyers et affichage local</li>
                    <li>• Partenariats entreprises zone</li>
                    <li>• Événement d'inauguration</li>
                    <li>• Cartes de fidélité</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-800">Avantages Approche Freelance</h4>
              <div className="space-y-2">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium text-purple-800">Économies substantielles</p>
                  <p className="text-sm text-purple-700">Réduction de 60% vs agence traditionnelle</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium text-orange-800">Flexibilité maximale</p>
                  <p className="text-sm text-orange-700">Adaptation rapide aux résultats</p>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="font-medium text-pink-800">ROI optimisé</p>
                  <p className="text-sm text-pink-700">Budget total : 4 000€ au lieu de 10 000€</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Opportunités de Marché */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-500" />
            Opportunités et Tendances
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Tendances Favorables</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Croissance du tourisme dans l'Aude (+5% annuel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Sensibilité écologique croissante des consommateurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Développement continu de la zone artisanale de Leucate</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Modernisation du parc automobile local</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Saisonnalité</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded">
                  <p className="font-medium text-blue-800">Haute Saison (Juin-Septembre)</p>
                  <p className="text-sm text-blue-700">Chiffre d'affaires potentiel x15 avec 80 000 personnes</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded">
                  <p className="font-medium text-yellow-800">Basse Saison (Octobre-Mai)</p>
                  <p className="text-sm text-yellow-700">Clientèle locale fidélisée de 5 300 habitants</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketStudy;
