import style from './style.module.css'
import {StarFill, StarHalf, Star as StarEmpty} from 'react-bootstrap-icons'

function FiveStarRating(params) {

    const starList = [];
    const starFillCount = Math.floor(params.rating);
    const hasHalfStar = (params.rating - parseInt(params.rating)) >= 0.5;
    const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

    for (let i = 1; i <= starFillCount; i++) {
        starList.push(<StarFill key={`star-fill-${i}`}/>)
    }

    if (hasHalfStar) {
        starList.push(<StarHalf key={`star-half`}/>)
    }

    for (let i = 1; i <= emptyStarCount; i++) {
        starList.push(<StarEmpty key={`star-empty-${i}`}/>)
    }

    return <div>{starList}</div>
}

export default FiveStarRating;