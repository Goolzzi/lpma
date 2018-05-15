import React from "react";
import {CSSTransition} from "react-transition-group";
import styled from "styled-components";
const ArticleTitle = styled.div`
  &&& {
    p {
      font-size: 1.8em;
      font-family: "DomaineSansMedium";
      text-transform: uppercase;
      letter-spacing: -1px;
      line-height: 1.2em;
      strong {
        color: ${props => props.tintColor};
      }
    }
  }
`;
class ArticleContent extends React.Component {
  render() {
    const {
      topic,
      start,
      state,
      order,
      initial,
      tintColor,
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
            <ArticleTitle
              dangerouslySetInnerHTML={{
                __html: title.childMarkdownRemark.html,
              }}
              tintColor={tintColor}
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
