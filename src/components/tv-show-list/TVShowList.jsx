import style from './style.module.css'
import TVShowListItem from "../tv-show-list-item/TVShowListItem";

function TVShowList(params) {

    const onCLickTVShow = (e) => params.onClick(e)

    return (
        <div>
            <div className={style.title}>You will probably like:</div>
            <div className={style.list}>
                {
                    params.tvShowList.map(e => {
                        return (
                            <span className={style.tv_show_item} key={e.id}>
                                <TVShowListItem tvShow={e} onClick={onCLickTVShow}/>
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TVShowList;