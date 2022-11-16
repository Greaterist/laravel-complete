import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";

class CreateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null,
        }
    }

    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value
        })
    }

    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value
        })
    }

    createEmployeeData = () => {
        axios.post('/store.employee/data', {
            employeeName:this.state.employeeName,
            employeeSalary:this.state.employeeSalary,
        }).then(()=>{
            toast.success('employee saved')
            setTimeout(() => {
                location.reload();
            }, 2500);
        })
    }


    render() {
        return (
            <>
            <div className="row text-right mb-3 pb-3">
                <button className="btn btn-info text-right col-3 offset-md-9"
                    data-toggle='modal'
                    data-target='#CreateModal'>
                        Add new Employee
                </button>
            </div>
            <div
                className="modal fade"
                id={"CreateModal"}
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
                        <div className="modal-body">
                            <form className="form" action="">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="employeeName"
                                        placeholder="name"
                                        onChange={this.inputEmployeeName}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="employeeSalary"
                                        placeholder="salary"
                                        onChange={this.inputEmployeeSalary}
                                    />
                                </div>
                            </form>
                            <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                close
                            </button>
                            <button
                                type="button"
                                class="btn btn-primary"
                                onClick={this.createEmployeeData}
                            >
                                create
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
            
        );
    }
}

export default CreateModal;
