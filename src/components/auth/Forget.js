import React, { Component } from "react";
import './register.css'
import '../../bace-style/css/bootstrap.css'
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CurrentPathIndicator from '../main-page/CurrentPathIndicator'
import { baseUrl } from '../../axiosConfig';

class Forget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      email: "",
      agreeTerms: false,
      isLoginMode:true,
      errors: {},
      errorMessage: "",
      showModal: false,
      registrationSuccessful: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const errors = {};

    if (!this.validateEmail(this.state.email)) {
      errors.email = "لطفاً یک ایمیل معتبر وارد کنید!";
    }

 


    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(`${baseUrl}/auth/request-reset-email`, {
          email: this.state.email,
          
        }, {
          withCredentials: true,
        });

        console.log('ورود موفق:', response.data.message);
        
        this.setState({ showModal: true });
      } catch (error) {
        this.setState({ errorMessage: error.response.data.error, showModal: true });

        console.error('خطا در ورود :', error.response.data.error);
      }
    }
  };

  
  validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };



  handleClose = () => this.setState({ showModal: false });

  render() {
    const { errors, errorMessage ,isLoginMode } = this.state;

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
                          <h5 style={{ color: '#ffff00' }} className="card-title text-center pb-0 fs-4"> بازیابی رمز عبور </h5>
                          <p style={{ color: '#ffff00' }} className="text-center small">   </p>
                        </div>
                        <form className="row g-3 needs-validation" noValidate onSubmit={this.handleSubmit}>
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
                              value={this.state.email}
                              onChange={this.handleInputChange}
                            />
                            <div style={{ color: '#f80606' }} className="invalid-feedback">{errors.email}</div>
                          </div>
                        
                          <div className="col-12">
                            <div className="form-check">
                             
                            </div>
                          </div>
                          <div className="col-12">
                            <button style={{ color: '#ffff00' }} className="btn btn-primary w-100" type="submit">ارسال ایمیل بازیابی   رمز عبور</button>
                          </div>
                          <div className="col-12">
                            
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

        <Modal  className="card-body" show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header style={{ backgroundColor: '#febf03' }} closeButton>
          <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '2rem', color: '#f80606' }}>ارسال ایمیل</h1>
          </Modal.Body>


          </Modal.Header >
          <Modal.Body className="text-center" style={{ backgroundColor: '#04cbee' }}>{"ایمیل با موفقیت ارسال شد ، لطفا ایمیل خود را چک کنید ."}</Modal.Body>
          <Modal.Footer  style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#febf03' }}>
              <Button style={{ backgroundColor: '#0a58ca' }} variant="secondary" onClick={this.handleClose}>
                متوجه شدم 
              </Button>
          </Modal.Footer>

        </Modal>

        
      </div>
    );
  }
}

export default Forget;
