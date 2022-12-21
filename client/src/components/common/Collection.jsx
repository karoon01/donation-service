import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    createTheme, Grid, LinearProgress,
    ThemeProvider,
    Typography
} from "@mui/material";

function Collection() {
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Hind Siliguri',
                'sans-serif'
            ].join(','),
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{maxWidth: 350, ml: 4, mt: 4,}}>
                <CardActionArea
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <CardHeader sx={{height: 1}}/>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://savelife.in.ua/wp-content/uploads/2022/12/10-%D0%9C%D0%90%D0%91%D1%80-1024x640.jpg"
                        alt="green iguana"
                        sx={{width: '90%'}}
                    />
                    <CardContent>
                        <Typography variant='h5'>
                            Collection
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Some description for this collection
                            Bla-bla-bla-bla
                        </Typography>

                        <Grid container>
                            <Grid item xs={12} sx={{mt: 4}}>
                                <LinearProgress variant="buffer" value={50} valueBuffer={100}/>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography>Collected</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>Remained</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant='h6'>900000 грн</Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography variant='h6'>1800000 грн</Typography>
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 2}}
                        >
                            Make Donation
                        </Button>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
}

export default Collection;