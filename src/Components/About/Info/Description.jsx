import s from "./Description.module.css";

function Info() {
  return (
    <div>
      <h1 className={s.info__title}>О студии</h1>
      <p className={s.info__description}>
        Используем различные технологии нанесения изображений. В нашем арсенале
        немецкое оборудование, Итальянские технологии холодного трансфера и
        другие бесшовные покрытия.
      </p>
    </div>
  );
}

export default Info;
