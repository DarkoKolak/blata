import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import Gallery from './global-components/Gallery';
import ContactForm from './section-components/contact-form';

const Product_Details = () => {
    return <div>
        <ProductSlider />
        <ProductDetails brojApartmana={9} />
        <ContactForm />
    </div>
}

export default Product_Details

