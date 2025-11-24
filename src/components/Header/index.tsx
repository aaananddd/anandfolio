import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-primary flex justify-between p-4 text-black">
      <div className="font-semibold">Logo</div>
      <div className="flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
};

export default Header;
