import React, { Component } from 'react'
import Section from '../Section/Section';
import Slider from 'react-slick'
import Sponsor from './Sponsor'
import Mix959 from './mix959.png'
import Blackbaud from './blackbaud.jpg'
import DavidAylor from './davidaylor.jpg'
import InvitationOnly from './invitationOnly.png'
import DMProductions from './dmproductions.png'
import Dudleys from './dudleys.jpg'
import Barefoot from './barefoot.png'
import Beau from './beau.jpg'
import Budlight from './budlight.jpg'
import DrinksWithJay from './drinkswithjay.jpg'

export default class Sponsors extends Component {
    
  render() {
      var settings = {
          infinite: true,
          speed: 600,
          dots: true,
          autoplay: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
              {
                  breakpoint: 1100,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      autoplay: true
                  }
              },
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
        <Section id="sponsors" title="Our Sponsors" desc="" >
            <Slider {...settings}>
                <Sponsor name="Mix 95.9" image={Mix959} facebook="mix959" twitter="mix959live" instagram="mix959live" web="http://mix959.com" level="Promoting Sponsor"/>
                <Sponsor name="Invitation Only" image={InvitationOnly} facebook="InvitationOnlyLLC" twitter="" instagram="" web="https://www.invitationonlycharleston.com" level="Supporting Sponsor"/>
                <Sponsor name="Blackbaud" image={Blackbaud} facebook="blackbaud" twitter="blackbaud" instagram="blackbaud" web="https://www.blackbaud.com" level="Presenting Sponsor"/>
                <Sponsor name="Dudley's on Ann" image={Dudleys} facebook="dudleysonann" twitter="dudleysonann" instagram="dudleysonann" web="http://www.dudleysonann.com" level="Presenting Sponsor" />
                <Sponsor name="David Aylor Law Firm" image={DavidAylor} facebook="AylorLaw" twitter="DavidAylor" instagram="davidaylorlawoffices" web="https://davidaylor.com/" level="Promoting Sponsor"/>
                <Sponsor name="D&amp;M Productions" image={DMProductions} facebook="chsweddingdj" twitter="" instagram="dandm_productions" web="https://www.alowcountryevent.com/" level="Supporting Sponsor"/>
                <Sponsor name="Barefoot Wines" image={Barefoot} facebook="BarefootWine" instagram="BarefootWine" twitter="BarefootWine" web="https://www.barefootwine.com/" level="Supporting Sponsor" />
                <Sponsor name="Drinks With Jay" image={DrinksWithJay} facebook="drinkswithjay" instagram="drinkswithjay" twitter="" web="https://www.drinkswithjay.com/" level="Supporting Sponsor"/>
                <Sponsor name="BEAU Magazine" image={Beau} facebook="BEAUMagazineCHS" instagram="beau.magazine" twitter="beau_magazine" web="https://beau-magazine.com/" level="Promoting Sponsor" />
                <Sponsor name="Bud Light" image={Budlight} facebook="budlight" instagram="budlight" twitter="budlight" web="http://www.budlight.com/" level="Supporting Sponsor" />
            </Slider>
        </Section>
    )
  }
}
