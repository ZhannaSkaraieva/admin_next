import { Sidebar } from "@/components/ui/sidebar";
import { Header } from "./sideBarHeader";
import { Footer } from "./sideBarFooter";
import { Content } from "./sideBarContent";

export function AppSidebar() {
  return (
    <Sidebar>
      <Header />
      <Content />
      <Footer />
    </Sidebar>
  );
}
