import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../auth/AuthContext';
import { FaMinus, FaPlus } from 'react-icons/fa';
import numeral from 'numeral';
import QuantityInput from './QuantityInput';
import './app.css';
import { FaTrash } from 'react-icons/fa';
import { useNavigate,useParams ,Link} from 'react-router-dom';
import CurrentPathIndicator from './CurrentPathIndicator'
import { baseUrl } from '../../axiosConfig';
const Cart = () => {
  const { getAuthToken } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [formDataDict, setFormDataDict] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [completeQuantity, setCompleteQuantity] = useState(0);
  const { cartId } = useParams();
  const navigate = useNavigate();
  const [cid, setcid] = useState([]);

// حالا می‌توانید از cart_id و cart در اینجا استفاده کنید

  useEffect(() => {
    let calculatedTotalPrice = 0;
    cartItems.forEach((cartItem) => {
      calculatedTotalPrice += cartItem.product_details.price * cartItem.cart_item.quantity;
    });
    setTotalPrice(calculatedTotalPrice);
  }, [cartItems]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const authToken = await getAuthToken();

        if (authToken) {
          const response = await axios.get(`${baseUrl}/pro/cart/`, {
            headers: {
              'Authorization': `Bearer ${authToken}`,
            },
          });

          const cartData = response.data.cart;
          const cid = response.data.cid;
          setCartItems(cartData.detailed_cart_items);
          setcid(cid.cart_id)
          // Initialize formDataDict with empty data for each cart item
          const initialFormDataDict = {};
          cartData.detailed_cart_items.forEach((cartItem) => {
            initialFormDataDict[cartItem.cart_item.product] = {
              quantity: 1,
              isModified: false,
            };
          });
          setFormDataDict(initialFormDataDict);
        } else {
          console.error('Token not found.');
        }
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartItems();
  }, [getAuthToken]);
  const handleUpdateCart = async (productId) => {
    try {
      const authToken = await getAuthToken();
  
      if (authToken) {
        const updatedQuantity = formDataDict[productId]?.quantity || 1;
  
        await axios.patch(
          `${baseUrl}/pro/add-to-cart/${productId}/`,
          { quantity: updatedQuantity },
          {
            headers: {
              'Authorization': `Bearer ${authToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('quantity',updatedQuantity)
        // Update the state with the new quantity
        setCartItems(prevCartItems => {
          return prevCartItems.map(cartItem => {
            if (cartItem.cart_item.product === productId) {
              return {
                ...cartItem,
                cart_item: {
                  ...cartItem.cart_item,
                  quantity: updatedQuantity,
                },
              };
            }
            return cartItem;
          });
        });
      } else {
        console.error('Token not found.');
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };
  const handleRemoveFromCart = async (productId) => {
    try {
      const authToken = await getAuthToken();

      if (authToken) {
        await axios.post(`${baseUrl}/pro/remove-from-cart/${productId}/`, null, {
          headers: {
            'Authorization': `Bearer ${authToken}`,
          },
        });
        window.location.reload();


        // After successfully removing from cart, update the local state or refetch the cart items
        // For example, you can refetch the cart items using the same logic you have in the `fetchCartItems` function
       
      } else {
        console.error('Token not found.');
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handleFormSubmit = async (productId) => {
    const quantity = formDataDict[productId]?.quantity || 1;
    handleUpdateCart(productId, quantity);
  };
  
 
   
  const handleDecrement = (productId) => {
    setFormDataDict((prevData) => {
      const currentQuantity = prevData[productId]?.quantity || 1;
      const updatedQuantity = Math.max(1, currentQuantity - 1);
  
      setCompleteQuantity(prevCompleteQuantity => prevCompleteQuantity - 1);
  
      return {
        ...prevData,
        [productId]: {
          ...prevData[productId],
          quantity: updatedQuantity,
          isModified: true,
        },
      };
    });
  };
  
  const handleIncrement = (productId) => {
    setFormDataDict((prevData) => ({
      ...prevData,
      [productId]: {
        ...prevData[productId],
        quantity: prevData[productId].quantity + 1,
        isModified: true,
      },
    }));
  
    setCompleteQuantity(prevCompleteQuantity => prevCompleteQuantity + 1);
  };
  

  const baseUrl = 'http://127.0.0.1:8000';

  return (
    <>
      <div  style={{width:'100%',height:'100%'}} className="section__intro u-s-p-b-60">
      <div dir='rtl'  style={{marginRight:'60px'}}><CurrentPathIndicator /></div>
        <div className="section__intro u-s-m-b-60">
 
        
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className=" section__text-wrap">
                  
                 <h1 className="section__heading u-c-secondary u-s-m-b-12">سبد خرید </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div  className="section__content">
          <div  className="container">
            <div className="row ">
              <div className="col-lg-12 u-s-m-b-30">
                <div className="table-responsive">
                  <table className="table-p ">
                    <tbody>
                      {cartItems.map((cartItem) => (
                        <tr style={{ backgroundColor: '#000000' }} key={cartItem.cart_item.product}>
                          <td className="table-p__box">
                            <div className="table-p__img-wrap">
                              <img className="u-img-fluid" src={`${baseUrl}${cartItem.product_details.image}`} alt="" />
                            </div>
                            <div className="table-p__info">
                              <span className="table-p__name">
                                <a href={`product-detail.html/${cartItem.product_details.slug}`}>
                                  {cartItem.product_details.title}
                                </a>
                              </span>
                              <br />
                              <span className="table-p__category">
                                <a href={`shop-side-version-2.html/${cartItem.quantity}`}>
                                  تعداد: {cartItem.cart_item.quantity}
                                </a>
                              </span>
                              <ul className="table-p__variant-list">
                                <li>
                                  <span>سایز: {cartItem.product_details.size}</span>
                                </li>
                                <li>
                                  <span>
                                    رنگ:
                                    <div
                                      className="color-radio-rectangle"
                                      style={{
                                        backgroundColor: `${cartItem.cart_item.color}`,
                                        width: '20px',
                                        height: '20px',
                                        borderColor: '#ffffff',
                                      }}
                                    />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </td>
                          <td>
                            <div className="pd-detail">
                              <div className="pd-detail__inline">
                                <span>{numeral(cartItem.product_details.price * cartItem.cart_item.quantity).format('0,0')} تومان</span>
                              </div>
                            </div>
                          </td>
                         
                          <td className="table-p__input-counter-wrap">
                         
  <div key={cartItem.cart_item.product}>
    <QuantityInput
      initialValue={1}
      
      onDecrement={() => handleDecrement(cartItem.cart_item.product)}
      onIncrement={() => handleIncrement(cartItem.cart_item.product)}
    />
    <br />
    {formDataDict[cartItem.cart_item.product]?.isModified && (
      <button
        style={{ backgroundColor: '#008300', marginRight: '1px' }}
        className="btn btn-primary"
        onClick={() => handleFormSubmit(cartItem.cart_item.product)}
      >
        ثبت
      </button>
    )}
  </div>





                          </td>
                          <td className="table-p__del-wrap">
                            <button style={{ backgroundColor: '#000000' }} className="btn btn-primary" onClick={() => handleRemoveFromCart(cartItem.cart_item.product)}>
                            <FaTrash />

                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="col-lg-12">
                    <div className="route-box">
                      <span>: </span>
                      <div className="pd-detail__price">
                        <span>{numeral(totalPrice).format('0,0')} تومان</span>
                      </div>
                      : جمع کل سبد خرید
                    </div>
                  </div>
                  
                  <div className="col-lg-12">
                    <div className="route-box">
                      <div className="route-box__g1">
                      <Link to={`/speed-shoping-front/#/form/${cid}`}>
  <button className="route-box__link" style={{ backgroundColor: '#ece802' }}>
    <i className="fas fa-long-arrow-alt-left" />
    <span>نهایی کردن خرید</span>
  </button>
</Link>



                      </div>
                      <div className="route-box__g2">
                       
                        <a className="route-box__link" href="/pro">
                          <i className="fas fa-trash" />
                          <span>اضافه کردن محصولات دیگر </span>
                        </a>
                        
                        <a className="route-box__link" href="/cart">
                          <i className="fas fa-sync" />
                          <span>به روز رسانی سبد</span>
                        </a>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 style={{textAlign:'center'}}>پس از  کلیک بر روی گذینه نهایی کردن خرید وتکمیل فرم ارسال  کارشناسان ما با شما تماس میگیرند</h3>
    </>
  );
};

export default Cart;
