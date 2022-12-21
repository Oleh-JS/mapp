import s from './Header.module.css';
import Offer from './../Offer/Offer';

function Header() {
    return (
        <header className={s.header}>
            <Offer />
            <div className={`${s.wrapper} ${"wrapper"}`}>
                <img src="./svg/header/logo.svg" alt="логотип" />
            </div>
        </header>
    );
}

export default Header;