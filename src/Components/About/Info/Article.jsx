import s from "./Article.module.css";

function Info() {
  return (
    <div className={s.wrapper}>
      <picture className={s.img_wrapper}>
        <source
          type="image/webp"
          srcSet="./image/about/info/img.webp x1, ./image/about/info/img@2x.webp x2, ./image/about/info/img@3x.webp x3"
        />
        <source srcSet="./image/about/info/img.png x1, ./image/about/info/img@2x-min.png x2, ./image/about/info/img@3x-min.png x3" />
        <img src="./image/about/info/img.png" alt="девушка на стремянке" />
      </picture>
    </div>
  );
}

export default Info;
