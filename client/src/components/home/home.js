import React, { Component } from 'react';
import './home.css';
import PageDetail from '../pagedetail/pagedetail';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nextPage: false
    }
    this.openPageDetail = this.openPageDetail.bind(this);
  }
  openPageDetail() {
    this.setState({ nextPage: true })
  }

  render() {
    if (this.state.nextPage) {
      console.log("PageDetail");
      return (
        <div>
        <PageDetail />
        </div>
      )
    } else {
      console.log("Home");
      return (
        <div>
          {/* <!-- Header --> */}

          <header id="header">
            <div class="inner">
              <div class="content">
                <h1>Radius</h1>
                <h2>A fully responsive masonry-style<br />
                  portfolio template.</h2>
                <a href="#" class="button big alt"><span>Let's Go</span></a>
              </div>
              <a href="#" class="button hidden"><span>Let's Go</span></a>
            </div>
          </header>

          {/* <!-- Main --> */}

          <div id="main">
            <div class="inner">
              <div class="columns">
                <div class="image fit" onClick={() => { this.PageDetail }}>
                  <img src={require('../../images/pic01.jpg')} alt="" />
                </div>
                <div class="image fit">
                  <div onClick={this.openPageDetail}><img src={require('../../images/pic02.jpg')} alt="" /></div>
                </div>
                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic03.jpg')} alt="" /></a>
                </div>
                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic04.jpg')} alt="" /></a>
                </div>

                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic05.jpg')} alt="" /></a>
                </div>
                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic06.jpg')} alt="" /></a>
                </div>
                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic07.jpg')} alt="" /></a>
                </div>
                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic08.jpg')} alt="" /></a>
                </div>

                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic09.jpg')} alt="" /></a>
                </div>
                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic10.jpg')} alt="" /></a>
                </div>
                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic11.jpg')} alt="" /></a>
                </div>
                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic12.jpg')} alt="" /></a>
                </div>

                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic13.jpg')} alt="" /></a>
                </div>
                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic14.jpg')} alt="" /></a>
                </div>
                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic15.jpg')} alt="" /></a>
                </div>
                <div class="image fit">
                  <a href="detail1.html"><img src={require('../../images/pic16.jpg')} alt="" /></a>
                </div>

              </div>
            </div>
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
}

export default Home;