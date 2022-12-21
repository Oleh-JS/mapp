import s from './Header.module.css';
import Item from './Item';

function Header() {
    return (
        <header className={s.header}>
            <ul>
                <Item content="Два" p="5000" c="hello" />
            </ul>
        </header>
    );
}

export default Header;