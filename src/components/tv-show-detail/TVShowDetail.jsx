import style from './style.module.css'
import FiveStarRating from "../five-star-rating/FiveStarRating";

function TVShowDetail(params) {

    const rating = params.tvShow.vote_average / 2;

    return (
        <div>
            <div className={style.title}>{params.tvShow.name}</div>
            <div className={style.rating_container}>
                <FiveStarRating rating={rating}/>
                <span className={style.rating}>{rating}/5</span>
            </div>
            <div className={style.overview}>{params.tvShow.overview}</div>
        </div>
    )
}

export default TVShowDetail;