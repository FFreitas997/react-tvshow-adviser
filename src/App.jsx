import style from './style.module.css'
import {useEffect, useState} from "react";
import {TVShowAPI} from "./api/tv-show";
import {backdropBaseURL} from './configuration'
import TVShowDetail from "./components/tv-show-detail/TVShowDetail";
import Logo from "./components/logo/Logo";
import logo from './assets/image/logo.png'
import TVShowList from "./components/tv-show-list/TVShowList";
import SearchBar from "./components/search-bar/SearchBar";

function App() {

    const [currentTVShow, setCurrentTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);

    const onClickTvShow = (tvShow) => setCurrentTVShow(tvShow)

    const fetchRecommendations = async (tvShowID) => {
        try {
            const result = await TVShowAPI.fetchRecommendations(tvShowID);
            if (result && result.length >= 0)
                setRecommendationList(result.slice(0, 10))
        } catch (e) {
            alert('Something went wrong when fetch recommendations')
        }
    }

    const fetchPopularTVShowList = async () => {
        try {
            const result = await TVShowAPI.fetchPopulars();
            if (result && result.length >= 0)
                setCurrentTVShow(result[0])
        } catch (e) {
            alert('Something went wrong when fetch popular tv show list')
        }
    }

    const fetchByTitle = async (title) => {
        try {
            const result = await TVShowAPI.fetchSearch(title);
            if (result && result.length >= 0)
                setCurrentTVShow(result[0])
        } catch (e) {
            alert('Something went wrong when fetch by title')
        }
    }

    useEffect(() => {
        fetchPopularTVShowList().then()
    }, []);

    useEffect(() => {
        if (currentTVShow)
            fetchRecommendations(currentTVShow.id).then()
    }, [currentTVShow]);


    return (
        <div className={style.main_container} style={{
            background: currentTVShow ?
                `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${backdropBaseURL}${currentTVShow.backdrop_path}") no-repeat center / cover`
                : 'black'
        }}>
            <div className={style.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo img={logo} title={"Watowatch"} subtitle={"Find a show you may like"}/>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <SearchBar onSearch={fetchByTitle}/>
                    </div>
                </div>
            </div>
            <div className={style.tv_show_detail}>
                {currentTVShow && <TVShowDetail tvShow={currentTVShow}/>}
            </div>
            <div className={style.recommended_tv_shows}>
                {currentTVShow && <TVShowList tvShowList={recommendationList} onClick={onClickTvShow}/>}
            </div>
        </div>
    );
}

export default App;