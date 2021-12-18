
import '../App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { API_KEY } from "../App";



    function Home() {
        return (

            
                <div className="wrapper">
                    <div className="navbar" role="navigation">

                        <div className="heading">
                            <div className="container">
                                <div className="row">
                                    <div className="  col-sm-12">
                                        <div className="search">
                                            <a href="#">
                                                <i class="fas fa-search"></i>
                                            </a>
                                        </div>
                                        <div className="tel">
                                            <a href="tel:03301234567">
                                                <i className="fas fa-phone">0330 123 4567</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="navbar-header">
                                <a href="index.html" className="logo">
                                    <img src="images/logo.svg" />
                                </a>

                            </div>
                            <div className="navbarr ">
                                <ul className="nav mb-2 mb-lg-0">
                                    <li>
                                        <a href="Home.js">Home</a>
                                    </li>
                                    <li>
                                        <a href="About.js">About</a>
                                    </li>
                                    <li>
                                        <a href="Newmovies.js">Newmovies</a>
                                    </li>
                                    <li>
                                        <a href="News.js">News</a>

                                    </li>
                                    <li>
                                        <a href="Contact.js">Contact</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <hr />
                    <div className="carousel-slide carousel-fade" style={{ height: "553px" }}>
                        <img src="images/scroll-arrow.svg" alt="Scroll down" className="scroll" />
                        <div className="action col-md-9">
                            <span className="title">Action, Adventure, Fantasy</span>
                            <h1>End of the World: Part II</h1>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.<br /> Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                            <div className="buttons">
                                <span className="certificate">
                                    PG
                                </span>

                                <a href="https://youtu.be/RhFMIRuHAL4" data-vbtype="video" className="venbox btn btn-default ">
                                    <i className="fal fa-caret-right"></i>
                                    <span>Play trailer</span>
                                </a>
                            </div>
                        </div>
                        <div className="container">
                            <ol className="carousel-indicators">
                                <li data-target="#hero" data-slide-to="0" className="active"></li>
                                <li data-target="#hero" data-slide-to="1" className=""></li>
                                <li data-target="#hero" data-slide-to="2" className=""></li>
                            </ol>
                        </div>
                        <div id="hero" className="carousel slide carousel-fade">



                            <div className="carousel-inner">
                                <div className="item">


                                    <div className="container">
                                        <div className="row  scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100">

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="container section">
                            <div className="row">
                                <div className="post col-sm-12">
                                    <h2 style={{ color: "orange", marginTop: "-470px", marginBottom: "-80px", textDecoration: "none" }}>New in</h2>
                                    <div className="slick-carousel slick-initialized slick-slider" id="newIn">
                                        <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{ opacity: "1", width: "3159px", transform: "translate3d(-972px, 0px, 0px)" }}>
                                            <div className="movie-slide slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabindex="-1" style={{ width: "213px" }}>
                                                <div className="movie-poster">
                                                    <aside>
                                                        <div>
                                                            <a href="https://youtube/d96cjJhvlMA" data-vbtype="video" className="venobox play vbox-item" tabindex="-1">

                                                            </a>
                                                            <a href="#" className="read-more" tabindex="-1">read more</a>
                                                            <span className="date">Released: 7 Mar, 2017</span>
                                                        </div>
                                                    </aside>
                                                    <a href="#" tabindex="-1">
                                                        <img src="images/wed1.jpg" alt="Movie title" />
                                                    </a>
                                                </div>
                                                <h4 className="no-underline">Dark and lonely</h4>
                                                <div className="star-rating">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div><div className="movie-slide " data-slick-index="-3" aria-hidden="true" tabindex="-1" style={{ width: "213px" }}>
                                                <div className="movie-poster">
                                                    <aside>
                                                        <div>
                                                            <a href="https://youtube/d96cjJhvlMA" data-vbtype="video" className="venobox play vbox-item" tabindex="-1">
                                                                <i className="material-icons"></i>
                                                            </a>
                                                            <a href="#" className="read-more" tabindex="-1">read more</a>
                                                            <span className="date">Released: 7 Mar, 2017</span>
                                                        </div>
                                                    </aside>
                                                    <a href="#" tabindex="-1">
                                                        <img src="images/wed2.jpg" alt="Movie title" />
                                                    </a>
                                                </div>
                                                <h4 className="no-underline">Venture</h4>
                                                <div className="star-rating">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div><div className="movie-slide slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabindex="-1" style={{ width: "213px" }}>
                                                <div className="movie-poster">
                                                    <aside>
                                                        <div>
                                                            <a href="https://youtu.be/d96cjJhvlMA" data-vbtype="video" className="venobox play vbox-item" tabindex="-1">
                                                                <i className="material-icons"></i>
                                                            </a>
                                                            <a href="#" className="read-more" tabindex="-1">read more</a>
                                                            <span className="date">Released: 7 Mar, 2017</span>
                                                        </div>
                                                    </aside>
                                                    <a href="#" tabindex="-1">
                                                        <img src="images/wed3.jpg" alt="Movie title" />
                                                    </a>
                                                </div>
                                                <h4 className="no-underline">Hush</h4>
                                                <div className="star-rating">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div><div className="movie-slide slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{ width: "213px" }}>
                                                <div className="movie-poster">
                                                    <aside>
                                                        <div>
                                                            <a href="https://youtube/d96cjJhvlMA" data-vbtype="video" className="venobox play vbox-item" tabindex="-1">
                                                                <i className="material-icons"></i>
                                                            </a>
                                                            <a href="#" className="read-more" tabindex="-1">read more</a>
                                                            <span className="date">Released: 7 Mar, 2017</span>
                                                        </div>
                                                    </aside>
                                                    <a href="#" tabindex="-1">
                                                        <img src="images/wed2.jpg" alt="Movie title" />
                                                    </a>
                                                </div>
                                                <h4 className="no-underline">Venture</h4>
                                                <div className="star-rating">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div><div className="movie-slide slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide00" style={{ width: "213px" }}
                                            >
                                                <div className="movie-poster">
                                                    <aside>
                                                        <div>
                                                            <a href="https://youtube/d96cjJhvlMA" data-vbtype="video" className="venobox play vbox-item" tabindex="0">
                                                                <i className="material-icons"></i>
                                                            </a>
                                                            <a href="#" className="read-more" tabindex="0">read more</a>
                                                            <span className="date">Released: 7 Mar, 2017</span>
                                                        </div>
                                                    </aside>
                                                    <a href="#" tabindex="0">
                                                        <img src="images/wed4.jpg" alt="Movie title" />
                                                    </a>
                                                </div>
                                                <h4 className="no-underline">The last post</h4>
                                                <div className="star-rating">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div><div className="movie-slide slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide01" style={{ width: "213px" }}>
                                                <div className="movie-poster">
                                                    <aside>
                                                        <div>
                                                            <a href="https://youtu.be/d96cjJhvlMA" data-vbtype="video" className="venobox play vbox-item" tabindex="0">
                                                                <i className="material-icons"></i>
                                                            </a>
                                                            <a href="#" className="read-more" tabindex="0">read more</a>
                                                            <span className="date">Released: 7 Mar, 2017</span>
                                                        </div>
                                                    </aside>
                                                    <a href="#" tabindex="0">
                                                        <img src="images/wed1.jpg" alt="Movie title" />
                                                    </a>
                                                </div>
                                                <h4 className="no-underline">Dark and lonely</h4>
                                                <div className="star-rating">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div><div className="movie-slide slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide02" style={{ width: "213px" }}>
                                                <div className="movie-poster">
                                                    <aside>
                                                        <div>
                                                            <a href="https://youtube/d96cjJhvlMA" data-vbtype="video" className="venobox play vbox-item" tabindex="0">
                                                                <i className="material-icons"></i>
                                                            </a>
                                                            <a href="#" className="read-more" tabindex="0">read more</a>
                                                            <span className="date">Released: 7 Mar, 2017</span>
                                                        </div>
                                                    </aside>
                                                    <a href="#" tabindex="0">
                                                        <img src="images/wed2.jpg" alt="Movie title" />
                                                    </a>
                                                </div>
                                                <h4 className="no-underline">Venture</h4>
                                                <div className="star-rating">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div><div className="movie-slide slick-slide slick-active" data-slick-index="3" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide03" style={{ width: "213px" }}>
                                                <div className="movie-poster">
                                                    <aside>
                                                        <div>
                                                            <a href="https://youtu.be/d96cjJhvlMA" data-vbtype="video" className="venobox play vbox-item" tabindex="0">
                                                                <i className="material-icons"></i>
                                                            </a>
                                                            <a href="#" className="read-more" tabindex="0">read more</a>
                                                            <span className="date">Released: 7 Mar, 2017</span>
                                                        </div>
                                                    </aside>
                                                    <a href="#" tabindex="0">
                                                        <img src="images/wed3.jpg" alt="Movie title" />
                                                    </a>
                                                </div>
                                                <h4 className="no-underline">Hush</h4>
                                                <div className="star-rating">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div><div className="movie-slide slick-slide" data-slick-index="4" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide04" style={{ width: "213px" }}>
                                                <div className="movie-poster">
                                                    <aside>
                                                        <div>
                                                            <a href="https://youtu.be/d96cjJhvlMA" data-vbtype="video" className="venobox play vbox-item" tabindex="-1">
                                                                <i className="material-icons"></i>
                                                            </a>
                                                            <a href="#" className="read-more" tabindex="-1">read more</a>
                                                            <span className="date">Released: 7 Mar, 2017</span>
                                                        </div>
                                                    </aside>
                                                    <a href="#" tabindex="-1">
                                                        <img src="images/wed2.jpg" alt="Movie title" />
                                                    </a>
                                                </div>
                                                <h4 className="no-underline">Venture</h4>
                                                <div className="star-rating">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div><div className="movie-slide slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1" style={{ width: "213px" }}>
                                                <div className="movie-poster">
                                                    <aside>
                                                        <div>
                                                            <a href="https://youtu.be/d96cjJhvlMA" data-vbtype="video" className="venobox play vbox-item" tabindex="-1">
                                                                <i className="material-icons"></i>
                                                            </a>
                                                            <a href="#" className="read-more" tabindex="-1">read more</a>
                                                            <span className="date">Released: 7 Mar, 2017</span>
                                                        </div>
                                                    </aside>
                                                    <a href="#" tabindex="-1">
                                                        <img src="images/wed4.jpg" alt="Movie title" />
                                                    </a>

                                                </div>
                                                <h4 className="no-underline">The last post</h4>
                                                <div className="star-rating">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div><div className="movie-slide slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" tabindex="-1" style={{ width: "213px" }}>
                                                <div className="movie-poster">
                                                    <aside>
                                                        <div>
                                                            <a href="https://youtu.be/d96cjJhvlMA" data-vbtype="video" className="venobox play vbox-item" tabindex="-1">
                                                                <i className="material-icons"></i>
                                                            </a>
                                                            <a href="#" className="read-more" tabindex="-1">read more</a>
                                                            <span className="date">Released: 7 Mar, 2017</span>
                                                        </div>
                                                    </aside>
                                                    <a href="#" tabindex="-1">
                                                        <img src="images/wed1.jpg" alt="Movie title" />
                                                    </a>
                                                </div>


                                                <h4 className="no-underline">Dark and lonely</h4>
                                                <div className="star-rating">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>

                                                </div>
                                            </div>

                                            <div className="movie-slide slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" tabindex="-1" style={{ width: "213px" }}>
                                                <div className="movie-poster">
                                                    <aside>
                                                        <div>
                                                            <a href="https://youtu.be/d96cjJhvlMA" data-vbtype="video" className="venobox play vbox-item" tabindex="-1">
                                                                <i className="material-icons"></i>
                                                            </a>
                                                            <a href="#" className="read-more" tabindex="-1">read more</a>
                                                            <span className="date">Released: 7 Mar, 2017</span>
                                                        </div>
                                                    </aside>
                                                    <a href="#" tabindex="-1">
                                                        <img src="images/wed2.jpg" alt="Movie title" />
                                                        <div className="arrow">
                                                            <i class="fas fa-chevron-right"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                                <h4 className="no-underline">Venture</h4>
                                                <div className="star-rating">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div><div className="movie-slide slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" tabindex="-1" style={{ width: "213px" }}>
                                                <div className="movie-poster">
                                                    <aside>
                                                        <div>
                                                            <a href="https://youtu.be/d96cjJhvlMA" data-vbtype="video" className="venobox play vbox-item" tabindex="-1">
                                                                <i className="material-icons"></i>
                                                            </a>
                                                            <a href="#" className="read-more" tabindex="-1">read more</a>
                                                            <span className="date">Released: 7 Mar, 2017</span>
                                                        </div>
                                                    </aside>
                                                    <a href="#" tabindex="-1">
                                                        <img src="images/wed3.jpg" alt="Movie title" />
                                                    </a>
                                                </div>
                                                <h4 className="no-underline">Hush</h4>
                                                <div className="star-rating">
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                            </div></div></div>




                                        <i className="material-icons right slick-arrow" style={{ display: "flex" }}></i></div>


                                    <i className="material-icons right slick-arrow" style={{ display: "flex" }}></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="container section">
                        <div className="row">
                            <div className="days   col-sm-12">
                                <div className="tabs movies ui-tabs ui-corner-all ui-widget ui-widget-content">
                                    <ul role="tablist" className="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                                        <li role="tab" tabindex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="mon" aria-labelledby="ui-id-1" aria-selected="false" aria-expanded="false"><a href="#mon" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-1">Mon</a></li>
                                        <li role="tab" tabindex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="tue" aria-labelledby="ui-id-2" aria-selected="false" aria-expanded="false"><a href="#tue" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-2">Tue</a></li>
                                        <li role="tab" tabindex="0" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active" aria-controls="wed" aria-labelledby="ui-id-3" aria-selected="true" aria-expanded="true"><a href="#wed" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-3">Today</a></li>
                                        <li role="tab" tabindex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="thu" aria-labelledby="ui-id-4" aria-selected="false" aria-expanded="false"><a href="#thu" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-4">Thu</a></li>
                                        <li role="tab" tabindex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="fri" aria-labelledby="ui-id-5" aria-selected="false" aria-expanded="false"><a href="#fri" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-5">Fri</a></li>
                                        <li role="tab" tabindex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="sat" aria-labelledby="ui-id-6" aria-selected="false" aria-expanded="false"><a href="#sat" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-6">Sat</a></li>
                                        <li role="tab" tabindex="-1" className="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="sun" aria-labelledby="ui-id-7" aria-selected="false" aria-expanded="false"><a href="#sun" role="presentation" tabindex="-1" className="ui-tabs-anchor" id="ui-id-7">Sun</a></li>
                                    </ul>
                                    <div aria-labelledby="ui-id-1" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}>




                                        <div className="row ">
                                            <div className="movie-tabs col-md-2 col-sm-3">
                                                <a href="index.html">
                                                    <img src="images/movie-6.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="middle col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Fantasy</span>
                                                <h3 className="no-underline">It's over</h3>
                                                <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">14:45</span>
                                                        <span className="time">18:30</span>
                                                        <span className="time">20:30</span>
                                                        <span className="time">24:45</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        105 mins <span className="certificate">15</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="movie-tabs col-md-2 col-sm-3">
                                                <a href="index.html">
                                                    <img src="images/movie-5.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Sci-Fi </span>
                                                <h3 className="no-underline">Captain America: The First Avenger</h3>
                                                <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">

                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time">16:00</span>
                                                        <span className="time">18:00</span>
                                                        <span className="time">21:00</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        120 mins <span className="certificate">PG</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="index.html">
                                                    <img src="images/movie-8.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Fences</h3>
                                                <p>A working-className African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">10:00</span>
                                                        <span className="time past">12:45</span>
                                                        <span className="time">17:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        135 mins <span className="certificate">18</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-7.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Daylight</h3>
                                                <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time past">14:30</span>
                                                        <span className="time">20:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        117 mins <span className="certificate">U</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tue" aria-labelledby="ui-id-2" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="index.html">
                                                    <img src="images/movie-7.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Daylight</h3>
                                                <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time past">14:30</span>
                                                        <span className="time">20:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        117 mins <span className="certificate">U</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-5.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Sci-Fi </span>
                                                <h3 className="no-underline">Captain America: The First Avenger</h3>
                                                <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                                <p><a href="#" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time">16:00</span>
                                                        <span className="time">18:00</span>
                                                        <span className="time">21:00</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        120 mins <span className="certificate">PG</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="index.html">
                                                    <img src="images/movie-6.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="par col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Fantasy</span>
                                                <h3 className="no-underline">It's over</h3>
                                                <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">14:45</span>
                                                        <span className="time">18:30</span>
                                                        <span className="time">20:30</span>
                                                        <span className="time">24:45</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        105 mins <span className="certificate">15</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="index.html">
                                                    <img src="images/movie-7.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Fences</h3>
                                                <p>A working-className African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">10:00</span>
                                                        <span className="time past">12:45</span>
                                                        <span className="time">17:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        135 mins <span className="certificate">18</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div aria-labelledby="ui-id-3" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false" style={{ display: "block" }}>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="index.html">
                                                    <img src="images/movie-6.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Fantasy</span>
                                                <h3 className="no-underline">It's over</h3>
                                                <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">14:45</span>
                                                        <span className="time">18:30</span>
                                                        <span className="time">20:30</span>
                                                        <span className="time">24:45</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        105 mins <span className="certificate">15</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="index.html">
                                                    <img src="images/movie-5.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Sci-Fi </span>
                                                <h3 className="no-underline">Captain America: The First Avenger</h3>
                                                <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">

                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time">16:00</span>
                                                        <span className="time">18:00</span>
                                                        <span className="time">21:00</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        120 mins <span className="certificate">PG</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-7.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Daylight</h3>
                                                <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
                                                <p><a href="#" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time past">14:30</span>
                                                        <span className="time">20:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        117 mins <span className="certificate">U</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-8.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Fences</h3>
                                                <p>A working-className African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">10:00</span>
                                                        <span className="time past">12:45</span>
                                                        <span className="time">17:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        135 mins <span className="certificate">18</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="thu" aria-labelledby="ui-id-4" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="index.html">
                                                    <img src="images/movie-5.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Sci-Fi </span>
                                                <h3 className="no-underline">Captain America: The First Avenger</h3>
                                                <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">

                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time">16:00</span>
                                                        <span className="time">18:00</span>
                                                        <span className="time">21:00</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        120 mins <span className="certificate">PG</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="index.html">
                                                    <img src="images/movie-7.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Daylight</h3>
                                                <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">

                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time past">14:30</span>
                                                        <span className="time">20:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        117 mins <span className="certificate">U</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-6.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Fantasy</span>
                                                <h3 className="no-underline">It's over</h3>
                                                <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
                                                <p><a href="#" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">14:45</span>
                                                        <span className="time">18:30</span>
                                                        <span className="time">20:30</span>
                                                        <span className="time">24:45</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        105 mins <span className="certificate">15</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-8.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Fences</h3>
                                                <p>A working-className African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
                                                <p><a href="#" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">

                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">10:00</span>
                                                        <span className="time past">12:45</span>
                                                        <span className="time">17:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        135 mins <span className="certificate">18</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="fri" aria-labelledby="ui-id-5" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-5.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Sci-Fi </span>
                                                <h3 className="no-underline">Captain America: The First Avenger</h3>
                                                <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">

                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time">16:00</span>
                                                        <span className="time">18:00</span>
                                                        <span className="time">21:00</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        120 mins <span className="certificate">PG</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="index.html">
                                                    <img src="images/movie-6.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Fantasy</span>
                                                <h3 className="no-underline">It's over</h3>
                                                <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">14:45</span>
                                                        <span className="time">18:30</span>
                                                        <span className="time">20:30</span>
                                                        <span className="time">24:45</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        105 mins <span className="certificate">15</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="index.html">
                                                    <img src="images/movie-7.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Daylight</h3>
                                                <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">

                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time past">14:30</span>
                                                        <span className="time">20:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        117 mins <span className="certificate">U</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-8.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Fences</h3>
                                                <p>A working-className African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">10:00</span>
                                                        <span className="time past">12:45</span>
                                                        <span className="time">17:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        135 mins <span className="certificate">18</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sat" aria-labelledby="ui-id-6" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="index.html">
                                                    <img src="images/movie-6.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Fantasy</span>
                                                <h3 className="no-underline">It's over</h3>
                                                <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">14:45</span>
                                                        <span className="time">18:30</span>
                                                        <span className="time">20:30</span>
                                                        <span className="time">24:45</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        105 mins <span className="certificate">15</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-7.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Daylight</h3>
                                                <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time past">14:30</span>
                                                        <span className="time">20:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        117 mins <span className="certificate">U</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-5.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Sci-Fi </span>
                                                <h3 className="no-underline">Captain America: The First Avenger</h3>
                                                <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time">16:00</span>
                                                        <span className="time">18:00</span>
                                                        <span className="time">21:00</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        120 mins <span className="certificate">PG</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-8.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Fences</h3>
                                                <p>A working-className African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
                                                <p><a href="#" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">10:00</span>
                                                        <span className="time past">12:45</span>
                                                        <span className="time">17:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        135 mins <span className="certificate">18</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sun" aria-labelledby="ui-id-7" role="tabpanel" className="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="true" style={{ display: "none" }}>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-5.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Sci-Fi </span>
                                                <h3 className="no-underline">Captain America: The First Avenger</h3>
                                                <p>Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.</p>
                                                <p><a href="#" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time">16:00</span>
                                                        <span className="time">18:00</span>
                                                        <span className="time">21:00</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        120 mins <span className="certificate">PG</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-6.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Action, Adventure, Fantasy</span>
                                                <h3 className="no-underline">It's over</h3>
                                                <p>European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">14:45</span>
                                                        <span className="time">18:30</span>
                                                        <span className="time">20:30</span>
                                                        <span className="time">24:45</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        105 mins <span className="certificate">15</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-7.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Daylight</h3>
                                                <p>A chronicle of the childhood, adolescence and burgeoning adulthood of a young black man growing up in a rough neighborhood of Miami.</p>
                                                <p><a href="#" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">

                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">11:00</span>
                                                        <span className="time past">14:30</span>
                                                        <span className="time">20:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        117 mins <span className="certificate">U</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row movie-tabs">
                                            <div className="col-md-2 col-sm-3">
                                                <a href="#">
                                                    <img src="images/movie-8.jpg" alt="Movie title" />
                                                </a>
                                            </div>
                                            <div className="col-md-10 col-sm-9">
                                                <span className="title">Drama</span>
                                                <h3 className="no-underline">Fences</h3>
                                                <p>A working-className African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.</p>
                                                <p><a href="index.html" className="arrow-button">Full synopsis</a></p>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-9">
                                                        <hr className="space-10" />
                                                        <span className="viewing-times">
                                                            <i className="material-icons"></i>
                                                            Viewing times
                                                        </span>
                                                        <span className="time past">10:00</span>
                                                        <span className="time past">12:45</span>
                                                        <span className="time">17:00</span>
                                                        <span className="time">21:15</span>
                                                    </div>
                                                    <div className="col-md-4 col-sm-3 running-time">
                                                        <hr className="space-10" />
                                                        135 mins <span className="certificate">18</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container ">
                        <div className="row ">
                            <div className="all col-sm-12">
                                <h2>Coming soon</h2>
                                <hr />
                                <div className="row single-slide slideOne" style={{ opacity: "1", height: "auto", }}></div>
                                <div className="bg"></div>
                                <div className="left  col-sm-5 col-xs-12 slide-content">
                                    <span className="title">Drama, Thriller</span>
                                    <h3 className="under">Deepwater Horizon</h3>
                                    <div className="star">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="date">
                                        30 September, 2017
                                    </div>

                                </div>
                                <div className="pic col-sm-6 col-xs-12 col-sm-push-1 slide-video">
                                    <a href="https://youtube/S-UPJyEHmM0" data-vbtype="video" className="venobox video vbox-item">
                                        <img src="images\slide-1-video.png" alt="" />
                                    </a>
                                </div>
                            </div>

                            <div className="row single-slide slideThree" style={{ opacity: "0", height: "0px", paddingbottom: "0px" }}>
                                <div className="bg"></div>
                                <div className="col-sm-5 slide-content">
                                    <span className="title">Comedy, Crime</span>
                                    <h3 className="no-underline">The Hangover Part III</h3>
                                    <div className="star-rating">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="date">
                                        30 September, 2017
                                    </div>

                                </div>
                                <div className="col-sm-6 col-sm-push-1 slide-video">
                                    <a href="https://youtu.be/S-UPJyEHmM0" data-vbtype="video" className="venobox video vbox-item">

                                        <img src="images/comedy.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="row single-slide slideFour" style={{ opacity: "0", height: "0px", paddingbottom: "0px" }}>
                                <div className="bg"></div>
                                <div className="col-sm-5 slide-content">
                                    <span className="title">Action, Adventure, Sci-Fi</span>
                                    <h3 className="no-underline">Transformers: Age of Extinction</h3>
                                    <div className="star-rating">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="date">
                                        15 April, 2018
                                    </div>

                                </div>
                                <div className="col-sm-6 col-sm-push-1 slide-video">
                                    <a href="https://youtube/S-UPJyEHmM0" data-vbtype="video" className="venobox video vbox-item">

                                        <img src="images/kids.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="row single-slide slideFive" style={{ opacity: "0", height: "0px", paddingbottom: "0px" }}>
                                <div className="bg"></div>
                                <div className="col-sm-5 slide-content">
                                    <span className="title">Action, Adventure, Drama</span>
                                    <h3 className="no-underline">End of an empire</h3>
                                    <div className="star">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>

                                    </div>
                                    <div className="date">
                                        15 April, 2018
                                    </div>

                                </div>
                                <div className="col-sm-6 col-sm-push-1 slide-video">

                                    <a href="https://youtube/S-UPJyEHmM0" data-vbtype="video" className="venobox video vbox-item">

                                        <img src="images/dog.jpg" alt="" />
                                    </a>
                                </div>
                            </div>


                        </div>
                        <div className="slick-carousel1">
                            <i class="fas fa-caret-right"></i>
                            <div className="slick-list1 draggable">
                                <div className="slick-track" role="listbox" style={{ opacity: "1", width: "3078px", transform: "translate3d(-1620px, 0px, 0px)" }}>
                                    <div className="slick-slide1 " aria-hidden="true" tabindex="-1">
                                        <a href="#" tabindex="-1">
                                            <img src="images/dog.jpg" alt="" />
                                        </a>
                                        <h5 className="left2 ">Too fast</h5>
                                        <span className="date1">15 April, 2017</span>
                                    </div>
                                    <div data-dynamicclassName="slideThree" className="slick-slide slick-cloned" data-slick-index="-5" style={{ opacity: "0.35", width: "132px" }} aria-hidden="true" tabindex="-1">
                                        <a href="#" tabindex="-1">
                                            <img src="images/comedy.jpg" alt="" />
                                        </a>
                                        <h5 className="left2 ">The Hangover: Part III</h5>
                                        <span className="date1">30 September, 2017</span>
                                    </div>
                                    <div data-dynamicclassName="slideFour" className="slick-slide slick-cloned" data-slick-index="-4" style={{ opacity: "0.35", width: "132px" }} aria-hidden="true" tabindex="-1">
                                        <a href="#" tabindex="-1">
                                            <img src="images/reddog.jpg" alt="" />
                                        </a>
                                        <h5 className="left2">Transformers: Age of Extinction</h5>
                                        <span className="date1">15 April, 2018</span>
                                    </div>
                                    <div data-dynamicclassName="slideFive" className="slick-slide slick-cloned" data-slick-index="-3" style={{ opacity: "0.35", width: "132px" }} aria-hidden="true" tabindex="-1">
                                        <a href="#" tabindex="-1">
                                            <img src="images/kids.jpg" alt="" />
                                        </a>
                                        <h5 className="left2">End of an empire</h5>
                                        <span className="date1">19 October, 2018</span>
                                    </div><div data-dynamicclassName="slideSix" className="slick-slide slick-cloned" data-slick-index="-2" style={{ opacity: "0.35", width: "132px" }} aria-hidden="true" tabindex="-1">
                                        <a href="#" tabindex="-1">
                                            <img src="images/other.jpg" alt="" />
                                        </a>
                                        <h5 className="left2">The comedian</h5>
                                        <span className="date1">21 November, 2018</span>
                                    </div><div data-dynamicclassName="slideSeven" className="slick-slide slick-cloned" data-slick-index="-1" style={{ opacity: "0.35", width: "132px" }} aria-hidden="true" tabindex="-1">
                                        <a href="#" tabindex="-1">
                                            <img src="images/Picture-5.jpg" alt="" />
                                        </a>
                                        <h5 className="left2">Locked out</h5>
                                        <span className="date1">01 December, 2018</span>
                                    </div><div data-dynamicclassName="slideOne" className="slick-slide" data-slick-index="0" style={{ opacity: "1", width: "132px" }} aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide10">
                                        <a href="#" tabindex="-1">
                                            <img src="images/movies2.jpg" alt="" />
                                        </a>
                                        <h5 className="left2">Deepwater horizon</h5>
                                        <span className="date1">07 September, 2017</span>
                                    </div><div data-dynamicclassName="slideFour" className="slick-slide" data-slick-index="3" style={{ opacity: "0.35", width: "132px" }} aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide13">
                                        <a href="#" tabindex="-1">
                                            <img src="images/movie-6.jpg" alt="" />
                                        </a>
                                        <h5 className="left2">Transformers: Age of Extinction</h5>
                                        <span className="date1">15 April, 2018</span>
                                    </div>
                                    <div data-dynamicclassName="slideTwo" className="slick-slide slick-cloned slick-active" data-slick-index="8" style={{ opacity: "0.35", width: "132px" }} aria-hidden="false" tabindex="-1">
                                        <a href="#" tabindex="0">
                                            <img src="images/movie-9.jpg" alt="" />
                                        </a>
                                        <h5 className="left2">Too fast</h5>
                                        <span className="date1">15 April, 2017</span>
                                    </div>
                                    <div data-dynamicclassName="slideFour" className="slick-slide slick-cloned" data-slick-index="10" style={{ opacity: "0.35", width: "132px" }} aria-hidden="true" tabindex="-1">
                                        <a href="#" tabindex="-1">
                                            <img src="images/movie-12.jpg" alt="" />
                                        </a>
                                        <h5 className="left2">Transformers: Age of Extinction</h5>
                                        <span className="date1">15 April, 2018</span>
                                    </div>
                                    <div data-dynamicclassName="slideSix" className="slick-slide slick-cloned" data-slick-index="12" style={{ opacity: "0.35", width: "132px" }} aria-hidden="true" tabindex="-1">
                                        <a href="#" tabindex="-1">
                                            <img src="images/movie-14.jpg" alt="" />
                                        </a>
                                        <h5 className="left2">The comedian</h5>
                                        <span className="date1">21 November, 2018</span>
                                    </div>
                                </div>
                            </div>
                        </div>









                        <div className="container section small-padding">
                            <div className="row">
                                <div className="det  col-sm-12 cta">
                                    <p>Need help? Contact our support team on</p>
                                    <p className="tel">0330 123 4567</p>
                                </div>
                            </div>
                        </div>


                        <footer>
                            <div className="container">
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
                                            <li><a href="#"><i class="fab fa-facebook-f"></i> Facebook</a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                                            <li><a href="#"><i class="fab fa-google-plus-g"></i> Google +</a></li>
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



        );
    }


export default Home

