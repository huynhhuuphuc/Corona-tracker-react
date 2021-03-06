import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function infoBox({ title, cases, total }) {
  return (
    <Card>
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        <h2 className="infoBox__cases">{cases}</h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} total
        </Typography>
      </CardContent>
      ;
    </Card>
  );
}

export default infoBox;
