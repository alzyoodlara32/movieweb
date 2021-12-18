import React, { Component } from 'react';




class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }




    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }


    return(
         

    <div class = "wrapper" >

      <><div class="navbar" role="navigation">

          <div class="heading">
              <div class="container">
                  <div class="row">
                      <div class="col-sm-12">
                          <div class="search">
                              <a href="#">
                                  <i class="material-icons">search</i>
                              </a>
                          </div>
                          <div class="tel">
                              <a href="tel:03301234567">
                                  <i class="material-icons">phone in talk</i> 0330 123 4567
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="navbar-header">
                  <a href="index.html" class="logo" title="Movie star landing page">
                      <img src="images/logo.svg" alt="Movie star HTML Template" />
                  </a>
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar top-bar"></span>
                      <span class="icon-bar middle-bar"></span>
                      <span class="icon-bar bottom-bar"></span>
                  </button>
              </div>
              <div class="navbar-collapse collapse">
                  <ul id="menu-primary" class="nav navbar-nav">
                      <li>
                          <a href="index.html">Home</a>
                      </li>
                      <li>
                          <a href="#">About</a>
                      </li>
                      <li>
                          <a href="#">New movies</a>
                      </li>
                      <li class="dropdown">
                          <a href="#">News</a>
                          <ul class="dropdown-menu">
                              <li><a href="#">News</a></li>
                          </ul>
                      </li>
                      <li class="active">
                          <a href="#">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div><div id="content_hero">

              <div class="container">
                  <div class="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100">
                      <div class="col-md-9">
                          <span class="title">Have any questions?</span>
                          <h1>Please contact us</h1>
                      </div>
                  </div>
              </div>
          </div>
          <div className="coll">


              <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <><div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                  </div><div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                      </div><div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                      </div><button type="submit" className="button3">Submit</button></>
              </form>



              );
              

              <footer>
                  <div class="container">
                      <div class="row">
                          <div class="col-sm-3">
                              <h6>Get in touch</h6>
                              <ul>
                                  <li><a href="#">FAQs</a></li>
                                  <li><a href="#">Give us feedback</a></li>
                                  <li><a href="#">Contact us</a></li>
                              </ul>
                          </div>
                          <div class="col-sm-3">
                              <h6>About Movie star</h6>
                              <ul>
                                  <li><a href="#">About us</a></li>
                                  <li><a href="#">Find us</a></li>
                                  <li><a href="#">Schedule</a></li>
                                  <li><a href="#">News</a></li>
                              </ul>
                          </div>
                          <div class="col-sm-3">
                              <h6>Legal stuff</h6>
                              <ul>
                                  <li><a href="#">Terms &amp; Conditions</a></li>
                                  <li><a href="#">Privacy policy</a></li>
                                  <li><a href="#">Cookie policy</a></li>
                              </ul>
                          </div>
                          <div class="col-sm-3">
                              <h6>Connect with us</h6>
                              <ul>
                                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                                  <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i> Google +</a></li>
                              </ul>
                          </div>
                      </div>
                      <div class="copyright">
                          <p>2017 © Movie Star / <a href="https://www.klevermedia.co.uk">Web design by Klever media</a></p>
                      </div>
                  </div>
              </footer>
          </div></>;
       
   
    
}



export default Contact
