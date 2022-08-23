import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Social extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__social-media">
			<ul>
				<li><a href="https://www.facebook.com/tuna-theme" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
				<li><a href="https://www.instagram.com/tuna-theme" title="Instagram"><i className="fab fa-instagram" /></a></li>
				<li><a href="#" title="Phone"><i class="fa fa-phone" aria-hidden="true"></i></a></li>
				<li><a href="#" title="E-mail"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
			</ul>
		</div>
        }
}

export default Social