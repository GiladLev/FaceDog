import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from "@mui/material";
import "./Login.css"
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";


//Data
const initialValues = {
  firstName: "",
  lastName: "",
  occupation: "",
  city: "",
  country: "",
  email: "",
  password: "",
};

const options = [
  { label: "Computer Programmer", value: "Computer_programmer" },
  { label: "Web Developer", value: "web_developer" },
  { label: "User Experience Designer", value: "user_experience_designer" },
  { label: "Systems Analyst", value: "systems_analyst" },
  { label: "Quality Assurance Tester", value: "quality_assurance_tester" },
];

//password validation
const lowercaseRegEx = /(?=.*[a-z])/;
const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const lengthRegEx = /(?=.{6,})/;

//validation schema
let validationSchema = Yup.object().shape({
 
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
});
const Login = () => {
  
  
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
            // onSubmit={onSubmit}
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
               
                    <Button
                   
                      variant="contained"
                      color="primary"
                      type="Submit"
                      fullWidth
                    //   onClick={()=>onSubmit(values)}
                    >
                      REGISTER
                      </Button >
                    
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
