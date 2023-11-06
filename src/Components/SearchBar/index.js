import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/Images/icon.png"
import { BsSearch } from "react-icons/bs"

const Search_Bar = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 50px;
    margin: 10px;

    @media (max-width: 800px)
    {
        margin: 10px auto;
        padding: 0 10px;
    }

`

const Search_Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex:1;
`

const Logo = styled.img`
    max-width: 50px;
    z-index: 1;
    border-radius: 50% 0 0 50%;
`

const Search = styled.input`
    text-align: center;
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 10px 40px 10px 10px;
    border-radius: 5px;
`

const Button = styled.button`
    background-color: #19222D;
    color: #FFFFFF;
    border: none;
    padding: 18px;
    border-radius: 0 50% 50% 0;
    cursor: pointer;
`

function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return(
        <Search_Bar>
           <Search_Container>
            <Logo src={logo} />
            <Search 
                type="text"
                placeholder="¿Qué comprarás hoy?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </Search_Container>
            <Button onClick={handleSearch} ><BsSearch /></Button> 
        </Search_Bar>
    )
}

export default SearchBar;