import { ReactNode } from "react";
import Navbar from "../../../components/Frontend/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
