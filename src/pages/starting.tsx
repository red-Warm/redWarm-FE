import { Content } from "../components/content";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Main() {
  return (
    <div className="flex flex-col ">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
