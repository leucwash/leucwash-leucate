
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { TrendingUp, Euro, Calculator, PiggyBank, AlertTriangle, CheckCircle } from "lucide-react";

const FinancialProjections = () => {
  // PROJECTIONS RÉVISÉES AVEC TOUS LES SERVICES
  // M'WASH3: 60 lavages/jour été, 25 hiver - Prix moyen 14€
  // Lave-tapis: 30 tapis/jour été, 10 hiver - Prix 6€
  // 2 Pistes HP: 80 passages/jour été, 35 hiver - Prix moyen 3,5€
  // Aire aspiration: 100 utilisations/jour été, 40 hiver - Prix moyen 1,5€
  
  const monthlyRevenue = [
    { month: "Jan", revenue: 6200, costs: 8220, profit: -2020 },
    { month: "Fév", revenue: 7100, costs: 8220, profit: -1120 },
    { month: "Mar", revenue: 9800, costs: 8220, profit: 1580 },
    { month: "Avr", revenue: 14200, costs: 8220, profit: 5980 },
    { month: "Mai", revenue: 19500, costs: 8220, profit: 11280 },
    { month: "Jun", revenue: 28200, costs: 8220, profit: 19980 },
    { month: "Jul", revenue: 35800, costs: 8220, profit: 27580 },
    { month: "Aoû", revenue: 38200, costs: 8220, profit: 29980 },
    { month: "Sep", revenue: 28800, costs: 8220, profit: 20580 },
    { month: "Oct", revenue: 17200, costs: 8220, profit: 8980 },
    { month: "Nov", revenue: 10500, costs: 8220, profit: 2280 },
    { month: "Déc", revenue: 8900, costs: 8220, profit: 680 }
  ];

  const yearlyProjections = [
    { year: "Année 1", revenue: 224400, costs: 98640, profit: 125760, roi: 22.4 },
    { year: "Année 2", revenue: 243000, costs: 101500, profit: 141500, roi: 25.2 },
    { year: "Année 3", revenue: 260000, costs: 104500, profit: 155500, roi: 27.7 },
    { year: "Année 4", revenue: 275000, costs: 107500, profit: 167500, roi: 29.9 },
    { year: "Année 5", revenue: 290000, costs: 110500, profit: 179500, roi: 32.0 }
  ];

  // DÉTAIL DES REVENUS PAR SERVICE
  const revenueBreakdown = [
    { service: "M'WASH3 (Portique)", dailySummer: 60, dailyWinter: 25, avgPrice: 14, annualRevenue: 133000 },
    { service: "Lave-tapis automatique", dailySummer: 30, dailyWinter: 10, avgPrice: 6, annualRevenue: 54000 },
    { service: "2 Pistes Haute Pression", dailySummer: 80, dailyWinter: 35, avgPrice: 3.5, annualRevenue: 28700 },
    { service: "Aire aspiration complète", dailySummer: 100, dailyWinter: 40, avgPrice: 1.5, annualRevenue: 15300 }
  ];

  const operatingCosts = [
    { category: "Loyer", monthly: 1000, annual: 12000 },
    { category: "Électricité/Eau", monthly: 1500, annual: 18000 },
    { category: "Maintenance équipements", monthly: 500, annual: 6000 },
    { category: "Assurances", monthly: 600, annual: 7200 },
    { category: "Personnel (temps partiel)", monthly: 1400, annual: 16800 },
    { category: "Marketing/Communication", monthly: 300, annual: 3600 },
    { category: "Produits lavage", monthly: 800, annual: 9600 },
    { category: "Divers/Imprévus", monthly: 400, annual: 4800 },
    { category: "Remboursement prêt", monthly: 7120, annual: 85440 }
  ];

  const totalOperatingCosts = operatingCosts.reduce((sum, cost) => sum + cost.annual, 0);

  return (
    <div className="grid gap-6">
      {/* SYNTHÈSE PROJET OPTIMISÉ */}
      <Card className="border-l-4 border-l-green-500 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <CheckCircle className="h-5 w-5 text-green-500" />
            PROJET VIABLE - Configuration Optimale
          </CardTitle>
          <CardDescription className="text-green-700">M'WASH3 + Lave-tapis + 2 Pistes HP + Aire aspiration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">Performance Année 1</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Chiffre d'affaires</span>
                  <span className="font-bold text-green-700">224 400€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Charges totales</span>
                  <span className="font-bold">98 640€</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-sm font-medium">Bénéfice net</span>
                  <span className="font-bold text-green-800">125 760€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">ROI</span>
                  <span className="font-bold text-green-600">22.4%</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">Cash-Flow Positif</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Bénéfice mensuel moyen</span>
                  <span className="font-bold text-green-700">10 480€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Remboursement prêt</span>
                  <span className="font-bold text-blue-600">7 120€</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-sm font-medium">Cash-flow net</span>
                  <span className="font-bold text-green-800">+3 360€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Retour investissement</span>
                  <span className="font-bold text-blue-600">4.5 ans</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">Avantages Concurrentiels</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Monopole lave-tapis Leucate</li>
                <li>• Technologie M'WASH3 premium</li>
                <li>• 4 sources de revenus</li>
                <li>• Marché touristique captif</li>
                <li>• Écoresponsabilité différenciante</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* RÉPARTITION DES REVENUS */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            Répartition des Revenus par Service
          </CardTitle>
          <CardDescription>Diversification optimale des sources de revenus</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {revenueBreakdown.map((service, index) => (
              <div key={index} className="p-4 border rounded-lg bg-blue-50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-blue-800">{service.service}</h4>
                  <span className="font-bold text-blue-600">{service.annualRevenue.toLocaleString()}€/an</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Été: <span className="font-medium">{service.dailySummer}/jour</span></p>
                    <p className="text-gray-600">Hiver: <span className="font-medium">{service.dailyWinter}/jour</span></p>
                  </div>
                  <div>
                    <p className="text-gray-600">Prix moyen: <span className="font-medium">{service.avgPrice}€</span></p>
                  </div>
                  <div>
                    <p className="text-blue-700 font-medium">
                      {Math.round((service.annualRevenue / 224400) * 100)}% du CA total
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-300">
            <h4 className="font-semibold text-blue-800 mb-2">Répartition CA Année 1</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-sm text-blue-600">M'WASH3</p>
                <p className="text-xl font-bold text-blue-800">59%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-green-600">Lave-tapis</p>
                <p className="text-xl font-bold text-green-800">24%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-purple-600">Pistes HP</p>
                <p className="text-xl font-bold text-purple-800">13%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-orange-600">Aspiration</p>
                <p className="text-xl font-bold text-orange-800">7%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PROJECTIONS MENSUELLES */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            Évolution Mensuelle - Tous Services
          </CardTitle>
          <CardDescription>Revenus optimisés avec 4 sources diversifiées</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}€`, '']} />
                <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} name="Chiffre d'affaires" />
                <Line type="monotone" dataKey="costs" stroke="#EF4444" strokeWidth={2} name="Coûts totaux" />
                <Line type="monotone" dataKey="profit" stroke="#3B82F6" strokeWidth={3} name="Bénéfice" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <p className="text-sm text-green-600 mb-1">CA Annuel</p>
              <p className="text-2xl font-bold text-green-800">224 400€</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <p className="text-sm text-red-600 mb-1">Charges Totales</p>
              <p className="text-2xl font-bold text-red-800">98 640€</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-sm text-blue-600 mb-1">Bénéfice Net</p>
              <p className="text-2xl font-bold text-blue-800">125 760€</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg text-center">
              <p className="text-sm text-orange-600 mb-1">Cash-Flow Net</p>
              <p className="text-2xl font-bold text-orange-800">+40 320€</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FINANCEMENT OPTIMISÉ */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Euro className="h-5 w-5 text-purple-500" />
            Structure de Financement Finale
          </CardTitle>
          <CardDescription>Investissement 560 236€ - Financement sécurisé</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-purple-800">Investissement Détaillé</h4>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">Équipements Istobal</span>
                  <span className="font-bold text-purple-600">305 236€</span>
                </div>
                <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Couverture GS</span>
                  <span className="font-bold text-blue-600">65 000€</span>
                </div>
                <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Génie Civil</span>
                  <span className="font-bold text-green-600">150 000€</span>
                </div>
                <div className="flex justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium">Cuves + Local</span>
                  <span className="font-bold text-orange-600">40 000€</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-100 rounded-lg border-t-2">
                  <span className="font-bold">TOTAL</span>
                  <span className="font-bold text-gray-800">560 236€</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-800">Plan de Financement</h4>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-800 mb-1">Apport Personnel</p>
                  <p className="text-2xl font-bold text-green-900">50 000€</p>
                  <p className="text-sm text-green-600">8.9% de l'investissement</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-800 mb-1">Garantie Nantissement</p>
                  <p className="text-2xl font-bold text-blue-900">280 000€</p>
                  <p className="text-sm text-blue-600">Bien immobilier (garantie)</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="font-semibold text-orange-800 mb-1">Prêt Bancaire</p>
                  <p className="text-2xl font-bold text-orange-900">510 236€</p>
                  <p className="text-sm text-orange-600">91.1% - 8 ans à 4.5%</p>
                  <p className="text-xs text-orange-500">Mensualité: 7 120€</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* COÛTS D'EXPLOITATION */}
      <Card className="border-l-4 border-l-indigo-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PiggyBank className="h-5 w-5 text-indigo-500" />
            Coûts d'Exploitation Détaillés
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {operatingCosts.map((cost, index) => (
              <div key={index} className={`flex justify-between items-center p-3 border rounded-lg ${
                cost.category === 'Remboursement prêt' ? 'bg-red-50 border-red-200' : 'bg-gray-50'
              }`}>
                <span className="font-medium">{cost.category}</span>
                <div className="text-right">
                  <p className={`font-bold ${
                    cost.category === 'Remboursement prêt' ? 'text-red-600' : 'text-gray-800'
                  }`}>{cost.monthly}€/mois</p>
                  <p className="text-sm text-gray-600">{cost.annual}€/an</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-2">Charges Exploitation</h4>
              <p className="text-2xl font-bold text-indigo-800">6 500€/mois</p>
              <p className="text-sm text-indigo-600">78 000€/an</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Remboursement Prêt</h4>
              <p className="text-2xl font-bold text-red-800">7 120€/mois</p>
              <p className="text-sm text-red-600">85 440€/an</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Total Charges</h4>
              <p className="text-2xl font-bold text-orange-800">13 620€/mois</p>
              <p className="text-sm text-orange-600">163 440€/an</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PROJECTION 5 ANS */}
      <Card className="border-l-4 border-l-yellow-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-yellow-500" />
            Projection 5 Ans - Croissance Soutenue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {yearlyProjections.map((year, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-yellow-50 to-green-50">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-yellow-800">{year.year}</h4>
                    <p className="text-sm text-yellow-700">ROI: {year.roi}%</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">{year.revenue.toLocaleString()}€ CA</p>
                    <p className="font-bold text-blue-600">{year.profit.toLocaleString()}€ Bénéfice</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">🎯 CONCLUSION - PROJET EXCELLENT</h4>
            <p className="text-sm text-gray-700">
              Avec <strong>4 sources de revenus diversifiées</strong>, le projet génère un CA de 224 400€ 
              dès la première année et un <strong>ROI de 22.4%</strong>. Le cash-flow positif (+40 320€) 
              permet un remboursement confortable et un retour sur investissement en <strong>4.5 ans</strong>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialProjections;
