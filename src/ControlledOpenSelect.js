import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [shoot, setShoot] = React.useState('');
  const [open, setOpen] = React.useState(false);


  const handleChange = (event) => {
    console.log(event.target.value);
    setShoot(event.target.value);
    //getPics()
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">select a shoot</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={shoot}
          onChange={handleChange}

        >
          <MenuItem value={"marlowe"}>marlowe</MenuItem>
          <MenuItem value={"ruth"}>ruth</MenuItem>
          <MenuItem value={"val"}>val</MenuItem>
          <MenuItem value={"derek"}>derek</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}