import React, {Component} from "react";
import PropTypes from "prop-types";

const propTypes = {
  documents: PropTypes.array.isRequired,
  documentType: PropTypes.string.isRequired,
  documentTitle: PropTypes.string.isRequired,
};

class BCSection extends Component {
  state = {
    isCollapsed: false,
  };

  getSliceIndex = () => {
    const {documents} = this.props;
    const {isCollapsed} = this.state;
    return isCollapsed ? 3 : documents.length;
  };

  toggleCollapse = () => {
    this.setState(state => ({isCollapsed: !state.isCollapsed}));
  };

  renderSection = () => {
    const {documents, documentTitle, documentType} = this.props;
    const {isCollapsed} = this.state;
    const toggleText = isCollapsed ? "See all" : "Collapse List";
    return (
      <div>
        <h2>{documentTitle}</h2>
        <ul>
          {documents
            .filter(document => document.type === documentType)
            .slice(0, this.getSliceIndex())
            .forEach(({id, title}) => <li key={id}>{title}</li>)}
        </ul>
        <span onClick={this.toggleCollapse}>{toggleText}</span>
      </div>
    );
  };

  render() {
    return <div>{this.renderSection()}</div>;
  }
}

BCSection.propTypes = propTypes;

export default BCSection;
