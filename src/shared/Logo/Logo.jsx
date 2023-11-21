import css from "./Logo.module.css";

const Logo = (props) => {
    return (
        <p className={css.logo} style={{...props}}>3lement<span>.</span></p>
    );
}

export default Logo;