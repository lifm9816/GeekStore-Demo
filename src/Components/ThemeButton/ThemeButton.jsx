import React from "react";
import { MdOutlineLightMode, MdOutlineNightlightRound } from "react-icons/md";
import { ButtonContainer, TButton } from "./Styles";

const ThemeButton = ({ theme, setTheme }) => {

    return(
        <ButtonContainer>
            <TButton onClick={ ()  => setTheme(theme === "light" ? "dark" : "light")}>
                { theme === "light" ? <MdOutlineLightMode/> : <MdOutlineNightlightRound/>}
            </TButton>
        </ButtonContainer>
    )
}

export default ThemeButton;