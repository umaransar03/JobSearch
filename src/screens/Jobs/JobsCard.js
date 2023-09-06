import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function JobsCard(props) {
    return (
        <Card sx={{ maxWidth: 280, py: 3.5, px: 2, m: 2, }}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div"
                    sx={{ fontFamily: 'Rubik', fontWeight: 500 }}
                >
                    {props.title}
                </Typography>
                <Box sx={{display: 'flex'}}>
                    <LocationOnIcon sx={{ height: '20px', mr: 0, pt: 0, fontSize: '20px', bgcolor: '' }} />
                    <Typography color="text.disabled">
                        {props.location}
                    </Typography>
                </Box>
                <hr style={{marginTop: '20px', marginBottom: '20px'}} />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontFamily: 'Rubik', fontWeight: 300 }}>
                    {props.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth size="medium" variant='contained'>Apply Now</Button>
            </CardActions>
        </Card>
    );
}
