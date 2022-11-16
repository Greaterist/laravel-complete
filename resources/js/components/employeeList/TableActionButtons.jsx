import axios from "axios";
import React, { Component } from "react";
import ViewModal from "./Modals/ViewModal";

class TableActionButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentEmployeeName: null,
            currentEmployeeSalary: null
        }
    }


    getEmployeeDetails = (id) => {
        axios.post('get/individual/employee/details', {
            employeeId: id,
        }).then((response) => {
            this.setState({
                currentEmployeeName: response.data.employee_name,
                currentEmployeeSalary: response.data.salary,
            })
            console.log(response.data)
        })
    }


    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={"#ViewModal" + this.props.rowId}
                    onClick={()=>this.getEmployeeDetails(this.props.rowId)}
                >
                    view
                </button>
                <ViewModal modalId={this.props.rowId} employeeData={this.state}/>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="Modal"
                >
                    update
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="Modal"
                >
                    delete
                </button>
            </div>
        );
    }
}

export default TableActionButtons;
