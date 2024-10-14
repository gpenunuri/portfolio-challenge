import { Link } from "react-router-dom";
import Button from "../../components/Button";

import profileImg from "/german-blue.webp";
import work01 from "/img/work/marvelator.png";
import work02 from "/img/work/cheves.png";
import partnerImg01 from "/img/partners/dominos.svg";
import partnerImg02 from "/img/partners/kellogs.svg";
import partnerImg03 from "/img/partners/mastercard.svg";
import partnerImg04 from "/img/partners/paypal.svg";
import partnerImg05 from "/img/partners/groupon.svg";
import partnerImg06 from "/img/partners/match.svg";

const WORK01_LIVE_URL = "https://marvelator.vercel.app";
const WORK02_LIVE_URL = "https://cheves.vercel.app";

const Home = () => {
  const navigateOnClick = (url: string) => {
    if (window) {
      window.open(url, "_blank");
    }
  };

  return (
    <main>
      <section className="hero">
        <div className="hero__text-box">
          <div className="hero__profile-box">
            <img className="hero__img" alt="German" src={profileImg} />
          </div>
          <h1 className="hero__title">German's Insights on Advertising</h1>
          <h5 className="hero__subtitle">
            Learn how to get motivated consumers that already want your product
          </h5>
          <div className="hero__cta-box">
            <Button text="Subscribe &nbsp; &#8594;" />
            <Link to="/blog">Visit my Blog</Link>
          </div>
        </div>
      </section>

      <section className="our-partners">
        <h3 className="our-partners__title">Our Trusted Partners</h3>
        <div className="our-partners__box">
          <div className="our-partners__item">
            <img
              alt="partner logo"
              className="our-partners__logo"
              src={partnerImg01}
            />
          </div>
          <div className="our-partners__item">
            <img
              alt="partner logo"
              className="our-partners__logo"
              src={partnerImg02}
            />
          </div>
          <div className="our-partners__item">
            <img
              alt="partner logo"
              className="our-partners__logo"
              src={partnerImg03}
            />
          </div>
          <div className="our-partners__item">
            <img
              alt="partner logo"
              className="our-partners__logo"
              src={partnerImg04}
            />
          </div>
          <div className="our-partners__item">
            <img
              alt="partner logo"
              className="our-partners__logo"
              src={partnerImg05}
            />
          </div>
          <div className="our-partners__item">
            <img
              alt="partner logo"
              className="our-partners__logo"
              src={partnerImg06}
            />
          </div>
        </div>
      </section>

      <section className="my-work">
        <h3 className="my-work__title">Some Of My work</h3>
        <div className="my-work__cards">
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            className="card"
            onClick={() => navigateOnClick(WORK01_LIVE_URL)}
          >
            <img alt="work1" className="card__picture" src={work01} />
            <div className="card__text-box">
              <p className="card__title">Marvelator App</p>
              <span className="card__subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                obcaecati aspernatur fuga, eaque explicabo delectus deserunt
                quod ipsa error quia sit unde at tenetur vero, omnis porro harum
                ducimus. Placeat.
              </span>
              <div className="card__tags">
                <span className="card__tag">Design</span>
                <span className="card__tag">SEO</span>
                <span className="card__tag">Development</span>
              </div>
            </div>
          </div>

          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            className="card"
            onClick={() => navigateOnClick(WORK02_LIVE_URL)}
          >
            <img alt="work1" className="card__picture" src={work02} />
            <div className="card__text-box">
              <p className="card__title">Beer List App</p>
              <span className="card__subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                obcaecati aspernatur fuga, eaque explicabo delectus deserunt
                quod ipsa error quia sit unde at tenetur vero, omnis porro harum
                ducimus. Placeat.
              </span>
              <div className="card__tags">
                <span className="card__tag">Ads</span>
                <span className="card__tag">SEO</span>
                <span className="card__tag">E-Commerce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe">
        <h3 className="subscribe__title">Join The Community!</h3>
        <p className="subscribe__subtitle">
          Subscribe to get access to a community where you will learn how to get
          motivated consumers that already want your product!
        </p>
        <Button text="Join Now!" />
      </section>
    </main>
  );
};

export default Home;
