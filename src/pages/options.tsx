import axios from "axios";
import { Header } from "../components/header";
import design from "../imgs/design.png";
import develop from "../imgs/develop.png";
import enterprise from "../imgs/enterprise.png";

export function Options() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-20 text-4xl font-bold text-pointRed m-9">
          보고싶은 전공을 클릭하세요.
        </h1>
        <div className="flex justify-between gap-20">
          <div className="relative">
            <img src={enterprise} className="w-[315px]" alt="공기업" />
            <h3 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white cursor-pointer">
              공기업
            </h3>
          </div>
          <div className="relative">
            <img src={develop} className="w-[315px]" alt="개발자" />
            <h3 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white cursor-pointer">
              개발자
            </h3>
          </div>
          <div className="relative">
            <img src={design} className="w-[315px]" alt="디자이너" />
            <h3 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white cursor-pointer">
              디자이너
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
