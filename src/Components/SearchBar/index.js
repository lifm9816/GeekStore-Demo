import React, { useState } from "react";
import logo from "../../assets/Images/icon.png"
import { BsSearch } from "react-icons/bs"
import { Search_Bar, Search_Container, Logo, Search, Button } from "./Styles";

function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");

    //Resultados automáticos
    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term)
      };

    const handleSearch = () => {
        onSearch(searchTerm); // Pasar el término de búsqueda como argumento
        setSearchTerm(""); // Limpiar el término de búsqueda después de realizar la búsqueda
      };

    /*  
      const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const handleSearch = () => {
        onSearch(searchTerm);
        setSearchTerm(""); // Limpiamos el campo de búsqueda después de realizar la búsqueda
      };
    */
    return(
        <Search_Bar>
           <Search_Container>
            <Logo src={logo} />
            <Search 
                type="text"
                placeholder="¿Qué comprarás hoy?"
                value={searchTerm}
                onChange={handleInputChange}
            />
            </Search_Container>
            <Button onClick={handleSearch} ><BsSearch /></Button> 
        </Search_Bar>
    )
}

export default SearchBar;