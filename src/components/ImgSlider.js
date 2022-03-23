import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/88252F2871226D1C4326554AFD2DFDD97591669932A053EE0AD62A3DC02817F9/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim"></img>
                <h2></h2>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7CF4EEE0E050FE8486478D5ABA0393AD1F91BEBB6B901691C9B02AA405846261/scale?width=1440&aspectRatio=3.91&format=jpeg"></img>
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-10%, -50%);
        color: white;
        font-size: 25px;
        -webkit-transition: all 300ms ease;
        transition: all 250ms ease;
        text-transform: uppercase;
    }
    
    .slide {
     position: relative;
    }

    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px;
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8)
        }
    }
`