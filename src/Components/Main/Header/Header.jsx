import s from './Header.module.css';
import Offer from './../Offer/Offer';

function Header() {
    return (
        <header className={s.header}>
            <Offer />
            <div className={`${s.container} ${"container"}`}>
                <img className={s.logo} src="./svg/header/logo.svg" alt="логотип" />
                <nav className={s.menu}>
                    <ul className={s.list}>
                        <li className={s.item}><img src="./svg/header/search.svg" alt="Поиск" /></li>
                        <li className={s.item}><img src="./svg/header/phone.svg" alt="Телефон" /></li>
                        <li className={s.item}>
                            <div className={s.burger}>
                                <span></span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;