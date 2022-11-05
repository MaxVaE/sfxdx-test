import Logo from '../Logo/Logo';

import facebookIcon from '../../assets/facebook.svg';
import twitterIcon from '../../assets/twitter.svg';
import youtubeIcon from '../../assets/youtube.svg';
import instagramIcon from '../../assets/instagram.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Logo className="footer__logo" />

        <div className="footer__policy">
          <a className="footer__link" href="#" target="_blank">Privacy Policy</a>
          <a className="footer__link" href="#" target="_blank">Terms & Conditions</a>
          <a className="footer__link" href="#" target="_blank">Cookie Policy</a>
        </div>

        <div className="footer__contact">
          <img src={facebookIcon} alt="facebook-icon" />
          <img src={twitterIcon} alt="twitter-icon" />
          <img src={youtubeIcon} alt="youtube-icon" />
          <img src={instagramIcon} alt="instagram-icon" />
        </div>

      </div>
      <span className="footer__copyright">
        {`©${new Date().getFullYear()} All rights reserved. Powered by MaxVaE`}
      </span>
    </footer>
  );
}

export default Footer;
