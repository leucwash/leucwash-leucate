
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Zap, Shield, TrendingUp, CheckCircle, AlertCircle, Star } from "lucide-react";

const BusinessPlan = () => {
  const strategicObjectives = [
    {
      title: "Positionnement Premium",
      description: "Station de lavage haut de gamme avec services exclusifs",
      timeline: "Immédiat",
      kpis: ["Reconnaissance marque", "Prix premium accepté", "Fidélisation 70%"]
    },
    {
      title: "Monopole Lave-tapis",
      description: "Seul service de lave-tapis automatique sur 25km",
      timeline: "Dès ouverture",
      kpis: ["50 tapis/jour en été", "CA lave-tapis 54k€/an", "Marge 80%"]
    },
    {
      title: "Diversification Revenus",
      description: "4 sources de revenus complémentaires",
      timeline: "Optimisation continue",
      kpis: ["M'WASH3 59%", "Lave-tapis 24%", "Pistes HP 13%", "Aspiration 7%"]
    }
  ];

  const operationalStrategy = [
    {
      service: "M'WASH3 Premium",
      positioning: "Lavage automatique haute technologie",
      target: "Touristes et résidents exigeants",
      pricing: "8€ à 24€ selon programme",
      capacity: "90 lavages/jour max",
      revenue: "133 000€/an"
    },
    {
      service: "Lave-tapis Automatique",
      positioning: "Service unique et exclusif",
      target: "Professionnels + particuliers",
      pricing: "6€/tapis",
      capacity: "50 tapis/jour max",
      revenue: "54 000€/an"
    },
    {
      service: "2 Pistes Haute Pression",
      positioning: "Self-service économique",
      target: "Budget-conscients et bricoleurs",
      pricing: "2€ à 6€ selon programme",
      capacity: "150 passages/jour",
      revenue: "28 700€/an"
    },
    {
      service: "Aire Aspiration Complète",
      positioning: "Services complémentaires",
      target: "Tous types de clientèle",
      pricing: "1€ à 2€ par service",
      capacity: "200 usages/jour",
      revenue: "15 300€/an"
    }
  ];

  const riskAnalysis = [
    {
      risk: "Saisonnalité marquée",
      level: "Moyen",
      impact: "Revenus faibles hiver",
      mitigation: "Diversification services + clientèle professionnelle lave-tapis"
    },
    {
      risk: "Concurrence future",
      level: "Faible",
      impact: "Baisse parts de marché",
      mitigation: "Avance technologique + monopole lave-tapis + fidélisation"
    },
    {
      risk: "Pannes équipements",
      level: "Moyen",
      impact: "Perte revenus temporaire",
      mitigation: "Maintenance Istobal + SAV 24h + assurance bris machine"
    },
    {
      risk: "Évolution réglementaire",
      level: "Faible",
      impact: "Coûts supplémentaires",
      mitigation: "Équipements déjà aux normes + veille réglementaire"
    }
  ];

  const marketingStrategy = [
    {
      channel: "Marketing Digital",
      actions: ["Site web vitrine", "Google Ads géolocalisées", "Réseaux sociaux", "Avis Google"],
      budget: "150€/mois",
      roi: "Acquisition clients touristes"
    },
    {
      channel: "Partenariats Locaux",
      actions: ["Hôtels/Gîtes", "Campings", "Garages auto", "Concessions"],
      budget: "100€/mois",
      roi: "Clients récurrents + lave-tapis pro"
    },
    {
      channel: "Communication Locale",
      actions: ["Flyers distribués", "Affichage local", "Inauguration", "Presse locale"],
      budget: "100€/mois",
      roi: "Notoriété résidents permanents"
    }
  ];

  return (
    <div className="grid gap-6">
      {/* STRATÉGIE GLOBALE */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-500" />
            Stratégie Globale - 4 Services Premium
          </CardTitle>
          <CardDescription>Positionnement différenciant sur le marché de Leucate</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {strategicObjectives.map((objective, index) => (
              <div key={index} className="p-4 border rounded-lg bg-blue-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-blue-800">{objective.title}</h4>
                    <p className="text-sm text-blue-700 mt-1">{objective.description}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium">
                    {objective.timeline}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">KPIs clés:</p>
                  <div className="flex flex-wrap gap-2">
                    {objective.kpis.map((kpi, kpiIndex) => (
                      <span key={kpiIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-300">
            <h4 className="font-semibold text-blue-800 mb-2">Vision 2024-2029</h4>
            <p className="text-sm text-blue-700">
              Devenir LA référence du lavage automobile premium sur Leucate en combinant innovation technologique 
              (M'WASH3), services exclusifs (lave-tapis) et approche écoresponsable. Objectif: position dominante 
              et rentabilité durable avec 4 sources de revenus diversifiées.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* STRATÉGIE OPÉRATIONNELLE PAR SERVICE */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-green-500" />
            Stratégie Opérationnelle Détaillée
          </CardTitle>
          <CardDescription>Positioning et revenus par ligne de service</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {operationalStrategy.map((service, index) => (
              <div key={index} className="p-4 border rounded-lg bg-green-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-green-800">{service.service}</h4>
                    <p className="text-sm text-green-700">{service.positioning}</p>
                  </div>
                  <span className="font-bold text-green-600 text-lg">{service.revenue}</span>
                </div>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Cible: <span className="font-medium text-green-700">{service.target}</span></p>
                  </div>
                  <div>
                    <p className="text-gray-600">Tarif: <span className="font-medium text-green-700">{service.pricing}</span></p>
                  </div>
                  <div>
                    <p className="text-gray-600">Capacité: <span className="font-medium text-green-700">{service.capacity}</span></p>
                  </div>
                  <div>
                    <p className="text-green-800 font-medium">
                      {Math.round((parseInt(service.revenue.replace(/[^\d]/g, '')) / 224400) * 100)}% du CA
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-100 rounded-lg border border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">Avantages Concurrentiels</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• <strong>Technologie M'WASH3</strong> - Dernière génération Istobal</li>
                <li>• <strong>Monopole lave-tapis</strong> - Service unique 25km</li>
                <li>• <strong>Diversification</strong> - 4 sources de revenus</li>
                <li>• <strong>Écoresponsabilité</strong> - Recyclage 85% eau</li>
                <li>• <strong>Expérience premium</strong> - Éclairage LED spectaculaire</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-100 rounded-lg border border-blue-300">
              <h4 className="font-semibold text-blue-800 mb-2">Facteurs de Succès</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Localisation stratégique</strong> - Rond-point D627</li>
                <li>• <strong>Marché touristique</strong> - 80 000 personnes été</li>
                <li>• <strong>Faible concurrence</strong> - Équipements vieillissants</li>
                <li>• <strong>Services complémentaires</strong> - One-stop solution</li>
                <li>• <strong>Qualité Istobal</strong> - Maintenance fiable</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PLAN MARKETING */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-500" />
            Plan Marketing et Acquisition
          </CardTitle>
          <CardDescription>Budget 350€/mois pour acquisition et fidélisation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {marketingStrategy.map((strategy, index) => (
              <div key={index} className="p-4 border rounded-lg bg-purple-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-purple-800">{strategy.channel}</h4>
                    <p className="text-sm text-purple-700 mt-1">Budget: {strategy.budget}</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-xs font-medium">
                    {strategy.roi}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Actions prioritaires:</p>
                  <div className="flex flex-wrap gap-2">
                    {strategy.actions.map((action, actionIndex) => (
                      <span key={actionIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-100 rounded-lg text-center">
              <h4 className="font-semibold text-purple-800 mb-1">Budget Marketing Annuel</h4>
              <p className="text-2xl font-bold text-purple-900">4 200€</p>
              <p className="text-sm text-purple-600">1.9% du CA</p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg text-center">
              <h4 className="font-semibold text-green-800 mb-1">Clients Cibles</h4>
              <p className="text-2xl font-bold text-green-900">2 500</p>
              <p className="text-sm text-green-600">Nouveaux/an objectif</p>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg text-center">
              <h4 className="font-semibold text-blue-800 mb-1">Coût Acquisition</h4>
              <p className="text-2xl font-bold text-blue-900">1.68€</p>
              <p className="text-sm text-blue-600">Par nouveau client</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ANALYSE DES RISQUES */}
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-orange-500" />
            Analyse des Risques et Mitigation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskAnalysis.map((risk, index) => (
              <div key={index} className="p-4 border rounded-lg bg-orange-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-orange-800">{risk.risk}</h4>
                    <p className="text-sm text-orange-700 mt-1">Impact: {risk.impact}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    risk.level === 'Faible' ? 'bg-green-200 text-green-800' :
                    risk.level === 'Moyen' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {risk.level}
                  </span>
                </div>
                <div className="p-3 bg-white rounded border border-orange-200">
                  <p className="text-sm text-gray-700">
                    <strong>Mitigation:</strong> {risk.mitigation}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-orange-100 rounded-lg border border-orange-300">
            <h4 className="font-semibold text-orange-800 mb-2">🛡️ Plan de Continuité</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-orange-700 mb-1">Mesures Préventives</h5>
                <ul className="text-orange-600 space-y-1">
                  <li>• Contrat maintenance Istobal premium</li>
                  <li>• Assurance tous risques équipements</li>
                  <li>• Diversification revenus (4 services)</li>
                  <li>• Fonds de roulement 2 mois charges</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-orange-700 mb-1">Actions Correctives</h5>
                <ul className="text-orange-600 space-y-1">
                  <li>• SAV Istobal 24h intervention</li>
                  <li>• Tarifs adaptatifs selon saison</li>
                  <li>• Marketing renforcé si concurrence</li>
                  <li>• Services additionnels si besoin</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* OBJECTIFS ET INDICATEURS */}
      <Card className="border-l-4 border-l-yellow-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-yellow-500" />
            Objectifs et Indicateurs de Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-yellow-800">Objectifs Année 1</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-yellow-800">CA: 224 400€</p>
                    <p className="text-sm text-yellow-600">18 700€/mois moyen</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-yellow-800">Bénéfice: 125 760€</p>
                    <p className="text-sm text-yellow-600">Marge nette 56%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-yellow-800">ROI: 22.4%</p>
                    <p className="text-sm text-yellow-600">Retour 4.5 ans</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-blue-800">KPIs Opérationnels</h4>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-800">Taux de satisfaction</p>
                  <p className="text-sm text-blue-600">Objectif: >95% (enquêtes clients)</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-800">Fidélisation</p>
                  <p className="text-sm text-blue-600">Objectif: 70% clients récurrents</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-800">Disponibilité équipements</p>
                  <p className="text-sm text-blue-600">Objectif: >98% temps fonctionnement</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-100 to-green-100 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">🎯 SYNTHÈSE BUSINESS PLAN</h4>
            <p className="text-sm text-gray-700">
              Business plan solide basé sur <strong>4 services complémentaires</strong> et un positionnement premium. 
              Le monopole du lave-tapis et la technologie M'WASH3 garantissent une rentabilité élevée (ROI 22.4%) 
              et un retour sur investissement rapide (4.5 ans). Risques maîtrisés et croissance durable assurée.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessPlan;
