import { ReactNode } from "react";
import MegaMenu from "../../../components/Frontend/MegaMenu";
import Navbar from "../../../components/Frontend/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-650 ">
      <Navbar />
      <div className="max-w-5xl mx-auto py-6">
        <MegaMenu />
      </div>
      {children}
    </div>
  );
}
