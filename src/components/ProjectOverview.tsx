
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Euro, Wrench } from "lucide-react";

const ProjectOverview = () => {
  const equipments = [
    { name: "2 Pistes Haute Pression", description: "Lavage manuel avec système HP" },
    { name: "2 Portiques de Lavage", description: "Lavage automatique 5 programmes" },
    { name: "Aire d'Aspiration", description: "Système d'aspiration et gonflage" },
    { name: "Parfumeur Automatique", description: "Station de parfumage véhicules" },
    { name: "Lave-Tapis Automatique", description: "Nettoyage automatisé des tapis" }
  ];

  const programs = [
    { name: "Programme Basique", price: "8€", description: "Lavage standard" },
    { name: "Programme Confort", price: "12€", description: "Lavage + séchage" },
    { name: "Programme Premium", price: "16€", description: "Lavage complet + cire" },
    { name: "Programme Luxe", price: "20€", description: "Lavage premium + protection" },
    { name: "Programme Céramique", price: "24€", description: "Finition céramique haute qualité" }
  ];

  return (
    <div className="grid gap-6">
      {/* Localisation */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-500" />
            Localisation Stratégique
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Adresse du Projet</h4>
            <p className="text-gray-600">Parcelles 0600 et 0596</p>
            <p className="text-gray-600">Zone artisanale de Leucate</p>
            <p className="text-gray-600">Route D627 - Accès rond-point direct</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Données Démographiques</h4>
            <div className="flex items-center gap-2 mb-1">
              <Users className="h-4 w-4 text-green-500" />
              <span>5 300 habitants permanents</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-500" />
              <span>80 000 habitants en saison estivale</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Équipements */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-green-500" />
            Équipements Istobal France
          </CardTitle>
          <CardDescription>Technologies avancées et écoresponsables</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipments.map((equipment, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-1">{equipment.name}</h4>
                <p className="text-sm text-gray-600">{equipment.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Programmes de Lavage */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Euro className="h-5 w-5 text-purple-500" />
            Programmes de Lavage
          </CardTitle>
          <CardDescription>5 formules adaptées à tous les besoins</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((program, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">{program.name}</h4>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    {program.price}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Investissement Initial */}
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Euro className="h-5 w-5 text-orange-500" />
            Investissement Initial
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Coûts des Équipements</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Équipements (pistes HP, portiques, aspiration)</span>
                  <span className="font-semibold">425 236,80 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Couverture GS Industrie</span>
                  <span className="font-semibold">82 198,80 €</span>
                </div>
                <div className="flex justify-between">
                  <span>VRD et Génie Civil</span>
                  <span className="font-semibold">150 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Local technique (11x3m)</span>
                  <span className="font-semibold">30 000 €</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Équipements</span>
                  <span>687 435,60 €</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Financement</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Apport personnel</span>
                  <span className="font-semibold text-green-600">50 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Bien immobilier (garantie)</span>
                  <span className="font-semibold text-green-600">280 000 €</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Garanties</span>
                  <span className="text-green-600">330 000 €</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectOverview;
