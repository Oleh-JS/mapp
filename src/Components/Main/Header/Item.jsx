import s from './Header.module.css';

function Item(props) {
    return (
        <li>{props.content} {props.p} {props.c}</li>
    );
}

export default Item;