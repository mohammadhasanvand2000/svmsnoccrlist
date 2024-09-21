import './app.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <Slider {...settings}>
        
          <div className="hero-slide hero-slide--1">
            {/* محتوای اسلاید اول */}
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="slider-content slider-content--animation" style={{marginTop: '200px'}}> 
                    <span className="text-center content-span-1 u-c-secondary"><h1 style={{ color: "#ffff00" }}>فروشگاه دوچرخه اسپید </h1><br /></span>
                    <span className="text-center content-span-2 u-c-secondary"><h2 style={{ color: "#ff0202" }} >تخفیفات ویژه برای اولین خرید </h2></span>
                    <span className="text-center content-span-3 u-c-secondary"><h3 style={{ color: "#ffff00" }}>پیشرو در شکست قیمت ها </h3></span>
                    <a style={{ backgroundColor: "#0400f" }} className="container shop-now-link btn--e-brand" href="shop-side-version-2.html"><h3></h3> خرید</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-slide hero-slide--2">
            {/* محتوای اسلاید دوم */}
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="slider-content slider-content--animation" style={{marginTop: '200px'}}>
                    <span className="text-center content-span-1 u-c-secondary"><h1 style={{ color: "#ffff00" }}>آموزشگاه دوچرخه اسپید </h1><br /></span>
                    <span className="text-center content-span-2 u-c-secondary"> <h2 style={{ color: "#ffff00" }} >آموزش انواع رشته های دوچرخه سواری به صورت حرفه ای </h2></span>
                    <span className="text-center content-span-3 u-c-secondary"><h3 style={{ color: "#ffff00" }}>تمرین با دوچرخه سواران حرفه ای </h3></span>
                    <a style={{ backgroundColor: "#0400f" }} className="container shop-now-link btn--e-brand" href="/register"><h3></h3> ثبت نام </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-slide hero-slide--3">
            {/* محتوای اسلاید سوم */}
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="slider-content slider-content--animation" style={{marginTop: '200px'}}>
                    <span className="text-center content-span-1 u-c-secondary"><h1 style={{ color: "#ffff00" }}>گروه دوچرخه سواری اسپید </h1><br /></span>
                    <span className="text-center content-span-2 u-c-secondary"> <h2 style={{ color: "#ffff00" }} > تور های تفریحی گردشگری دوچرخه سواری همراه با خانواده </h2></span>
                    <span className="text-center content-span-3 u-c-secondary"><h3 style={{ color: "#ffff00" }}>طبیعت گردی </h3></span>
                    <a style={{ backgroundColor: "#0400f" }} className="container shop-now-link btn--e-brand" href="/register"><h3></h3> ثبت نام </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
    </Slider>
  );
};

export default CarouselSlider;
