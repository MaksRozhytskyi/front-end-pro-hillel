import React from 'react';
import {Box, Typography} from '@mui/material';

function AboutPage() {
    return (<Box sx={{maxWidth: 1100, mx: 'auto', mt: 4}}>
        <Typography variant="h5" sx={{mb: 2}}>
            About
        </Typography>

        <Typography variant="body2" sx={{maxWidth: 800, lineHeight: 1.6}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
        </Typography>
    </Box>);
}

export default AboutPage;
