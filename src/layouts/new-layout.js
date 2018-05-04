import React from "react";
import MetaHead from "./MetaHead";
import locationToTitleMap from "./locationTitlesMap";

import "bulma";

import Header from "../NewComponent/Header";

import "../styles/landing_mode.scss";

class NewLayoutTemplate extends React.PureComponent {
  constructor(props) {
    super();

    this.state = {
      number: 0,
      showPage: "",
    };
  }
  updateState = payload => {
    this.setState({...payload});
  };
  render() {
    const {
      children,
      location: {pathname},
      data: {allContentfulAsset: {edges: metaImges}},
    } = this.props;
    const title = locationToTitleMap[pathname]
      ? locationToTitleMap[pathname]
      : locationToTitleMap["/"];

    const protocol = "https:";
    return (
      <div>
        <MetaHead
          title={title}
          metaImage1200x630={`${protocol}${metaImges[1].node.file.url}`}
          metaImage1024x512={`${protocol}${metaImges[0].node.file.url}`}
        />
        <Header
          pageNumber={this.state.number}
          selectPage={page => this.setState({showPage: page})}
        />
        <div>
          {children({
            ...this.props,
            onPageChange: number => this.setState({number}),
            showPage: this.state.showPage,
            updateState: this.updateState,
          })}
        </div>
      </div>
    );
  }
}
export default NewLayoutTemplate;

export const pageQuery = graphql`
  query NewLayoutQuery {
    allContentfulAsset(
      filter: {title: {regex: "/LPMA-Meta/"}}
      sort: {fields: [description], order: ASC}
    ) {
      edges {
        node {
          title
          file {
            url
          }
        }
      }
    }
  }
`;
