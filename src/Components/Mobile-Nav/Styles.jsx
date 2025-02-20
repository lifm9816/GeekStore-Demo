import styled from "styled-components";

export const NavBar = styled.nav`
    
    background-color: ${ ({ theme }) => theme.primary};

    ul li a .icon
    {
        color: ${ ({ theme }) => theme.menu_logo_icon};
    }

    ul li.active a .icon
    {
        color: ${ ({ theme }) => theme.menu_logo_icon_active};
    }

    ul li a .text
    {     
        color: ${ ({ theme }) => theme.text_menu};
    }

    .indicator
    {

        background-color: ${ ({ theme }) => theme.secondary };
        border: 6px solid ${ ({ theme }) => theme.body};

    }

    .indicator::before
    {
        box-shadow: 0px -10px 0 0 ${ ({ theme }) => theme.body};
    }

    .indicator::after
    {
        
        box-shadow: 0px -10px 0 0 ${ ({ theme }) => theme.body};
    }

    li.active .cart-counter {
        color: ${({theme}) => theme.secondary}; /* Cambia el color del contador cuando el elemento li tiene la clase "active" */
    }



   
`