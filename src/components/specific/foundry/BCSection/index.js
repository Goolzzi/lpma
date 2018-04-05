import React, {Component} from "react";
import PropTypes from "prop-types";

const propTypes = {
  documents: PropTypes.array.isRequired,
  documentType: PropTypes.string.isRequired,
  documentTypeTitle: PropTypes.string.isRequired,
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

  getFilteredDocuments = () => {
    const {documents, documentType} = this.props;
    return documents.filter(document => document.type === documentType);
  };

  renderSection = () => {
    const {documentTypeTitle} = this.props;
    const {isCollapsed} = this.state;
    const toggleText = isCollapsed ? "See all" : "Collapse List";
    const filteredDocuments = this.getFilteredDocuments();
    if (filteredDocuments.length === 0) {
      return <React.Fragment />;
    }
    return (
      <div>
        <h2>{documentTypeTitle}</h2>
        <ul>
          {filteredDocuments
            .slice(0, this.getSliceIndex())
            .map(({id, title}) => <li key={id}>{title}</li>)}
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
