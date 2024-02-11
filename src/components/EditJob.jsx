// editjob.jsx
import React, { useState } from 'react';
import { editjobApi } from '../services/allPI';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditJob({ job }) {
  const [show, setShow] = useState(false);
  const [jobdetails, setJobDetails] = useState({
    id: job._id,
    vacancies: job.vacancies,
  });

  const handleClose = () => {
    setShow(false);
    handleClose1();
  };

  const handleShow = () => setShow(true);

  const handleClose1 = () => {
    setJobDetails({
      id: job._id,
      vacancies: job.vacancies,
    });
  };

  const handleUpdate = async () => {
    const { id, vacancies } = jobdetails;

    if (!vacancies) {
      alert('Please fill the form completely');
    } else {
      const reqBody = {
        vacancies: vacancies,
      };

      const token = sessionStorage.getItem('token');
      const reqHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };

      try {
        const result = await editjobApi(id, reqBody, reqHeader);
        console.log(result);

        if (result.status === 200) {
          toast.success('Updated successfully');
          handleClose();
        } else {
          console.log(result.response.data);
        }
      } catch (error) {
        console.error('Error updating job:', error);
      }
    }
  };

  return (
    <div>
      <button onClick={handleShow} className='btn'>
        <i className="fa-solid fa-pen-to-square text-info"></i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Vacancies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <div className='d-flex justify-content-center align-items-center flex-column'>
                <div className="mb-3 w-100">
                  <input
                    type="text"
                    placeholder='Enter vacancy'
                    className='form-control'
                    value={jobdetails.vacancies}
                    onChange={(e) =>
                      setJobDetails({ ...jobdetails, vacancies: e.target.value })
                    }
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={2000} theme='colored' position='top-center' />

    </div>
  );
}

export default EditJob;
