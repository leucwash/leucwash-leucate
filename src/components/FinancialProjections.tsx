
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { TrendingUp, Euro, Calculator, PiggyBank, AlertTriangle, CheckCircle } from "lucide-react";

const FinancialProjections = () => {
  // PROJECTIONS RÉVISÉES AVEC M'WASH3 + LAVE-TAPIS
  const monthlyRevenue = [
    { month: "Jan", revenue: 4500, costs: 6800, profit: -2300 },
    { month: "Fév", revenue: 5200, costs: 6800, profit: -1600 },
    { month: "Mar", revenue: 7000, costs: 6800, profit: 200 },
    { month: "Avr", revenue: 9800, costs: 6800, profit: 3000 },
    { month: "Mai", revenue: 13500, costs: 6800, profit: 6700 },
    { month: "Jun", revenue: 19500, costs: 6800, profit: 12700 },
    { month: "Jul", revenue: 25000, costs: 6800, profit: 18200 },
    { month: "Aoû", revenue: 26500, costs: 6800, profit: 19700 },
    { month: "Sep", revenue: 20000, costs: 6800, profit: 13200 },
    { month: "Oct", revenue: 12000, costs: 6800, profit: 5200 },
    { month: "Nov", revenue: 7200, costs: 6800, profit: 400 },
    { month: "Déc", revenue: 6300, costs: 6800, profit: -500 }
  ];

  const yearlyProjections = [
    { year: "Année 1", revenue: 156500, costs: 81600, profit: 74900, roi: 13.5 },
    { year: "Année 2", revenue: 170000, costs: 84000, profit: 86000, roi: 15.5 },
    { year: "Année 3", revenue: 183000, costs: 86500, profit: 96500, roi: 17.4 },
    { year: "Année 4", revenue: 195000, costs: 89000, profit: 106000, roi: 19.1 },
    { year: "Année 5", revenue: 206000, costs: 91500, profit: 114500, roi: 20.6 }
  ];

  // PLAN DE FINANCEMENT RÉVISÉ AVEC COÛTS EXACTS
  const investmentDetails = {
    totalInvestment: 560236, // Nouveau total exact
    equipmentIstobal: 305236, // M'WASH3 + lave-tapis + installation
    coverageGS: 65000, // Couverture GS Industrie
    genieCivil: 150000, // Génie civil
    directCuves: 10000, // Cuves + séparateur hydrocarbures
    localTechnique: 30000, // Local technique
    personalContribution: 50000, // Apport personnel
    propertyGuarantee: 280000, // GARANTIE (non déductible)
    loanNeeded: 510236, // Total - apport personnel
    monthlyPayment: 7120, // Sur 8 ans à 4.5%
    loanTerm: 8
  };

  // DÉTAIL DES INVESTISSEMENTS RÉVISÉ
  const investmentBreakdown = [
    { item: "Équipements Istobal M'WASH3 + Lave-tapis", amount: 305236, description: "Installation clés en main complète" },
    { item: "Couverture GS Industrie", amount: 65000, description: "Protection station moderne" },
    { item: "Génie Civil", amount: 150000, description: "Travaux VRD et fondations" },
    { item: "Direct Cuves + Séparateur", amount: 10000, description: "2 cuves récupération + traitement" },
    { item: "Local Technique", amount: 30000, description: "Bâtiment équipements" }
  ];

  const operatingCosts = [
    { category: "Loyer", monthly: 1000, annual: 12000 },
    { category: "Électricité/Eau", monthly: 1300, annual: 15600 },
    { category: "Maintenance équipements", monthly: 400, annual: 4800 },
    { category: "Assurances", monthly: 500, annual: 6000 },
    { category: "Personnel (temps partiel)", monthly: 1300, annual: 15600 },
    { category: "Marketing/Communication", monthly: 250, annual: 3000 },
    { category: "Divers/Imprévus", monthly: 350, annual: 4200 },
    { category: "Remboursement prêt", monthly: 7120, annual: 85440 }
  ];

  // ANALYSE FLUX DE TRÉSORERIE RÉVISÉE
  const cashFlowAnalysis = {
    averageMonthlyProfit: 6242,
    loanPayment: 7120,
    netCashFlow: -878, // Négatif les premiers mois
    breakEvenMonth: 3,
    paybackPeriod: "7.5 ans"
  };

  // NOUVELLES CAPACITÉS AVEC M'WASH3 + LAVE-TAPIS
  const technicalCapacity = {
    mwash3: "M'WASH3 - 90 lavages/jour",
    laveTapis: "Lave-tapis automatique - 50 tapis/jour",
    selfService: "2 pistes haute pression",
    aspirateurs: "2 aspirateurs puissants",
    programs: "6 programmes (8€ à 26€)",
    additionalRevenue: 3200 // Avec lave-tapis
  };

  return (
    <div className="grid gap-6">
      {/* ALERTE FINANCEMENT */}
      <Card className="border-l-4 border-l-orange-500 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            ATTENTION - FINANCEMENT CRITIQUE
          </CardTitle>
          <CardDescription className="text-orange-700">Projet techniquement viable mais financement à sécuriser</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-3">Financement Révisé</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Investissement total</span>
                  <span className="font-bold text-orange-700">560 236€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Apport personnel</span>
                  <span className="font-bold">50 000€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Garantie immobilière</span>
                  <span className="font-bold text-blue-600">280 000€</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-sm font-medium">Prêt nécessaire</span>
                  <span className="font-bold text-red-800">510 236€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Mensualité (8 ans)</span>
                  <span className="font-bold text-red-600">7 120€/mois</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-800 mb-3">Défi de Trésorerie</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">CA Année 1</span>
                  <span className="font-bold text-green-700">156 500€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Bénéfice net Année 1</span>
                  <span className="font-bold text-green-700">74 900€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Cash-flow mensuel moyen</span>
                  <span className="font-bold text-red-600">-878€</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-sm font-medium">ROI Année 1</span>
                  <span className="font-bold text-green-800">13.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Retour investissement</span>
                  <span className="font-bold text-blue-600">7.5 ans</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-300">
            <h4 className="font-semibold text-red-800 mb-2">⚠️ POINTS D'ATTENTION CRITIQUES</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-red-700 mb-1">Difficultés</h5>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• Prêt élevé : 510 236€ (91% de l'investissement)</li>
                  <li>• Mensualité lourde : 7 120€ vs profit moyen 6 242€</li>
                  <li>• Cash-flow négatif premiers mois</li>
                  <li>• Ratio d'endettement limite</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-red-700 mb-1">Solutions</h5>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• Négocier durée prêt (10-12 ans)</li>
                  <li>• Différé de remboursement 6 mois</li>
                  <li>• Financement complémentaire équipements</li>
                  <li>• Recherche subventions/aides</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* DÉTAIL INVESTISSEMENT RÉVISÉ */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            Détail Investissement - M'WASH3 + Lave-tapis
          </CardTitle>
          <CardDescription>Coûts réels et répartition exacte</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {investmentBreakdown.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg bg-blue-50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-blue-800">{item.item}</h4>
                  <span className="font-bold text-blue-600">{item.amount.toLocaleString()}€</span>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-300">
            <h4 className="font-semibold text-blue-800 mb-2">Structure Financière</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-sm text-blue-600">Investissement total</p>
                <p className="text-2xl font-bold text-blue-800">560 236€</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-green-600">Apport personnel</p>
                <p className="text-2xl font-bold text-green-800">50 000€</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-red-600">Prêt nécessaire</p>
                <p className="text-2xl font-bold text-red-800">510 236€</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CONFIGURATION TECHNIQUE M'WASH3 */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-500" />
            Configuration M'WASH3 + Lave-tapis
          </CardTitle>
          <CardDescription>Équipement premium avec services diversifiés</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3">Équipement Principal - M'WASH3</h4>
              <ul className="text-sm text-purple-700 space-y-2">
                <li>• <strong>Portique M'WASH3 Istobal</strong> - Dernière technologie</li>
                <li>• <strong>6 programmes de lavage</strong> - De 8€ à 26€</li>
                <li>• <strong>Capacité 90 lavages/jour</strong> - Performance optimale</li>
                <li>• <strong>Éclairage LED spectaculaire</strong> - Attractivité maximale</li>
                <li>• <strong>Système recyclage avancé</strong> - Récupération hydrocarbures</li>
              </ul>
            </div>
            
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-pink-800 mb-3">Innovation - Lave-tapis Automatique</h4>
              <ul className="text-sm text-pink-700 space-y-2">
                <li>• <strong>Service unique sur Leucate</strong> - Monopole total</li>
                <li>• <strong>50 tapis/jour max</strong> - Revenus additionnels</li>
                <li>• <strong>Tarif 6€/tapis</strong> - Marge excellente</li>
                <li>• <strong>Clientèle professionnelle</strong> - Hotels, commerces</li>
                <li>• <strong>Fonctionnement automatique</strong> - Peu de personnel</li>
              </ul>
            </div>
            
            <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
              <h4 className="font-semibold text-cyan-800 mb-3">Services Complémentaires</h4>
              <ul className="text-sm text-cyan-700 space-y-2">
                <li>• <strong>2 pistes self-service</strong> - Haute pression + mousse</li>
                <li>• <strong>2 aspirateurs puissants</strong> - Revenus réguliers</li>
                <li>• <strong>Distributeur produits</strong> - Parfums, chiffons</li>
                <li>• <strong>Station de gonflage</strong> - Service additionnel</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PROJECTIONS FINANCIÈRES */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-green-500" />
            Projections Financières - M'WASH3 + Lave-tapis
          </CardTitle>
          <CardDescription>Revenus diversifiés mais charges élevées</CardDescription>
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
              <p className="text-2xl font-bold text-green-800">156 500€</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <p className="text-sm text-red-600 mb-1">Charges Totales</p>
              <p className="text-2xl font-bold text-red-800">167 040€</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-sm text-blue-600 mb-1">Bénéfice Net</p>
              <p className="text-2xl font-bold text-blue-800">74 900€</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg text-center">
              <p className="text-sm text-orange-600 mb-1">Cash-Flow Net</p>
              <p className="text-2xl font-bold text-orange-800">-10 540€</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ANALYSE BANCAIRE RÉVISÉE */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Euro className="h-5 w-5 text-red-500" />
            Analyse Bancaire - Défis et Solutions
          </CardTitle>
          <CardDescription>Financement complexe nécessitant négociation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-red-800">Ratios Critiques</h4>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Ratio d'endettement</span>
                    <span className="font-bold text-red-600">91%</span>
                  </div>
                  <p className="text-xs text-red-600 mt-1">Très élevé (norme &lt; 70%)</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Couverture garantie</span>
                    <span className="font-bold text-orange-600">55%</span>
                  </div>
                  <p className="text-xs text-orange-600 mt-1">280k€ sur 510k€ de prêt</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Capacité remboursement</span>
                    <span className="font-bold text-yellow-600">6 242€/mois</span>
                  </div>
                  <p className="text-xs text-yellow-600 mt-1">Mensualité: 7 120€ (114%)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-blue-800">Solutions Financement</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-800">Étalement 10-12 ans</p>
                  <p className="text-sm text-blue-700">Mensualité: 5 100-5 900€</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-800">Différé 6 mois</p>
                  <p className="text-sm text-green-700">Démarrage sans remboursement</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium text-purple-800">Leasing équipement</p>
                  <p className="text-sm text-purple-700">305k€ en location-vente</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* COÛTS D'EXPLOITATION COMPLETS */}
      <Card className="border-l-4 border-l-indigo-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PiggyBank className="h-5 w-5 text-indigo-500" />
            Coûts d'Exploitation + Remboursement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {operatingCosts.map((cost, index) => (
              <div key={index} className={`flex justify-between items-center p-3 border rounded-lg ${
                cost.category === 'Remboursement prêt' ? 'bg-red-50 border-red-200' : ''
              }`}>
                <span className="font-medium">{cost.category}</span>
                <div className="text-right">
                  <p className={`font-bold ${
                    cost.category === 'Remboursement prêt' ? 'text-red-600' : ''
                  }`}>{cost.monthly}€/mois</p>
                  <p className="text-sm text-gray-600">{cost.annual}€/an</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-2">Charges Exploitation</h4>
              <p className="text-2xl font-bold text-indigo-800">5 100€/mois</p>
              <p className="text-sm text-indigo-600">61 200€/an</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Remboursement Prêt</h4>
              <p className="text-2xl font-bold text-red-800">7 120€/mois</p>
              <p className="text-sm text-red-600">85 440€/an</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Total Mensuel</h4>
              <p className="text-2xl font-bold text-orange-800">12 220€/mois</p>
              <p className="text-sm text-orange-600">146 640€/an</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PROJECTION 5 ANS */}
      <Card className="border-l-4 border-l-yellow-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-yellow-500" />
            Projection 5 Ans - Viabilité à Long Terme
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {yearlyProjections.map((year, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50">
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
          
          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-100 to-red-100 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">🎯 CONCLUSION PROJET DÉLICAT</h4>
            <p className="text-sm text-gray-700">
              Le projet M'WASH3 + lave-tapis est <strong>techniquement excellent et rentable</strong>, mais le 
              financement à 91% crée des difficultés de trésorerie. <strong>Solutions indispensables :</strong> 
              étalement 10-12 ans, différé remboursement, ou financement complémentaire équipements.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialProjections;
