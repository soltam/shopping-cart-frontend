import "./ShoppingList.scss";
import { Card, Grid, CardContent } from "@mui/material";
import Button from "@mui/material/Button";

const ShoppingList = () => {
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justify="center"
      className="emptyContainer"
    >
      <Grid item xs={8}>
        <Card className="emptyContainerCard">
          <CardContent style={{ textAlign: "center" }}>
            <p>Your shopping list is empty :(</p>
            <Button color="primary" variant="contained">
              Add your first item
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ShoppingList;
