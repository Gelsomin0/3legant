import sprites from '../../images/icons.svg';
import css from './IconButton.module.css';

const IconButton = ({ name, width = 24, height = 24, ...props }) => {
    return (
        <button className={css.icon__btn} style={{...props}} type='button'>
            <svg width={width} height={height}>
                <use href={`${sprites}#${name}`}></use>
            </svg>
        </button>
    );
};

export default IconButton;