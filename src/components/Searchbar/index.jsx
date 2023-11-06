import React from "react";
import Styles from "./styles.module.scss";

const Searchbar = ({ value, onChange, placeholder }) => {
  return (
    <div className={Styles.container}>
      <input
        className={`${Styles.searchInput} ${Styles.search}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type="text"
      />
    </div>
  );
};

export default Searchbar;
