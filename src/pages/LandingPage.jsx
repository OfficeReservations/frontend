import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function LandingPage() {
    return (
      <div>
          <Header />
        
        <main >
          <Outlet />
        </main>
      </div>
    );
  }