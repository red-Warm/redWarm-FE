import mainImg from "../imgs/mainImg.png";

export function Content() {
  return (
    <div className="relative flex justify-center">
      <img src={mainImg} alt="메인 이미지" className="w-[400px]" />
      <div
        className="absolute flex flex-col"
        style={{ left: "25%", top: "30%" }}
      >
        <h1 className="mb-2 text-3xl font-extrabold text-left text-black">
          우리 학교의 취업률을 <br />한 눈에 보세요!!
        </h1>
        <span className="text-left text-black text-3 ">
          클릭하면 <br />
          화면이 전환됩니다
        </span>
      </div>
    </div>
  );
}
