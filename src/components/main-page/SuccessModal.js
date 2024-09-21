import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { PropagateLoader } from 'react-spinners';
import { Modal } from 'react-bootstrap';

const override = css`
  display: block;
  margin: 0 auto;
`;

const SuccessModal = ({ message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
    <Modal.Header style={{ backgroundColor: '#28a7453'}} >
      <Modal.Title style={{  color: '#28a745', textAlign: 'center' }}>
        
      </Modal.Title>
    </Modal.Header>
    <Modal.Body style={{ backgroundColor: '#ffffff', color: '#28a745',textAlign: 'center' }}>
     <h3  style={{  color: '#28a745'}}>محصول با موفقیت به سبد خرید اضافه شد</h3>
    </Modal.Body>
    <Modal.Footer style={{ display: 'flex', justifyContent: 'center', paddingTop: '80px' }}>
  <PropagateLoader color="#00BFFF" css={override} size={15} /><br/>
</Modal.Footer>

  </Modal>


  );
};

export default SuccessModal;
