import style from './style.module.css';

function Logo(params) {
    return (
        <div>
            <div className={style.container}>
                <img className={style.image} src={params.img} alt={"Logo"}/>
                <div className={style.title}>{params.title}</div>
            </div>
            <div className={style.subtitle}>{params.subtitle}</div>
        </div>
    )
}

export default Logo;