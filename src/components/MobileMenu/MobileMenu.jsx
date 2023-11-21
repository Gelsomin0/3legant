import { Link } from 'react-router-dom';
import Logo from 'shared/Logo/Logo';
import IconButton from 'shared/IconButton/IconButton';
import css from './MobileMenu.module.css';
import Icon from 'shared/Icon/Icon';
import Button from 'shared/Button/Button';

const MobileMenu = ({ isOpen, onClose, ...props }) => {
    const isMenuOpen = isOpen ? `${css.backdrop} ${css.js_open}` : `${css.backdrop}`;
    const isWindowOpen = isOpen ? `${css.menu__window} ${css.js_open}` : `${css.menu__window}`;

    return (
        <div className={isMenuOpen} {...props}>
            <div className={isWindowOpen}>
                <div className={css.menu__header}>
                    <Logo />
                    <IconButton name='close' color='var(--neutral-04100)' onClick={onClose} />
                </div>

                <div className={css.menu__search}>
                    <Icon
                        name='search'
                        position='absolute'
                        top='50%'
                        left='16px'
                        transform='translateY(-50%)'
                    />
                    <input className={css.menu__search_input} type='text' placeholder='Search' />
                </div>

                <ul className={css.menu__list}>
                    <li className={css.menu__item}>
                        <Link to='/' onClick={onClose} className={css.menu__item_link}>Home</Link>
                    </li>
                    <li className={css.menu__item}>
                        <Link to='/shop' onClick={onClose} className={css.menu__item_link}>Shop</Link>
                    </li>
                    <li className={css.menu__item}>
                        <Link to='/products' onClick={onClose} className={css.menu__item_link}>Products</Link>
                    </li>
                    <li className={css.menu__item}>
                        <Link onClick={onClose} className={css.menu__item_link}>Contact Us</Link>
                    </li>
                </ul>

                <ul className={`${css.menu__list} ${css.menu__list_bottom}`}>
                    <li className={css.menu__item}>
                        <Link onClick={onClose} to='/cart' className={css.menu__item_link}>Cart</Link>
                        <div className={css.menu__item_icon}>
                            <IconButton name='shopping-bag' />
                            <span>0</span>
                        </div>
                    </li>
                    <li className={css.menu__item}>
                        <Link onClick={onClose} to='/cart' className={css.menu__item_link}>Wishlist</Link>
                        <div className={css.menu__item_icon}>
                            <IconButton name='heart' />
                            <span>0</span>
                        </div>
                    </li>
                </ul>

                <Button width='100%' marginBottom='20px'>SignIn</Button>

                <ul className={css.menu__list_social}>
                    <li>
                        <IconButton onClick={onClose} name='instagram' />
                    </li>
                    <li>
                        <IconButton onClick={onClose} name='facebook' />
                    </li>
                    <li>
                        <IconButton onClick={onClose} name='youtube' />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MobileMenu;