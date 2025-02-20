import React, { useContext } from "react";
import { MdOutlineLightMode, MdOutlineNightlightRound } from "react-icons/md";
import { ButtonContainer, TButton } from "./Styles";
import { ThemeContext } from "../../App";

const ThemeButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    const ChangeTheme = () => {

        setTheme(( prevTheme ) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        })

    }

    return(
        <ButtonContainer>
            <TButton onClick={ChangeTheme}>
                { theme === "light" ? <MdOutlineNightlightRound/> : <MdOutlineLightMode/>}
            </TButton>
        </ButtonContainer>
    )
}

export default ThemeButton;