import mainImg from "../imgs/mainImg.png";

export function Content() {
  return (
    <div className="relative flex justify-center">
      <img src={mainImg} alt="메인 이미지" className="w-[420px] m-5" />
      <div
        className="absolute flex flex-col"
        style={{ left: "25%", top: "30%" }}
      >
        <h1 className="mb-2 text-3xl font-extrabold text-left text-white">
          산인은 마라탕을 좋아해 <br />
          승찬이는 라면을 좋아해요
        </h1>
        <span className="text-left text-white text-3 ">
          승찬이가 반한 라면... <br />
          먹어보고 싶지 않으신가요?
        </span>
      </div>
    </div>
  );
}
