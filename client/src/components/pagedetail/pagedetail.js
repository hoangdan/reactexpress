import React, { Component } from 'react';
import './pagedetail.css';

class PageDetail extends Component {

  render() {
    return (
      <div>
        {/* <!-- Header --> */}
        <header id="header" class="preview">
          <div class="inner">
            <div class="content">
              <h1>Radius</h1>
              <h2>A fully responsive masonry style portfolio template.</h2>
            </div>
            <a href="index.html" class="button hidden"><span>Let's Go</span></a>
          </div>
        </header>

        {/* <!-- Main --> */}
        <div id="preview">
          <div class="inner">
            <div class="image fit">
              <img src={require('../../images/pic02.jpg')} alt="" />
            </div>
            <div class="content">
              <header>
                <h2>Aliquam gravida felis vel velit accumsan</h2>
              </header>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est ligula, ultrices id posuere vitae, rutrum in tellus. Suspendisse vitae aliquam metus. Cras blandit, tortor ut eleifend porttitor, urna lacus porttitor arcu, quis vestibulum metus dolor ut neque. Aenean et nisi venenatis, mollis enim eget, pharetra nunc. Sed blandit non mi nec ultrices. Vestibulum hendrerit tortor id gravida eleifend. Morbi vitae molestie odio. Etiam nec est vel sapien posuere vulputate eget eget mi. Quisque vulputate ligula velit, id accumsan dui fringilla nec. Morbi nisi mauris, placerat sit amet feugiat nec, vehicula ut ex.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est ligula, ultrices id posuere vitae, rutrum in tellus. Suspendisse vitae aliquam metus. Cras blandit, tortor ut eleifend porttitor, urna lacus porttitor arcu, quis vestibulum metus dolor ut neque. Aenean et nisi venenatis, mollis enim eget, pharetra nunc. Sed blandit non mi nec ultrices. Vestibulum hendrerit tortor id gravida eleifend. Morbi vitae molestie odio. Etiam nec est vel sapien posuere vulputate eget eget mi. Quisque vulputate ligula velit, id accumsan dui fringilla nec. Morbi nisi mauris, placerat sit amet feugiat nec, vehicula ut ex.</p>
            </div>
          </div>
          <a href="detail1.html" class="nav previous"><span class="fa fa-chevron-left"></span></a>
          <a href="detail2.html" class="nav next"><span class="fa fa-chevron-right"></span></a>
        </div>

        {/* <!-- Footer --> */}
        <footer id="footer">
          <a href="#" class="info fa fa-info-circle"><span>About</span></a>
          <div class="inner">
            <div class="content">
              <h3>Vestibulum hendrerit tortor id gravida</h3>
              <p>In tempor porttitor nisl non elementum. Nulla ipsum ipsum, feugiat vitae vehicula vitae, imperdiet sed risus. Fusce sed dictum neque, id auctor felis. Praesent luctus sagittis viverra. Nulla erat nibh, fermentum quis enim ac, ultrices euismod augue. Proin ligula nibh, pretium at enim eget, tempor feugiat nulla.</p>
            </div>
            <div class="copyright">
              <h3>Follow me</h3>
              <ul class="icons">
                <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="#" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
              </ul>
              &copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a href="https://unsplash.com/">Unsplash</a>.
					</div>
          </div>
        </footer>

      </div>
    );
  }
}

export default PageDetail;