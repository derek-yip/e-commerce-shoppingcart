import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

function useGsap() {
    gsap.registerPlugin(ScrollTrigger);
    let section_cover = document.querySelector(".section_cover")
    let sections = document.querySelectorAll(".section");
    
    const gsap_section= gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: section_cover,
        pin: true,
        anticipatePin: 1,
        // markers: {startColor: "green", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20},
        scrub:.1,
        // snap: 1 / (sections.length - 1),
        start: "center center",
        end:() => `+=${section_cover.offsetWidth}`,
      }
    });
}

export default useGsap
