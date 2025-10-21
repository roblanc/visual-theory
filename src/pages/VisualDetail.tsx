import { useParams, Link } from "react-router-dom";
import { visuals } from "@/data/visuals";
import Sidebar from "@/components/Sidebar";
import { ArrowLeft } from "lucide-react";

const VisualDetail = () => {
  const { slug } = useParams();
  const visual = visuals.find((v) => v.slug === slug);

  if (!visual) {
    return (
      <div className="min-h-screen bg-background">
        <Sidebar />
        <main className="lg:ml-64 p-6 md:p-12 pt-20 lg:pt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold">Post not found</h1>
            <Link to="/" className="text-accent hover:underline mt-4 inline-block">Go back home</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="lg:ml-64 p-6 md:p-12 pt-20 lg:pt-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to all visuals
          </Link>
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4 text-foreground">{visual.title}</h1>
            <div className="aspect-[16/9] bg-card overflow-hidden rounded-lg mb-8">
              <img src={visual.image} alt={visual.title} className="w-full h-full object-cover" />
            </div>
            <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {visual.content}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default VisualDetail;
