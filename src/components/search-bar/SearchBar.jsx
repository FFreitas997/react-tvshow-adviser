import style from './style.module.css'
import {Search as SearchIcon} from "react-bootstrap-icons";
import {useState} from "react";

function SearchBar(params) {

    const [currentSearch, setCurrentSearch] = useState('')

    const onSearch = (search) => {
        if (search.key === 'Enter' && search.target.value.trim() !== '') {
            params.onSearch(search.target.value)
            setCurrentSearch('')
        }
    }

    const onChange = (input) => setCurrentSearch(input.target.value)

    return (
        <div>
            <SearchIcon size={27} className={style.icon}/>
            <input value={currentSearch}
                   onChange={onChange}
                   onKeyUp={onSearch}
                   className={style.input}
                   type={"text"}
                   placeholder={"Search a tv show you may like"}/>
        </div>
    )
}

export default SearchBar;