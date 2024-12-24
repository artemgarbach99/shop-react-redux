import main from "@pages/Main/Main.module.scss"
import {Link} from "react-router-dom";

export const Main = () => {
  return (
    <div className={main.main}>
      <div className={main.bg}>
        <img src="src/assets/images/main/bg.jpg" alt=""/>
      </div>
      <div className={main.content}>
        <div className={main.title}>The nature candle</div>
        <Link to="/products" className={main.link}>Discovery our collection</Link>
      </div>
    </div>
  )
}