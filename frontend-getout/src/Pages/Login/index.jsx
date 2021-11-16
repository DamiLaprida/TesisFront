import * as React from "react";
import { Box, Grid, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      mail: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          "& .MuiTextField-root": {
            m: 3,
          },
        }}
        style={{
          maxWidth: "50%",
        }}
      >
        <Controller
          name="mail"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              id="mail"
              label="Mail"
              type="email"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Ingrese un mail" }}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              id="password"
              label="Contraseña"
              type="password"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Ingrese su contraseña" }}
        />
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            type="submit"
            sx={{ px: 4, py: 1, m: 3 }}
            id="loginSubmit"
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/backoffice"
            sx={{ px: 4, py: 1, m: 3 }}
            id="loginSubmit"
            variant="contained"
            color="secondary"
          >
            Ir a Backoffice
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Login;
