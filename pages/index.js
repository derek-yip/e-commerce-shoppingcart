import FullPageModule from "../PlugIn/FullPageModule";
import Slider from "../public/component/Slider";
import HomeStyle from '../styles/scss/Home.module.scss'

export default function Home() {

  return (
    <div>
    
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
  )
}
