import Slider from "../public/component/Slider";

export default function Home() {
  return (
    <div>
      <Slider 
        interval={'4000'}
        ImgList={[
        '/img/Slider/SliderImg_01.jpg',
        '/img/Slider/SliderImg_02.jpg',
        '/img/Slider/SliderImg_03.jpg',
        '/img/Slider/SliderImg_04.jpg']}
      />
    </div>
  )
}
