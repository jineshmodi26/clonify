import { Box } from '@mui/material';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, defs, linearGradient, stop } from 'recharts';

const data = [
    {
        name: 'Sun',
        Facebook: 200,
        Instagram: 150
    },
    {
        name: 'Mon',
        Facebook: 190,
        Instagram: 280
    },
    {
        name: 'Tue',
        Facebook: 320,
        Instagram: 200
    },
    {
        name: 'Wed',
        Facebook: 400,
        Instagram: 140
    },
    {
        name: 'Thu',
        Facebook: 190,
        Instagram: 250
    },
    {
        name: 'Fri',
        Facebook: 300,
        Instagram: 50
    },
    {
        name: 'Sat',
        Facebook: 130,
        Instagram: 250
    }
];

const classes = {
    root: {
        margin: "20px",
        marginTop: "10px",
        padding: "10px",
    },
    chart : {
        height: { xl : "230px", xs : "150px"}
    },
    dotContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
        alignItems: "center"
    },
    dot: {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        marginRight: '10px',
    },
}

export default class Chart extends PureComponent {

    render() {
        return (
            <Box sx={classes.root}>
                <Box sx={classes.chart}>
                    <ResponsiveContainer>
                        <AreaChart
                            data={data}
                            margin={{
                                top: 0,
                                right: 0,
                                left: -30,
                                bottom: 0,
                            }}
                        >
                            <defs>
                            {/* Define the linear gradient */}
                            <linearGradient id="colorGradient1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="50%" stopColor="#20C997" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#20C997" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorGradient2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="50%" stopColor="#679CF6" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#679CF6" stopOpacity={0} />
                            </linearGradient>
                            </defs>
                            <XAxis dataKey="name" style={{ fontSize: "10px" }} axisLine={false} tickLine={false}/>
                            <YAxis style={{ fontSize: "10px", margin: 0 }} tick={[0, 100, 200, 300]} domain={[0, 'dataMax']} axisLine={false} tickLine={false}/>
                            <Tooltip label="Hello" />
                            <Area type="monotone" dataKey="Facebook" stroke="#20C997" strokeWidth={2} fill="url(#colorGradient1)" />
                            <Area type="monotone" dataKey="Instagram" stroke="#679CF6" strokeWidth={2} fill="url(#colorGradient2)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </Box>
                <Box sx={classes.dotContainer}>
                    <Box sx={{ ...classes.dot, backgroundColor: '#679CF6' }} />
                    <span style={{marginRight: "20px", fontSize: "14px", color: "#5F6980"}}>Instagram</span>
                    <Box sx={{ ...classes.dot, backgroundColor: '#20C997' }} />
                    <span style={{marginRight: "20px", fontSize: "14px", color: "#5F6980"}}>Facebook</span>
                </Box>
            </Box>
        );
    }
}
