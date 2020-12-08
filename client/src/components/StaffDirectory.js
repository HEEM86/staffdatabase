import React, { Component } from "react";
import SearchForm from "./SearchForm.js";
import ResultList from "./ResultList";
import API from "../utils/API";

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
      const query = search.toLowerCase();
    if(!query){
        this.setState({queryResults:this.state.results});
    }
    else{
        
        let tempResult = this.state.results;
        tempResult = tempResult.filter(item => item.name.toLowerCase().includes(query));
        if (tempResult.length === 0 ){
            
            tempResult = this.state.results.filter(item=> item.phone.includes(query));
        }

        this.setState({queryResults:tempResult});
    }
  };

  handleSort = event =>{
      console.log("clicked");
      let tempResult =this.state.queryResults;
      switch(event){
          case "Name":
              tempResult=tempResult.sort((a,b)=>{
                  let comparison =0;
                  if(a.name>b.name){
                      comparison= 1;
                  }else if (a.name<b.name){
                      comparison =-1;
                  }
                  return comparison;
              });
              break;
            case "Email":
                tempResult=tempResult.sort((a,b)=>{
                    let comparison =0;
                    if(a.email>b.email){
                        comparison= 1;
                    }else if (a.email<b.email){
                        comparison =-1;
                    }
                    return comparison;
                });
                break;
            case "Phone":
                tempResult=tempResult.sort((a,b)=>{
                    let comparison =0;
                    if(a.phone>b.phone){
                        comparison= 1;
                    }else if (a.phone<b.phone){
                        comparison =-1;
                    }
                    return comparison;
                });
                break;
            case "DOB":
                tempResult=tempResult.sort((a,b)=>{
                    let comparison =0;
                    if(a.dob>b.dob){
                        comparison= 1;
                    }else if (a.dob<b.dob){
                        comparison =-1;
                    }
                    return comparison;
                });
                break;
            default:
                break;

      }
      this.setState({queryResults:tempResult});
  }


  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    },()=>{this.searchEmployees(this.state.search);});
    
  };

  render() {
    return (
      <div>
        <div className="jumbotron">
            <h1>Employee Directory</h1>

        </div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <ResultList 
            results={this.state.queryResults}
            handleSort={this.handleSort}    
        />

      </div>
    );
  }
}

export default EmployeeContainer;
