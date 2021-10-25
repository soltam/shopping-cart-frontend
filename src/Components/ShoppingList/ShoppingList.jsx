import { useState, useEffect, useRef } from "react";
import "./ShoppingList.scss";
import { Card, Grid, CardContent } from "@mui/material";
import ButtonRenderer from "../Utils/Button/Button";
import AddProduct from "../AddProduct/AddProduct";
import ProductList from "../ProductList/ProductList";
import Item from "../Item";

const ShoppingList = () => {
  const [items, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(new Item());
  const [popupOpen, setPopupOpen] = useState(false);
  const openId = useRef(1);

  useEffect(() => {}, []);

  useEffect(() => {
    if (!popupOpen) {
      openId.current = openId.current + 1;
    }
  }, [popupOpen]);

  const closePopup = () => {
    setPopupOpen(false);
  };

  const saveProduct = (item) => {
    setProducts([...items, item]);
  };

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

  const productListContainer = () => {
    return (
      <Grid
        container
        alignItems="center"
        className="productListContainer"
        alignContent="center"
        rowSpacing={1}
      >
          <Grid item xs={12}>
            <h3 className="mainLabel">Your Items</h3>
          </Grid>
          <Grid item xs={12}>
            <ButtonRenderer color="primary" onClick={addItem}>
              Add item
            </ButtonRenderer>
          </Grid>
          <Grid item xs={12}>
            <ProductList products={items} />
          </Grid>
      </Grid>
    );
  };

  return (
    <>
      {items.length === 0 ? emptyContainer() : productListContainer()}
      {popupOpen && (
        <AddProduct
          key={openId.current}
          item={currentProduct}
          isOpen={popupOpen}
          close={closePopup}
          saveProduct={saveProduct}
        />
      )}
    </>
  );
};

export default ShoppingList;
