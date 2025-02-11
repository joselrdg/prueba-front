import React, { useState } from "react";
// import clsx from 'clsx';
// import DateFnsUtils from '@date-io/date-fns';
// import Typography from '@material-ui/core/Typography';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import { DatePicker } from "@material-ui/pickers";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// import { FormControl, Input, InputAdornment, InputLabel, makeStyles, MenuItem, Paper, Select, useTheme } from "@material-ui/core";
import { InputAdornment, Paper, } from "@material-ui/core";
// import SelectInput from "@material-ui/core/Select/SelectInput";
// import { DOGBREED } from '../../../../constants/constants'
// import SelectInput from "../../../common/SelectInput";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         margin: 10,
//     },
//     weight: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignContent: 'center',
//         alignItems: 'center'
//     }
// }));


function AddPetForm(props) {
    // const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());
    const [values, setValues] = useState({
        species: 'dg',
        numberformat: '0',
        specialpeculiarities: ''

    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };


    return (
        <div className='addpetform__root'>
            <Paper elevation={3}>
                <Grid container spacing={3} className='addpetform__grid'>
                    {/* <Grid item xs={12} sm={6}  >
                        <SelectInput value={values.species} handleDateChange={()=>handleChange()} items={['Perro', 'Gato', 'Ave', 'Reptil', 'Anfibio', 'Otro']} label='Especie' />
                    </Grid> */}
                 {/*    <Grid item xs={12} sm={6}  >
                        <SelectInput items={DOGBREED} itemname='breed' label='Raza' />
                    </Grid>
                    <Grid item xs={12} sm={3}  >
                        <SelectInput items={['Macho', 'Hembra', 'Indifinido']} itemname='breed' label='Sexo' />
                    </Grid>
                    <Grid item xs={12} sm={3}  >
                        <SelectInput items={['Corto', 'Medio', 'Largo', 'Rizo', 'Sin pelo']} itemname='hair' label='Pelo' />
                    </Grid>
                    <Grid item xs={12} sm={3}  >
                        <SelectInput items={['Abigarrado', 'Albino', 'Atigrado', 'Azul', 'Chocolate', 'Gris']} itemname='color' label='Capa' />
                    </Grid>
                    <Grid item xs={12} sm={3}  >
                        <SelectInput items={['Esterilizado', 'Castrado', 'Gestación', 'Lactancia']} itemname='sterilized' label='Estado' />
                    </Grid> */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            // required
                            id="name"
                            name="name"
                            label="Nombre"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="chip"
                            name="chip"
                            label="Numeto de identificación"
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <DatePicker
                            disableFuture
                            openTo="year"
                            format="dd/MM/yyyy"
                            label="Fecha de nacimiento"
                            views={["year", "month", "date"]}
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}  >
                        <TextField
                            label="Peso"
                            value={values.numberformat}
                            onChange={handleChange}
                            name="weight"
                            id="weight"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="specialpeculiarities"
                            label="Señas particularidades"
                            multiline
                            name='specialpeculiarities'
                            value={values.specialpeculiarities}
                            onChange={handleChange}
                            className='addpetform__textfield'
                        />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default AddPetForm;