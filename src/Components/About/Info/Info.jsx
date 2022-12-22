import s from "./Info.module.css";
import Description from "./Description";
import Article from "./Article";
import Video from "./Video";

function Info() {
  return (
    <section className={s.info}>
      <div className={s.info__container}>
        <div className={s.info__wrapper}>
          <a href="#" className={s.info__link}>
            <img
              className={s.info__img}
              src="./image/about/info/vector.svg"
              alt="домик"
            />
          </a>
          <p className={s.info__decor}>/</p>
          <a href="#" className={s.info__nav}>
            О студии
          </a>
        </div>
        <Description />
        <Article />
        <Video />
      </div>
    </section>
  );
}

export default Info;
