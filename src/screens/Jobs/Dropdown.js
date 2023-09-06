import React from 'react'
import { Box, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

export const Dropdown = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', gap: { xs: 4, md: 8 }, mt: 5 }}>
                <Box sx={{ width: { xs: '100%', md: '20%' } }}>
                    <FormControl fullWidth size='small'>
                        <InputLabel id="type">Sort by</InputLabel>
                        <Select labelId="type"
                            id="type"
                            label="Select your car type"
                        >
                            <MenuItem value={'Relevance'}>Relevance</MenuItem>
                            <MenuItem value={'Inclusive'}>Inclusive</MenuItem>
                            <MenuItem value={'Starts With'}>Starts With</MenuItem>
                            <MenuItem value={'Contains'}>Contains</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '20%' } }}>
                    <FormControl fullWidth size='small'>
                        <InputLabel id="type">Job Type</InputLabel>
                        <Select labelId="type"
                            id="type"
                            label="Select your car type"
                        >
                            <MenuItem value={'Full-time'}>Full-time</MenuItem>
                            <MenuItem value={'Part-time'}>Part-time</MenuItem>
                            <MenuItem value={'Remote'}>Remote</MenuItem>
                            <MenuItem value={'Contract'}>Contract</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '20%' } }}>
                    <FormControl fullWidth size='small'>
                        <InputLabel id="type">Job Level</InputLabel>
                        <Select labelId="type"
                            id="type"
                            label="Select your car type"
                        >
                            <MenuItem value={'Senior'}>Senior</MenuItem>
                            <MenuItem value={'Beginner'}>Beginner</MenuItem>
                            <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
                            <MenuItem value={'Advocate'}>Advocate</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Button variant='contained'
                    sx={{
                        ml: 0,
                        width: { xs: 'auto', md: '20%' },
                        fontSize: '16px',
                        fontWeight: 700,
                        fontFamily: 'Rubik'
                    }}>
                    Filter
                </Button>
            </Box>
        </div>
    )
}
