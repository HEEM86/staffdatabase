import React, { Component } from 'react';
import React from "react";
import Moment from "react-moment";

function ResultList(props) {
   
  return (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Name<i className=" btn fa fa-fw fa-sort" onClick={()=>props.handleSort("Name")}></i></th>
                <th scope="col">Phone<i className="fa fa-fw fa-sort" onClick={()=>props.handleSort("Phone")}></i></th>
                <th scope="col">Email<i className="fa fa-fw fa-sort" onClick={()=>props.handleSort("Email")}></i></th>
                <th scope="col">DOB<i className="fa fa-fw fa-sort" onClick={()=>props.handleSort("DOB")}></i></th>
            </tr>
        </thead>

        <tbody>
            {props.results.map(result => (
                <tr key={result.id}>
                    <td><img alt={result.name} className="img-fluid" src={result.picture} /></td>
                    <td>{result.name}</td>
                    <td>{result.phone}</td>
                    <td>{result.email}</td>
                    <td><Moment format="MM/DD/YYYY" date={result.dob}/></td>
                </tr>
            ))}
        </tbody>
      
    </table>
  );
}

export default ResultList;