import { useRef,useEffect } from 'react';
import useGsap from '../PlugIn/useGsap';
import HomeStyle from '../styles/scss/Home.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  useGsap();
  useEffect(() => {
    const section_num = document.querySelectorAll('.section').length;
    const section_cover = document.querySelector('.section_cover');
    section_cover.setAttribute('style',`--section_num:${section_num}`);
  }, [])
  

  return (
    <div >
      <div className={`firstContainer ${HomeStyle.firstContainer}`} >
        <div className={`${HomeStyle.sideImage_left}`}>
          <div className={`imageCover`}>  
            <div className={`postion-relative`}>
              <Image src={`/img/HomePage/Online shopping _Monochromatic.png`} alt={``} height={`500`} width={`500`} objectFit={`contain`}></Image>
            </div>
          </div>
        </div>
        <div className={`${HomeStyle.mainSection}`}>
          <div className={`imageCover ${HomeStyle.imageCover}`}>  
            <div className={`postion-relative`}>
              <Image src={`/img/HomePage/Statue of liberty_Monochromatic.png`} alt={``} height={`400`} width={`400`} objectFit={`contain`}></Image>
            </div>
          </div>
          <div className={`imageCover ${HomeStyle.imageCover}`}>  
            <div className={`postion-relative`}>
              <Image src={`/img/HomePage/Online store _Monochromatic.png`} alt={``} height={`300`} width={`300`} objectFit={`contain`}></Image>
            </div>
          </div>
          <div className={`sectionContent ${HomeStyle.sectionContent}`}>
            <div>
              <h1>BUY THIS NOW</h1>
            </div>
            <div className={`d-flex justify-content-center align-items-center`}>
              <h1 className='w-75'>BECOME</h1>
                <Link href={'/product'}>
                  <button className={`goToBuyButton ${HomeStyle.goToBuyButton} w-50`}>
                      <span>GO TO BUY</span>
                  </button>
                </Link>
            </div>
            <div className={`w-100 d-flex justify-content-evenly align-items-center`}>
              <div className={`brand_script w-25 pe-5 ${HomeStyle.brand_script}`}>
                <h3>
                  Brand
                </h3>
                <p>Large selection of Women&apos;s and men&apos;s health, snack at E-commerce shop!! Don&apos;t hesitate and crazy buying!!</p>
              </div>
              <h1 className={`w-50`}>SHINING</h1>
            </div>
          </div>
        </div>
        <div className={`${HomeStyle.sideImage_right}`}>
          <div className={`imageCover`}>  
            <div className={`postion-relative p-2`}>
              <Image src={`/img/HomePage/Online shopping _Isometric.png`} alt={``} height={`500`} width={`500`} objectFit={`contain`}></Image>
            </div>
          </div>
        </div>
      </div>
      <div className={`section_cover ${HomeStyle.section_cover}`}>
        <section className={`section ${HomeStyle.section}`}>
          <h2 className={`title ${HomeStyle.title}`}>FOOD</h2>
        </section>
        <section className={`section ${HomeStyle.section}`}>
          <h2 className={`title ${HomeStyle.title}`}>BEVERAGE</h2>
        </section>
        <section className={`section ${HomeStyle.section}`}>
          <h2 className={`title ${HomeStyle.title}`}>CLOTHING</h2>
        </section>
        <section className={`section ${HomeStyle.section}`}>
          <h2 className={`title ${HomeStyle.title}`}>HEALTH</h2>
        </section>
      </div>
      {/* <div className={`lastContainer ${HomeStyle.lastContainer}`}>
        Last Container
      </div> */}
    </div>
  )
}
