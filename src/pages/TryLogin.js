import {
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

  console.log(values);
  const handleSubmit = (e) => {
    e.preventDefault();
    // https://reqres.in/api/login
    axios
      .post("http://localhost:8080/api/v1/auth", {
        email: values.email,
        pass: values.pass,
      })
      .then((res) => {
        console.log(e);
        console.log(res);
        console.log(res.data);
        console.log(res.data.data);
        console.log(res.data.data.token);
        console.log(res.data.msg);
        localStorage.setItem("token", res.data.data.token);
      })
      .catch((err) => console.error(err.response.data));
  };
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Paper elelvation={2} sx={{ padding: 5 }}>
            <form onSubmit={handleSubmit}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    type="email"
                    fullWidth
                    label="Enter your email"
                    placeholder="Email Address"
                    variant="outlined"
                    required
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type={values.showPass ? "text" : "password"}
                    fullWidth
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    required
                    onChange={(e) =>
                      setValues({ ...values, pass: e.target.value })
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handlePassVisibilty}
                            aria-label="toggle password"
                            edge="end"
                          >
                            {values.showPass ? <div>asd</div> : <div>aaa</div>}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item>
                  <Button type="submit" fullWidth variant="contained">
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
