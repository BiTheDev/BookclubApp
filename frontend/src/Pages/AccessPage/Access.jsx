import React, { useState } from 'react';
import { Tab, Tabs, AppBar, Box, Typography } from '@mui/material';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

const Access = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1, width: '100%', backgroundColor: '#fafafa' }}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab label="Login" />
                    <Tab label="Register" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Login />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Register />
            </TabPanel>
        </Box>
    );
};

// TabPanel component to display content based on the selected tab
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default Access;
