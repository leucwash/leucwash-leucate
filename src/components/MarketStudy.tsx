
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { MapPin, Users, Car, TrendingUp, Target, Calendar, Calculator } from "lucide-react";

const MarketStudy = () => {
  // ANALYSE MARCHÉ AVEC SERVICES COMPLETS
  const demographicData = [
    { category: "Résidents permanents", count: 1800, vehicles: 2700, potential: 150 },
    { category: "Résidences secondaires", count: 3500, vehicles: 4200, potential: 180 },
    { category: "Locations saisonnières", count: 2000, vehicles: 2800, potential: 200 },
    { category: "Touristes passage", count: 15000, vehicles: 12000, potential: 300 },
    { category: "Professionnels locaux", count: 300, vehicles: 450, potential: 100 }
  ];

  const seasonalDistribution = [
    { month: "Jan", residents: 140, tourists: 20, total: 160 },
    { month: "Fév", residents: 155, tourists: 30, total: 185 },
    { month: "Mar", residents: 180, tourists: 80, total: 260 },
    { month: "Avr", residents: 200, tourists: 180, total: 380 },
    { month: "Mai", residents: 220, tourists: 320, total: 540 },
    { month: "Jun", residents: 240, tourists: 580, total: 820 },
    { month: "Jul", residents: 250, tourists: 900, total: 1150 },
    { month: "Aoû", residents: 250, tourists: 950, total: 1200 },
    { month: "Sep", residents: 230, tourists: 600, total: 830 },
    { month: "Oct", residents: 200, tourists: 280, total: 480 },
    { month: "Nov", residents: 170, tourists: 100, total: 270 },
    { month: "Déc", residents: 160, tourists: 60, total: 220 }
  ];

  // NOUVEAUX SERVICES - POTENTIEL LAVE-TAPIS
  const carpetCleaningMarket = [
    { segment: "Hôtels/Gîtes Leucate", units: 45, carpetsPerUnit: 8, frequency: 24, annualVolume: 8640 },
    { segment: "Restaurants/Bars", units: 25, carpetsPerUnit: 4, frequency: 36, annualVolume: 3600 },
    { segment: "Commerces/Bureaux", units: 35, carpetsPerUnit: 3, frequency: 12, annualVolume: 1260 },
    { segment: "Particuliers résidents", units: 1800, carpetsPerUnit: 2, frequency: 2, annualVolume: 7200 },
    { segment: "Particuliers secondaires", units: 3500, carpetsPerUnit: 2, frequency: 1, annualVolume: 7000 }
  ];

  const competitiveAnalysis = [
    { name: "Station Avia Leucate", services: "Basic", distance: "2.5km", weaknesses: "Équipements vieillissants, pas de lave-tapis" },
    { name: "Lavage Salses", services: "Moyen", distance: "8km", weaknesses: "Loin du centre, pas de portique moderne" },
    { name: "Station Total Fitou", services: "Basic", distance: "12km", weaknesses: "Très loin, service limité" }
  ];

  const COLORS = ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'];

  return (
    <div className="grid gap-6">
      {/* ANALYSE DÉMOGRAPHIQUE DÉTAILLÉE */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-500" />
            Analyse du Marché Élargi - 4 Services
          </CardTitle>
          <CardDescription>Potentiel clientèle pour tous nos services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {demographicData.map((segment, index) => (
              <div key={index} className="p-4 border rounded-lg bg-blue-50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-blue-800">{segment.category}</h4>
                  <span className="font-bold text-blue-600">{segment.potential} lavages/mois</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Population: <span className="font-medium">{segment.count.toLocaleString()}</span></p>
                  </div>
                  <div>
                    <p className="text-gray-600">Véhicules: <span className="font-medium">{segment.vehicles.toLocaleString()}</span></p>
                  </div>
                  <div>
                    <p className="text-blue-700 font-medium">
                      Taux conversion: {Math.round((segment.potential / segment.vehicles) * 100)}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-300">
            <h4 className="font-semibold text-blue-800 mb-2">Potentiel Total Mensuel</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-sm text-blue-600">M'WASH3</p>
                <p className="text-xl font-bold text-blue-800">930 lavages</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-green-600">Pistes HP</p>
                <p className="text-xl font-bold text-green-800">460 passages</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-purple-600">Aspiration</p>
                <p className="text-xl font-bold text-purple-800">620 usages</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-orange-600">Lave-tapis</p>
                <p className="text-xl font-bold text-orange-800">200 tapis</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* MARCHÉ LAVE-TAPIS UNIQUE */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-500" />
            Marché Lave-tapis - Monopole Leucate
          </CardTitle>
          <CardDescription>Service unique sur tout le secteur</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {carpetCleaningMarket.map((segment, index) => (
              <div key={index} className="p-4 border rounded-lg bg-green-50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-green-800">{segment.segment}</h4>
                  <span className="font-bold text-green-600">{segment.annualVolume.toLocaleString()} tapis/an</span>
                </div>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Établissements: <span className="font-medium">{segment.units}</span></p>
                  </div>
                  <div>
                    <p className="text-gray-600">Tapis/unité: <span className="font-medium">{segment.carpetsPerUnit}</span></p>
                  </div>
                  <div>
                    <p className="text-gray-600">Fréquence/an: <span className="font-medium">{segment.frequency}</span></p>
                  </div>
                  <div>
                    <p className="text-green-700 font-medium">
                      {Math.round(segment.annualVolume / 12)} tapis/mois
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-100 rounded-lg border border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">Potentiel Total Lave-tapis</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Volume annuel total</span>
                  <span className="font-bold text-green-700">27 700 tapis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Volume mensuel moyen</span>
                  <span className="font-bold text-green-700">2 310 tapis</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-sm font-medium">CA potentiel (6€/tapis)</span>
                  <span className="font-bold text-green-800">166 200€/an</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Part captée réaliste (30%)</span>
                  <span className="font-bold text-green-600">50 000€/an</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-100 rounded-lg border border-blue-300">
              <h4 className="font-semibold text-blue-800 mb-2">Avantages Concurrentiels</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Premier et seul lave-tapis automatique</li>
                <li>• Monopole sur 25km à la ronde</li>
                <li>• Marché professionnel captif</li>
                <li>• Pas de concurrence directe</li>
                <li>• Revenus récurrents garantis</li>
                <li>• Marge élevée (80%)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ÉVOLUTION SAISONNIÈRE */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-500" />
            Saisonnalité et Répartition des Revenus
          </CardTitle>
          <CardDescription>Adaptation de l'offre aux cycles touristiques</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={seasonalDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="residents" stackId="a" fill="#8B5CF6" name="Résidents" />
                <Bar dataKey="tourists" stackId="a" fill="#06B6D4" name="Touristes" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Saison Haute (Jun-Sep)</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• M'WASH3: 60 lavages/jour</li>
                <li>• Lave-tapis: 30 tapis/jour</li>
                <li>• Pistes HP: 80 passages/jour</li>
                <li>• Aspiration: 100 usages/jour</li>
                <li>• <strong>CA moyen: 32 500€/mois</strong></li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Intersaison (Mar-Mai, Oct)</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• M'WASH3: 35 lavages/jour</li>
                <li>• Lave-tapis: 20 tapis/jour</li>
                <li>• Pistes HP: 50 passages/jour</li>
                <li>• Aspiration: 60 usages/jour</li>
                <li>• <strong>CA moyen: 16 000€/mois</strong></li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Saison Basse (Nov-Fév)</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• M'WASH3: 25 lavages/jour</li>
                <li>• Lave-tapis: 10 tapis/jour</li>
                <li>• Pistes HP: 35 passages/jour</li>
                <li>• Aspiration: 40 usages/jour</li>
                <li>• <strong>CA moyen: 8 000€/mois</strong></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ANALYSE CONCURRENTIELLE */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5 text-red-500" />
            Analyse Concurrentielle - Avantages Différenciants
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {competitiveAnalysis.map((competitor, index) => (
              <div key={index} className="p-4 border rounded-lg bg-red-50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-red-800">{competitor.name}</h4>
                    <p className="text-sm text-red-600">Services: {competitor.services} | Distance: {competitor.distance}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">Faiblesses: {competitor.weaknesses}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-300">
            <h4 className="font-semibold text-red-800 mb-3">Nos Avantages Décisifs</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-red-700 mb-2">Technologie Supérieure</h5>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• Portique M'WASH3 dernière génération</li>
                  <li>• Éclairage LED spectaculaire</li>
                  <li>• Système recyclage avancé</li>
                  <li>• Paiement sans contact</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-red-700 mb-2">Services Exclusifs</h5>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• Lave-tapis automatique (monopole)</li>
                  <li>• 6 programmes de lavage</li>
                  <li>• Parfumeur d'habitacle</li>
                  <li>• Aire aspiration complète</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PROJECTIONS MARCHÉ */}
      <Card className="border-l-4 border-l-yellow-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-yellow-500" />
            Projections et Potentiel de Croissance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-yellow-800">Objectifs Réalistes Année 1</h4>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <div className="flex justify-between">
                    <span className="font-medium text-yellow-800">Part de marché visée</span>
                    <span className="font-bold text-yellow-600">25%</span>
                  </div>
                  <p className="text-sm text-yellow-600 mt-1">Progression naturelle sur 12 mois</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex justify-between">
                    <span className="font-medium text-green-800">CA annuel réaliste</span>
                    <span className="font-bold text-green-600">224 400€</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">Base conservatrice confirmée</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex justify-between">
                    <span className="font-medium text-blue-800">Bénéfice net</span>
                    <span className="font-bold text-blue-600">125 760€</span>
                  </div>
                  <p className="text-sm text-blue-600 mt-1">Marge nette de 56%</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-blue-800">Facteurs de Croissance</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-800">Croissance Touristique</p>
                  <p className="text-sm text-blue-700">+3% annuel prévu sur Leucate</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-800">Fidélisation Clientèle</p>
                  <p className="text-sm text-green-700">Service premium = clients récurrents</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium text-purple-800">Monopole Lave-tapis</p>
                  <p className="text-sm text-purple-700">Revenus sécurisés et croissants</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium text-orange-800">Bouche-à-oreille</p>
                  <p className="text-sm text-orange-700">Technologie impressionnante</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-100 to-green-100 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">🎯 CONCLUSION ÉTUDE DE MARCHÉ</h4>
            <p className="text-sm text-gray-700">
              Le marché de Leucate présente un <strong>potentiel exceptionnel</strong> avec 4 sources de revenus diversifiées. 
              Le monopole du lave-tapis et la technologie M'WASH3 garantissent une position dominante et des revenus 
              récurrents de <strong>224 400€ dès la première année</strong>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketStudy;
