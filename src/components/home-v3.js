import React from 'react';
import Banner from './section-components/banner-v3';
import SearchForm from './section-components/search-form';
import Features from './section-components/features-v1';
import ProductSlider from './section-components/product-slider-v3';
import FeaturedItem from './section-components/featured-item-v1';
import Video from './section-components/video-v1';
import Testimonial from './section-components/testimonial-v3';
import Sponsor from './section-components/sponsor-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Map from './section-components/map-v2';
import ProSlider from './section-components/product-slider-v1';
import Cateogory from './section-components/category-v2';
import AboutV5 from './section-components/about-v5';
import ContactForm from './section-components/contact-form';
import BlogGrid from './blog-components/blog-grid'
import PageHeader from './global-components/page-header';
import VideoV4 from './section-components/video-v4';
import UpComingProduct from './section-components/upcoming-product-v1';
import ServiceDetails from './section-components/service-details';
import TeamV1 from './section-components/team-v2';

const Home_V3 = () => {
    return <div>
        <Banner />
        <AboutV5 />
        {/* <ServiceDetails />
        <UpComingProduct /> */}
        <Video />
        {/* <TeamV1 /> */}
        <div className="container">
        <ProductSlider />
        </div>
        {/* <div className="section-title-area ltn__section-title-2--- text-center">
			<h2 className="section-title" style={{color: "#E0AA3E"}}>Lokacija</h2>
		</div> */}
		<div className="property-details-google-map mb-60" style={{height: "500px", marginBottom: "40px"}}>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		</div>
        <ContactForm />
    </div>
}

export default Home_V3

