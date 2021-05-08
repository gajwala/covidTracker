import { Typography, Grid } from "@material-ui/core";
import React from "react";
import CardComponent from "./Card/Card";
import styled from "styled-components";
import styles from "../../css/cards.module.css";

function Cards({ data }) {
  const { confirmed, recovered, deaths, lastUpdate } = data;
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <Container>
      <Typography gutterBottom variant="h4" component="h2">
        Global
      </Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </Container>
  );
}

export default React.memo(Cards);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;
