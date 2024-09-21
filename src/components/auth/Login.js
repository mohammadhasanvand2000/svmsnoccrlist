import React, { useState  ,useEffect } from "react";
import './register.css';
import '../../bace-style/css/bootstrap.css';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import CurrentPathIndicator from '../main-page/CurrentPathIndicator'
import { baseUrl } from '../../axiosConfig';

const Login = () => {
  const { setAuthToken } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [refreshToken, setRefreshToken] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Use separate states for email and password
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const errors = {};

    if (!validateEmail(email)) {
      errors.email = "لطفاً یک ایمیل معتبر وارد کنید!";
    }
  
    if (!validatePassword(password)) {
      errors.password = "رمز عبور باید حاوی حروف بزرگ و کوچک و اعدادو@#! باشد!";
    }
  
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(`${baseUrl}/auth/login/`, {
          email: email,
          password: password,
        }, {
          withCredentials: true,
        });
        
        if (response && response.data && response.data.access) {
          const accessToken = response.data.access;
          const refreshToken = response.data.refresh;
          console.log('توکن دریافت شد:', accessToken);
          console.log('رفرش توکن دریافت شد:', refreshToken);
          setAuthToken(accessToken, refreshToken);
          setAccessToken(response.data.access);

          setRefreshToken(response.data.refresh);
          localStorage.setItem('authToken', accessToken);  // Add this line to store the token in localStorage
          localStorage.setItem('refreshToken', refreshToken);  // Add this line to store the refresh token in localStorage
          const previousPage = localStorage.getItem('previousPage');
          if (previousPage) {
            navigate(previousPage);
            localStorage.removeItem('previousPage');  // Remove the stored page after navigating to it
          } else {
            navigate('/');
          }
        }
        
  
      } catch (error) {
        console.log('خطای در ورود:', error);
        setErrorMessage(error.response?.data?.error || 'خطای ناشناخته');
        setShowModal(true);
      }
    }
  };
  useEffect(() => {
    if (accessToken && refreshToken) {
      navigate('/', { state: { refreshToken: refreshToken } });
    }
  }, [accessToken, refreshToken]);
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@#!]+$/;
    return regex.test(password);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="my-component">
      
      <main>
      <div dir='rtl'  style={{marginRight:'60px',color:'#000000'}}><h3 style={{marginRight:'60px',color:'#000000'}}><CurrentPathIndicator /></h3> </div>

        <div className="container">
          
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="container">
                    <a href="index.html" className="logo d-flex align-items-center w-auto">
                      <img src="assets/img/logo.png" alt="" />
                      <h1 style={{ color: "#000103" }}>
                        <span className=" d-lg-block">فروشگاه دوچرخه اسپید </span>
                      </h1>
                    </a>
                  </div>
                    
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 style={{ color: '#ffff00' }} className="card-title text-center pb-0 fs-4"> ورود</h5>
                        <p style={{ color: '#ffff00' }} className="text-center small">اطلاعات خود را وارد کنید </p>
                      </div>
                      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                        <div className="col-12">
                        </div>
                        <div className="col-12">
                          <label style={{ color: '#ffff00' }} htmlFor="yourEmail" className="form-label">ایمیل خود را وارد کنید </label>
                          <input
                            type="email"
                            name="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="yourEmail"
                            required
                            value={email}
                            onChange={handleInputChange}
                          />
                          <div style={{ color: '#f80606' }} className="invalid-feedback">{errors.email}</div>
                        </div>
                       
                        <div className="col-12">
                          <label style={{ color: '#ffff00' }} htmlFor="yourPassword" className="form-label">رمز عبور خود را وارد کنید </label>
                          <input
                            type="password"
                            name="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            id="yourPassword"
                            required
                            value={password}
                            onChange={handleInputChange}
                          />
                          <div style={{ color: '#f80606' }} className="invalid-feedback">{errors.password}</div>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <div className="col-12">
                              <p style={{ color: '#ffff00' }} className="small mb-0">
                                <Link to="/forget" style={{ color: '#084298' }}> رمز عبور را فراموش کردم</Link>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button style={{ color: '#ffff00' }} className="btn btn-primary w-100" type="submit">ورود</button>
                        </div>
                        <div className="col-12">
                          <p style={{ color: '#ffff00' }} className="small mb-0">
                            اگر حساب کاربری ندارید؟{' '}
                            <Link to="/register" style={{ color: '#084298' }}>ثبت نام کنید</Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Modal className="card-body" show={showModal} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: '#febf03' }} closeButton>
          <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '2rem', color: '#f80606' }}>خطا!</h1>
          </Modal.Body>
        </Modal.Header>
        <Modal.Body className="text-center" style={{ backgroundColor: '#04cbee' }}>
          {"ایمیل یا شماره  موبایل تکراری است یا این که کاربر دیگری با این مشخصات وجود دارد ."}
        </Modal.Body>
        <Modal.Footer style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#febf03' }}>
          <Button style={{ backgroundColor: '#0a58ca' }} variant="secondary" onClick={handleClose}>
            متوجه شدم 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
