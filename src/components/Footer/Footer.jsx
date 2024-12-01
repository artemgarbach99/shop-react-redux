import style from '@components/Footer/Footer.module.scss';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.body}>
          <div className={style.logo}>
            <img src="/src/assets/images/logo.svg" alt=""/>
            <div className={style.discription}>Your natural candle made for your home and for your wellness.</div>
          </div>
          <div className={style.row}>
            <ul className={style.links}>
              <li className={style.link}><a href="#">New season</a></li>
              <li className={style.link}><a href="#">Most searched</a></li>
              <li className={style.link}><a href="#">Most selled</a></li>
            </ul>
            <ul className={style.links}>
              <li className={style.link}><a href="#">About</a></li>
              <li className={style.link}><a href="#">Help</a></li>
              <li className={style.link}><a href="#">Shipping</a></li>
            </ul>
            <ul className={style.links}>
              <li className={style.link}><a href="#">Info</a></li>
              <li className={style.link}><a href="#">Contact us</a></li>
              <li className={style.link}><a href="#">Privacy Policies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}