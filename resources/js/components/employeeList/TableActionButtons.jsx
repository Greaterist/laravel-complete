import axios from "axios";
import React, { Component } from "react";
import DeleteModal from "./Modals/DeleteModal";
import UpdateModal from "./Modals/UpdateModal";
import ViewModal from "./Modals/ViewModal";

class TableActionButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentEmployeeName: null,
            currentEmployeeSalary: null,
        };
    }

    getEmployeeDetails = (id) => {
        axios
            .post("get/individual/employee/details", {
                employeeId: id,
            })
            .then((response) => {
                this.setState({
                    currentEmployeeName: response.data.employee_name,
                    currentEmployeeSalary: response.data.salary,
                });
                console.log(response.data);
            });
    };

    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={"#ViewModal" + this.props.rowId}
                    onClick={() => this.getEmployeeDetails(this.props.rowId)}
                >
                    view
                </button>
                <ViewModal
                    modalId={this.props.rowId}
                    employeeData={this.state}
                />

                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={"#UpdateModal" + this.props.rowId}
                    onClick={() => this.getEmployeeDetails(this.props.rowId)}
                >
                    update
                </button>
                <UpdateModal
                    modalId={this.props.rowId}
                    employeeData={this.state}
                />

                <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target={"#DeleteModal" + this.props.rowId}
                >
                    delete
                </button>
                <DeleteModal
                    modalId={this.props.rowId}
                    employeeData={this.state}
                />

            </div>
        );
    }
}

export default TableActionButtons;
