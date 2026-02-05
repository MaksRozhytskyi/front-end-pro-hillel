import React from 'react';
import {useSelector} from 'react-redux';
import {Box, Typography} from '@mui/material';

function HotelsPage() {
    const {list: hotels = []} = useSelector((state) => state.hotels || {list: []});
    const {destination} = useSelector((state) => state.search || {});
    const {list: destinations = []} = useSelector((state) => state.destination || {list: []});

    const selectedDestination = destinations.find(d => String(d.value) === String(destination));
    const selectedCity = selectedDestination?.label;

    const filteredHotels = selectedCity ? hotels.filter(hotel => hotel.city === selectedCity) : hotels;

    return (<Box sx={{maxWidth: 1100, mx: 'auto', mt: 4}}>
        <Typography variant="h5" sx={{mb: 2}}>
            Hotels {selectedCity && `in ${selectedCity}`}
        </Typography>

        {filteredHotels.length === 0 && (<Typography variant="body2">
            No hotels found. Please adjust your search.
        </Typography>)}

        {filteredHotels.length > 0 && (<Box
            sx={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, '@media (max-width: 1024px)': {
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }, '@media (max-width: 600px)': {
                    gridTemplateColumns: '1fr',
                },
            }}
        >
            {filteredHotels.map((hotel) => (<Box
                key={hotel.id}
                sx={{
                    border: '1px solid #e0e0e0',
                    borderRadius: 1,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                }}
            >
                <Box
                    sx={{
                        height: 140,
                        backgroundColor: '#e0e0e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 14,
                        color: '#888',
                    }}
                >
                    140 x 140
                </Box>

                <Box sx={{p: 2}}>
                    <Typography variant="subtitle1" sx={{mb: 1}}>
                        {hotel.name}
                    </Typography>
                    <Typography variant="body2">
                        address: {hotel.address}
                    </Typography>
                    <Typography variant="body2">
                        city: {hotel.city}, state: {hotel.state}, country code:{' '}
                        {hotel.country_code}
                    </Typography>
                </Box>
            </Box>))}
        </Box>)}
    </Box>);
}

export default HotelsPage;
