import React, { useState } from "react";
import {Container, Pagination, Card } from "@mui/material";

import useSwr from "swr";
import "./Table.css";
import Header from "./Header";

import "../App.css";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

function Table() {
  const url = "https://plovput.li-st.net/getObjekti/";

  const { data, error } = useSwr(url, { fetcher });

  const features = data && !error ? data.features : [];

  const feature = features.map((feature) => (
    <Card className="tablica">
      <p>naziv_objekta : {feature.properties.naziv_objekta || "null"}</p>
      <p>ps_br : {feature.properties.ps_br || "null"}</p>
      <p> e_br : {feature.properties.e_br || "null"}</p>
      <p>tip_objekta : {feature.properties.tip_objekta || "null"}</p>
      <p>lucka_kapetanija :{feature.properties.lucka_kapetanija || "null"}</p>
    </Card>
  ));

  const [page, setPage] = useState(1);

  const handleChange = (e, feature) => {
    console.log("clicked");
    console.log(feature.slice(2, 4));
    setPage(feature);
    return feature.slice(2);
  };

  return (
    <Container>
    <div className="container">
      <Header />

      {feature.slice(0, 20)}
      <Pagination
        page={page}
        onChange={handleChange}
        className="pagination"
        count={20}

      />
    </div>
    </Container>
  );
}

export default Table;
