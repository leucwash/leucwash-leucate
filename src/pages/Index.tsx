
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectOverview from "@/components/ProjectOverview";
import MarketStudy from "@/components/MarketStudy";
import BusinessPlan from "@/components/BusinessPlan";
import FinancialProjections from "@/components/FinancialProjections";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
            LEUCWASH
          </h1>
          <p className="text-xl text-gray-600 mb-2">Station de Lavage Automobile Écoresponsable</p>
          <p className="text-lg text-gray-500">SIRET: 93497948500018 | Leucate, Aude</p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="text-sm">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="market" className="text-sm">Étude de marché</TabsTrigger>
            <TabsTrigger value="business" className="text-sm">Business Plan</TabsTrigger>
            <TabsTrigger value="financial" className="text-sm">Projections</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <ProjectOverview />
          </TabsContent>

          <TabsContent value="market" className="space-y-6">
            <MarketStudy />
          </TabsContent>

          <TabsContent value="business" className="space-y-6">
            <BusinessPlan />
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <FinancialProjections />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
