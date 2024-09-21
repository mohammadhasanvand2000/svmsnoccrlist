import React, { useState, useEffect } from 'react';

import numeral from 'numeral';
import { FaEye, FaShoppingCart, FaHeart, FaEnvelope } from 'react-icons/fa';
import { useAuth } from '../auth/AuthContext';
import axios from 'axios';
import CurrentPathIndicator from './CurrentPathIndicator'

import { Detail, handleAddToCart } from './Detail';
import { baseUrl } from '../../axiosConfig';



const Product = () => {
  const [groupingList, setGroupingList] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(8); // تعداد اولیه محصولات قابل مشاهده
  const [loadMoreCount, setLoadMoreCount] = useState(4); // تعداد محصولاتی که هر بار بارگذاری بیشتر می‌شوند
  const { getAuthToken } = useAuth();
  const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const { handleAddToCart } = require('./Detail'); // نیازی به اعلان "Detail" نیست

  useEffect(() => {
    // اجرای درخواست هنگام رندر اولیه
    fetch(`${baseUrl}/pro/grouping/`)
      .then(response => response.json())
      .then(data => {
        setGroupingList(data);
        setLoading(false); // در اینجا اعلام می‌کنیم که داده‌ها به درستی دریافت شده‌اند و بارگزاری پایان یافته است.
      })
      .catch(error => {
        console.error('Error fetching grouping list:', error);
        setLoading(false); // اگر خطا رخ داد، نیز وضعیت Loading را به پایان می‌بریم.
      });
  }, []);

  useEffect(() => {
    // این قسمت را باید با درخواست به API شما جایگزین کنید
    const url = selectedGroup
  ? `${baseUrl}/pro/products/?category=${selectedGroup}`
  : `${baseUrl}/pro/products/`;


    setLoading(true); // قبل از ارسال درخواست مجدداً وضعیت Loading را به true تغییر می‌دهیم.

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // اگر selectedGroup وجود داشته باشد، محصولاتی که با این گروه مرتبط هستند را فیلتر می‌کنیم
        const filteredProducts = selectedGroup ? data.filter(product => product.grouping === selectedGroup) : data;
        setProducts(filteredProducts);
        setLoading(false); // داده‌ها به درستی دریافت شده و بارگزاری پایان یافته است.
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false); // اگر خطا رخ داد، نیز وضعیت Loading را به پایان می‌بریم.
      });
  }, [selectedGroup]);
 
 
  const handleGroupChange = (group) => {
    setSelectedGroup(group);
  };

  const handleLoadMore = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + loadMoreCount);
  };

  return (
    <div className="u-s-p-y-60">
      <div className="u-s-p-b-60">
      
        <div className="section__intro u-s-m-b-16">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section__text-wrap">
                  <h1 style={{ color: "#ffff00" }} className="section__heading u-c-secondary u-s-m-b-12">محصولات</h1>
                  <span className="section__span u-c-silver">انتخاب دسته بندی</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="filter-category-container">
                  <div className="filter__category-wrapper">
                    <button
                      className={`btn filter__btn filter__btn--style-1 ${selectedGroup === null ? 'active' : 'js-checked'}`}
                      type="button"
                      onClick={() => handleGroupChange(null)}
                    >
                      همه
                    </button>
                  </div>
                  {groupingList.map(grouping => (
                    <div key={grouping.id} className="filter__category-wrapper">
                      <button
                        className={`btn filter__btn filter__btn--style-1 ${selectedGroup === grouping.id ? 'active' : 'js-checked'}`}
                        type="button"
                        onClick={() => handleGroupChange(grouping.id)}
                      >
                        {grouping.title}
                      </button>
                    </div>
                  ))}
                </div>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <div className="filter__grid-wrapper u-s-m-t-30">
                    <div className="row">
                      {products.slice(0, visibleProducts).map(product => (
                        <div key={product.id} className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item ${product.grouping}`}>
                          <div className="product-o product-o--hover-on product-o--radius">
                            <div className="product-o__wrap">
                              <a className="aspect aspect--bg-grey aspect--square u-d-block" href={`product-detail/${product.slug}`}>
                                <img className="aspect__img" src={product.image} alt={product.title} />
                              </a>
                              <div className="product-o__action-wrap">
                                <ul className="product-o__action-list">
                                  <li>
                                    <a target="blank"  href={`/speed-shoping-front/#/Detail/${product.id}`} data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="جزییات">
                                    <FaEye />
                                    </a>
                                  </li>
                                  
                                 
                                </ul>
                              </div>
                            </div>
                            <span className="product-o__category">
                              
                            </span>
                            <span className="text-center  product-o__name">
                             <a href={`/speed-shoping-front/#/Detail/${product.id}`}>{product.title}</a>
                            </span>

                            {/* امتیازات و قیمت */}
                            <div className="product-o__rating gl-rating-style">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star-half-alt" />
                              <span className="product-o__review"></span>
                            </div>
                            <span className="product-o__price">
                              ${product.price}
                              <span className="product-o__discount"></span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-12">
                <div className="load-more">
                  <button className="btn btn--e-brand" type="button" onClick={handleLoadMore}>
                    ادامه محصولات
                  </button>
                  {showAddToCartModal && (
      <div className="modal fade" id="add-to-cart" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">محصول به سبد خرید اضافه شد</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowAddToCartModal(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* متن یا اطلاعات مورد نظر شما */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setShowAddToCartModal(false)}>بستن</button>
            </div>
          </div>
        </div>
      </div>
    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Product;
