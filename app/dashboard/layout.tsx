import Header from "@/app/components/Header";
import SideNav from "@/app/components/sideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideNav />
        {children}
      </div>
    </div>
  );
}
