import { useState, useEffect } from "react";

import Table from "../components/table/Table";

import customerList from "../assets/JsonData/customers-list.json";
import axios from "axios";

const customerTableHead = ["Id", "name", "email", "phone", "role", "actions"];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item._id}</td>
    <td>{item.firstName + " " + item.lastName}</td>
    <td>{item.email}</td>
    <td>{item.mobile}</td>
    <td>{item.role}</td>
    <td className="d-flex">
      <button className="btn btn-success">Edit</button>
      <button className="btn btn-danger">Delete</button>
    </td>
  </tr>
);

const Customers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/user/all-users`,{
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        });
        setUsers(res.data.data.users);
      }
       catch (error) {
        throw new Error(error);
      }
    }
    getUsers();
  }
  , []);

  return (
    <div>
      <h1 className="page-header">Users List</h1>
      <div className="row">
        <div className="col-12">
          {/* <div className="card"> */}
          {/* <div className="card__body"> */}
          <Table
            limit="10"
            headData={customerTableHead}
            renderHead={(item, index) => renderHead(item, index)}
            bodyData={customerList}
            // renderBody={(item, index) => renderBody(item, index)}
            renderBody={(item, index) => renderBody(item, index)}
          />
          {/* </div> */}
          {/* </div> */}
        </div> 
      </div>
    </div>
  );
};

export default Customers;
