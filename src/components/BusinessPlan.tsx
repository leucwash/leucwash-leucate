
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb, Users, Briefcase, Shield, Award } from "lucide-react";

const BusinessPlan = () => {
  const strategicObjectives = [
    {
      title: "Positionnement Premium",
      description: "Devenir la référence du lavage automobile écoresponsable dans l'Aude",
      timeline: "6 mois"
    },
    {
      title: "Fidélisation Clientèle",
      description: "Créer une base de clients fidèles locaux et développer la clientèle touristique",
      timeline: "12 mois"
    },
    {
      title: "Rentabilité Optimale",
      description: "Atteindre l'équilibre financier et générer des profits durables",
      timeline: "18 mois"
    }
  ];

  const marketingStrategy = [
    {
      action: "Aide Territoriale",
      description: "Campagne soutenue par les Pyrénées Orientales - Président ARCA Cédric",
      budget: "Subventionné",
      priority: "high"
    },
    {
      action: "Signalétique Premium",
      description: "Panneaux visibles depuis la D627, éclairage LED, design moderne",
      budget: "15 000€",
      priority: "high"
    },
    {
      action: "Campagne Digitale",
      description: "Site web, référencement Google, réseaux sociaux, Google Ads",
      budget: "8 000€",
      priority: "medium"
    },
    {
      action: "Marketing Local",
      description: "Flyers, partenariats commerces, événements locaux",
      budget: "5 000€",
      priority: "medium"
    },
    {
      action: "Programme Fidélité",
      description: "Cartes de fidélité, tarifs préférentiels, offres saisonnières",
      budget: "3 000€",
      priority: "low"
    }
  ];

  const riskAnalysis = [
    {
      risk: "Saisonnalité",
      impact: "Élevé",
      mitigation: "Développement clientèle locale, programmes fidélité hiver",
      color: "red"
    },
    {
      risk: "Concurrence",
      impact: "Moyen",
      mitigation: "Différenciation par l'écologie et la technologie",
      color: "yellow"
    },
    {
      risk: "Technique",
      impact: "Faible",
      mitigation: "Contrat maintenance Istobal, formation équipe",
      color: "green"
    },
    {
      risk: "Réglementaire",
      impact: "Faible",
      mitigation: "Respect normes environnementales, autorisation mairie",
      color: "green"
    }
  ];

  const operationalPlan = [
    {
      phase: "Phase 1 - Construction",
      duration: "4 mois",
      actions: ["Travaux VRD", "Installation équipements (1,5 mois)", "Mise en service", "Formation"]
    },
    {
      phase: "Phase 2 - Lancement",
      duration: "2 mois",
      actions: ["Campagne communication", "Ouverture", "Ajustements", "Fidélisation"]
    },
    {
      phase: "Phase 3 - Développement",
      duration: "6 mois",
      actions: ["Optimisation service", "Extension gamme", "Partenariats", "Expansion"]
    }
  ];

  const stakeholderSupport = [
    {
      entity: "Mairie de Leucate",
      status: "Projet approuvé par le maire et ses administrés",
      importance: "Critique"
    },
    {
      entity: "Commerçants locaux",
      status: "Informés et favorables au projet",
      importance: "Important"
    },
    {
      entity: "Pyrénées Orientales",
      status: "Aide territoriale accordée (Président ARCA Cédric)",
      importance: "Critique"
    }
  ];

  return (
    <div className="grid gap-6">
      {/* Soutien des Parties Prenantes */}
      <Card className="border-l-4 border-l-fuchsia-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-fuchsia-50 to-pink-50">
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-fuchsia-500" />
            Soutien Institutionnel et Local
          </CardTitle>
          <CardDescription>Validation et appui des autorités locales</CardDescription>
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

      {/* Objectifs Stratégiques */}
      <Card className="border-l-4 border-l-blue-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-fuchsia-50">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-500" />
            Objectifs Stratégiques
          </CardTitle>
          <CardDescription>Vision à court et moyen terme du projet Leucwash</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {strategicObjectives.map((objective, index) => (
              <div key={index} className="p-4 border-2 border-fuchsia-100 rounded-lg hover:shadow-md hover:border-fuchsia-300 transition-all bg-gradient-to-r from-white to-fuchsia-50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-fuchsia-800">{objective.title}</h4>
                  <Badge variant="outline" className="border-fuchsia-300 text-fuchsia-700">{objective.timeline}</Badge>
                </div>
                <p className="text-sm text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stratégie Marketing */}
      <Card className="border-l-4 border-l-green-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-fuchsia-50">
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-green-500" />
            Stratégie Marketing & Communication
          </CardTitle>
          <CardDescription>Plan de communication pour assurer la visibilité et l'attractivité</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {marketingStrategy.map((strategy, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                strategy.priority === 'high' ? 'bg-gradient-to-br from-fuchsia-100 to-pink-100 border-fuchsia-300' :
                strategy.priority === 'medium' ? 'bg-gradient-to-br from-green-50 to-fuchsia-50 border-green-200' :
                'bg-gradient-to-br from-gray-50 to-fuchsia-50 border-gray-200'
              }`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`font-semibold ${
                    strategy.priority === 'high' ? 'text-fuchsia-800' : 'text-green-800'
                  }`}>{strategy.action}</h4>
                  <Badge className={`${
                    strategy.budget === 'Subventionné' ? 'bg-fuchsia-500 text-white' :
                    strategy.priority === 'high' ? 'bg-fuchsia-400 text-white' :
                    'bg-green-400 text-white'
                  }`}>{strategy.budget}</Badge>
                </div>
                <p className="text-sm text-gray-700">{strategy.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-fuchsia-100 to-pink-100 rounded-lg border border-fuchsia-200">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-fuchsia-800">Budget Marketing Total (hors subventions)</span>
              <span className="text-xl font-bold text-fuchsia-700">31 000€</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plan Opérationnel */}
      <Card className="border-l-4 border-l-purple-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-fuchsia-50">
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-purple-500" />
            Plan Opérationnel
          </CardTitle>
          <CardDescription>Phases de déploiement du projet sur 12 mois</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {operationalPlan.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-fuchsia-100 rounded-full flex items-center justify-center text-sm font-semibold text-fuchsia-600 border-2 border-fuchsia-300">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-fuchsia-800">{phase.phase}</h4>
                      <Badge variant="secondary" className="bg-fuchsia-200 text-fuchsia-800">{phase.duration}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {phase.actions.map((action, actionIndex) => (
                        <div key={actionIndex} className="text-sm bg-gradient-to-r from-fuchsia-50 to-pink-50 text-fuchsia-700 px-2 py-1 rounded border border-fuchsia-200">
                          {action}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < operationalPlan.length - 1 && (
                  <div className="absolute left-4 top-8 w-px h-6 bg-fuchsia-300"></div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analyse des Risques */}
      <Card className="border-l-4 border-l-orange-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-fuchsia-50">
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-orange-500" />
            Analyse des Risques
          </CardTitle>
          <CardDescription>Identification et stratégies de mitigation des risques</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskAnalysis.map((risk, index) => (
              <div key={index} className="p-4 border-2 border-fuchsia-100 rounded-lg hover:border-fuchsia-300 transition-all bg-gradient-to-r from-white to-fuchsia-50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-fuchsia-800">{risk.risk}</h4>
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
                  <span className="font-medium text-fuchsia-700">Mitigation: </span>
                  {risk.mitigation}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ressources Humaines */}
      <Card className="border-l-4 border-l-cyan-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-cyan-50 to-fuchsia-50">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-cyan-500" />
            Plan Ressources Humaines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-fuchsia-800">Phase de Lancement</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between p-2 bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded">
                  <span>Gérant/Responsable</span>
                  <span className="font-medium text-fuchsia-700">1 poste (vous)</span>
                </li>
                <li className="flex justify-between p-2 bg-gradient-to-r from-pink-50 to-fuchsia-50 rounded">
                  <span>Pas d'employé pour le moment</span>
                  <span className="font-medium text-fuchsia-700">À voir année 2</span>
                </li>
                <li className="flex justify-between p-2 bg-gradient-to-r from-fuchsia-50 to-pink-50 rounded">
                  <span>Prestataire maintenance</span>
                  <span className="font-medium text-fuchsia-700">Contrat Istobal</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-fuchsia-800">Phase de Développement (Année 2)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between p-2 bg-gradient-to-r from-cyan-50 to-fuchsia-50 rounded">
                  <span>Équipe élargie</span>
                  <span className="font-medium text-cyan-700">1-2 employés</span>
                </li>
                <li className="flex justify-between p-2 bg-gradient-to-r from-fuchsia-50 to-cyan-50 rounded">
                  <span>Horaires étendus</span>
                  <span className="font-medium text-cyan-700">7j/7 en saison</span>
                </li>
                <li className="flex justify-between p-2 bg-gradient-to-r from-cyan-50 to-fuchsia-50 rounded">
                  <span>Formation continue</span>
                  <span className="font-medium text-cyan-700">Certifications éco</span>
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
