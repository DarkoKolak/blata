import React, { Component } from "react";
import { Link } from "react-router-dom";

class OstaliApartmani extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <li>
        <div className="top-rated-product-item clearfix">
          <div className="top-rated-product-img">
            <Link to="/product-details">
              <img
                src={
                  publicUrl +
                  //`assets/img/apartman${this.props.brojApartmana}/1.jpeg`
                  `assets/img/apartman9/${this.props.brojApartmana}.jpeg`
                }
                alt="#"
              />
            </Link>
          </div>
          <div className="top-rated-product-info">
            <h6 style={{ marginTop: "15px" }}>
              <Link to={`/apartman${this.props.brojApartmana}`}>
                Apartman {this.props.brojApartmana}
              </Link>
            </h6>
          </div>
        </div>
      </li>
    );
  }
}


export default OstaliApartmani;
