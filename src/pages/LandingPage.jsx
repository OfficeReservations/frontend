import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function LandingPage() {
    return (
      <div>
        <header >
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    );
  }