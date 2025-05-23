
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectOverview from "@/components/ProjectOverview";
import MarketStudy from "@/components/MarketStudy";
import BusinessPlan from "@/components/BusinessPlan";
import FinancialProjections from "@/components/FinancialProjections";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-white to-pink-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-fuchsia-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            LEUCWASH
          </h1>
          <p className="text-xl text-gray-600 mb-2">Station de Lavage Automobile Écoresponsable</p>
          <p className="text-lg text-gray-500">SIRET: 93497948500018 | Leucate, Aude</p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-gradient-to-r from-fuchsia-100 to-pink-100 border border-fuchsia-200">
            <TabsTrigger value="overview" className="text-sm data-[state=active]:bg-fuchsia-500 data-[state=active]:text-white">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="market" className="text-sm data-[state=active]:bg-fuchsia-500 data-[state=active]:text-white">Étude de marché</TabsTrigger>
            <TabsTrigger value="business" className="text-sm data-[state=active]:bg-fuchsia-500 data-[state=active]:text-white">Business Plan</TabsTrigger>
            <TabsTrigger value="financial" className="text-sm data-[state=active]:bg-fuchsia-500 data-[state=active]:text-white">Projections</TabsTrigger>
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
