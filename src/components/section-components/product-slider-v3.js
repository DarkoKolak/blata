import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductSliderV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div style={{backgroundColor: 'white'}} className="ltn__search-by-place-area section-bg-1 before-bg-top--- bg-image-top--- pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container-fluid" style={{maxWidth: "1800px"}}>
			    <div className="row">
			      <div className="col-lg-12" >
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h1 className="section-title" style={{color: "#E0AA3E"}}>Apartmani</h1>
			        </div>
			      </div>
			    </div>
				<h3 style={{color: "#E0AA3E"}}>1. kat</h3>
			    <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
			      <div className="col-lg-12" >
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/apartman1"><img style={{maxHeight: "370px",width: "100%"}} src={publicUrl+"assets/img/bg/apartman1.jfif"} alt="#" /></Link>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/contact">Kapacitet: 6 osoba</Link></h6>
			            <h4><Link to="/product-details">Apartman 1</Link></h4>
			            <div className="search-by-place-btn">
			              <Link to="/product-details">Pogledajte apartman &nbsp; <i style={{verticalAlign: "text-top"}} className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-12">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img style={{maxHeight: "370px",width: "100%"}} src={publicUrl+"assets/img/bg/apartman2.jfif"} alt="#" /></Link>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/contact">Kapacitet: 6 osoba</Link></h6>
			            <h4><Link to="/product-details">Apartman 2</Link></h4>
			            <div className="search-by-place-btn">
			              <Link to="/product-details">Pogledajte apartman &nbsp; <i style={{verticalAlign: "text-top"}} className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img style={{maxHeight: "370px",width: "100%"}} src={publicUrl+"assets/img/bg/apartman3.jfif"} alt="#" /></Link>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/contact">Kapacitet: 6 osoba</Link></h6>
			            <h4><Link to="/product-details">Apartman 3</Link></h4>
			            <div className="search-by-place-btn">
			              <Link to="/product-details">Pogledajte apartman &nbsp; <i style={{verticalAlign: "text-top"}} className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
				  </div>
				  <h3 style={{color: "#E0AA3E"}}>2. kat</h3>
				  <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
			      <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img style={{maxHeight: "370px",width: "100%"}} src={publicUrl+"assets/img/bg/apartman4.jfif"} alt="#" /></Link>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/contact">Kapacitet: 6 osoba</Link></h6>
			            <h4><Link to="/product-details">Apartman 4</Link></h4>
			            <div className="search-by-place-btn">
			              <Link to="/product-details">Pogledajte apartman &nbsp; <i style={{verticalAlign: "text-top"}} className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img style={{maxHeight: "370px",width: "100%"}} src={publicUrl+"assets/img/bg/apartman4.jfif"} alt="#" /></Link>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/contact">Kapacitet: 6 osoba</Link></h6>
			            <h4><Link to="/product-details">Apartman 5</Link></h4>
			            <div className="search-by-place-btn">
			              <Link to="/product-details">Pogledajte apartman &nbsp; <i style={{verticalAlign: "text-top"}} className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img style={{maxHeight: "370px",width: "100%"}} src={publicUrl+"assets/img/bg/apartman4.jfif"} alt="#" /></Link>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/contact">Kapacitet: 6 osoba</Link></h6>
			            <h4><Link to="/product-details">Apartman 6</Link></h4>
			            <div className="search-by-place-btn">
			              <Link to="/product-details">Pogledajte apartman &nbsp; <i style={{verticalAlign: "text-top"}} className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
				  </div>
				  <h3 style={{color: "#E0AA3E"}}>3. kat</h3>
				  <div className="row ltn__search-by-place-slider-1-active slick-arrow-1 go-top">
				  <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img style={{maxHeight: "370px",width: "100%"}} src={publicUrl+"assets/img/bg/apartman4.jfif"} alt="#" /></Link>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/contact">Kapacitet: 6 osoba</Link></h6>
			            <h4><Link to="/product-details">Apartman 7</Link></h4>
			            <div className="search-by-place-btn">
			              <Link to="/product-details">Pogledajte apartman &nbsp; <i style={{verticalAlign: "text-top"}} className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/product-details"><img style={{maxHeight: "370px",width: "100%"}} src={publicUrl+"assets/img/bg/apartman4.jfif"} alt="#" /></Link>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/contact">Kapacitet: 6 osoba</Link></h6>
			            <h4><Link to="/product-details">Apartman 8</Link></h4>
			            <div className="search-by-place-btn">
			              <Link to="/product-details">Pogledajte apartman &nbsp; <i style={{verticalAlign: "text-top"}} className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
			        <div className="ltn__search-by-place-item">
			          <div className="search-by-place-img">
			            <Link to="/apartman9"><img style={{maxHeight: "370px",width: "100%"}} src={publicUrl+"assets/img/bg/apartman4.jfif"} alt="#" /></Link>
			          </div>
			          <div className="search-by-place-info">
			            <h6><Link to="/apartman9">Kapacitet: 6 osoba</Link></h6>
			            <h4><Link to="/apartman9">Apartman 9</Link></h4>
			            <div className="search-by-place-btn">
			              <Link to="/apartman9">Pogledajte apartman &nbsp; <i style={{verticalAlign: "text-top"}} className="flaticon-right-arrow" /></Link>
			            </div>
			          </div>
			        </div>
			      </div>	
			      {/*  */}
			    </div>
			  </div>
			</div>
        }
}

export default ProductSliderV3