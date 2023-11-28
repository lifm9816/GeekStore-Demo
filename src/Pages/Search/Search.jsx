import { useEffect } from "react";
import SearchBar from "../../Components/SearchBar";

const Search = () => {

    useEffect(() => {
        document.title = "GeekStore | Búsqueda"
    }, [])

    return(
        <div>
            <SearchBar />
        </div>
    )
}

export default Search