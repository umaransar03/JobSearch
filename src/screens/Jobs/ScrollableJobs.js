import React from 'react'
import { Box } from '@mui/material'
import { Jobslist } from './Items';
import JobsCard from './JobsCard';

export const ScrollableJobs = () => {

    const cardWidth = 300;
    const containerWidth = cardWidth * Jobslist.length;


    return (
        <div>
            <Box sx={{
                mt: 3,
            }}>
                <Box
                    // display="grid"
                    // gridTemplateColumns="repeat(4,minmax(0,2fr))"
                    // gridGap={8}
                    sx={{
                        display: 'flex',
                        position: 'relative',
                        width: '100%',
                        overflowX: 'scroll',
                        scrollbarWidth: 'none', // Hide scrollbar for a cleaner look
                    }}>
                    <div style={{ display: 'flex', minWidth: containerWidth }}>
                        {Jobslist.map(project => (
                            <div key={project.id} style={{ minWidth: cardWidth, paddingRight: '8px' }}>
                                <JobsCard
                                    key={project.id}
                                    title={project.title}
                                    desc={project.description}
                                    location={project.location}
                                />
                            </div>
                        ))}
                    </div>
                </Box>
            </Box>
        </div>
    )
}
