type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="sticky top-0 shadow-lg border-[#D9D9D9] w-full text-center pt-6 pb-4 bg-[#F5F5F5]">
      <h1 className="text-6xl font-bold">{title}</h1>
    </div>
  );
};

export default Header;
