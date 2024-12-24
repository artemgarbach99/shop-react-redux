import style from "./Navigation.module.scss"
import {Link} from "react-router-dom";

export const Navigation = () => {
  return (
    <ul className={style.list}>
      <Link to="/products" className={style.link}>
        Products
      </Link>
      <li><a href="#" className={style.link}>Discovery</a></li>
      <li><a href="#" className={style.link}>About</a></li>
      <li><a href="#" className={style.link}>Contact us</a></li>
    </ul>
  )
}