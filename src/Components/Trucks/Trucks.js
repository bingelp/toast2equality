import React, { Component } from 'react'
import Slider from 'react-slick'
import Section from '../Section/Section';
import Truck from './Truck'
import './Trucks.css'
import CarolinaCreole from './carolinaCreole.png'
import DIGRig from './DIGRIGsmall.png'
import KingOfPops from './kingOfPops.jpg'
import Semilla from './semilla_dark.jpg'

export default class Trucks extends Component {
  render() {
      var settings = {
          infinite: true,
          speed: 500,
          dots: true,
          autoplay: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
              {
                  breakpoint: 750,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      autoplay: true
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: true,
                      dots: true
                  }
              }
          ]
      };
    return (
        <Section id="trucks" title="Food Trucks" desc="" >
            <Slider {...settings}>
                <Truck name="Carolina Creole" image={CarolinaCreole} facebook="charlestonCaribbeancreolefoodtruck" twitter="charlestoncarib" instagram="charlestoncaribbeancreole" web="http://www.charlestoncaribbeancreole.com/" />
                <Truck name="DIG Rig" image={DIGRig} facebook="DIGRIG" twitter="DIGCHS" instagram="DIGCHS" web="http://dighospitality.com/the-dig-rig/" />
                <Truck name="King of Pops" image={KingOfPops} facebook="kingofpops" twitter="kingofpops" instagram="kingofpops" web="https://kingofpops.com/" />
                <Truck name="Semilla" image={Semilla} facebook="semillachs" twitter="semillachs" instagram="semillachs" web="http://semillachs.com/" />
            </Slider>
        </Section>
    )
  }
}
