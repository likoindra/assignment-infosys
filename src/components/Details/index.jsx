import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Styles from "./styles.module.scss";

function Details() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/films/${id}/`)
      .then((response) => {
        setFilm(response.data);
      })
      .catch((error) => {
        console.error("Error fetching film data:", error);
      });
  }, [id]);

  return (
    <div className={Styles.container}>
      <Header />
      <div className={ Styles.heading }>
        <h1>Film Detail</h1>
      </div>
      {film ? (
        <div className={Styles.content}>
          {/* <p>Film ID: {id}</p> */}
          <p>Title: {film?.title}</p>
          <p>Director: {film?.director}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Details;
