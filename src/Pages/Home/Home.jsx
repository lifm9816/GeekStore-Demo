import styled from "styled-components";
import MyCarousel from "../../Components/Carousel";
import { Dc } from "../../Components/UI";
import "./Home.css";

const Brand = styled.section`
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
`

const Home = () => {
    return(
        <div>
            <div className = "carousel-container">
                <MyCarousel />
            </div>
            <Brand>

            </Brand>
        </div>
    )
}

export default Home;