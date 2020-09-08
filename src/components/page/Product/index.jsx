import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      //margin: theme.spacing(11),
      marginTop: '5vh',
      marginLeft: '5vw',
      width: 200,
    },
    TextField: {
      color: theme.palette.secondary.light,
    },
    '& .MuiTypography-root': {
      marginTop: '15vh',
      marginLeft: '5vw',
    }
  },
}));

export default function Product() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Typography variant='h5'>Cadastro de Produtos</Typography>
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