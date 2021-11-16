import * as React from "react";
import { Box, Grid, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const Contact = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      mail: "",
      text: "",
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
          name="name"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              id="name"
              label="Nombre"
              type="text"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Ingrese un nombre" }}
        />

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
          name="text"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              fullWidth
              multiline
              id="text"
              label="Comentario"
              rows={4}
              type="text"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Ingrese su texto" }}
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
            Enviar
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Contact;
