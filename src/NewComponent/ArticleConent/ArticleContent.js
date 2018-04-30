import React from "react";
import {CSSTransition} from "react-transition-group";
class ArticleContent extends React.Component {
  render() {
    const {
      topic,
      start,
      state,
      order,
      content: {title, description},
    } = this.props;
    return (
      <CSSTransition
        in={start && state == "entered"}
        classNames="fade-up"
        timeout={{enter: 1500, exit: 1000}}
        unmountOnExit>
        <div className="article-content">
          <div className="wrapper">
            <h5>
              {order} / {topic}
            </h5>
            <div
              className="article-title"
              dangerouslySetInnerHTML={{
                __html: title.childMarkdownRemark.html,
              }}
            />
            {description && (
              <div
                className="content-text"
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
              />
            )}
          </div>
        </div>
      </CSSTransition>
    );
  }
}
export default ArticleContent;
