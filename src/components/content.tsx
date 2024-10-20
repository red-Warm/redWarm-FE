import mainImg from "../imgs/mainImg.png";

export function Content() {
  return (
    <div className="relative flex justify-center">
      <img src={mainImg} alt="메인 이미지" className="w-[400px]" />
    </div>
  );
}
