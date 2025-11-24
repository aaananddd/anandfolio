import { Outlet } from "react-router";
import Header from "../../Header";
import Footer from "../../Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
