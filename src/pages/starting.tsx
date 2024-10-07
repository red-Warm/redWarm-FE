import { useNavigate } from "react-router-dom";
import { Content } from "../components/content";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Starting() {
  const navigator = useNavigate();
  return (
    <div
      className="flex flex-col"
      onClick={() =>
        setTimeout(() => {
          navigator("/");
        }, 5000)
      }
    >
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
