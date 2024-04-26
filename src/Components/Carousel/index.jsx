import React from "react";
import { Carousel } from "react-responsive-carousel";
import aw2 from "../../assets/Images/aw2.jpg";
import spiderman2 from "../../assets/Images/spiderman2.jpg";
import gow from "../../assets/Images/gow.jpeg";
import mario from "../../assets/Images/mario.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Img } from "./Styles";

const MyCarousel = () => {
    return(
        <Container>
            <Carousel
                autoPlay={true}
                interval={4000}
                infiniteLoop={true}
            >
                <div>
                    <Img src={spiderman2} alt="" />
                </div>
                <div>
                    <Img src={mario} alt="" />
                </div>
                <div>
                    <Img src={aw2} alt="" />
                </div>
                <div>
                    <Img src={gow} alt="" />
                </div>
            </Carousel>
        </Container>
    )
}

export default MyCarousel