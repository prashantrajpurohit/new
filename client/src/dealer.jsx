
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { DEALERLIST } from "./dealersList";

function Bdealer() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div class="container ">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div class="row ">

                    <div class="col-sm-3 mt-5 mb-4 text-gred">
                        <div className="search">
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search Product" aria-label="Search" />

                            </form>
                        </div>
                    </div>
                    <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2><b>Product Details</b></h2></div>
                    <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                        <Button variant="primary" onClick={handleShow}>
                            Add New Product
                        </Button>
                    </div>
                </div>
                <div class="row">
                    <div class="table-responsive " >
                        <table class="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>

                                    <th>Name </th>
                                    <th>Phone</th>
                                    <th>Rating </th>
                                    <th>active products </th>
                                    <th>Actions</th>
                                    <th>Sno.</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DEALERLIST.map((dealers) => {
                                    return (
                                        <tr>
                                            <td>{dealers.SNo}</td>
                                            <td>{dealers.Name}</td>
                                            <td>{dealers.Phone}</td>
                                            <td>{dealers.Email}</td>
                                            <td>{dealers.Rating}</td>
                                            <td>{dealers.Actions}</td>
                                            <td>{dealers.Actions}</td>
                                            <td style={{ display: "flex", alignItems: "center" }}>
                                                {/* <a href="#" class="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i class="material-icons">&#xE417;</i></a> */}
                                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons" style={{ padding: "2px", marginRight: "4px", color: "white", background: "blue", borderRadius: "4px" }}>&#xE254;</i></a>
                                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{ color: "white", padding: " 0 2px ", background: "red", marginBottom: "2px", borderRadius: "6px", objectFit: "contain" }}><i class="material-icons">&#xE872;</i></a>

                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>


                        </table>
                    </div>
                </div>
                <div className="model_box">
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        animation={true}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add Record</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country" />
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City" />
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Country" />
                                </div>

                                <button type="submit" class="btn btn-success mt-4" onClick={handleClose}>Add Record</button>
                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>

                </div>
            </div>
        </div>
    );
}




export default Bdealer