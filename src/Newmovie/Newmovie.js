import React, { useState } from 'react';
import '../App.css';
import { accordionData } from "./accodionData";


const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

}
function Newmovie() {
    return (

        <div className="wrapper">

            <div className="navbar1" role="navigation">

                <div className="heading">
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-12">
                                <div className="search">
                                    <a href="#">
                                        <i class="fas fa-search"></i>
                                    </a>
                                </div>
                                <div className="tel">
                                    <a href="tel:0330 123 4567">
                                        <i className="material-icons">phone in talk</i> 0330 123 4567
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="navbar-header">
                        <a href="index.html" className="logo" title="Movie star landing page">
                            <img src="images/logo.svg" alt="Movie star HTML Template" />
                        </a>

                    </div>
                    <div className="navbarr">
                        <ul className="nav  mb-2 mb-lg-0">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="About.js">About</a>
                            </li>
                            <li className="active">
                                <a href="Newmovie.js">New movies</a>
                            </li>
                            <li className="dropdown">
                                <a href="News.js">News</a>
                                <ul className="dropdown-menu">
                                    <li><a href="News.js">News</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="Contact.js">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="one col-md-9">
                <span class="title">The very latest</span>
                <h1>Cinema news</h1>
            </div>



            <div className="container section news">
                <div className="row">
                    <div className="start col-sm-12">
                        <h2>Box icons</h2>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="icon-box">
                                    <i class="fas  fa-clock  fa-2x"></i>
                                    <h4>Box icon title</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="icon-box">
                                    <i class="fas fa-video  fa-2x"></i>
                                    <h4>Box icon title</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="icon-box">
                                    <i class="fas fa-camera  fa-2x "></i>
                                    <h4>Box icon title</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container section news">
                <div className="row">
                    <div className="mid  col-sm-12">
                        <h2>Row icons</h2>

                        <div className="row">
                            <div className="col-sm-4">
                                <div className="icon-row">
                                    <div className="col">
                                        <span className="circle">
                                            <i class="fas fa-album-collection"></i>
                                        </span>
                                    </div>
                                    <div className="col">
                                        <h4>Box icon title</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="icon-row">
                                    <div className="col">
                                        <span className="circle">
                                            <i class="far fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="col">
                                        <h4>Box icon title</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="icon-row">
                                    <div className="col">
                                        <span className="circle">
                                            <i class="far fa-shield-alt"></i>
                                        </span>
                                    </div>
                                    <div className="col">
                                        <h4>Box icon title</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container section news">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>News carousel</h2>
                        <hr className="space-40" />
                        <div className="row" />
                        <div className="col-sm-12">
                            <div className="slick-carousel2 news-carousel slick-initialized slick-slider">
                                <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{ opacity: "1", width: "3240px", transform: "translate3d(-972px, 0px, 0px)" }}>
                                    <div className="slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" tabindex="-1" style={{ width: "294px" }}>
                                        <div className="movie-poster">
                                            <aside>
                                                <div>
                                                    <a href="#" className="play" tabindex="-1">

                                                    </a>
                                                    <a href="#" className="read-more" tabindex="-1">read more</a>
                                                </div>
                                            </aside>
                                            <a href="#" tabindex="-1">
                                                <img src="images/news-2.png" alt="Lorem ipsum delor sit amet" />
                                            </a>
                                        </div>
                                        <span className="date">2 March, 2017</span>
                                        <h4>Lorem ipsum delor sit amet</h4>
                                        <p>classNameified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p>
                                    </div><div className="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabindex="-1" style={{ width: "294px" }}>
                                        <div className="movie-poster">
                                            <aside>
                                                <div>
                                                    <a href="#" className="play" tabindex="-1">

                                                    </a>
                                                    <a href="#" className="read-more" tabindex="-1">read more</a>
                                                </div>
                                            </aside>
                                            <a href="#" tabindex="-1">
                                                <img src="images/news-3.png" alt="Lorem ipsum delor sit amet" />
                                            </a>
                                        </div>
                                        <span className="date">14 February, 2017</span>
                                        <h4>Lorem ipsum delor sit amet</h4>
                                        <p>classNameified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p>
                                    </div><div className="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{ width: "294px" }}>
                                        <div className="movie-poster">
                                            <aside>
                                                <div>
                                                    <a href="#" className="play" tabindex="-1">

                                                    </a>
                                                    <a href="#" className="read-more" tabindex="-1">read more</a>
                                                </div>
                                            </aside>
                                            <a href="#" tabindex="-1">
                                                <img src="images/news-2.png" alt="Lorem ipsum delor sit amet" />
                                            </a>
                                        </div>
                                        <span className="date">2 March, 2017</span>
                                        <h4>Lorem ipsum delor sit amet</h4>
                                        <p>classNameified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p>
                                    </div><div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide00" style={{ width: "294px" }}>
                                        <div className="movie-poster">
                                            <aside>
                                                <div>
                                                    <a href="#" className="play" tabindex="0">

                                                    </a>
                                                    <a href="#" className="read-more" tabindex="0">read more</a>
                                                </div>
                                            </aside>
                                            <a href="#" tabindex="0">
                                                <img src="images/news-1.png" alt="Lorem ipsum delor sit amet" />
                                            </a>
                                        </div>
                                        <span className="date">8 March, 2017</span>
                                        <h4>Lorem ipsum delor sit amet</h4>
                                        <p>classNameified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p>
                                    </div><div className="slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide01" style={{ width: "294px" }}>
                                        <div className="movie-poster">
                                            <aside>
                                                <div>
                                                    <a href="#" className="play" tabindex="0">

                                                    </a>
                                                    <a href="#" className="read-more" tabindex="0">read more</a>
                                                </div>
                                            </aside>
                                            <a href="#" tabindex="0">

                                            </a>
                                        </div>
                                        <span className="date">2 March, 2017</span>
                                        <h4>Lorem ipsum delor sit amet</h4>
                                        <p>classNameified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p>
                                    </div><div className="slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide02" style={{ width: "294px" }}>
                                        <div className="movie-poster">
                                            <aside>
                                                <div>
                                                    <a href="#" className="play" tabindex="0">

                                                    </a>
                                                    <a href="#" className="read-more" tabindex="0">read more</a>
                                                </div>
                                            </aside>
                                            <a href="#" tabindex="0">
                                                <img src="images/news-3.png" alt="Lorem ipsum delor sit amet" />
                                            </a>
                                        </div>
                                        <span className="date">14 February, 2017</span>
                                        <h4>Lorem ipsum delor sit amet</h4>
                                        <p>classNameified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p>
                                    </div><div className="slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide03" style={{ width: "294px" }}>
                                        <div className="movie-poster">
                                            <aside>
                                                <div>
                                                    <a href="#" className="play" tabindex="-1">

                                                    </a>
                                                    <a href="#" className="read-more" tabindex="-1">read more</a>
                                                </div>
                                            </aside>
                                            <a href="#" tabindex="-1">
                                                <img src="images/news-2.png" alt="Lorem ipsum delor sit amet" />
                                            </a>
                                        </div>
                                        <span className="date">2 March, 2017</span>
                                        <h4>Lorem ipsum delor sit amet</h4>
                                        <p>classNameified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p>
                                    </div><div className="slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" tabindex="-1" style={{ width: "294px" }}>
                                        <div className="movie-poster">
                                            <aside>
                                                <div>
                                                    <a href="#" className="play" tabindex="-1">

                                                    </a>
                                                    <a href="#" className="read-more" tabindex="-1">read more</a>
                                                </div>
                                            </aside>
                                            <a href="#" tabindex="-1">
                                                <img src="images/news-1.png" alt="Lorem ipsum delor sit amet" />
                                            </a>
                                        </div>
                                        <span className="date">8 March, 2017</span>
                                        <h4>Lorem ipsum delor sit amet</h4>
                                        <p>classNameified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p>
                                    </div><div className="slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1" style={{
                                        width: "294px" >
                                            <><div className="movie-poster">
                                                <aside>
                                                    <div>
                                                        <a href="#" className="play" tabindex="-1">

                                                        </a>
                                                        <a href="#" className="read-more" tabindex="-1">read more</a>
                                                    </div>
                                                </aside>
                                                <a href="#" tabindex="-1">
                                                    <img src="images/news-2.png" alt="Lorem ipsum delor sit amet" />
                                                </a>
                                            </div><span className="date">2 March, 2017</span><h4>Lorem ipsum delor sit amet</h4><p>classNameified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p></>
                                    }} />
                                </div>
                                    <div className="slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" tabindex="-1" style={{ width: "294px" }}>
                                        <div className="movie-poster">
                                            <aside>
                                                <div>
                                                    <a href="#" className="play" tabindex="-1">

                                                    </a>
                                                    <a href="#" className="read-more" tabindex="-1">read more</a>
                                                </div>
                                            </aside>
                                            <a href="#" tabindex="-1">
                                                <img src="images/news-3.png" alt="Lorem ipsum delor sit amet" />
                                            </a>
                                        </div>
                                        <span className="date">14 February, 2017</span>
                                        <h4>Lorem ipsum delor sit amet</h4>
                                        <p>classNameified advertising is a form of advertising that is particularly common in newspapers and other periodicals.</p>
                                    </div></div></div>




                        </div><><div className="container section news">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2 className="tob">Tabs</h2>

                                    <div className="row">
                                        <div className="col-sm-5">
                                            <div className="tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
                                                <ul role="tablist" className="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                                                    <li role="tab" tabindex="0" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" aria-controls="one" aria-labelledby="ui-id-1" aria-selected="true" aria-expanded="true"><a href="#one" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-1">Tab 1</a></li>
                                                    <li role="tab" tabindex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="two" aria-labelledby="ui-id-2" aria-selected="false" aria-expanded="false"><a href="#two" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-2">Tab 2</a></li>
                                                    <li role="tab" tabindex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="three" aria-labelledby="ui-id-3" aria-selected="false" aria-expanded="false"><a href="#three" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-3">Tab 3</a></li>
                                                </ul>
                                                <div id="one" aria-labelledby="ui-id-1" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false">
                                                    <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                                </div>
                                                <div id="two" aria-labelledby="ui-id-2" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}>
                                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                                    <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                                                </div>
                                                <div id="three" aria-labelledby="ui-id-3" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}>
                                                    <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-5 col-sm-push-22">
                                            <div className="tabs pill-style ui-tabs ui-corner-all ui-widget ui-widget-content">
                                                <ul role="tablist" className="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                                                    <li role="tab" tabindex="0" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" aria-controls="one" aria-labelledby="ui-id-4" aria-selected="true" aria-expanded="true"><a href="#one" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-4">Tab 1</a></li>
                                                    <li role="tab" tabindex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="two" aria-labelledby="ui-id-5" aria-selected="false" aria-expanded="false"><a href="#two" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-5">Tab 2</a></li>
                                                    <li role="tab" tabindex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="three" aria-labelledby="ui-id-6" aria-selected="false" aria-expanded="false"><a href="#three" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-6">Tab 3</a></li>
                                                </ul>
                                                <div id="one" aria-labelledby="ui-id-4" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false">
                                                    <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                                </div>
                                                <div id="two" aria-labelledby="ui-id-5" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}>
                                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                                    <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                                                </div>
                                                <div id="three" aria-labelledby="ui-id-6" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}>
                                                    <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="container section news">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h2>Accordion</h2>
                                        <hr className="space-40" />
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <div className="accordion-item">
                                                    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                                                        <div>{title}</div>
                                                        <div>{isActive ? '-' : '+'}</div>
                                                    </div>
                                                    {isActive && <div className="accordion-content">{content}</div>}
                                                </div>


                                                <div className="accordion-item">
                                                    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                                                        <div>{title}</div>
                                                        <div>{isActive ? '-' : '+'}</div>
                                                    </div>
                                                    {isActive && <div className="accordion-content">{content}</div>}
                                                </div>


                                                <div className="accordion-item">
                                                    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                                                        <div>{title}</div>
                                                        <div>{isActive ? '-' : '+'}</div>
                                                    </div>
                                                    {isActive && <div className="accordion-content">{content}</div>}
                                                </div>



                                                <div className="accordion-item">
                                                    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                                                        <div>{title}</div>
                                                        <div>{isActive ? '-' : '+'}</div>
                                                    </div>
                                                    {isActive && <div className="accordion-content">{content}</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-5 col-sm-push-2">
                                        <div className="accordion pill-style ui-accordion ui-widget ui-helper-reset" role="tablist">
                                            <div className="accordion-item">
                                                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                                                    <div>{title}</div>
                                                    <div>{isActive ? '-' : '+'}</div>
                                                </div>
                                                {isActive && <div className="accordion-content">{content}</div>}
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                                                    <div>{title}</div>
                                                    <div>{isActive ? '-' : '+'}</div>
                                                </div>
                                                {isActive && <div className="accordion-content">{content}</div>}
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                                                    <div>{title}</div>
                                                    <div>{isActive ? '-' : '+'}</div>
                                                </div>
                                                {isActive && <div className="accordion-content">{content}</div>}
                                            </div>
                                            <div className="accordion-item">
                                                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                                                    <div>{title}</div>
                                                    <div>{isActive ? '-' : '+'}</div>
                                                </div>
                                                {isActive && <div className="accordion-content">{content}</div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </><footer>
                            <div className="container1">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6>Get in touch</h6>
                                        <ul>
                                            <li><a href="#">FAQs</a></li>
                                            <li><a href="#">Give us feedback</a></li>
                                            <li><a href="#">Contact us</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3">
                                        <h6>About Movie star</h6>
                                        <ul>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Find us</a></li>
                                            <li><a href="#">Schedule</a></li>
                                            <li><a href="#">News</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3">
                                        <h6>Legal stuff</h6>
                                        <ul>
                                            <li><a href="#">Terms &amp; Conditions</a></li>
                                            <li><a href="#">Privacy policy</a></li>
                                            <li><a href="#">Cookie policy</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-3">
                                        <h6>Connect with us</h6>
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i> Google +</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="copyright">
                                    <p>2017 © Movie Star / <a href="https://www.klevermedia.co.uk">Web design by Klever media</a></p>
                                </div>
                            </div>


                        </footer>


                    </div>
                </div>




            </div>
        </div>
    )
}


export default Newmovie
