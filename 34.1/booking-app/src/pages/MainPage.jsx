import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Field} from 'react-final-form';
import {
    Box, Button, MenuItem, Select, TextField, Typography,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {fetchHotelsRequest} from '../store/hotelsSlice';
import {fetchDestinationsRequest} from '../store/destinationSlice';

function MainPage() {
    const dispatch = useDispatch();

    const {
        list: destinations = [], loading: destinationsLoading
    } = useSelector((state) => state.destination || {list: [], loading: false});

    useEffect(() => {
        dispatch(fetchDestinationsRequest());
    }, [dispatch]);

    const onSubmit = (values) => {
        dispatch(fetchHotelsRequest(values));
    };

    return (<Box sx={{maxWidth: 1100, mx: 'auto', mt: 4}}>
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => (<form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap',
                    }}
                >
                    <Box
                        sx={{
                            flex: 1, display: 'flex', gap: 1, flexWrap: 'wrap',
                        }}
                    >
                        <Box sx={{minWidth: 180, flex: '1 1 180px'}}>
                            <Field name="destination">
                                {({input}) => (<Select
                                    fullWidth
                                    displayEmpty
                                    {...input}
                                    sx={{backgroundColor: '#fff', height: 40}}
                                >
                                    <MenuItem value="">
                                        <em>
                                            {destinationsLoading ? 'Loading...' : 'Destination'}
                                        </em>
                                    </MenuItem>

                                    {destinations.map((d) => (<MenuItem key={d.id} value={d.value}>
                                        {d.label}
                                    </MenuItem>))}
                                </Select>)}
                            </Field>
                        </Box>

                        <Box sx={{minWidth: 140, flex: '1 1 140px'}}>
                            <Field name="checkIn">
                                {({input}) => (<TextField
                                    fullWidth
                                    placeholder="Check in"
                                    sx={{backgroundColor: '#fff'}}
                                    InputProps={{
                                        endAdornment: (<CalendarTodayIcon
                                            fontSize="small"
                                            sx={{color: '#9e9e9e'}}
                                        />), style: {height: 40, paddingRight: 8},
                                    }}
                                    {...input}
                                />)}
                            </Field>
                        </Box>

                        <Box sx={{minWidth: 140, flex: '1 1 140px'}}>
                            <Field name="checkOut">
                                {({input}) => (<TextField
                                    fullWidth
                                    placeholder="Check out"
                                    sx={{backgroundColor: '#fff'}}
                                    InputProps={{
                                        endAdornment: (<CalendarTodayIcon
                                            fontSize="small"
                                            sx={{color: '#9e9e9e'}}
                                        />), style: {height: 40, paddingRight: 8},
                                    }}
                                    {...input}
                                />)}
                            </Field>
                        </Box>

                        <Box sx={{width: 110}}>
                            <Field name="adults">
                                {({input}) => (<TextField
                                    type="number"
                                    placeholder="Adults"
                                    sx={{backgroundColor: '#fff', width: '100%'}}
                                    inputProps={{
                                        style: {height: 40, padding: '0 12px'},
                                    }}
                                    {...input}
                                />)}
                            </Field>
                        </Box>

                        <Box sx={{width: 110}}>
                            <Field name="children">
                                {({input}) => (<TextField
                                    type="number"
                                    placeholder="Children"
                                    sx={{backgroundColor: '#fff', width: '100%'}}
                                    inputProps={{
                                        style: {height: 40, padding: '0 12px'},
                                    }}
                                    {...input}
                                />)}
                            </Field>
                        </Box>
                    </Box>

                    <Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color="warning"
                            sx={{
                                px: 4,
                                height: 40,
                                boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                                textTransform: 'uppercase',
                                fontSize: 12,
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </form>)}
        />

        <Box sx={{mt: 6}}>
            <Typography variant="h4" component="h1">
                Travel With <span style={{color: '#f7941d'}}>Booking</span>
            </Typography>
            <Typography variant="body2" sx={{mt: 2, maxWidth: 750}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </Typography>
        </Box>
    </Box>);
}

export default MainPage;
