import react from 'react';
import axios from 'axios';


class EmployeeDirectory extends react.Component {
    render() {
        return (
            <div>
            <table>
            <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            </tr>
            
            {this.state.persons.map(person => 
            <tr>
            <td>{person.name.first}</td>
            <td>Jackson</td>
            <td>94</td>
            </tr>
        )}

            </table>
           

            </div>
          )
    }
    constructor (props){
        super(props);
        this.state = {"persons": []}
        //{name sort acending = true}
        //if sort acending is true toggle sort state base on that property


    }

    componentDidMount() {
        let persons;
        if ('persons' in localStorage) {
            persons = JSON.parse(localStorage.persons)
            console.log(persons)
            this.setState({ persons });
            } else {

        
        axios.get(`https://randomuser.me/api/?results=15`)
          .then(res => {
            persons = res.data.results; 
            localStorage.persons = JSON.stringify(persons);
            console.log("testfirst")
            
            console.log(persons)
            this.setState({ persons });
          })
          console.log("testsecond")
      };
    
    }
}

export default EmployeeDirectory;