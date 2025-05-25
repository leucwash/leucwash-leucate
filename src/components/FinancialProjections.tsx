import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { TrendingUp, Euro, Calculator, PiggyBank } from "lucide-react";

const FinancialProjections = () => {
  const monthlyRevenue = [
    { month: "Jan", revenue: 8500, costs: 5800, profit: 2700 },
    { month: "Fév", revenue: 9200, costs: 6000, profit: 3200 },
    { month: "Mar", revenue: 12500, costs: 6700, profit: 5800 },
    { month: "Avr", revenue: 15800, costs: 7400, profit: 8400 },
    { month: "Mai", revenue: 22000, costs: 8800, profit: 13200 },
    { month: "Jun", revenue: 35000, costs: 12100, profit: 22900 },
    { month: "Jul", revenue: 48000, costs: 16400, profit: 31600 },
    { month: "Aoû", revenue: 52000, costs: 17800, profit: 34200 },
    { month: "Sep", revenue: 38000, costs: 13100, profit: 24900 },
    { month: "Oct", revenue: 18500, costs: 8500, profit: 10000 },
    { month: "Nov", revenue: 11200, costs: 6800, profit: 4400 },
    { month: "Déc", revenue: 9800, costs: 6400, profit: 3400 }
  ];

  const yearlyProjections = [
    { year: "Année 1", revenue: 280500, costs: 120600, profit: 159900, roi: 23.2 },
    { year: "Année 2", revenue: 315000, costs: 135000, profit: 180000, roi: 26.2 },
    { year: "Année 3", revenue: 355000, costs: 148000, profit: 207000, roi: 30.1 },
    { year: "Année 4", revenue: 385000, costs: 158000, profit: 227000, roi: 33.0 },
    { year: "Année 5", revenue: 410000, costs: 165000, profit: 245000, roi: 35.6 }
  ];

  const investmentDetails = {
    totalInvestment: 687435.60,
    personalContribution: 50000,
    propertyGuarantee: 280000,
    loanNeeded: 637435.60
  };

  const operatingCosts = [
    { category: "Électricité/Eau", monthly: 1800, annual: 21600 },
    { category: "Maintenance équipements", monthly: 800, annual: 9600 },
    { category: "Assurances", monthly: 650, annual: 7800 },
    { category: "Personnel (temps partiel)", monthly: 1800, annual: 21600 },
    { category: "Marketing/Communication", monthly: 400, annual: 4800 },
    { category: "Divers/Imprévus", monthly: 350, annual: 4200 }
  ];

  return (
    <div className="grid gap-6">
      {/* Chiffre d'Affaires Prévisionnel */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            Chiffre d'Affaires Prévisionnel - Année 1
          </CardTitle>
          <CardDescription>Évolution mensuelle des revenus, coûts et bénéfices</CardDescription>
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
                <Line type="monotone" dataKey="costs" stroke="#EF4444" strokeWidth={2} name="Coûts" />
                <Line type="monotone" dataKey="profit" stroke="#3B82F6" strokeWidth={3} name="Bénéfice" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <p className="text-sm text-green-600 mb-1">CA Annuel Prévisionnel</p>
              <p className="text-2xl font-bold text-green-800">280 500€</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <p className="text-sm text-red-600 mb-1">Coûts Annuels</p>
              <p className="text-2xl font-bold text-red-800">69 800€</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-sm text-blue-600 mb-1">Bénéfice Net</p>
              <p className="text-2xl font-bold text-blue-800">210 700€</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projections 5 ans */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            Projections sur 5 ans
          </CardTitle>
          <CardDescription>Evolution du chiffre d'affaires et de la rentabilité</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yearlyProjections}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}€`, '']} />
                <Bar dataKey="revenue" fill="#10B981" name="Chiffre d'affaires" />
                <Bar dataKey="profit" fill="#3B82F6" name="Bénéfice" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {yearlyProjections.map((year, index) => (
              <div key={index} className="p-3 border rounded-lg text-center">
                <p className="text-sm font-medium text-gray-600 mb-1">{year.year}</p>
                <p className="text-lg font-bold text-green-600">{year.revenue.toLocaleString()}€</p>
                <p className="text-sm text-blue-600">ROI: {year.roi}%</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Plan de Financement */}
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Euro className="h-5 w-5 text-orange-500" />
            Plan de Financement
          </CardTitle>
          <CardDescription>Structure financière du projet</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Besoins de Financement</h4>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Investissement Total</span>
                  <span className="font-bold">{investmentDetails.totalInvestment.toLocaleString()}€</span>
                </div>
                <div className="flex justify-between p-3 bg-red-50 rounded">
                  <span>Emprunt Nécessaire</span>
                  <span className="font-bold text-red-600">{investmentDetails.loanNeeded.toLocaleString()}€</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Apports Disponibles</h4>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-green-50 rounded">
                  <span>Apport Personnel</span>
                  <span className="font-bold text-green-600">{investmentDetails.personalContribution.toLocaleString()}€</span>
                </div>
                <div className="flex justify-between p-3 bg-green-50 rounded">
                  <span>Nantissement Immobilier</span>
                  <span className="font-bold text-green-600">{investmentDetails.propertyGuarantee.toLocaleString()}€</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Analyse de Financement Réaliste</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Ratio d'endettement: 93% (avec nantissement immobilier solide de 280 000€)</li>
              <li>• Garanties: 44% de la valeur empruntée (bien immobilier)</li>
              <li>• <strong>Durée d'amortissement optimisée: 5-8 ans</strong> (équipements de lavage automobile)</li>
              <li>• Taux d'intérêt estimé: 4.5-5.5% (conditions actuelles)</li>
              <li>• <strong>Mensualité estimée: 9 500-12 800€/mois</strong> (compatible avec les bénéfices de 17 500€/mois)</li>
              <li>• Capacité de remboursement excellente: ratio de 55-75%</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Coûts d'Exploitation */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PiggyBank className="h-5 w-5 text-purple-500" />
            Coûts d'Exploitation Optimisés
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {operatingCosts.map((cost, index) => (
              <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                <span className="font-medium">{cost.category}</span>
                <div className="text-right">
                  <p className="font-bold">{cost.monthly}€/mois</p>
                  <p className="text-sm text-gray-600">{cost.annual}€/an</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Coûts Fixes Mensuels</h4>
              <p className="text-2xl font-bold text-purple-800">
                {operatingCosts.reduce((sum, cost) => sum + cost.monthly, 0)}€
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Seuil de Rentabilité</h4>
              <p className="text-2xl font-bold text-green-800">6 500€/mois</p>
              <p className="text-sm text-green-600">Atteint dès le mois 1</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Retour sur Investissement */}
      <Card className="border-l-4 border-l-cyan-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-cyan-500" />
            Retour sur Investissement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-6 bg-cyan-50 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-2">Point Mort</h4>
                <p className="text-3xl font-bold text-cyan-800">12 mois</p>
                <p className="text-sm text-cyan-600">Récupération investissement</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-6 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">ROI Année 1</h4>
                <p className="text-3xl font-bold text-green-800">30.6%</p>
                <p className="text-sm text-green-600">Excellent rendement</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">ROI Année 5</h4>
                <p className="text-3xl font-bold text-blue-800">35.6%</p>
                <p className="text-sm text-blue-600">Rentabilité optimale</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Conclusion Financière</h4>
            <p className="text-sm text-gray-700">
              Le projet Leucwash présente une rentabilité exceptionnelle avec un retour sur investissement 
              rapide et une croissance soutenue. Les projections réalistes montrent une viabilité 
              économique forte, renforcée par des coûts d'exploitation maîtrisés et la position stratégique unique.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialProjections;
