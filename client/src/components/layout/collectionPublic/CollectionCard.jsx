import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    LinearProgress,
    Typography,
} from '@mui/material';

function CollectionCard({
    collectionName,
    collectionDescription,
    currentSum,
    goalSum,
}) {
    return (
        <Card sx={{ maxWidth: 350, ml: 4, mt: 4 }}>
            <CardActionArea
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <CardHeader sx={{ height: 1 }} />
                <CardMedia
                    component="img"
                    height="140"
                    image="https://savelife.in.ua/wp-content/uploads/2022/12/10-%D0%9C%D0%90%D0%91%D1%80-1024x640.jpg"
                    sx={{ width: '90%' }}
                />
                <CardContent>
                    <Typography variant="h5">{collectionName}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {collectionDescription}
                    </Typography>

                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 4 }}>
                            <LinearProgress
                                variant="buffer"
                                value={50}
                                valueBuffer={100}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>Collected</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Remained</Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography variant="h6">
                                {currentSum} грн
                            </Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant="h6">{goalSum} грн</Typography>
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                    >
                        Make Donation
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CollectionCard;
