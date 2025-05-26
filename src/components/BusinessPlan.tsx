
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb, Users, Briefcase, Shield, Award } from "lucide-react";

const BusinessPlan = () => {
  const strategicObjectives = [
    {
      title: "Monopole Local Confirmé",
      description: "Première et seule station moderne sur Leucate avec technologie Istobal",
      timeline: "Immédiat"
    },
    {
      title: "Rentabilité Rapide",
      description: "Atteindre l'équilibre dès le 3ème mois et générer 70 700€ de bénéfice année 1",
      timeline: "3 mois"
    },
    {
      title: "Fidélisation B2B",
      description: "Sécuriser 650 lavages/mois via partenariats professionnels locaux",
      timeline: "6 mois"
    }
  ];

  const marketingStrategy = [
    {
      action: "Signalétique D627",
      description: "Panneau LED visible, éclairage attractif, indication services",
      budget: "5 000€",
      priority: "high"
    },
    {
      action: "Partenariats B2B",
      description: "Accords garages locaux, forfaits entreprises zone artisanale",
      budget: "2 000€",
      priority: "high"
    },
    {
      action: "Google Ads Local",
      description: "Géolocalisation Leucate + communes proches",
      budget: "1 500€",
      priority: "medium"
    },
    {
      action: "Réseaux Sociaux",
      description: "Facebook/Instagram communauté locale et touristique",
      budget: "1 000€",
      priority: "medium"
    }
  ];

  const riskAnalysis = [
    {
      risk: "Saturation 1 Portique",
      impact: "Moyen",
      mitigation: "Planning optimisé, créneaux B2B heures creuses, extension future",
      color: "yellow"
    },
    {
      risk: "Saisonnalité",
      impact: "Moyen",
      mitigation: "Partenariats B2B, fidélisation résidents, services complémentaires",
      color: "yellow"
    },
    {
      risk: "Concurrence Future",
      impact: "Faible",
      mitigation: "Avantage premier entrant, position géographique, relation clients",
      color: "green"
    },
    {
      risk: "Technique",
      impact: "Faible",
      mitigation: "Contrat maintenance Istobal, formation, pièces détachées",
      color: "green"
    }
  ];

  const operationalPlan = [
    {
      phase: "Phase 1 - Construction",
      duration: "3 mois",
      actions: ["Travaux VRD optimisés", "Installation 1 portique Istobal", "Mise en service", "Tests et ajustements"]
    },
    {
      phase: "Phase 2 - Lancement",
      duration: "2 mois",
      actions: ["Campagne signalétique", "Partenariats B2B", "Ouverture officielle", "Ajustements tarifaires"]
    },
    {
      phase: "Phase 3 - Optimisation",
      duration: "7 mois",
      actions: ["Fidélisation clientèle", "Optimisation planning", "Services additionnels", "Préparation extension"]
    }
  ];

  const stakeholderSupport = [
    {
      entity: "Mairie de Leucate",
      status: "Projet validé - Soutien développement économique local",
      importance: "Critique"
    },
    {
      entity: "Zone Artisanale",
      status: "2 garages + entreprises nautiques favorables aux partenariats",
      importance: "Important"
    },
    {
      entity: "Istobal France",
      status: "Support technique et commercial confirmé",
      importance: "Important"
    }
  ];

  // Configuration technique 1 portique
  const technicalConfig = {
    equipment: "1 Portique Istobal M'22",
    programs: 5,
    capacity: "86 lavages/jour max",
    complement: "2 pistes self + 2 aspirateurs",
    investment: "385 000€ équipement"
  };

  // Stratégie tarifaire optimisée
  const pricingStrategy = [
    { program: "Lavage Express", price: "8€", duration: "3 min", description: "Lavage + rinçage" },
    { program: "Lavage Standard", price: "12€", duration: "5 min", description: "Prélavage + lavage + séchage" },
    { program: "Lavage Premium", price: "16€", duration: "7 min", description: "Programme complet + cire" },
    { program: "Lavage VIP", price: "24€", duration: "10 min", description: "Finition céramique 2 mois" }
  ];

  return (
    <div className="grid gap-6">
      {/* CONFIGURATION TECHNIQUE */}
      <Card className="border-l-4 border-l-blue-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-500" />
            Configuration Technique - 1 Portique Optimisé
          </CardTitle>
          <CardDescription>Solution technique viable et évolutive</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">Équipement Principal</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Portique Istobal</span>
                  <span className="font-bold text-blue-700">M'22 Dernière génération</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Programmes disponibles</span>
                  <span className="font-bold text-blue-700">5 (8€ à 24€)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Capacité théorique</span>
                  <span className="font-bold text-green-600">86 lavages/jour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Capacité réaliste été</span>
                  <span className="font-bold text-orange-600">85 lavages/jour</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
              <h4 className="font-semibold text-cyan-800 mb-3">Services Complémentaires</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Pistes self-service</span>
                  <span className="font-bold text-cyan-700">2 pistes HP + mousse</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Aspirateurs</span>
                  <span className="font-bold text-cyan-700">2 unités puissantes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Revenus additionnels</span>
                  <span className="font-bold text-green-600">2 800€/mois</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Fonctionnement</span>
                  <span className="font-bold text-purple-600">24h/24 - 7j/7</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* STRATÉGIE TARIFAIRE */}
      <Card className="border-l-4 border-l-green-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-500" />
            Stratégie Tarifaire Optimisée
          </CardTitle>
          <CardDescription>Gamme adaptée au marché local et touristique</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {pricingStrategy.map((program, index) => (
              <div key={index} className="p-4 border-2 border-green-100 rounded-lg hover:shadow-md hover:border-green-300 transition-all bg-gradient-to-r from-white to-green-50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-green-800">{program.program}</h4>
                  <div className="text-right">
                    <Badge className="bg-green-500 text-white mb-1">{program.price}</Badge>
                    <p className="text-xs text-green-600">{program.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Positionnement Tarifaire</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-green-700 mb-1">Ticket Moyen Objectif</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• <strong>Résidents :</strong> 11€ (Standard/Premium)</li>
                  <li>• <strong>Touristes :</strong> 14€ (Premium/VIP)</li>
                  <li>• <strong>B2B :</strong> 10€ (Forfaits Standard)</li>
                  <li>• <strong>Moyenne générale :</strong> 12,5€</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-1">Avantages Concurrentiels</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• <strong>Finition céramique unique</strong> (programme VIP)</li>
                  <li>• <strong>Technologie Istobal premium</strong></li>
                  <li>• <strong>Tarifs compétitifs</strong> vs stations urbaines</li>
                  <li>• <strong>Éclairage LED spectaculaire</strong></li>
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
            Soutien Institutionnel et Partenaires
          </CardTitle>
          <CardDescription>Validation et appui des acteurs clés</CardDescription>
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
            Objectifs Stratégiques - 1 Portique
          </CardTitle>
          <CardDescription>Vision réaliste et mesurable</CardDescription>
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

      {/* STRATÉGIE MARKETING */}
      <Card className="border-l-4 border-l-orange-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-orange-500" />
            Stratégie Marketing Ciblée
          </CardTitle>
          <CardDescription>Communication efficace et budgétisée</CardDescription>
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
              <span className="font-semibold text-orange-800">Budget Marketing Total Année 1</span>
              <span className="text-xl font-bold text-orange-700">9 500€</span>
            </div>
            <p className="text-sm text-orange-600 mt-1">Approche économique et ciblée pour 1 portique</p>
          </div>
        </CardContent>
      </Card>

      {/* PLAN OPÉRATIONNEL */}
      <Card className="border-l-4 border-l-indigo-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-indigo-500" />
            Plan Opérationnel Optimisé
          </CardTitle>
          <CardDescription>Déploiement sur 12 mois</CardDescription>
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
            Analyse des Risques - Configuration 1 Portique
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
            Plan Ressources Humaines Simplifié
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-cyan-800">Phase de Lancement (1 Portique)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between p-2 bg-gradient-to-r from-cyan-50 to-blue-50 rounded">
                  <span>Gérant/Responsable</span>
                  <span className="font-medium text-cyan-700">1 poste (vous)</span>
                </li>
                <li className="flex justify-between p-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded">
                  <span>Personnel additionnel</span>
                  <span className="font-medium text-cyan-700">Temps partiel si besoin</span>
                </li>
                <li className="flex justify-between p-2 bg-gradient-to-r from-cyan-50 to-blue-50 rounded">
                  <span>Maintenance Istobal</span>
                  <span className="font-medium text-cyan-700">Contrat support</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-purple-800">Évolution Future</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between p-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded">
                  <span>Année 2-3</span>
                  <span className="font-medium text-purple-700">Extension possible 2ème portique</span>
                </li>
                <li className="flex justify-between p-2 bg-gradient-to-r from-pink-50 to-purple-50 rounded">
                  <span>Personnel élargi</span>
                  <span className="font-medium text-purple-700">1-2 employés selon activité</span>
                </li>
                <li className="flex justify-between p-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded">
                  <span>Coût salarial</span>
                  <span className="font-medium text-purple-700">1 200€/mois année 1</span>
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
