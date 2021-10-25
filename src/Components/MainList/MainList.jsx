import { Card, Grid, CardContent, Checkbox } from "@mui/material";
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import "./MainList.scss";

const CardList = (itemLists) => {
  return (
    <>
      {itemLists.map((item) => {
        return (
          <Grid item className="MainList">
            <Card>
              <CardContent>
                <Grid container rowSpacing={1}>
                  <Grid item xs={2}>
                    <Checkbox />
                  </Grid>
                  <Grid item xs={8}>
                    <Grid item xs={6} className="ItemName">
                      {item.name}
                    </Grid>
                    <Grid item xs={6} className="ItemDesc">
                      {item.description}
                    </Grid>
                  </Grid>
                  <Grid item xs={2}>
                    <EditIcon baseClassName="ed-del-icon"/>
                    <DeleteIcon baseClassName="ed-del-icon"/>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

const MainList = (props) => {
  const { products } = props;

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      rowSpacing={3}
    >
      {CardList(products)}
    </Grid>
  );
};

export default MainList;
