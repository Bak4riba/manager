import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({

}));

export default function Material() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Typography variant='h5'>Cadastro de Materiais</Typography>
        <TextField
          className={classes.Textfield}
          id="outlined-basic"
          label="Nome"
          variant="outlined"
        />
      </div>
    </form>
  );
}