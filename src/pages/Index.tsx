import Sidebar from "@/components/Sidebar";
import VisualCard from "@/components/VisualCard";
import { visuals } from "@/data/visuals";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="lg:ml-64 p-6 md:p-12 pt-20 lg:pt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {visuals.map((visual) => (
              <VisualCard key={visual.slug} {...visual} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
