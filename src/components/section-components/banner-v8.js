import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV8 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__slider-area ltn__slider-6 mb-120---">
				<div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
				{/* ltn__slide-item */}
				<div className="ltn__slide-item--- ltn__slide-item-9 section-bg-1 bg-image" data-bs-bg={publicUrl+"assets/img/slider/blata.jfif"}>
					<div className="ltn__slide-item-inner">
					<div className="slide-item-info bg-overlay-white-90 text-center">
						<div className="slide-item-info-inner  ltn__slide-animation">
						<br/>
						<br/>
						<h1 className="slide-title animated">Zvončica<span style={{color: '#E0AA3E'}}>Deluxe</span></h1>
						<br/>
						</div>
					</div>
					</div>
				</div>
				{/*  */}
				</div>
			</div>
  
        }
}

export default BannerV8