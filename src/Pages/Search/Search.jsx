import { useEffect, useState } from "react";
import SearchBar from "../../Components/SearchBar";
import SearchCard from "../../Components/SearchCard";
import { ResultsDiv } from "./Styles";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./Search.css";

const Search = (props) => {

    const {products, marcas} = props;
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        document.title = "GeekStore | Búsqueda";

        const filtered = products.filter((product) => 
                product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
    }, [searchTerm, products])

    const handleSearch = (term) => {
        setSearchTerm(term);
    }

    
    //Resultados inmediatos
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <ResultsDiv>
                {searchTerm && filteredProducts.length === 0 ? (
                    <p>No se encontraron resultados</p>
                ) : searchTerm ? (
                    filteredProducts.map((product, index) => (
                        <SearchCard
                            key={index}
                            data={product}
                            marcas={marcas}
                        />
                    ))
                ) : null}
            </ResultsDiv>
        </div>
    )//*/

    /*Resultados al hacer click en el boton
    return (
        <div>
          <SearchBar onSearch={handleSearch} />
          <ResultsDiv>
            {searchTerm && filteredProducts.length === 0 ? (
              <p>No se encontraron resultados</p>
            ) : searchTerm ? (
              filteredProducts.map((product, index) => (
                <SearchCard
                  data={product}
                  key={index}
                  marcas={marcas}
                />
              ))
            ) : null}
          </ResultsDiv>
        </div>
      );*/

      /*
      return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <ResultsDiv>
                {searchTerm && filteredProducts.length === 0 ? (
                    <p>No se encontraron resultados</p>
                ) : (
                    <TransitionGroup component={Div}>
                        {filteredProducts.map((product, index) => (
                            <CSSTransition
                                key={index}
                                timeout={500}
                                classNames="fade"
                            >
                                <FadeDiv className="fade-enter-active">
                                    <SearchCard
                                        key={index}
                                        data={product}
                                        marcas={marcas}
                                    />
                                </FadeDiv>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                )}
            </ResultsDiv>
        </div>
    );*/
}

export default Search