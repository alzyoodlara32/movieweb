import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { API_KEY } from "../App";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 30px;
    justify-content: center;
    border-bottom: 1px solid lightgray;
`;

const CoverImage = styled.img`
    object-fit: cover;
    height: 352px;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

const MovieName = styled.span`
    font-size: 22px;
    font-weight: 600;
    color: black;
    margin: 15px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-transform: capitalize;
`;

const MovieInfo = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: black;
    overflow: hidden;
    margin: 4px 0;
    text-transform: capitalize;
    text-overflow: ellipsis;
    & span {
        opacity: 0.5;
    }
`;

const Close = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: black;
    background: lightgray;
    height: fit-content;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.8;
`;

const MovieInfoComponent = (props) => {
    const [moiveInfo, setMovieInfo] = useState();
    const { selectedMovie } = props;
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
        .then((response) => setMovieInfo(response.data));
    },[selectedMovie]);
    return (
        <Container>
            <CoverImage src={moiveInfo?.Poster}/>
            <InfoColumn>
                <MovieName>{moiveInfo?.Type}: {moiveInfo?.Title}</MovieName>
                <MovieInfo>IMDB Rating: <span>{moiveInfo?.imdbRating}</span></MovieInfo>
                <MovieInfo>Year: <span>{moiveInfo?.Year}</span></MovieInfo>
                <MovieInfo>Language: <span>{moiveInfo?.Language}</span></MovieInfo>
                <MovieInfo>Rated: <span>{moiveInfo?.Rated}</span></MovieInfo>
                <MovieInfo>Released: <span>{moiveInfo?.Released}</span></MovieInfo>
                <MovieInfo>Runtime: <span>{moiveInfo?.Runtime}</span></MovieInfo>
                <MovieInfo>Genre: <span>{moiveInfo?.Genre}</span></MovieInfo>
                <MovieInfo>Director: <span>{moiveInfo?.Director}</span></MovieInfo>
                <MovieInfo>Actors: <span>{moiveInfo?.Actors}</span></MovieInfo>
                <MovieInfo>Plot: <span>{moiveInfo?.Plot}</span></MovieInfo>
            </InfoColumn>
            <Close onClick={() => props.onMovieSelect()}>X</Close>
        </Container>
    );
};

export default MovieInfoComponent;