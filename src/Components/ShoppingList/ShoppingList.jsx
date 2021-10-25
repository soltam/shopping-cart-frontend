import { useState, useEffect, useRef } from "react";
import "./ShoppingList.scss";
import { Card, Grid, CardContent } from "@mui/material";
import ButtonRenderer from "../Utils/Button/Button";
import AddProduct from "../AddProduct/AddProduct";
import Item from "../Item";

const ShoppingList = () => {
  const [items, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(new Item());
  const [popupOpen, setPopupOpen] = useState(false);
  const openId = useRef(1);

  useEffect(() => {
    // Load saved items from local-storage
  }, []);

  useEffect(() => {
    if (!popupOpen) {
      openId.current = openId.current + 1;
      // Increment id each time modal closes, in order to force
      // renew the Dialog element (to clear the inernal state)
    }
  }, [popupOpen]);

  const closePopup = () => {
    setPopupOpen(false);
  }

  const saveProduct = (item) => {
    setProducts([...items, item]);
  }

  const addItem = () => {
    setCurrentProduct(new Item());
    setPopupOpen(true);
  };

  const emptyContainer = () => {
    return (
      <Grid
        container
        alignItems="center"
        direction="column"
        justify="center"
        className="emptyList"
      >
        <Grid item xs={8}>
          <Card className="emptyListCard">
            <CardContent style={{ textAlign: "center" }}>
              <p>Your shopping list is empty :(</p>
              <ButtonRenderer
                color="primary"
                variant="contained"
                onClick={addItem}
              >
                Add your first item
              </ButtonRenderer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      {
                items.length === 0
                    ? emptyContainer() : emptyContainer()
      }
      {
                popupOpen &&
                <AddProduct
                    key={openId.current}
                    item={currentProduct}
                    isOpen={popupOpen}
                    close={closePopup}
                    saveProduct={saveProduct}
                />
      }
    </>
  );
};

export default ShoppingList;
