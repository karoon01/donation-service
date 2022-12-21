import React from 'react';
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

function PasswordInput({fullWidth, label, size, sx}) {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <FormControl
            variant='outlined'
            fullWidth={fullWidth}
            size={size}
            sx={sx}
        >
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <OutlinedInput
                id='outlined-adornment-password'
                type={showPassword ? 'text' : 'password'}
                label={label}
                endAdornment={
                <InputAdornment position='end'>
                    <IconButton
                        onClick={handleClickShowPassword}
                        edge='end'
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
            />
        </FormControl>
    );
}

export default PasswordInput;