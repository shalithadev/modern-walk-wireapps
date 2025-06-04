import Link from "next/link";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="sticky top-0 shadow-md shadow-[#D9D9D9] w-full text-center pt-6 pb-4 bg-[#F5F5F5]">
      <Link href="/">
        <h1 className="text-6xl font-bold">{title}</h1>
      </Link>
    </div>
  );
};

export default Header;
