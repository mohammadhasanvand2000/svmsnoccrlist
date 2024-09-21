import React, { useEffect, useState } from 'react';
import './fo.css';
import '../../bace-style/css/bootstrap.css';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { useAuth } from '../auth/AuthContext';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../axiosConfig';

const BuyForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    postalCode: '',
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const { getAuthToken } = useAuth();
  const { cartId } = useParams();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("cid:", cartId);
    const validationErrors = {};

    if (!validateName(formData.name)) {
      validationErrors.name = "نام باید حاوی حروف فارسی باشد!";
    }

    if (!validatePhone(formData.phone)) {
      validationErrors.phone = "لطفاً یک شماره موبایل معتبر وارد کنید!";
    }

    if (!validatePostalCode(formData.postalCode)) {
      validationErrors.postalCode = "لطفاً یک کد پستی معتبر وارد کنید!";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const authToken = await getAuthToken();
        console.log('tok:', authToken);
        console.log('tok:', formData);
        const response = await axios.post(`${baseUrl}/pro/shipping-info/${cartId}/`, formData, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
          
        });
        
       

        console.log('موفقیت در ارسال فرم:', response.data);
        setRegistrationSuccessful(true);
      } catch (error) {
        console.error('خطا در ارسال فرم:', error);
        setErrorMessage(error.message);
        setShowModal(true);
      }
    }
  };

  const validateName = (name) => {
    const regex = /^[\u0600-\u06FF\s]+$/;
    return regex.test(name);
  };

  const validatePhone = (phone) => {
    const regex = /^(\+98|0)?9\d{9}$/;
    return regex.test(phone);
  };

  const validatePostalCode = (postalCode) => {
    const regex = /^\d{10}$/;
    return regex.test(postalCode);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="my-component">
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="container">
                  <a href="/" className="logo d-flex align-items-center w-auto">
                    <img src="assets/img/logo.png" alt="" />
                    <h1 style={{ color: "#000103" }}>
                      <span className=" d-lg-block">فروشگاه دوچرخه اسپید </span>
                    </h1>
                  </a>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 style={{ color: '#ffff00' }} className="card-title text-center pb-0 fs-4"> اطلاعات ارسال</h5>
                      <p style={{ color: '#ffff00' }} className="text-center small">اطلاعات خود را وارد کنید </p>
                    </div>
                    <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                      <div className="col-12">
                        <label style={{ color: '#ffff00' }} htmlFor="yourName" className="form-label">    نام گیرنده را وارد کنید  </label>
                        <input
                          type="text"
                          name="name"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          id="yourName"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        <div style={{ color: '#f80606' }} className="invalid-feedback">{errors.name}</div>
                      </div>
                      
                      <div className="col-12">
                        <label style={{ color: '#ffff00' }} htmlFor="yourPhone" className="form-label">شماره تلفن همراه را وارد کنید </label>
                        <input
                          type="text"
                          name="phone"
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          id="yourPhone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                        <div style={{ color: '#f80606' }} className="invalid-feedback">{errors.phone}</div>
                      </div>
                      <div className="col-12">
                        <label style={{ color: '#ffff00' }} htmlFor="address" className="form-label">آدرس</label>
                        <textarea
                          name="address"
                          className="form-control"
                          id="address"
                          required
                          value={formData.address}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <label style={{ color: '#ffff00' }} htmlFor="postalCode" className="form-label">کد پستی</label>
                        <input
                          type="text"
                          name="postalCode"
                          className={`form-control ${errors.postalCode ? 'is-invalid' : ''}`}
                          id="postalCode"
                          required
                          value={formData.postalCode}
                          onChange={handleInputChange}
                        />
                        <div style={{ color: '#f80606' }} className="invalid-feedback">{errors.postalCode}</div>
                      </div>
                      <div className="col-12">
                        <button style={{ color: '#ffff00' }} className="btn btn-primary w-100" type="submit"> ارسال </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Modal className="card-body" show={showModal} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: '#febf03' }} closeButton>
          <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '2rem', color: '#f80606' }}>خطا!</h1>
          </Modal.Body>
        </Modal.Header >
        <Modal.Body className="text-center" style={{ backgroundColor: '#04cbee' }}>{errorMessage}</Modal.Body>
        <Modal.Footer style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#febf03' }}>
          <Button style={{ backgroundColor: '#0a58ca' }} variant="secondary" onClick={handleClose}>
            متوجه شدم
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal className="card-body" show={registrationSuccessful} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: '#dee2e680' }} closeButton>
          <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '2rem', color: '#06f83bbf' }}>ثبت اطلاعات موفق</h1>
          </Modal.Body>
        </Modal.Header >
        <Modal.Body className="text-center" style={{ backgroundColor: '#dee2e680' }}>{"تبریک میگم اطلاعات شما با موفقیت ثبت شد       ."}</Modal.Body>
        <Modal.Footer style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#dee2e680' }}>
          <Button style={{ backgroundColor: '#0a58ca' }} variant="secondary" onClick={handleClose}>
                <a href='/'>بازگشت به صفحه اصلی</a>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BuyForm;