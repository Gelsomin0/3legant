import { lazy } from 'react';
import { Link } from 'react-router-dom';
import css from './AppBar.module.css';

const Logo = lazy(() => import('../../shared/Logo/Logo'));
const IconButton = lazy(() => import('../../shared/IconButton/IconButton'));

const AppBar = () => {
    return (
        <header className={css.header}>
            <div className={css.header__menu_btn}>
                <IconButton name='menu-hamburger' />
            </div>

            <div className={css.header__logo}>
                <Link to='/'>
                    <Logo />
                </Link>
            </div>

            <nav>
                <ul className={css.nav__list}>
                    <li>
                        <Link className={css.nav__link} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={css.nav__link} to='/shop'>Shop</Link>
                    </li>
                    <li>
                        <Link className={css.nav__link} to='/products'>Products</Link>
                    </li>
                    <li>
                        <Link className={css.nav__link}>Contact Us</Link>
                    </li>
                </ul>
            </nav>

            <ul className={css.header__actions}>
                <li className={css.header__action__item}>
                    <IconButton name='search' />
                </li>
                <li className={css.header__action__item}>
                    <IconButton name='user-circle' />
                </li>
                <li className={css.header__cart}>
                    <Link to='/cart'>
                        <IconButton name='shopping-bag' />
                    </Link>
                    <span>0</span>
                </li>
            </ul>
        </header>
    );
}

export default AppBar;