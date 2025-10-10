import { useId } from "react";
import css from "./OrderForm.module.css";
import { Field, Form, Formik, FormikHelpers, ErrorMessage } from "formik";

import * as Yup from "yup";

const OrderSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .required("This field is required!!!"),
  email: Yup.string().email("Must be email format"),
  delivery: Yup.string().oneOf(
    ["pickup", "courier", "drone"],
    "Invalid method"
  ),
  restrictions: Yup.array().of(
    Yup.string().oneOf(["vegan", "gluten-free", "nut-free"])
  ),
  deliveryTime: Yup.string().required("Select time"),
  message: Yup.string().max(300, "Too long!"),
});

interface FormValues {
  username: string;
  email: string;
  delivery: string;
  restrictions: string[];
  deliveryTime: string;
  message: string;
}

const initialValues: FormValues = {
  username: "",
  email: "",
  delivery: "pickup",
  restrictions: [],
  deliveryTime: "",
  message: "",
};

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default function OrderForm() {
  const inputId = useId();

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    await sleep(2000);
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={OrderSchema}
    >
      {({ isSubmitting }) => {
        return (
          <Form className={css.form}>
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Client Info</legend>
              <div className={css["input-wrapper"]}>
                <label htmlFor={`${inputId}-username`} className={css.label}>
                  Name
                  <ErrorMessage
                    name="username"
                    component="span"
                    className={css.error}
                  />
                </label>
                <Field
                  type="text"
                  name="username"
                  id={`${inputId}-username`}
                  className={css.input}
                />
              </div>

              <div className={css["input-wrapper"]}>
                <label htmlFor={`${inputId}-email`} className={css.label}>
                  Email
                  <ErrorMessage
                    name="email"
                    component="span"
                    className={css.error}
                  />
                </label>
                <Field
                  type="email"
                  name="email"
                  id={`${inputId}-email`}
                  className={css.input}
                />
              </div>
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Delivery method</legend>

              <label className={css.option}>
                <Field type="radio" name="delivery" value="pickup" />
                Pickup
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="courier" />
                Courier
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="drone" />
                Drone delivery
              </label>

              <ErrorMessage
                name="delivery"
                component="span"
                className={css.error}
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Dietary restrictions</legend>

              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="vegan" />
                Vegan
              </label>
              <label className={css.option}>
                <Field
                  type="checkbox"
                  name="restrictions"
                  value="gluten-free"
                />
                Gluten-free
              </label>
              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="nut-free" />
                Nut-free
              </label>

              <ErrorMessage
                name="restrictions"
                component="span"
                className={css.error}
              />
            </fieldset>

            <label htmlFor={`${inputId}-deliveryTime`} className={css.label}>
              Preferred delivery time
            </label>

            <Field
              as="select"
              name="deliveryTime"
              id={`${inputId}-deliveryTime`}
              className={css.input}
            >
              <option value="" disabled>
                -- Choose delivery time --
              </option>
              <option value="morning">Morning (8:00-12:00)</option>
              <option value="afternoon">Afternoon (12:00-16:00)</option>
              <option value="evening">Evening (16:00-20:00)</option>
            </Field>
            <ErrorMessage
              name="deliveryTime"
              component="span"
              className={css.error}
            />

            <label htmlFor={`${inputId}-message`} className={css.label}>
              Additional message
            </label>
            <Field
              as="textarea"
              name="message"
              rows={4}
              id={`${inputId}-message`}
              className={css.textarea}
            ></Field>
            <ErrorMessage
              name="message"
              component="span"
              className={css.error}
            />

            <button type="submit" className={css.button}>
              {isSubmitting ? "Submiting your order" : "Place order"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
