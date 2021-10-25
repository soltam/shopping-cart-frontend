import { useState } from "react";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Dialog,
} from "@mui/material";
import ButtonRenderer from "../Utils/ButtonRenderer/ButtonRenderer";
import { Grid, Checkbox, FormGroup, FormControlLabel } from "@material-ui/core";
import {
  PRODUCT_NAME_ERROR,
  PRODUCT_NAME_ERROR_TEXT,
  PRODUCT_DESC_ERROR,
  PRODUCT_DESC_ERROR_TEXT,
  CHARACTER_LIMIT,
} from "../Utils/Constants";
import "./AddProduct.scss";

const AddProduct = (props) => {
  const { item, isOpen, close, saveItem } = props;

  const [itemName, setItemName] = useState(item.name);
  const [itemDescription, setItemDescription] = useState(item.description);
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const [itemPurchased, setItemPurchased] = useState(item.purchased);
  const [errors, setErrors] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const validateAndSave = () => {
    const detectedErrors = {
      [PRODUCT_NAME_ERROR]:
        itemName.length === 0 ? PRODUCT_NAME_ERROR_TEXT : null,
      [PRODUCT_DESC_ERROR]:
        itemDescription.length === 0 ? PRODUCT_DESC_ERROR_TEXT : null,
    };

    const isValid =
      detectedErrors[PRODUCT_NAME_ERROR] === null &&
      detectedErrors[PRODUCT_DESC_ERROR] === null;
    if (isValid) {
      saveItem({
        id: item.id,
        name: itemName,
        description: itemDescription,
        quantity: itemQuantity,
        purchased: itemPurchased,
      });
      props.close();
    } else {
      setSubmitAttempted(true);
      setErrors(detectedErrors);
    }
  };

  const handleChange = (event) => {
    setItemDescription(event.target.value);
  };

  return (
    isOpen && (
      <Dialog
        maxWidth="xs"
        fullWidth
        open={isOpen}
        keepMounted={false}
        className="AddEditDialog"
      >
        <DialogTitle className="AddItemTitle">SHOPPING LIST</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} className="ActionDescription">
              Add an Item
            </Grid>
            <Grid item xs={12} className="ActionHelper">
              Add your item below
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                placeholder="Item Name"
                fullWidth
                value={itemName}
                onChange={(ev) => setItemName(ev.target.value)}
                error={submitAttempted && errors[PRODUCT_NAME_ERROR] !== null}
                helperText={errors[PRODUCT_NAME_ERROR]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                placeholder="Description"
                fullWidth
                multiline
                rows={5}
                inputProps={{
                  maxlength: CHARACTER_LIMIT,
                }}
                value={itemDescription}
                helperText={
                  errors[PRODUCT_DESC_ERROR] !== undefined &&
                  errors[PRODUCT_DESC_ERROR] !== null
                    ? `${errors[PRODUCT_DESC_ERROR]}`
                    : `${itemDescription.length}/${CHARACTER_LIMIT}`
                }
                onChange={(ev) => handleChange(ev)}
                error={submitAttempted && errors[PRODUCT_DESC_ERROR] !== null}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="How Many?"
                SelectProps={{
                  native: true,
                }}
                value={itemQuantity}
                onChange={(ev) => setItemQuantity(ev.target.value)}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </TextField>
            </Grid>
            <Grid item xs={12}>
                <FormGroup>
                <FormControlLabel control={<Checkbox value={itemPurchased} onChange={(ev) => setItemPurchased(ev.target.value)}/>} label="Purchased" />
                </FormGroup>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <ButtonRenderer onClick={close}>Cancel</ButtonRenderer>
          <ButtonRenderer onClick={validateAndSave} color="primary">
            Add Item
          </ButtonRenderer>
        </DialogActions>
      </Dialog>
    )
  );
};

export default AddProduct;
