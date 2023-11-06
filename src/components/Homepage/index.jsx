import React, { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import Searchbar from "../Searchbar";
import Films from "../Films";
import axios from "axios";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 3;
  const isLastPage = films.length < limit;

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://swapi.dev/api/films/?page=${page}&limit=${limit}`)
      .then((response) => {
        setFilms(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
        setIsLoading(false);
      });
  }, [page, limit]);

  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={Styles.container}>
      <div className={Styles.wrapperHeader}>
        <div className={Styles.header}>
          <span>Film Me Tracker</span>
        </div>

        <div className={Styles.searchbar}>
          <Searchbar
            placeholder="Search Movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={Styles.header} />
      </div>
      <div className={Styles.content}>
        <div className={Styles.headingText}>
          <span>All</span>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={Styles.films}>
            {filteredFilms?.map((el, index) => (
              <Films data={el} key={index} index={index} />
            ))}
          </div>
        )}

        <div className={Styles.pagination}>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <button onClick={() => !isLastPage && setPage(page + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
