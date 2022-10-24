import React, { useContext } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  CircularProgress,
} from "@mui/material";
import "./Login.css"
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Box } from "@mui/system";


//Data
const initialValues = {
  email: "",
  password: "",
};

//password validation
const lowercaseRegEx = /(?=.*[a-z])/;
const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const lengthRegEx = /(?=.{6,})/;

//validation schema
let validationSchema = Yup.object().shape({
 
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    // .matches(
    //   lowercaseRegEx,
    //   "Must contain one lowercase alphabetical character!"
    // )
    // .matches(
    //   uppercaseRegEx,
    //   "Must contain one uppercase alphabetical character!"
    // )
    .matches(numericRegEx, "Must contain one numeric character!")
    .matches(lengthRegEx, "Must contain 6 characters!")
    .required("Required!"),
});
const Login = () => {
    const {user, isFetching, error, dispatch} = useContext(AuthContext)
    const onSubmit = (user) => {
    loginCall(user, dispatch)
  };
  console.log(user);
  return (
    <div className="wrapper">
    <Grid className="main" container justifyContent="space-between" spacing={4} >
     <Grid className="wrapperLogo" item md={6}>
      <h1 className="logo">FACEDOG</h1>
      <p className="desc">Login and connect all dogs to track all the dog in the area</p>
      </Grid>
       <Grid item md={6}>
        
        <Card>
          <CardHeader title="Login"></CardHeader>
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
                   
                      <Grid item xs={12} sm={12} md={12}>
                        <Field
                          label="Email"
                          variant="outlined"
                          fullWidth
                          name="email"
                          type="email"
                          value={values.email}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
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
                    </Grid>
                  </CardContent>
                  <CardActions>
                  {isFetching ? (
                 <Box sx={{ display: 'flex', width: '100%', justifyContent: "center" }}>
                 <CircularProgress />
               </Box>
              ) : (
                
              
                    <Button
                   
                      variant="contained"
                      color="primary"
                      type="Submit"
                      fullWidth
                      disabled={!isValid || isFetching}
                    >
                        Login
                      </Button >
                      )}
                    
                  </CardActions>
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

export default Login;
