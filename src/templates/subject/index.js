import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// import BreadCrumb from "../components/BreadCrumb";
import FoundryCard from "../components/FondryCard";
import "./styles.scss";

const TabItem = ({tab, isActive, onClick, index}) => (
  <li onClick={() => onClick(index)} className={classNames({active: isActive})}>
    <span>{tab}</span>
  </li>
);

class FoundrySubject extends React.Component {
  static propTypes = {
    data: PropTypes.object.isReqiered,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0,
    };
  }

  handleTabClick = index => {
    this.setState({activeTabIndex: index});
  };

  render() {
    const {data: {contentfulFoundrySubject}} = this.props;
    const {activeTabIndex} = this.state;
    const {title, content, guideTypes} = contentfulFoundrySubject;
    const tabCount = guideTypes ? guideTypes.tabs.length : 0;

    return (
      <section className="section template-page">
        {/* <BreadCrumb /> */}
        <div className="container breadcrumb-wrapper">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="#">Bulma Test</a>
              </li>
              <li>
                <a href="#">Documentation test</a>
              </li>
              <li>
                <a href="#">Components test</a>
              </li>
              <li className="is-active">
                <a href="#" aria-current="page">
                  Breadcrumb
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container wrapper-cont">
          <div className="columns">
            <div className="column">
              <h1>{title}</h1>
            </div>
          </div>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}
          />
          <div className="custom-tabs">
            <ul>
              {tabCount !== 0 &&
                guideTypes.tabs.map((tab, index) => (
                  <TabItem
                    onClick={this.handleTabClick}
                    key={index}
                    tab={tab}
                    index={index}
                    isActive={activeTabIndex === index}
                  />
                ))}
            </ul>
          </div>

          {tabCount !== 0 &&
            guideTypes.tabs.map((tab, i) => {
              return (
                <div
                  key={i}
                  className={classNames("tab-content-wrapper content-hide", {
                    "content-visible": activeTabIndex === i,
                  })}>
                  <div className="columns is-multiline">
                    {tabCount !== 0 &&
                      contentfulFoundrySubject[tab].map(
                        ({id, title, excrept}) => {
                          return (
                            <FoundryCard
                              key={id}
                              title={title}
                              content={excrept.childMarkdownRemark.excerpt}
                              href={"/#"}
                            />
                          );
                        },
                      )}
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
}

export default FoundrySubject;

export const pageQuery = graphql`
  query FoundrySubjectPageQuery($slug: String) {
    contentfulFoundrySubject(slug: {eq: $slug}) {
      title
      slug
      id
      content {
        childMarkdownRemark {
          html
        }
      }
      guideTypes {
        tabs
      }
      guides {
        id
        title
        type
        excerpt {
          childMarkdownRemark {
            excerpt
          }
        }
      }
      documents {
        id
        title
        type
        excerpt {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
`;
