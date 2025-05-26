
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb, Users, Briefcase, Shield, Award } from "lucide-react";

const BusinessPlan = () => {
  const strategicObjectives = [
    {
      title: "Monopole Technologique Absolu",
      description: "M'WASH3 + lave-tapis automatique = seuls services modernes sur Leucate",
      timeline: "Immédiat"
    },
    {
      title: "Rentabilité Rapide",
      description: "Équilibre dès le 3ème mois grâce aux revenus diversifiés (lavage + tapis)",
      timeline: "3 mois"
    },
    {
      title: "Domination B2B",
      description: "Sécuriser 700 lavages + 480 tapis/mois via partenariats professionnels",
      timeline: "6 mois"
    }
  ];

  const marketingStrategy = [
    {
      action: "Signalétique Premium D627",
      description: "Panneau LED M'WASH3 + indication lave-tapis unique",
      budget: "6 000€",
      priority: "high"
    },
    {
      action: "Partenariats B2B Premium",
      description: "Contrats garages, hôtels, commerces pour lavage + tapis",
      budget: "3 000€",
      priority: "high"
    },
    {
      action: "Digital Marketing Premium",
      description: "Site web + Google Ads + réseaux sociaux avec vidéos",
      budget: "2 500€",
      priority: "medium"
    },
    {
      action: "Démonstrations Professionnelles",
      description: "Formation lave-tapis pour clients B2B",
      budget: "1 500€",
      priority: "medium"
    }
  ];

  const riskAnalysis = [
    {
      risk: "Financement Complexe",
      impact: "Élevé",
      mitigation: "Étalement prêt 10-12 ans, différé remboursement, leasing équipements",
      color: "red"
    },
    {
      risk: "Charges Financières Lourdes",
      impact: "Élevé",
      mitigation: "Diversification revenus, optimisation planning, partenariats garantis",
      color: "red"
    },
    {
      risk: "Concurrence Future",
      impact: "Faible",
      mitigation: "Barrière entrée 560k€, monopole lave-tapis, fidélisation B2B",
      color: "green"
    },
    {
      risk: "Technique",
      impact: "Faible",
      mitigation: "Contrat maintenance Istobal, formation, garanties équipements",
      color: "green"
    }
  ];

  const operationalPlan = [
    {
      phase: "Phase 1 - Construction",
      duration: "4 mois",
      actions: ["Génie civil", "Installation M'WASH3", "Installation lave-tapis", "Tests et formation"]
    },
    {
      phase: "Phase 2 - Lancement Premium",
      duration: "2 mois",
      actions: ["Signalétique premium", "Contrats B2B", "Formation équipes", "Ouverture officielle"]
    },
    {
      phase: "Phase 3 - Optimisation",
      duration: "6 mois",
      actions: ["Fidélisation clientèle", "Optimisation lave-tapis", "Extension services", "Rentabilité max"]
    }
  ];

  const stakeholderSupport = [
    {
      entity: "Mairie de Leucate",
      status: "Projet M'WASH3 + lave-tapis validé - Innovation technologique soutenue",
      importance: "Critique"
    },
    {
      entity: "Zone Artisanale + Hôtels",
      status: "5 partenaires B2B confirmés pour lavage + 6 pour lave-tapis",
      importance: "Critique"
    },
    {
      entity: "Istobal France",
      status: "Support M'WASH3 + formation lave-tapis + maintenance garantie",
      importance: "Important"
    }
  ];

  // Configuration technique M'WASH3 + lave-tapis
  const technicalConfig = {
    equipment: "M'WASH3 Istobal + Lave-tapis automatique",
    programs: 6,
    capacity: "90 lavages/jour + 50 tapis/jour",
    complement: "2 pistes self + 2 aspirateurs + gonflage",
    investment: "305 236€ équipement clés en main"
  };

  // Stratégie tarifaire premium
  const pricingStrategy = [
    { program: "Lavage Express", price: "8€", duration: "3 min", description: "Lavage + rinçage M'WASH3" },
    { program: "Lavage Standard", price: "12€", duration: "5 min", description: "Prélavage + lavage + séchage" },
    { program: "Lavage Premium", price: "16€", duration: "7 min", description: "Programme complet + cire" },
    { program: "Lavage VIP Céramique", price: "26€", duration: "10 min", description: "Finition céramique 3 mois" },
    { program: "Lave-tapis Standard", price: "6€", duration: "Auto", description: "Nettoyage automatique complet" },
    { program: "Forfait Lavage + Tapis", price: "18€", duration: "Variable", description: "Combiné véhicule + tapis" }
  ];

  return (
    <div className="grid gap-6">
      {/* CONFIGURATION TECHNIQUE PREMIUM */}
      <Card className="border-l-4 border-l-blue-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-500" />
            Configuration M'WASH3 + Lave-tapis - Technologie Premium
          </CardTitle>
          <CardDescription>Solution technique innovante et monopolistique</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">M'WASH3 Istobal Premium</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Technologie</span>
                  <span className="font-bold text-blue-700">M'WASH3 Dernière génération</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Programmes</span>
                  <span className="font-bold text-blue-700">6 (8€ à 26€)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Capacité quotidienne</span>
                  <span className="font-bold text-green-600">90 lavages/jour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Finition céramique</span>
                  <span className="font-bold text-purple-600">Exclusive 26€</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3">Lave-tapis Automatique</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Service unique</span>
                  <span className="font-bold text-purple-700">Premier sur Leucate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Capacité</span>
                  <span className="font-bold text-purple-700">50 tapis/jour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Prix tapis</span>
                  <span className="font-bold text-green-600">6€/tapis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">CA mensuel tapis</span>
                  <span className="font-bold text-orange-600">2 880€ minimum</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* STRATÉGIE TARIFAIRE PREMIUM */}
      <Card className="border-l-4 border-l-green-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-500" />
            Stratégie Tarifaire Premium M'WASH3 + Lave-tapis
          </CardTitle>
          <CardDescription>Gamme complète avec services exclusifs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {pricingStrategy.map((program, index) => (
              <div key={index} className={`p-4 border-2 rounded-lg hover:shadow-md transition-all ${
                program.program.includes('tapis') || program.program.includes('Forfait') 
                  ? 'border-purple-300 bg-gradient-to-r from-white to-purple-50' 
                  : 'border-green-100 bg-gradient-to-r from-white to-green-50'
              }`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`font-semibold ${
                    program.program.includes('tapis') || program.program.includes('Forfait') 
                      ? 'text-purple-800' : 'text-green-800'
                  }`}>{program.program}</h4>
                  <div className="text-right">
                    <Badge className={`${
                      program.program.includes('tapis') || program.program.includes('Forfait') 
                        ? 'bg-purple-500 text-white' : 'bg-green-500 text-white'
                    } mb-1`}>{program.price}</Badge>
                    <p className="text-xs text-gray-600">{program.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-purple-100 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Positionnement Tarifaire Premium</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-green-700 mb-1">Ticket Moyen Optimisé</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• <strong>Résidents :</strong> 13€ (Standard/Premium)</li>
                  <li>• <strong>Touristes :</strong> 18€ (Premium/VIP)</li>
                  <li>• <strong>B2B lavage :</strong> 11€ (Forfaits)</li>
                  <li>• <strong>B2B tapis :</strong> 6€ (Automatique)</li>
                  <li>• <strong>Moyenne générale :</strong> 13,5€</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-purple-700 mb-1">Avantages Exclusifs</h5>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• <strong>Finition céramique M'WASH3</strong> (unique région)</li>
                  <li>• <strong>Lave-tapis automatique</strong> (monopole total)</li>
                  <li>• <strong>Forfaits combinés</strong> (lavage + tapis)</li>
                  <li>• <strong>Technologie spectaculaire</strong> (éclairage LED)</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SOUTIEN DES PARTIES PRENANTES */}
      <Card className="border-l-4 border-l-fuchsia-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-fuchsia-50 to-pink-50">
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-fuchsia-500" />
            Soutien Institutionnel et Partenaires Premium
          </CardTitle>
          <CardDescription>Validation et engagements pour projet innovant</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {stakeholderSupport.map((support, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded-lg border border-fuchsia-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-fuchsia-800">{support.entity}</h4>
                  <Badge className={`${support.importance === 'Critique' ? 'bg-fuchsia-500' : 'bg-pink-400'} text-white`}>
                    {support.importance}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{support.status}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* OBJECTIFS STRATÉGIQUES */}
      <Card className="border-l-4 border-l-purple-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-fuchsia-50">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-purple-500" />
            Objectifs Stratégiques - M'WASH3 + Lave-tapis
          </CardTitle>
          <CardDescription>Vision monopolistique et mesurable</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {strategicObjectives.map((objective, index) => (
              <div key={index} className="p-4 border-2 border-purple-100 rounded-lg hover:shadow-md hover:border-purple-300 transition-all bg-gradient-to-r from-white to-purple-50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-purple-800">{objective.title}</h4>
                  <Badge variant="outline" className="border-purple-300 text-purple-700">{objective.timeline}</Badge>
                </div>
                <p className="text-sm text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* STRATÉGIE MARKETING PREMIUM */}
      <Card className="border-l-4 border-l-orange-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-orange-500" />
            Stratégie Marketing Premium
          </CardTitle>
          <CardDescription>Communication différenciée pour services exclusifs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {marketingStrategy.map((strategy, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                strategy.priority === 'high' ? 'bg-gradient-to-br from-orange-100 to-red-100 border-orange-300' :
                'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200'
              }`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`font-semibold ${
                    strategy.priority === 'high' ? 'text-orange-800' : 'text-yellow-800'
                  }`}>{strategy.action}</h4>
                  <Badge className={`${
                    strategy.priority === 'high' ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-white'
                  }`}>{strategy.budget}</Badge>
                </div>
                <p className="text-sm text-gray-700">{strategy.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg border border-orange-200">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-orange-800">Budget Marketing Premium Année 1</span>
              <span className="text-xl font-bold text-orange-700">13 000€</span>
            </div>
            <p className="text-sm text-orange-600 mt-1">Investment adapté aux services premium et exclusifs</p>
          </div>
        </CardContent>
      </Card>

      {/* PLAN OPÉRATIONNEL */}
      <Card className="border-l-4 border-l-indigo-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-indigo-500" />
            Plan Opérationnel M'WASH3 + Lave-tapis
          </CardTitle>
          <CardDescription>Déploiement sur 12 mois avec formation technique</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {operationalPlan.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-sm font-semibold text-indigo-600 border-2 border-indigo-300">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-indigo-800">{phase.phase}</h4>
                      <Badge variant="secondary" className="bg-indigo-200 text-indigo-800">{phase.duration}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {phase.actions.map((action, actionIndex) => (
                        <div key={actionIndex} className="text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-2 py-1 rounded border border-indigo-200">
                          {action}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < operationalPlan.length - 1 && (
                  <div className="absolute left-4 top-8 w-px h-6 bg-indigo-300"></div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ANALYSE DES RISQUES */}
      <Card className="border-l-4 border-l-red-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-red-500" />
            Analyse des Risques - Configuration Premium
          </CardTitle>
          <CardDescription>Identification et stratégies de mitigation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskAnalysis.map((risk, index) => (
              <div key={index} className="p-4 border-2 border-red-100 rounded-lg hover:border-red-300 transition-all bg-gradient-to-r from-white to-red-50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-red-800">{risk.risk}</h4>
                  <Badge 
                    variant="outline" 
                    className={`
                      ${risk.color === 'red' ? 'border-red-300 text-red-700 bg-red-50' : ''}
                      ${risk.color === 'yellow' ? 'border-yellow-300 text-yellow-700 bg-yellow-50' : ''}
                      ${risk.color === 'green' ? 'border-green-300 text-green-700 bg-green-50' : ''}
                    `}
                  >
                    Impact {risk.impact}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-red-700">Mitigation: </span>
                  {risk.mitigation}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* RESSOURCES HUMAINES */}
      <Card className="border-l-4 border-l-cyan-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-cyan-500" />
            Plan Ressources Humaines - Services Premium
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-cyan-800">Phase de Lancement</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between p-2 bg-gradient-to-r from-cyan-50 to-blue-50 rounded">
                  <span>Gérant/Responsable</span>
                  <span className="font-medium text-cyan-700">1 poste (vous)</span>
                </li>
                <li className="flex justify-between p-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded">
                  <span>Technicien lave-tapis</span>
                  <span className="font-medium text-cyan-700">Formation Istobal incluse</span>
                </li>
                <li className="flex justify-between p-2 bg-gradient-to-r from-cyan-50 to-blue-50 rounded">
                  <span>Personnel additionnel</span>
                  <span className="font-medium text-cyan-700">Temps partiel selon affluence</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-800">Évolution Année 2-3</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between p-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded">
                  <span>Extension services</span>
                  <span className="font-medium text-purple-700">Detailing, vente produits</span>
                </li>
                <li className="flex justify-between p-2 bg-gradient-to-r from-pink-50 to-purple-50 rounded">
                  <span>Personnel élargi</span>
                  <span className="font-medium text-purple-700">1-2 employés spécialisés</span>
                </li>
                <li className="flex justify-between p-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded">
                  <span>Coût salarial</span>
                  <span className="font-medium text-purple-700">1 300€/mois année 1</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessPlan;
