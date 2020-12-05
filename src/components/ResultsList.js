import React from "react";
import Moment from "react-moment";

function ResultList(props) {
      //image name phone email dob
    //.picture.large(or medium); .name.first & .name.last; .phone; .email; .dob.date (convert)
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
