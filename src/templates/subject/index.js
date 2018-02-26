import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import FoundryCard from "../components/FondryCard";
import BreadCrumb from "../../components/BreadCrumb";
import FeedbackForm from "../../components/FeedbackForm";
import "./styles.scss";

const TabItem = ({tab, isActive, onClick, index}) => (
  <li onClick={() => onClick(index)} className={classNames({active: isActive})}>
    <span>{tab}</span>
  </li>
);

class FoundrySubject extends React.Component {
  static propTypes = {
    data: PropTypes.object.isReqiered,
    pathContext: PropTypes.object.isReqiered,
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
    const {
      pathContext: {parentPath, breadCrumbs},
      data: {contentfulFoundrySubject},
    } = this.props;
    const {activeTabIndex} = this.state;
    const {
      title,
      slug,
      content,
      guideTypes,
      feedbackForm,
    } = contentfulFoundrySubject;
    const tabCount = guideTypes ? guideTypes.tabs.length : 0;

    return (
      <section className="section template-page">
        <BreadCrumb parentPath={parentPath} crumbs={breadCrumbs} />
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
          {tabCount > 1 && (
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
          )}

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
                      contentfulFoundrySubject[tab] &&
                      contentfulFoundrySubject[tab].map(
                        ({id, title, slug, excerpt, steps}) => {
                          const href = steps
                            ? "foundry/" + slug + "/" + steps[0].slug
                            : "javascript;";
                          return (
                            <FoundryCard
                              key={id}
                              title={title}
                              content={excerpt.childMarkdownRemark.excerpt}
                              href={href}
                            />
                          );
                        },
                      )}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="container">
          {feedbackForm !== false && (
            <FeedbackForm
              feedbackParams={{
                type: "subject",
                title,
                slug,
              }}
            />
          )}
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
      feedbackForm
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
        slug
        steps {
          slug
        }
        excerpt {
          childMarkdownRemark {
            excerpt
            html
          }
        }
      }
      documents {
        id
        title
        excerpt {
          childMarkdownRemark {
            excerpt
            html
          }
        }
      }
    }
  }
`;
