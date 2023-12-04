import { useEffect } from "react";
import styled from "styled-components";
import SearchBar from "../../Components/SearchBar";
import SearchCard from "../../Components/SearchCard";


const ResultsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2%;
    margin-top: 20px;
`

const Search = (props) => {

    useEffect(() => {
        document.title = "GeekStore | Búsqueda"
    }, [])

    const {products, marcas} = props;

    return(
        <div>
            <SearchBar />
            <ResultsDiv>
            {
                products.map((product, index) => <SearchCard 
                    data = {product}
                    key = {index}
                    marcas = {marcas}
                />) 
            }
        </ResultsDiv>
        </div>
        
    )
}

export default Search