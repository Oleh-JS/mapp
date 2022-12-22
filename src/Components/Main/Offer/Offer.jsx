import s from './Offer.module.css';

function Offer() {
    return (
        <div className={`${s.container} ${"container"}`}>
            <div className={s.content}>
                <p>При покупке 10-ти рулонов обоев - дизайн в ПОДАРОК!</p>
                <img src="./image/offer/book.png" alt="" />
            </div>
        </div>
    );
}

export default Offer;