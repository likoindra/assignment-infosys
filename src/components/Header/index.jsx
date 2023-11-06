import React from "react";
import Styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={Styles.wrapperHeader}>
      <div className={Styles.header}>
        <span>Film Me Tracker</span>
      </div>

      {/* <div className={Styles.searchbar}>
        {value ? (
          <Searchbar
            placeholder="Search Movies"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : null}
      </div> */}
      <div className={Styles.header} />
    </div>
  );
};

export default Header;
