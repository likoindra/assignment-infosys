import React from "react";
import Styles from "./styles.module.scss";
import PLACEHOLDER from "../../assets/placeholder.jpeg";
import { useNavigate } from "react-router-dom";

const Films = (data, index) => {
  const navigate = useNavigate();
  console.log(index)
  return (
    <div className={Styles.container} onClick={() => navigate(`/1`)}>
      <img src={PLACEHOLDER} alt="placeholder" />
      <div className={Styles.title}>
        <span>{data?.data?.title}</span>
      </div>
    </div>
  );
};

export default Films;
