import Sidebar from "@/components/Sidebar";

const Curriculums = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Curriculums</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Structured learning paths to help you master key concepts.
          </p>
          <div className="grid gap-8">
            <div className="bg-card p-8 border border-border">
              <h2 className="text-2xl font-bold mb-3">Build Once, Sell Twice</h2>
              <p className="text-muted-foreground mb-4">
                A comprehensive guide to building digital products that scale.
              </p>
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
            <div className="bg-card p-8 border border-border">
              <h2 className="text-2xl font-bold mb-3">The Value Equation</h2>
              <p className="text-muted-foreground mb-4">
                Learn how to create, capture, and communicate value effectively.
              </p>
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Curriculums;
