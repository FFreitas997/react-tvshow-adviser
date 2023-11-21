import style from './style.module.css'
import {smallImageCoverBaseURL} from '../../configuration'

function TVShowListItem(params) {
    const maxTitleChar = 20;

    const onClick = () => params.onClick(params.tvShow)

    return (
        <div onClick={onClick} className={style.container}>
            <img className={style.image}
                 alt={params.tvShow.name}
                 src={`${smallImageCoverBaseURL}${params.tvShow.backdrop_path}`}/>
            <div className={style.title}>
                {params.tvShow.length > maxTitleChar ?
                    params.tvShow.name.slice(0, maxTitleChar) + '...' : params.tvShow.name}
            </div>
        </div>
    )
}

export default TVShowListItem;