import React, { useEffect, useState } from 'react';

import { 
    Col,
    Card,
    Button,
    Modal
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return ( 
        <Col lg="4">
            <div className="pb-5 mt-5 text-center btn btn-light" onClick={handleShow}>
                <img className=" bg-white mb-3" src={data.companylogo} alt={`Image de ${data.name}`}/>
                <p className="lead">
                    {data.role}
                    <br/>
                    {data.date}
                </p>
                
            </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.role}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data.desc}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

        </Col>

     );
}
 
export default ExperienceCard;