import { Header } from "../components/header";
import design from "../imgs/design.png";
import develop from "../imgs/develop.png";
import enterprise from "../imgs/enterprise.png";

export function Options() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-pointRed m-9">
          보고싶은 전공을 클릭하세요.
        </h1>
        <div className="flex gap-20">
          <div>
            <h3>공기업</h3>
            <img src={enterprise} className="w-[315px]" alt="공기업" />
          </div>
          <div>
            <h3>개발자</h3>
            <img src={develop} className="w-[315px]" alt="개발자" />
          </div>
          <div>
            <h3>디자이너</h3>
            <img src={design} className="w-[315px]" alt="디자이너" />
          </div>
        </div>
      </div>
    </div>
  );
}
