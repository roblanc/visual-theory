import { Link } from "react-router-dom";

interface VisualCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const VisualCard = ({ title, description, image, slug }: VisualCardProps) => {
  return (
    <Link
      to={`/visual/${slug}`}
      className="group block bg-card transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="aspect-[4/3] bg-black overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium mb-2 text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default VisualCard;
