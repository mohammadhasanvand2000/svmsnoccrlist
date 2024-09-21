import React from 'react';

const AboutSection = () => {
  return (
    <div className="my-component section__content">
      <div className="container">
        <div className="row">
          <div  style={{marginTop:'200px'}} className="col-lg-12">
            <div className="about">
              <div className="about__container">
                <div className="about__info">
                  <h2 className="about__h2">فروشگاه دوچرخه اسپید </h2>
                  <div className="about__p-wrap">
                    <p className="about__p">
                       فروشگاه دوچرخه اسپید با بیش از 10 سال سابقه درخشان در زمینه فروش دوچرخه و لوازم جانبی به صورت حرفه ای با قیمت های مرزی 
                    </p>
                  </div>
                  <a className="about__link btn--e-secondary" href="/#pro" target="_blank">همین الان خرید کنید </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
