import React from "react";
import "bulma";
import Header from "../NewComponent/Header";

import "../styles/landing_mode.scss";

class NewLayoutTemplate extends React.PureComponent {
  constructor(props) {
    super()

    this.state = {
      number: 0
    }
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header pageNumber={this.state.number}/>
        <div>{children({ ...this.props, onPageChange: (number) => this.setState({number})})}</div>
      </div>
    )
  }
  
}
export default NewLayoutTemplate;