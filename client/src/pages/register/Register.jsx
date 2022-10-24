import React, { useContext } from "react";

import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  Typography,
  Link
} from "@mui/material";
import "./register.css"
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Box } from "@mui/system";
import { publicRequest } from "../../requestMethods";
import { registerCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";


//Data
const initialValues = {
  firstName: "",
  lastName: "",
  city: "",
  email: "",
  password: "",
  username: "",
  confirmPassword: ''
};



//password validation
const lowercaseRegEx = /(?=.*[a-z])/;
const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const lengthRegEx = /(?=.{6,})/;

//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .matches(
      lowercaseRegEx,
      "Must contain one lowercase alphabetical character!"
    )
    .matches(
      uppercaseRegEx,
      "Must contain one uppercase alphabetical character!"
    )
    .matches(numericRegEx, "Must contain one numeric character!")
    .matches(lengthRegEx, "Must contain 6 characters!")
    .required("Required!"),
  confirmPassword: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match')
});
const Register = () => {
  


  const {user, isFetching, error, dispatch} = useContext(AuthContext)
  const onSubmit = (user) => {
    console.log(user);
    registerCall(user, dispatch)
};
console.log(user);

  return (
    <div className="wrapper">
    <Grid className="main" container justifyContent="space-between" spacing={4} >
     <Grid className="wrapperLogo" item md={6}>
      
      <h1 className="logo">FACEDOG</h1>
      <p className="desc">Connect to be updated on dogs in the area that are looking for a warm home</p>
      </Grid>
       <Grid item md={6}>
        
        <Card>
          <CardHeader title="REGISTER FORM"></CardHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <CardContent>
                    
                    <Grid item container spacing={1} justify="center">
                      
                      
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          name="firstName"
                          value={values.firstName}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          name="lastName"
                          value={values.lastName}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} >
                        <Field
                          label="Username"
                          variant="outlined"
                          fullWidth
                          name="username"
                          value={values.username}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="City"
                          variant="outlined"
                          fullWidth
                          name="city"
                          value={values.city}
                          component={TextField}
                        />
                      </Grid>

                      
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Password"
                          variant="outlined"
                          fullWidth
                          name="password"
                          value={values.password}
                          type="password"
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Confirm Password"
                          variant="outlined"
                          fullWidth
                          name="confirmPassword"
                          value={values.confirmPassword}
                          type="password"
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          label="Email"
                          variant="outlined"
                          fullWidth
                          name="email"
                          value={values.email}
                          component={TextField}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
               
                    <Button
                   
                      variant="contained"
                      color="primary"
                      type="Submit"
                      fullWidth
                    >
                      REGISTER
                      </Button >
                  </CardActions>
                  <Box sx={{display: 'flex',
        justifyContent: 'center',}}>
                  <Link underline="hover" >
                  Already have an account? Sign in
</Link>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Grid>
      
    </Grid>
    </div>
  );
};

export default Register;
