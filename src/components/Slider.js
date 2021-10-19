import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import img from "../images/business-web-site.PNG";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <SliderContainer>
        <SliderSection>
          <Slider {...settings} className="project-slider">
            <SliderImg>
              <img src={img} alt="img" />
            </SliderImg>
            <SliderImg>
              <img src={img} alt="img" />
            </SliderImg>
            <SliderImg>
              <img src={img} alt="img" />
            </SliderImg>
            <SliderImg>
              <img src={img} alt="img" />
            </SliderImg>
          </Slider>
        </SliderSection>
      </SliderContainer>
    );
  }
}

const SliderContainer = styled.div`
  height: 100%;
`;

const SliderSection = styled.section`
  padding: 2rem;
  margin-top: 30px;
  .project-slider {
    ul {
      li {
        button::before {
          color: ${({ theme }) => theme.textColor.secondary};
        }
      }
    }
  }
`;
const SliderImg = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;
