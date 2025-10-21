import Sidebar from "@/components/Sidebar";
import VisualCard from "@/components/VisualCard";
import visual1 from "@/assets/visual-1.jpg";
import visual2 from "@/assets/visual-2.jpg";
import visual3 from "@/assets/visual-3.jpg";
import visual4 from "@/assets/visual-4.jpg";
import visual5 from "@/assets/visual-5.jpg";
import visual6 from "@/assets/visual-6.jpg";

const visuals = [
  {
    title: "Find Your Place",
    description: "Leverage is as much about where you are standing as how much force you are applying.",
    image: visual1,
    slug: "find-your-place",
  },
  {
    title: "Make a Name For Yourself",
    description: "A great name communicates the most information in the most compressed way.",
    image: visual2,
    slug: "make-a-name",
  },
  {
    title: "Planting Seeds",
    description: "If you are building something, it is far more useful to focus on the work you are doing to produce the result than the result itself.",
    image: visual3,
    slug: "planting-seeds",
  },
  {
    title: "Constraining your Curiosity",
    description: "The constraint we apply to package our idea determines their reach & resonance. Make 1 decision to eliminate 1,000 decisions.",
    image: visual4,
    slug: "constraining-curiosity",
  },
  {
    title: "Value Exchange",
    description: "Every transaction is an exchange of value. The better you understand both sides, the better you can create win-win scenarios.",
    image: visual5,
    slug: "value-exchange",
  },
  {
    title: "Building Blocks",
    description: "Complex systems are built from simple components. Master the fundamentals and combine them in unique ways.",
    image: visual6,
    slug: "building-blocks",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
