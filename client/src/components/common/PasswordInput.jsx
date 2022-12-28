import React from 'react';
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordInput = React.forwardRef((props, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <FormControl
            variant="outlined"
            fullWidth={props.fullWidth}
            size={props.size}
            sx={props.sx}
        >
            <InputLabel>{props.label}</InputLabel>
            <OutlinedInput
                label={props.label}
                value={props.value}
                onChange={(event) => props.onChange(event.target.value)}
                error={props.error}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <FormHelperText error>{props.helperText}</FormHelperText>
        </FormControl>
    );
});

export default PasswordInput;
