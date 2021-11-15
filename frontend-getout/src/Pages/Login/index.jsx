import * as React from "react";
import { Box, Grid, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

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
          rules={{ required: "Mail required" }}
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
          rules={{ required: "Mail required" }}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              id="password"
              label="Password"
              type="password"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Password required" }}
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
        </Box>
      </Box>
    </Grid>
  );
};

export default Login;
