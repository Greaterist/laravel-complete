import axios from "axios";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableRow from "./TableRow";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        };
    }

    // Get Employee List.
    getEmployeeList = () => {
        let self = this;
        axios.get("/get/employee/list").then(function (response) {
            self.setState({
                employees: response.data,
            });
            //console.log(response.data);
        });
    };

    componentDidMount() {
        this.getEmployeeList();
    }

    render() {
        return (
            <div className="container">
                <ToastContainer/>
                <div className="row justify-content-center">
                    <table class="table table-striped-columns">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map(function (x, i) {
                                return <TableRow key={i} data={x}/>;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Table;
