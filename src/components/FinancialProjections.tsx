import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { TrendingUp, Euro, Calculator, PiggyBank, AlertTriangle } from "lucide-react";

const FinancialProjections = () => {
  // Chiffres révisés de manière conservatrice et réaliste
  const monthlyRevenue = [
    { month: "Jan", revenue: 4200, costs: 6500, profit: -2300 },
    { month: "Fév", revenue: 4800, costs: 6500, profit: -1700 },
    { month: "Mar", revenue: 6500, costs: 6500, profit: 0 },
    { month: "Avr", revenue: 8200, costs: 6500, profit: 1700 },
    { month: "Mai", revenue: 12000, costs: 6500, profit: 5500 },
    { month: "Jun", revenue: 18500, costs: 6500, profit: 12000 },
    { month: "Jul", revenue: 24000, costs: 6500, profit: 17500 },
    { month: "Aoû", revenue: 26000, costs: 6500, profit: 19500 },
    { month: "Sep", revenue: 19000, costs: 6500, profit: 12500 },
    { month: "Oct", revenue: 9500, costs: 6500, profit: 3000 },
    { month: "Nov", revenue: 5800, costs: 6500, profit: -700 },
    { month: "Déc", revenue: 5200, costs: 6500, profit: -1300 }
  ];

  const yearlyProjections = [
    { year: "Année 1", revenue: 143700, costs: 78000, profit: 65700, roi: 9.6 },
    { year: "Année 2", revenue: 165000, costs: 81000, profit: 84000, roi: 12.2 },
    { year: "Année 3", revenue: 185000, costs: 84000, profit: 101000, roi: 14.7 },
    { year: "Année 4", revenue: 205000, costs: 87000, profit: 118000, roi: 17.2 },
    { year: "Année 5", revenue: 225000, costs: 90000, profit: 135000, roi: 19.6 }
  ];

  const investmentDetails = {
    totalInvestment: 687435.60,
    personalContribution: 50000,
    propertyGuarantee: 280000,
    loanNeeded: 637435.60
  };

  const operatingCosts = [
    { category: "Loyer", monthly: 1000, annual: 12000 },
    { category: "Électricité/Eau", monthly: 1800, annual: 21600 },
    { category: "Maintenance équipements", monthly: 500, annual: 6000 },
    { category: "Assurances", monthly: 650, annual: 7800 },
    { category: "Personnel (temps partiel)", monthly: 1800, annual: 21600 },
    { category: "Marketing/Communication", monthly: 400, annual: 4800 },
    { category: "Divers/Imprévus", monthly: 350, annual: 4200 }
  ];

  // Analyse de fréquentation D627
  const d627Traffic = {
    dailyAverage: 3200,
    annualTraffic: 1168000,
    seasonalVariation: {
      winter: 2400,
      spring: 3000,
      summer: 4800,
      autumn: 2600
    },
    conversionRate: 0.8, // 0.8% du trafic se convertit en clients
    dailyClients: {
      winter: 19,
      spring: 24,
      summer: 38,
      autumn: 21
    }
  };

  return (
    <div className="grid gap-6">
      {/* ALERTE COHÉRENCE CHIFFRES */}
      <Card className="border-l-4 border-l-red-500 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-800">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            RÉVISION CONSERVATRICE DES PROJECTIONS
          </CardTitle>
          <CardDescription className="text-red-700">Chiffres réajustés selon retour expert-comptable</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Corrections Appliquées</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• CA Année 1 révisé : 143 700€ (au lieu de 280 500€)</li>
                <li>• Prise en compte saisonnalité réelle</li>
                <li>• 3 mois déficitaires en début d'activité</li>
                <li>• Taux de conversion plus conservateur</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">Financement Bancaire</h4>
              <div className="space-y-2">
                <p className="text-sm text-red-700">
                  <strong>637 435,60€</strong> (et non 357 435,60€)
                </p>
                <p className="text-xs text-red-600">
                  = Investissement total (687 435,60€) - Apport personnel (50 000€)
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analyse Fréquentation D627 */}
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-500" />
            Analyse de Fréquentation Route D627
          </CardTitle>
          <CardDescription>Données de trafic et conversion réaliste</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-orange-50 rounded-lg text-center">
              <p className="text-sm text-orange-600 mb-1">Trafic Journalier Moyen</p>
              <p className="text-2xl font-bold text-orange-800">{d627Traffic.dailyAverage}</p>
              <p className="text-xs text-orange-600">véhicules/jour</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-sm text-blue-600 mb-1">Trafic Annuel</p>
              <p className="text-2xl font-bold text-blue-800">{d627Traffic.annualTraffic.toLocaleString()}</p>
              <p className="text-xs text-blue-600">véhicules/an</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <p className="text-sm text-green-600 mb-1">Taux de Conversion</p>
              <p className="text-2xl font-bold text-green-800">{d627Traffic.conversionRate}%</p>
              <p className="text-xs text-green-600">du trafic</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-3">
            {Object.entries(d627Traffic.seasonalVariation).map(([season, traffic], index) => (
              <div key={index} className="p-3 border rounded-lg text-center">
                <p className="text-sm font-medium text-gray-600 mb-1">{season === 'winter' ? 'Hiver' : season === 'spring' ? 'Printemps' : season === 'summer' ? 'Été' : 'Automne'}</p>
                <p className="text-lg font-bold text-blue-600">{traffic}</p>
                <p className="text-xs text-gray-500">véhicules/jour</p>
                <p className="text-sm text-green-600 mt-1">
                  ~{d627Traffic.dailyClients[season as keyof typeof d627Traffic.dailyClients]} clients/jour
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Méthodologie de Calcul</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Données basées sur comptages Conseil Départemental de l'Aude</li>
              <li>• Taux de conversion 0.8% : 1 véhicule sur 125 utilise le service</li>
              <li>• Variation saisonnière : x2 en été vs hiver</li>
              <li>• Ticket moyen : 12€ (mix des services)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Chiffre d'Affaires Prévisionnel RÉVISÉ */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            Chiffre d'Affaires Prévisionnel RÉVISÉ - Année 1
          </CardTitle>
          <CardDescription>Projections conservatrices basées sur D627</CardDescription>
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
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-sm text-blue-600 mb-1">CA Annuel Révisé</p>
              <p className="text-2xl font-bold text-blue-800">143 700€</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <p className="text-sm text-red-600 mb-1">Coûts Annuels</p>
              <p className="text-2xl font-bold text-red-800">78 000€</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <p className="text-sm text-green-600 mb-1">Bénéfice Net</p>
              <p className="text-2xl font-bold text-green-800">65 700€</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Analyse Critique</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• <strong>ROI Année 1 : 9.6%</strong> (plus réaliste que 21.5%)</li>
              <li>• 3 mois déficitaires normaux en phase de lancement</li>
              <li>• Seuil de rentabilité atteint au mois 3</li>
              <li>• Remboursement prêt difficile avec ces chiffres</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Plan de Financement RÉVISÉ */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Euro className="h-5 w-5 text-red-500" />
            Plan de Financement - ANALYSE CRITIQUE
          </CardTitle>
          <CardDescription>Structure financière et viabilité</CardDescription>
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
                  <span>Financement Bancaire Nécessaire</span>
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
          
          <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-800 mb-2">⚠️ PROBLÉMATIQUE FINANCIÈRE</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• <strong>Ratio d'endettement : 93%</strong> (très élevé pour les banques)</li>
              <li>• <strong>Mensualité estimée : 8 500-11 200€/mois</strong> (sur 7 ans à 4.5-5.5%)</li>
              <li>• <strong>Capacité de remboursement insuffisante</strong> : 5 475€/mois en moyenne</li>
              <li>• <strong>Déficit les 3 premiers mois</strong></li>
              <li>• <strong>Projet difficilement finançable en l'état</strong></li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Coûts d'Exploitation */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PiggyBank className="h-5 w-5 text-purple-500" />
            Coûts d'Exploitation Détaillés
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
                <p className="text-3xl font-bold text-cyan-800">14 mois</p>
                <p className="text-sm text-cyan-600">Récupération investissement</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-6 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">ROI Année 1</h4>
                <p className="text-3xl font-bold text-green-800">21.5%</p>
                <p className="text-sm text-green-600">Excellent rendement</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">ROI Année 5</h4>
                <p className="text-3xl font-bold text-blue-800">33.9%</p>
                <p className="text-sm text-blue-600">Rentabilité optimale</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Conclusion Financière</h4>
            <p className="text-sm text-gray-700">
              Le projet Leucwash présente une rentabilité solide avec un retour sur investissement 
              progressif et une croissance soutenue. Les projections réalistes montrent une viabilité 
              économique forte, malgré l'ajout du loyer, renforcée par des coûts d'exploitation maîtrisés et la position stratégique unique.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialProjections;
