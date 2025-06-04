import Link from "next/link";
import { cn } from "@/lib/utils";

type CategoryCardProps = {
  category: string;
  href: string;
  className?: string;
};

const CategoryCard = ({
  category,
  href = "#",
  className,
}: CategoryCardProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex justify-center items-center h-80 bg-primary rounded-3xl shadow-xl px-4 py-6",
        className
      )}
    >
      <div className="text-white text-5xl font-bold">{category}</div>
    </Link>
  );
};

export default CategoryCard;
