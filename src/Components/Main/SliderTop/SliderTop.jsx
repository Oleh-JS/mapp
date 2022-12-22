import s from './SliderTop.module.css';

function SliderTop() {
    return (
        <div className={`${s.container} ${"container"}`}>
            <div className={s.images}>
                <img className={s.image} src="" alt="" />
            </div>
            <h1 className={s.title}></h1>
            <p className={s.info}></p>
            <button className={s.button}></button>
            <div className="pagination"></div>
        </div>
    );
}

export default SliderTop;