import sprites from '../../images/icons.svg';

const Icon = ({ name, width = 24, height = 24, ...props }) => {
    return (
        <svg width={width} height={height} style={{...props}}>
            <use href={`${sprites}#${name}`}></use>
        </svg>
    );
};

export default Icon;