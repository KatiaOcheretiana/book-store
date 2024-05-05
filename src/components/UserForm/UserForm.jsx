import * as Yup from "yup";
import { ErrorText, FieldForm, FormFieds, Label } from "./UserForm.styled";
import { Button } from "@mui/material";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectCartBooks, selectTotalPrice } from "../../redux/cart/selectors";
import { orderBooks } from "../../redux/cart/operations";

const UserSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  surname: Yup.string().required("Surname is required"),
  address: Yup.string().required("Address is required"),
  phone: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      "Invalid number format (e.g., 096-000-00-00)"
    )
    .required("Number is required"),
});

export const UserForm = () => {
  const booksInCart = useSelector(selectCartBooks);

  const totalPrice = useSelector(selectTotalPrice);

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        address: "",
        phone: "",
      }}
      validationSchema={UserSchema}
      onSubmit={(values, actions) => {
        dispatch(
          orderBooks({ userInfo: values, books: booksInCart, totalPrice })
        );
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <FormFieds>
          <Label>
            <FieldForm name="name" type="text" placeholder="Name" />
            {errors.name && touched.name && (
              <ErrorText>{errors.name}</ErrorText>
            )}
          </Label>
          <Label>
            <FieldForm name="surname" type="text" placeholder="Surname" />
            {errors.surname && touched.surname && (
              <ErrorText>{errors.surname}</ErrorText>
            )}
          </Label>
          <Label>
            <FieldForm name="address" type="text" placeholder="Address" />
            {errors.address && touched.address && (
              <ErrorText>{errors.address}</ErrorText>
            )}
          </Label>
          <Label>
            <FieldForm name="phone" type="tel" placeholder="Phone" />
            {errors.phone && touched.phone && (
              <ErrorText>{errors.phone}</ErrorText>
            )}
          </Label>

          <Button type="submit" variant="contained">
            ORDER
          </Button>
        </FormFieds>
      )}
    </Formik>
  );
};
