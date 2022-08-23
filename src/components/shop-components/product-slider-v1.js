import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductSliderV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__img-slider-area mb-90">
				<div className="container-fluid">
				<div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/1.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/1.jpeg"} alt="Ulaz" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/2.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/2.jpeg"} alt="Kuhinja" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/3.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/3.jpeg"} alt="Spavaća" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/4.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/4.jpeg"} alt="Spavaća" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/5.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/5.jpeg"} alt="Dnevni" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/6.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/6.jpeg"} alt="Dnevni" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/7.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/7.jpeg"} alt="Balkon" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/8.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/8.jpeg"} alt="Balkon" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/9.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/9.jpeg"} alt="Kupatilo" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/10.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/10.jpeg"} alt="Spavaca" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/11.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/11.jpeg"} alt="Dnevni" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/12.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/12.jpeg"} alt="Dnevni" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/13.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/13.jpeg"} alt="Spavaca" />
						</a>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__img-slide-item-4">
						<a href={publicUrl+"assets/img/apartman9/14.jpeg"} data-rel="lightcase:apartman9">
						<img style={{maxHeight: "550px", width: "100%"}} src={publicUrl+"assets/img/apartman9/14.jpeg"} alt="Dnevni" />
						</a>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ProductSliderV1