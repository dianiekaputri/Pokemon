import React from "react";
class Footer extends React.Component{
    render() {
        return(
            <div className='footer'>
                <div className='footer-logo'>
                    <img src='./img/logo.png' alt=""/>
                    <p>The href attribute is required for an anchor to be keyboard accessible.</p>
                </div>
                <ul className='footer-list'>
                    <li>Layanan</li>
                    <li>Hubungi Kami</li>
                    <li>Bantuan</li>
                </ul>
            </div>
        );
    }
}

export default Footer;