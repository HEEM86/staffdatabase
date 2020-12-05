import React, { Component } from "react";
// import SearchForm from "./SearchForm.js";
// import ResultList from "./ResultList";
// import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    search: "",
    results: [],
    queryResults:[]
  };

  componentDidMount() {
    this.userInitialize();
  };

  userInitialize = () =>{
      API.getUsers()
      .then(res=> {
          let tempResult = res.data.results;
          tempResult = tempResult.map(item => ({
              id: item.id.value,
              picture: item.picture.large, 
              name: item.name.first +" "+item.name.last,
              phone: item.phone,
              email:item.email,
              dob: item.dob.date
            }))
          this.setState({results:tempResult});
          this.setState({queryResults:tempResult});
        })
      .catch(err=> console.log(err));
  };


  searchEmployees = search =>{
    //   console.log()
    const query = search.toLowerCase();
  if(!query){
      this.setState({queryResults:this.state.results});
  }
  else{
      //if search in name
      let tempResult = this.state.results;
      tempResult = tempResult.filter(item => item.name.toLowerCase().includes(query));
      if (tempResult.length === 0 ){
          //search in number
          tempResult = this.state.results.filter(item=> item.phone.includes(query));
      }
    //   console.log(tempResult)
      this.setState({queryResults:tempResult});
  }
};

