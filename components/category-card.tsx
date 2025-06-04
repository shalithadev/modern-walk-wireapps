import { cn } from "@/lib/utils";

type CategoryCardProps = {
  category: string;
  className?: string;
};

const CategoryCard = ({ category, className }: CategoryCardProps) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center h-80 bg-primary rounded-3xl shadow-xl px-4 py-6",
        className
      )}
    >
      <div className="text-white text-5xl font-bold">{category}</div>
    </div>
  );
};

export default CategoryCard;
