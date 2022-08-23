import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { RiWindyLine } from "react-icons/ri";
import { GiWaterSplash } from "react-icons/gi";
import { MdKitchen, MdBalcony } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import OstaliApartmani from "./OstaliApartmani";

class ShopDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { apartmani: [] };
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const iconStyle = {
      fontStyle: "normal",
      fontWeight: "normal",
      fontVariant: "normal",
      textTransform: "none",
      lineHeight: "1",
    };
    const apartmani = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let array = apartmani.filter((value) => {
      return value !== this.props.brojApartmana;
    });

    const renderApartments = () => {
      return array.map((broj) => <OstaliApartmani brojApartmana={broj} />);
    };

    return (
      <div className="ltn__shop-details-area pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                <h1 style={{ marginTop: "0" }} className="ltn__secondary-color">
                  Apartman 9
                </h1>
                <h4 className="title-2">Opis</h4>
                <p>
                  Massa tempor nec feugiat nisl pretium. Egestas fringilla
                  phasellus faucibus scelerisque eleifend donec Porta nibh
                  venenatis cras sed felis eget velit aliquet. Neque volutpat ac
                  tincidunt vitae semper quis lectus. Turpis in eu mi bibendum
                  neque egestas congue quisque. Sed elementum tempus egestas sed
                  sed risus pretium quam. Dignissim sodales ut eu sem. Nibh
                  mauris cursus mattis molestee iaculis at erat pellentesque. Id
                  interdum velit laoreet id donec ultrices tincidunt.
                </p>
                <p>
                  To the left is the modern kitchen with central island, leading
                  through to the unique breakfast family room which feature
                  glass walls and doors out onto the garden and access to the
                  separate utility room.
                </p>
                <h4 className="title-2">Sadržaj</h4>
                <div className="property-detail-feature-list clearfix mb-45">
                  <ul>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed" />
                        <div>
                          <h6>Dnevni boravak</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i>
                          {" "}
                          <MdKitchen
                            style={{ verticalAlign: "inherit" }}
                          />{" "}
                        </i>
                        <div>
                          <h6>Moderna kuhinja</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-parking" />
                        <div>
                          <h6>Parking prostor</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i className="flaticon-double-bed" />
                        <div>
                          <h6>Spavaca soba</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i>
                          <RiWindyLine style={{ verticalAlign: "inherit" }} />
                        </i>
                        <div>
                          <h6>Klima</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i>
                          {" "}
                          <GiWaterSplash
                            style={{ verticalAlign: "inherit" }}
                          />{" "}
                        </i>
                        <div>
                          <h6>Pogled na more</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i>
                          {" "}
                          <MdBalcony
                            style={{ verticalAlign: "inherit" }}
                          />{" "}
                        </i>
                        <div>
                          <h6>Balkon</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="property-detail-feature-list-item">
                        <i>
                          {" "}
                          <FaUmbrellaBeach
                            style={{ verticalAlign: "inherit" }}
                          />{" "}
                        </i>
                        <div>
                          <h6>150m do plaže</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <h4 className="title-2">Location</h4>
                <div className="property-details-google-map mb-60">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
                <h4 className="title-2">Plava plaža Vodice</h4>
                <div
                  className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
                  data-bs-bg={publicUrl + "assets/img/apartman9/PlavaPlaza.jpg"}
                >
                  <a
                    className="ltn__video-icon-2 ltn__video-icon-2-border---"
                    href="https://www.youtube.com/embed/kkv94fcoXbk?autoplay=1&showinfo=0"
                    data-rel="lightcase:myCollection"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                {/* Top Rated Product Widget */}
                <div className="widget ltn__top-rated-product-widget go-top">
                  <h4 className="ltn__widget-title ltn__widget-title-border-2">
                    Drugi apartmani
                  </h4>
                  <ul>{renderApartments()}</ul>
                </div>
                {/* Social Media Widget */}
                <div className="widget ltn__social-media-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border-2">
                    Posjetite nas i na socijalnim medijima
                  </h4>
                  <div className="ltn__social-media-2">
                    <ul>
                      <li>
                        <a href="#" title="Facebook">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Instagram">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopDetails;
