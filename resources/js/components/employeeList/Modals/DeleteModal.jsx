import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";

class DeleteModal extends Component {
    constructor(props) {
        super(props);
    }

    deleteEmployeeData = (id) => {
        axios.delete("/delete/employee/data/" + id).then(() => {
            toast.error("Employee Deleted");
            setTimeout(() => {
                location.reload();
            }, 2500);
        });
    };

    render() {
        return (
            <div
                className="modal fade"
                id={"DeleteModal" + this.props.modalId}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                Employee Details
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">Are you sure?</div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                No
                            </button>
                            <button
                                type="button"
                                class="btn btn-primary"
                                onClick={() => {
                                    this.deleteEmployeeData(this.props.modalId);
                                }}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteModal;
