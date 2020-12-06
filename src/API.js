import axios from "axios"

componentDidMount() {
    let persons;
    if ("persons" in localStorage) {
      persons = JSON.parse(localStorage.persons);
      //console.log(persons);
      this.setState({ persons });
    } else {
      axios.get(`https://randomuser.me/api/?results=15`).then((res) => {
        persons = res.data.results;
        localStorage.persons = JSON.stringify(persons);
        //console.log("testfirst");

        //console.log(persons);
        this.setState({ persons });
      });
      //console.log("testsecond");
      //console.log(this.state.persons);
    }
  }
