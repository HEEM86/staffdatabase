import react from "react";
import axios from "axios";
import SearchForm from "./SearchForm";

class EmployeeDirectory extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      search: "",
      queryResults: [],
    };
    //{name sort acending = true}
    //if sort acending is true toggle sort state base on that property
  }

  componentDidMount() {
    let persons;
    if ("persons" in localStorage) {
      persons = JSON.parse(localStorage.persons);
      console.log(persons);
      this.setState({ persons });
    } else {
      axios.get(`https://randomuser.me/api/?results=15`).then((res) => {
        persons = res.data.results;
        localStorage.persons = JSON.stringify(persons);
        console.log("testfirst");

        console.log(persons);
        this.setState({ persons });
      });
      console.log("testsecond");
      console.log(this.state.persons);
    }
  }


  searchEmployees = (search) => {
    const query = search.toLowerCase();
    if (!query) {
      this.setState({
        queryResults: this.state.persons,
      });
    } else {
      //name search
      let tempResult = this.state.persons;
      console.log(tempResult);
      tempResult = tempResult.filter((person) =>
      person.name.first.toLowerCase().includes(query)
      );

      if (tempResult.length === 0) {
        tempResult = this.state.persons.filter((person) =>
          person.email.includes(query)
        );
      }
      this.setState({ queryResults: tempResult });
    }
  };

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
              <th scope="col">gender</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">email</th>
              <th scope="col">Age</th>
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
