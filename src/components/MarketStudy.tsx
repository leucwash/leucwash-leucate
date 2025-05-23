
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Target, MapPin, Calendar } from "lucide-react";

const MarketStudy = () => {
  const demographicData = [
    { period: "Hiver", residents: 5300, tourists: 2000, total: 7300 },
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

      {/* Potentiel de Marché */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
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
            <h4 className="font-semibold text-green-800 mb-2">Avantages Concurrentiels</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Localisation privilégiée sur la D627 avec accès direct</li>
              <li>• Technologies Istobal dernière génération</li>
              <li>• Approche écoresponsable unique dans la région</li>
              <li>• Gamme complète de services (5 programmes de lavage)</li>
              <li>• Absence de concurrence directe sur Leucate</li>
            </ul>
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
                  <span>Développement de la zone artisanale de Leucate</span>
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
                  <p className="text-sm text-blue-700">Chiffre d'affaires potentiel x5</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded">
                  <p className="font-medium text-yellow-800">Basse Saison (Octobre-Mai)</p>
                  <p className="text-sm text-yellow-700">Clientèle locale fidélisée</p>
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
