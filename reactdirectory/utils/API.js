import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=15`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
     
    )
  }
}

// getUsers() {
//     // We're using axios instead of Fetch
//     axios
//       // The API we're requesting data from
//       .get("https://randomuser.me/api/?results=5")
//       // Once we get a response, we'll map the API endpoints to our props
//       .then(response =>
//         response.data.results.map(user => ({
//           name: `${user.name.first} ${user.name.last}`,
//           username: `${user.login.username}`,
//           email: `${user.email}`,
//           image: `${user.picture.thumbnail}`
//         }))
//       )
//       // Let's make sure to change the loading state to display the data
//       .then(users => {
//         this.setState({
//           users,
//           isLoading: false
//         });
//       })
//       // We can still use the `.catch()` method since axios is promise-based
//       .catch(error => this.setState({ error, isLoading: false }));
//   }