import React from "react";
import axios from "axios";

class App extends React.Component {
  state = { json: [] };

  async componentDidMount() {
    try {
      let res = await axios.get("http://localhost:3000/api/");
      console.log(res.data);
      this.setState({ json: res.data[0].name });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return <div>Name: {this.state.json}</div>;
  }
}

export default App;
