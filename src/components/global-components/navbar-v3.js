import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';

class NavbarV3 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
		const style = {
			'@media (min-width: 1200px)': {
				maxHeight: '1200px' 
			},
	}
	
        return (
		<div>
           <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">
			  <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
			    <div className="container">
			      <div className="row">
			        <div className="col">
			          <div className="site-logo-wrap">
			            <div className="site-logo go-top">
			              <Link to="/"><span style={{color: 'white'}}>Zvončica<span style={{color: '#E0AA3E'}}>Deluxe</span></span></Link>
			            </div>
			          </div>
			        </div>
			        <div className="col header-menu-column menu-color-white">
			          <div className="header-menu d-none d-xl-block go-top">
			            <nav>
			              <div className="ltn__main-menu">
			                <ul>
							  <li><Link to="/">O nama</Link></li>
			                  <li className="menu-icon"><a href="#">Apartmani</a>
			                    <ul className="sub-menu menu-pages-img-show">
									<li>
										<Link to="/apartman9">Apartman 01</Link>
										<img src={publicUrl+"assets/img/home-demos/home-1.jpg"} alt="#" />
									</li>
									<li>
										<Link to="/apartman9">Apartman 02</Link>
										<img src={publicUrl+"assets/img/home-demos/home-2.jpg"} alt="#" />
									</li>
									<li>
										<Link to="/apartman9">Apartman 03</Link>
										<img src={publicUrl+"assets/img/home-demos/home-3.jpg"} alt="#" />
									</li>
									<li>
									<Link to="/apartman9">Apartman 04</Link>
									<img src={publicUrl+"assets/img/home-demos/home-4.jpg" } alt="#" /> 
									</li>
									<li>
										<Link to="/apartman9">Apartman 05</Link>
										<img src={publicUrl+"assets/img/home-demos/home-5.jpg" } alt="#" /> 
									</li>
									<li>
										<Link to="/apartman9">Apartman 06</Link>
										<img src={publicUrl+"assets/img/home-demos/home-6.jpg" } alt="#" /> 
									</li>
									<li>
										<Link to="/apartman9">Apartman 07</Link>
										<img src={publicUrl+"assets/img/home-demos/home-7.jpg" } alt="#" /> 
									</li>
									<li>
										<Link to="/apartman9">Apartman 08</Link>
										<img src={publicUrl+"assets/img/home-demos/home-8.jpg" } alt="#" /> 
									</li>
									<li>
										<Link to="/apartman9">Apartman 09</Link>
										<img src={publicUrl+"assets/img/home-demos/home-9.jpg" } alt="#" /> 
									</li>
			                    </ul>
			                  </li>
							  {/* <li><Link to="/location">Lokacija</Link></li> */}
							  <li><Link to="/contact">Kontakt</Link></li>
			                </ul>
			              </div>
			            </nav>
			          </div>
			        </div>
			        <div className="col--- ltn__header-options ltn__header-options-2 ">
			          {/* Mobile Menu Button */}
			          <div className="mobile-menu-toggle d-xl-none">
			            <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
			              <svg viewBox="0 0 800 600">
			                <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
			                <path d="M300,320 L540,320" id="middle" />
			                <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
			              </svg>
			            </a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</header>
			<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
				<div className="ltn__utilize-menu-inner ltn__scrollbar">
					<div className="ltn__utilize-menu-head">
					<div className="site-logo">
					<Link to="/"><span style={{color: 'black'}}>Zvončica<span style={{color: '#E0AA3E'}}>Deluxe</span></span></Link>
					</div>
					<button className="ltn__utilize-close">×</button>
					</div>
					<div className="ltn__utilize-menu">
					<ul>
						<li><Link to="/">O nama</Link></li>
						<li><a href="#">Apartmani</a>
						<ul className="sub-menu">
						<li><Link to="/apartman9">Apartman 01</Link></li>
						<li><Link to="/apartman9">Apartman 02</Link></li>
						<li><Link to="/apartman9">Apartman 03</Link></li>
						<li><Link to="/apartman9">Apartman 04</Link></li>
						<li><Link to="/apartman9">Apartman 05</Link></li>
						<li><Link to="/apartman9">Apartman 06</Link></li>
						<li><Link to="/apartman9">Apartman 07</Link></li>
						<li><Link to="/apartman9">Apartman 08</Link></li>
						<li><Link to="/apartman9">Apartman 09</Link></li>
						</ul>
						</li>
						{/* <li><Link to="/location">Lokacija</Link></li> */}
						<li><Link to="/contact">Kontakt</Link></li>
					</ul>
					</div>
					<div className="ltn__social-media-2">
					<ul>
						<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
						<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
						<li><a href="#" title="Phone"><i class="fa fa-phone" aria-hidden="true"></i></a></li>
						<li><a href="#" title="E-mail"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>

					</ul>
					</div>
				</div>
				</div>
		</div>
        )
    }
}


export default NavbarV3