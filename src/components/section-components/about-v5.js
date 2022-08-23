import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV5 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__about-us-area pb-115 go-top" style={{marginTop: "120px"}}>
				<div className="container">
				<div className="row">
					<div className="col-lg-5 align-self-center">
					<div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
						<img src={publicUrl+"assets/img/slider/blata2.jfif"} alt="Image" />
					</div>
					</div>
					<div className="col-lg-7 align-self-center">
					<div className="about-us-info-wrap">
						<div className="section-title-area ltn__section-title-2--- mb-20">
						<h1 className="section-title">Provedite svoj godišnji u 
							luksuznim apartmanima Zvončica <span>Deluxe</span><span>.</span></h1>
						<p>Ostavite svakodnevnu gužvu za sobom i odmorite se u luksuznoj kući za odmor Zvončica Deluxe u mirnom dijelu grada na zapadnoj obali Vodica. Apartmani su kapaciteta od 4 do 6 osoba i savršen je izbor za veliku obitelj ili skupinu prijatelja.
Dojmljiva unutrašnjost klimatiziranih apartmana uređena je dizajnerskim namještajem i pedantno odabranim dodacima. Apartmani se protežu kroz prizemlje, prvi i drugi kat te uključuju elegantne dnevne boravke sa kuhinjama opremljenim modernim uređajima, raskošne kupaonice i prostrane spavaće sobe.
Zvončica Deluxe smještena je u prekrasnom okruženju, 250m od plaže i nedaleko od centra grada Vodica poznatog po izvorima vode po kojima su i dobile ime. Vodice su danas turističko mjesto u kojem zasigurno ne nedostaje sadržaja. Prepustite se laganim melodijama pjesme s Mediterana, romantičnim šetnjama uz more ili pak pogledajte neke od kulturnih priredbi i koncerata koji se odvijaju u centru grada Vodice.</p>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>	
        }
}

export default AboutV5