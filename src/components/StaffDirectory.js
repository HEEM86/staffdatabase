import react from "react";
import axios from "axios";
import SearchForm from "./SearchForm";

class EmployeeDirectory extends react.Component {
  state = {
      persons: [],
      search: "",
      queryResults: []
    };
   
  }

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


  searchEmployees = (search) => {
    const query = search.toLowerCase();
    if (!query) {
      this.setState({
        queryResults: this.state.persons.results
      });
    }else{
        //if search in name
        let tempResult = this.state.results;
        tempResult = tempResult.filter(item => item.name.toLowerCase().includes(query));
        if (tempResult.length === 0 ){
            //search in number
            tempResult = this.state.results.filter(item=> item.phone.includes(query));
        }

        this.setState({queryResults:tempResult});
    }
  };
  

  handleSort = event => {
    alert("clicked");

    let tempResult = this.state.queryResults;
    switch(event) {
      case "Name":
        tempResult=tempResult.sort((a,b) => {
          let comparison = 0;
          if(a.name>b.name) {
            comparison=1;

          }else if (a.name<b.name){
            comparison = -1;
          }
          return comparison;
          //console.log(comparison);
        });
        break;
        case "Email":
          tempResult=tempResult.sort((a,b) => {
            let comparison = 0;
            if(a.email>b.email) {
              comparison=1;
  
            }else if (a.email<b.email){
              comparison = -1;
            }
            return comparison;
            //console.log(comparison);
          });
          break;
          case "Gender":
            tempResult=tempResult.sort((a,b) => {
              let comparison = 0;
              if(a.gender>b.gender) {
                comparison=1;
    
              }else if (a.gender<b.gender){
                comparison = -1;
              }
              return comparison;
              //console.log(comparison);
            });
            break;

            case "Age":
              tempResult=tempResult.sort((a,b) => {
                let comparison = 0;
                if(a.age>b.age) {
                  comparison=1;
      
                }else if (a.age<b.age){
                  comparison = -1;
                }
                return comparison;
                //console.log(comparison);
              });
              break;
              default:
                break;
    }
    this.setState({queryResults:tempResult});

  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState(
      {
        search: value,
      },
      () => {
        this.searchEmployees(this.state.search);
      }
    );
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">image</th>
              <th scope="col">gender<i className=" btn fa fa-fw fa-sort" onClick={()=>this.handleSort("Gender")}></i></th>
              <th scope="col">Firstname<i className=" btn fa fa-fw fa-sort" onClick={()=>this.handleSort("Name")}></i></th>
              <th scope="col">Lastname</th>
              <th scope="col">email<i className=" btn fa fa-fw fa-sort" onClick={()=>this.handleSort("Email")}></i></th>
              <th scope="col">Age<i className=" btn fa fa-fw fa-sort" onClick={()=>this.handleSort("Age")}></i></th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map((person) => (
              <tr>
                <td>
                  <img src={person.picture.medium} width="50" height="75" />
                </td>
                <td>{person.gender}</td>
                <td>{person.name.first}</td>
                <td>{person.name.last}</td>
                <td>{person.email}</td>
                <td>{person.dob.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeDirectory;
