import React, { Component } from "react";
// import { Row, Col } from 'reactstrap';
// import { Link } from "react-router-dom";
import content from "../../content.json";
import Card from '../../components/card';
import "./Home.css"

class Home extends Component {
  state = {
 
  };



  render() {
    return (
      <div id="homePage">
        {content.map(item => (
          <Card 
          image={item.image}
          title={item.title}
          description={item.description}
          url={item.url}
          />
        ))}
      </div>

    );
  }
}

export default Home;
