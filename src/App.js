import React, { useState } from "react";
import '../src/App.css';
import '../src/Newmovie/new.css';
import Nav  from './Nav';
import Home from './Home/Home';
import News from './News/News';
import  Footer from './Footer';
import  Newmovie from './Newmovie/Newmovie';
import  About from './About/About';
import  Contact from './Contact/Contact';
import styled from "styled-components";
import axios from 'axios';
import MovieComponent from "./component/MovieComponent.JS";
import MovieInfoComponent from "./component/MovieInfoComponent.JS";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Route,
    Link,
    Switch} from 'react-router-dom';
    export const API_KEY = "c483fac3";
    const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;
  
  const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;
    color: white;
    align-items: center;
    padding: 10px;
    font-size: 25px;
    font-weight: bold;
    box-shadow: 0 3px 6px 0 #555;
  `;
  
  const AppName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;
  
  const MovieImage = styled.img`
    width: 48px;
    height: 48px;
    margin: 15px;
  `;
  
  const SearchBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 10px;
    background-color: white;
    border-radius: 6px;
    margin-left: 20px;
    width: 50%;
    align-items: center;
  `;
  
  const SearchIcon = styled.img`
    width: 32px;
    height: 32px;
  `;
  
  const SearchInput = styled.input`
    color: black;
    font-size: 16px;
    font-weight: bold;
    border: none;
    outline: none;
    margin-left: 15px;
  `;
  
  const MovieListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    gap: 24px;
    justify-content: space-evenly;
  `;
function App() {
  
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState();
  const [selectedMovie, onMovieSelect] = useState();

  const fetchData = async (searchString) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
    updateMovieList(response.data.Search)
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  
  return (
    
  


<BrowserRouter>

<SearchBox>
          <SearchIcon src="/search-icon.svg"/>
          <SearchInput placeholder="Search Movie" value={searchQuery} onChange={onTextChange} />
</SearchBox>
{selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
      <MovieListContainer>
        {movieList?.length
          ? movieList.map((movie, index) => <MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect} />)
          : "NO Movie Search"}
</MovieListContainer>
       
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/Newmovies">New movies</Link>
          </li>
        </ul>
      </nav>
      
      
     <Switch>
        <Route path="/About" component={About} exact />
        <Route path="/" component={Home} exact />
        <Route path="/News" component={News} exact />
        <Route path="/Nav" component={Nav} exact />
        <Route path="/Footer" component={Footer} exact />
        <Route path="/Contact" component={Contact} exact />
        <Route path="/Newmovies" component={Newmovie} exact />
      </Switch>

</BrowserRouter>
      
     
  )
}

      
    
  

export default App
