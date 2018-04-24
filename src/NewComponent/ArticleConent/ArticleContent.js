import React from "react";
import {CSSTransition} from "react-transition-group";
class ArticleContent extends React.Component {
  render() {
    const {topic, title, content, start, state} = this.props;
    return (
      <CSSTransition
        in={start && state == "entered"}
        classNames="fade-up"
        timeout={{enter: 2000, exit: 1000}}
        unmountOnExit>
        <div className="article-content">
          <div className="wrapper">
            <h5>01 / facts not myths</h5>
            <h1>
              <span>78%</span> of investors would swap property managers today
              if they were confident your company had a better offer.
            </h1>
            <p>
              It&apos;s not just about how hard you work, it&apos;s about how
              unique your offer is. Our studies show that Investors are looking
              for differentiation and are more likely to take their business
              elsewhere. The landscape is more competitive than ever and now is
              your chance to better understand the truth about what your clients
              want.
            </p>
            <p>
              Learn how to develop a growth plan that counts, learn how to grow
              and defend your business.
            </p>
          </div>
        </div>
      </CSSTransition>
    );
  }
}
export default ArticleContent;
