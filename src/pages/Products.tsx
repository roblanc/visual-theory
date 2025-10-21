import Sidebar from "@/components/Sidebar";
import productPlanning from "@/assets/product-planning.jpg";
import productClearmind from "@/assets/product-clearmind.jpg";
import productEpigrams from "@/assets/product-epigrams.jpg";
import productBeyondorder from "@/assets/product-beyondorder.jpg";
import productAntidote from "@/assets/product-antidote.jpg";

const products = [
  {
    title: "Simple Plans. Strong Effects. « 90-Day Self-Improvement System »",
    description: "A hand-picked collection of productivity systems, distilled into an analog template for the next 90 days.",
    image: productPlanning,
    link: "https://visualtheory.gumroad.com/l/planning",
    price: "$1"
  },
  {
    title: "\"Clear Mind\" Minimal Wallpaper Pack",
    description: "A curated collection of minimal wallpapers designed to bring clarity and focus to your workspace.",
    image: productClearmind,
    link: "https://visualtheory.gumroad.com/l/zPvRv",
    price: "$1"
  },
  {
    title: "Epigrams, Quotes & Witticisms",
    description: "A collection of timeless wisdom and wit, carefully selected and beautifully formatted.",
    image: productEpigrams,
    link: "https://visualtheory.gumroad.com/l/wxbze",
    price: "$1"
  },
  {
    title: "\"Beyond Order\" Wallpaper Pack",
    description: "Inspired by principles of structure and meaning, this pack brings order to your digital space.",
    image: productBeyondorder,
    link: "https://visualtheory.gumroad.com/l/ivubo",
    price: "$1"
  },
  {
    title: "\"An Antidote to Chaos\" Wallpaper Pack",
    description: "Find balance between order and chaos with this thoughtfully designed wallpaper collection.",
    image: productAntidote,
    link: "https://visualtheory.gumroad.com/l/FNXfko",
    price: "$1"
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="lg:ml-64 p-6 md:p-12 pt-20 lg:pt-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Products</h1>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
            Digital tools and resources to enhance your productivity and mindset.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {products.map((product, index) => (
              <a
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-video bg-black overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors flex-1">
                      {product.title}
                    </h3>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
