import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: 200,
  },
  textFieldscro: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: 300,
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// function getStyles(hour, hours, theme) {
//   return {
//     fontWeight:
//       hours.indexOf(hour) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

const names = [
  "1 hora",
  "2 horas",
  "3 horas",
  "4 horas",
  "5 horas",
  "6 horas",
  "7 horas",
  "8 horas",
  "9 horas",
  "10 horas",
  "11 horas",
  "12 horas",
  "13 horas",
  "14 horas",
  "15  horas",
  "16  horas",
  "17  horas",
  "18  horas",
  "19  horas",
  "20  horas",
  "21  horas",
  "22  horas",
  "23  horas",
  "24  horas",
];

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const theme = useTheme();
  const [fields, setHours] = useState(
    {
      name: '',
      dosage: '',
      startdate: new Date(),
      lastday: '',
      hours: '8 horas',
      notes: ''
    }
  );


  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    setHours((prevState) => ({
      ...prevState,
      [name]: value
    })
    );
    console.log(fields);
    console.log(event.target.name);
    console.log(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (submit) => {
    console.log(submit)
    if (submit) {
      const data = {
        ...fields,
        hours: parseInt(fields.hours.split(' ')[0])
      }

    }
    setOpen(false);
  };

  return (
    <div className="__my-1">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Añadir pauta
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Añadir farmaco:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Mantenga supervisión con su veterinario.
          </DialogContentText>
          <form className={classes.container} noValidate>
            <TextField
              name="name"
              autoFocus
              value={fields.name}
              onChange={handleChange}
              margin="dense"
              id="name"
              label="Farmaco"
              type="text"
              fullWidth
            />
            <TextField
              name="dosage"
              value={fields.dosage}
              onChange={handleChange}
              margin="dense"
              id="dosage"
              label="Dosis"
              type="text"
              fullWidth
            />
            <TextField
              name="startdate"
              id="startdate"
              label="Día y hora primera dosis"
              type="datetime-local"
              onChange={handleChange}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <InputLabel className='__mt-1 __px-4 __mx-3' id="demo-mutiple-name-label">Pauta</InputLabel>
            <Select
              className='__mt-2'
              labelId="hours"
              name="hours"
              id="hours"
              value={fields.hours}
              onChange={handleChange}
              input={<Input />}
              MenuProps={MenuProps}
            >
              {names.map((name, i) => (
                <MenuItem
                  key={i}
                  value={name}
                // style={getStyles(name, hours, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
            <TextField
              id="lastday"
              label="Fecha última dosis"
              type="date"
              name="lastday"
              onChange={handleChange}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              className={classes.textFieldscro}
              id="notes"
              label="Notas"
              multiline
              rowsMax={4}
              name="notes"
              value={fields.notes}
              onChange={handleChange}
              variant="outlined"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={() => handleClose(true)} color="primary">
            Añadir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
