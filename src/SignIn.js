import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

import "./signin.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const REST_API_URL = process.env.REACT_APP_URL;

  const axiosCustom = axios.create({
    baseURL: REST_API_URL,
  });
  const classes = useStyles();
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errMessage, setErrMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    const user = await axiosCustom({
      method: "POST",
      url: "/login",
      data: {
        email: email,
        password: password,
      },
    });
    localStorage.setItem("token", user.data.accessToken);
    history.push("/todos");
    //return <Redirect to="react-todo#/todos" />;
  };

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error) {
        setErrMessage(error.response.data.errors || error.response.data.error);
        setIsError(true);
      }
      return Promise.reject(error);
    }
  );

  return (
    <div className="sign-in-wrapper">
      <h1 className="sign-in-title">Sign In</h1>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate onSubmit={(e) => login(e)}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="react-todos#/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
          {isError ? (
            <Snackbar
              open={isError}
              onClose={() => setIsError(false)}
              autoHideDuration={2000}
            >
              <Alert onClose={() => setIsError(false)} severity="error">
                {errMessage}
              </Alert>
            </Snackbar>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
