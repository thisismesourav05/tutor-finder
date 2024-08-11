import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>I am Dashboard only layout</h2>
      {children}
    </div>
  );
}
