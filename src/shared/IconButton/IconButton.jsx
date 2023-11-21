import sprites from '../../images/icons.svg';
import css from './IconButton.module.css';

const IconButton = ({ 
    name, 
    width = 24, 
    height = 24, 
    color = '#000', 
    onClick = null,
    ...props
}) => {
    return (
        <button className={css.icon__btn} style={{...props}} onClick={onClick} type='button'>
            <svg width={width} height={height} fill={color}>
                <use href={`${sprites}#${name}`}></use>
            </svg>
        </button>
    );
};

export default IconButton;