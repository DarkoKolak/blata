import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

		const style = {
			'@media (min-width: 1200px)': {
				maxHeight: '1200px' 
			},
	}

    return  <div className="ltn__slider-area ltn__slider-3  section-bg-2">
			  <div style={{maxHeight: '900px'}} className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
			    {/* ltn__slide-item */}
			    <div style={{maxHeight: '900px'}} className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg={publicUrl+"assets/img/slider/blata3.jpeg"}>
				<div style={{maxHeight: '900px'}} className="ltn__slide-item-inner  text-left">
			        <div style={{maxHeight: '900px'}} className="container">
			          <div className="row">
			            <div className="col-lg-12 align-self-center">
			              <div className="slide-item-info">
			                <div className="slide-item-info-inner ltn__slide-animation">
			                  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> <span style={{color: 'white'}}>Zvončica<span style={{color: '#E0AA3E'}}>Deluxe</span></span></h6>
			                  <h1 className="slide-title animated ">Luksuzni smjestaj za <br/> vas odmor</h1>
			                  {/* <div className="slide-brief animated">
			                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
			                  </div> */}
			                  <div className="btn-wrapper animated go-top">
			                    <Link to="/shop" className="theme-btn-1 btn btn-effect-1">Osigurajte smještaj</Link>
								<br/>
								<br/>
								<br/>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    {/* ltn__slide-item */}
			    <div style={{maxHeight: '900px'}} className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg={publicUrl+"assets/img/slider/blata.jfif"}>
			      <div className="ltn__slide-item-inner  text-left">
			        <div className="container">
			          <div className="row">
			            <div className="col-lg-12 align-self-center">
			              <div className="slide-item-info">
			                <div className="slide-item-info-inner ltn__slide-animation">
			                  <h1 className="slide-title animated ">Moderno opremljeni, novi luksuzni apartmani</h1>
			                  <div className="slide-brief animated"> 
			                    <p> Dizajnerski namještaj i <br/>pedantno odabrani dodaci </p>
			                  </div>
			                  <div className="btn-wrapper animated go-top">
			                    <Link to="/shop" className="theme-btn-1 btn btn-effect-1">Osigurajte smještaj</Link>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    {/* ltn__slide-item */}
			    <div style={{maxHeight: '900px'}} className="ltn__slide-item ltn__slide-item-2  ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60" data-bs-bg={publicUrl+"assets/img/slider/blata4.jpeg"}>
			      <div className="ltn__slide-item-inner  text-left">
			        <div className="container">
			          <div className="row">
			            <div className="col-lg-12 align-self-center">
			              <div className="slide-item-info">
			                <div className="slide-item-info-inner ltn__slide-animation">
			                  <h1 className="slide-title animated ">Ostavite svakodnevnu gužvu za sobom</h1>
							  <br/>
			                  <div className="slide-brief animated">
			                    <p>Zvončica <span style={{color: '#E0AA3E'}}>Deluxe</span> smještena je u prekrasnom okruženju, 250m od plaže i nedaleko od centra grada Vodica</p>
			                  </div>
			                  <div className="btn-wrapper animated go-top">
			                    <Link to="/shop" className="theme-btn-1 btn btn-effect-1">Osigurajte smještaj</Link>
								<br/>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    {/*  */}
			  </div>
			</div>

        }
}

export default BannerV3