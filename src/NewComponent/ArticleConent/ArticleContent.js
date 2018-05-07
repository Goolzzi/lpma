import React from "react";
import {CSSTransition} from "react-transition-group";
class ArticleContent extends React.Component {
  render() {
    const {
      topic,
      start,
      state,
      order,
      initial,
      content: {title, description},
    } = this.props;
    return (
      <CSSTransition
        in={start && state == "entered"}
        classNames={{
          enter: "fade-up-enter",
          enterActive: initial
            ? "fade-up-enter-active-initial"
            : "fade-up-enter-active",
          enterDone: "fade-up-enter-done",
          exit: "fade-up-exit",
          exitActive: "fade-up-exit-active",
          exitDone: "fade-up-exit-done",
        }}
        timeout={{enter: initial ? 1000 : 1500, exit: 1000}}
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
