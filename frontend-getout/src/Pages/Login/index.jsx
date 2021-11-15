import * as React from "react";
import { Box, Grid, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  });
  const onSubmit = (data) => console.log(data);
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
          render={({ field }) => (
            <TextField fullWidth id="mail" label="Mail" type="email" />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              id="password"
              label="Contraseña"
              type="password"
              {...register("password", { required: true, minLength: 8 })}
            />
          )}
        />

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{ px: 4, py: 1, m: 3 }}
            id="loginSubmit"
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Login;
