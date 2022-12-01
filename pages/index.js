import { useRef,useEffect } from 'react';
import useGsap from '../PlugIn/useGsap';
import HomeStyle from '../styles/scss/Home.module.scss'
import Image from 'next/image';

export default function Home() {
  const scrollRef = useRef();

  useEffect(() => {
    // const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
    //   new LocomotiveScroll.default({
    //     el: scrollRef.current,
    //     smooth: true,
    //     // direction: 'vertical'
    //   });
    // });
    // return () => scroll.destroy();
    useGsap();
    const section_num = document.querySelectorAll('.section').length;
    const section_cover = document.querySelector('.section_cover');
    section_cover.setAttribute('style',`--section_num:${section_num}`);
  }, [])
  

  return (
    <div ref={scrollRef}>
      <div className={`firstContainer ${HomeStyle.firstContainer}`} >
        <div className={`${HomeStyle.sideImage_left}`}>
          <div className={`imageCover ${HomeStyle.imageCover}`}>  
            <div className={`postion-relative p-2`}>
              <Image src={`/../public/img/product/715UUTKX66L._SL1500_.jpg`} height={`400`} width={`300`} objectFit={`fill`}></Image>
            </div>
          </div>
        </div>
        <div className={`${HomeStyle.mainSection}`}>
          <div className={`imageCover ${HomeStyle.imageCover}`}>  
            <div className={`postion-relative p-2`}>
              <Image src={`/../public/img/product/71aU4Y6-BYL._AC_SL1366_.jpg`} height={`300`} width={`150`} objectFit={`contain`}></Image>
            </div>
          </div>
          <div className={`imageCover ${HomeStyle.imageCover}`}>  
            <div className={`postion-relative p-2`}>
              <Image src={`/../public/img/product/715UUTKX66L._SL1500_.jpg`} height={`300`} width={`180`} objectFit={`contain`}></Image>
            </div>
          </div>
          <div className={`sectionContent ${HomeStyle.sectionContent}`}>
            <div>
              <h1>BUY THIS NOW</h1>
            </div>
            <div className={`d-flex justify-content-center align-items-center`}>
              <h1 className='w-75'>BECOME</h1>
              <button className={`goToBuyButton ${HomeStyle.goToBuyButton} w-50`}>
                Go To Buy
              </button>
            </div>
            <div className={`d-flex justify-content-evenly align-items-center`}>
              <div className={`brand_script w-25`}>
                <h3>
                  Brand
                </h3>
                <p>Large selection of Women's and men's health, snack at E-commerce shop!! Don't hesitate and crazy buying!!</p>
              </div>
              <h1 className={`w-75`}>SHINING</h1>
            </div>
          </div>
        </div>
        <div className={`${HomeStyle.sideImage_right}`}>
          <div className={`imageCover ${HomeStyle.imageCover}`}>  
            <div className={`postion-relative p-2`}>
              <Image src={`/../public/img/product/715UUTKX66L._SL1500_.jpg`} height={`400`} width={`300`} objectFit={`fill`}></Image>
            </div>
          </div>
        </div>
      </div>
      <div className={`section_cover ${HomeStyle.section_cover}`} data-scroll-section>
        <section className={`section ${HomeStyle.section}`}>
          <h2 className={`title ${HomeStyle.title}`}>Winter</h2>
        </section>
        <section className={`section ${HomeStyle.section}`}>
          <h2 className={`title ${HomeStyle.title}`}>Spring</h2>
        </section>
        <section className={`section ${HomeStyle.section}`}>
          <h2 className={`title ${HomeStyle.title}`}>Indslask</h2>
        </section>
        <section className={`section ${HomeStyle.section}`}>
          <h2 className={`title ${HomeStyle.title}`}>Indslasksadadsada</h2>
        </section>
      </div>
      <div className={`lastContainer ${HomeStyle.lastContainer}`}>
        Last Container
      </div>
    </div>
  )
}
