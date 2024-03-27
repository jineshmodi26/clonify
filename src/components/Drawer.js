import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import logo from "../assets/logo.png"
import NestedList from './List';
import dashboard_logo from "../assets/Vector.png"
import folder_logo from "../assets/Folder.png"
import user_logo from "../assets/user.png"
import app_logo from "../assets/layoutgrid.png"
import email_logo from "../assets/email.png"
import support_logo from "../assets/Support.png"
import PrimarySearchAppBar from './Appbar';
import bold_logo from "../assets/bolt.png";
import { Button } from '@mui/base';
import { Grid } from '@mui/material';
import LongMenu from './Menu';
import Chart from './Chart';
import StickyHeadTable from './Table';
import setting_logo from "../assets/Settings.png"
import back_logo from "../assets/back.png"
import globe_logo from "../assets/globe.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import profile_logo from "../assets/Avatar.png"
import TextField from '@mui/material/TextField';

const drawerWidth = 240;

export default function MyDrawer() {

  const isMobile = useMediaQuery('(max-width:600px)');

    const listData1 = [
        {
            main: "Dashboard",
            logo: dashboard_logo,
            sub: [
                {
                    name: "Analytics"
                },
                {
                    name: "Finance"
                },
                {
                    name: "Job Board"
                }
            ]
        },
        {
            main: "Messages",
            logo: email_logo,
            sub: [
                {
                    name: "Analytics"
                }
            ]
        },
        {
            main: "Friends",
            logo: user_logo,
            sub: [
                {
                    name: "Analytics"
                }
            ]
        },
        {
            main: "Apps",
            logo: app_logo,
            sub: [
                {
                    name: "Analytics"
                }
            ]
        }
    ]

    const listData2 = [
      {
          main: "Help Center",
          logo: support_logo,
          sub: [
              {
                  name: "Contact"
              }
          ]
      },
      {
          main: "File Manager",
          logo: folder_logo,
          sub: [
              {
                  name: "Folders"
              }
          ]
      }
  ]

  return (
    <>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {!isMobile && (<PrimarySearchAppBar drawerWidth={drawerWidth}/>)}
      {!isMobile && (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
           <img src={logo}/>
        </Toolbar>
        <Toolbar>
            <Typography sx={{
            textTransform : "uppercase",
            letterSpacing: "2.5px",
            fontSize: "12px",
            color: "#9D9FA1",
            fontWeight: "600",
            fontFamily: "inter"
        }}>Dashboard</Typography>
        </Toolbar>
        <NestedList data={listData1}/>
        <Toolbar>
            <Typography sx={{
            textTransform : "uppercase",
            letterSpacing: "2.5px",
            fontSize: "12px",
            color: "#9D9FA1",
            fontWeight: "600",
            fontFamily: "inter"
        }}>PAGES</Typography>
        </Toolbar>
        <NestedList data={listData2}/>
        <Box sx={{marginTop: "auto"}}>
          <Divider/>
          <Box sx={{display: "flex", justifyContent: "space-evenly", padding: "10px"}}>
            <img src={setting_logo}/>
            <img src={back_logo}/>
            <img src={globe_logo}/>
          </Box>
        </Box>
      </Drawer>
      )}
      <Box
        component="main"
        sx={{ bgcolor: '#f0f2f4', p: 3, flexGrow: 1}}
      >
        {!isMobile && <Toolbar />}
        {isMobile && (
        <><Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <img src={logo}/>
          <img src={profile_logo}/>
          </Box></>
      )}

          {isMobile && <>
            <TextField fullWidth label="Search..." id="fullWidth" sx={{marginTop: "10px", marginBottom: "10px"}}/>
          </>}

        <Box sx={{color: "white", backgroundColor: "#282828", p: 3, borderRadius: "16px", display: !isMobile ? "flex" : "block", justifyContent: "space-between", alignItems: "center", marginTop: isMobile ? "10px" : null}}>
          <Box>
            <Typography style={{
              fontSize: "28px",
              fontWeight: "600",
              fontFamily: "Inter",
              textAlign : isMobile ? "Center" : null
            }}>Unlock Premium Stats</Typography>
            <Typography style={{
              fontSize: "14px",
              fontWeight: "400",
              marginTop: "8px",
              fontFamily: "Inter",
              textAlign : isMobile ? "Center" : null
            }}>Get up to 10TB of storage for a limited time</Typography>
          </Box>
          <Box>
            <Button style={{
              borderRadius: "39px",
              padding: "9px 24px 9px 24px",
              display: "flex",
              alignItems: "center",
              color: "#282828",
              fontWeight: "600",
              fontFamily: "Inter",
              backgroundColor: "white",
              margin: isMobile? "auto" : null,
              marginTop: isMobile ? "10px" : null
            }}
            ><img src={bold_logo} style={{marginRight: "5px"}}/>Upgrade</Button>
            </Box>          
        </Box>
        <Grid container sx={{
          marginTop: "32px"
        }} columnSpacing={4}>
            <Grid item xs={12} lg={3} xl={3}>
              <Box sx={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                minWidth: "262px",
                boxShadow: "0px 1px 10px #0000000F",
                marginBottom: isMobile ? "20px" : "0px"
              }}>
                <Typography sx={{
                  fontSize: "16px",
                  color: "#5F6980",
                  fontFamily: "Inter"
                }}>Revenue</Typography>
                <Typography sx={{
                  fontSize: "26px",
                  fontWeight: "600",
                  color: "#282828",
                  fontFamily: "Inter"
                }}>$56,945</Typography>
                <Typography sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                  color: "#9D9FA1",
                  marginTop: "32px",
                  wordSpacing: "4px"
                }}><span style={{
                  backgroundColor: "#DCFFF5",
                  borderRadius: "100px",
                  padding: "2px 10px 2px 10px",
                  color: "#20C997"
                }}>+45%</span> From 4.6%</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={3} xl={3}>
              <Box sx={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                minWidth: "262px",
                boxShadow: "0px 1px 10px #0000000F",
                marginBottom: isMobile ? "20px" : "0px"
              }}>
                <Typography sx={{
                  fontSize: "16px",
                  color: "#5F6980",
                  fontFamily: "Inter"
                }}>Users</Typography>
                <Typography sx={{
                  fontSize: "26px",
                  fontWeight: "600",
                  color: "#282828",
                  fontFamily: "Inter"
                }}>76.8%</Typography>
                <Typography sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                  color: "#9D9FA1",
                  marginTop: "32px",
                  wordSpacing: "4px"
                }}><span style={{
                  backgroundColor: "#FFE0E3",
                  borderRadius: "100px",
                  padding: "2px 10px 2px 10px",
                  color: "#DC3545"
                }}>-1.7%</span> From 4.6%</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={3} xl={3}>
              <Box sx={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                minWidth: "262px",
                boxShadow: "0px 1px 10px #0000000F",
                marginBottom: isMobile ? "20px" : "0px"
              }}>
                <Typography sx={{
                  fontSize: "16px",
                  color: "#5F6980",
                  fontFamily: "Inter"
                }}>New Signups</Typography>
                <Typography sx={{
                  fontSize: "26px",
                  fontWeight: "600",
                  color: "#282828",
                  fontFamily: "Inter"
                }}>116</Typography>
                <Typography sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                  color: "#9D9FA1",
                  marginTop: "32px",
                  wordSpacing: "4px"
                }}><span style={{
                  backgroundColor: "#F2F4F7",
                  borderRadius: "100px",
                  padding: "2px 10px 2px 10px",
                  color: "#5F6980"
                }}>0.00</span></Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={3} xl={3}>
              <Box sx={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                minWidth: "262px",
                boxShadow: "0px 1px 10px #0000000F",
              }}>
                <Typography sx={{
                  fontSize: "16px",
                  color: "#5F6980",
                  fontFamily: "Inter"
                }}>Retention</Typography>
                <Typography sx={{
                  fontSize: "26px",
                  fontWeight: "600",
                  color: "#282828",
                  fontFamily: "Inter"
                }}>12.67%</Typography>
                <Typography sx={{
                  fontSize: "12px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                  color: "#9D9FA1",
                  marginTop: "32px",
                  wordSpacing: "4px"
                }}><span style={{
                  backgroundColor: "#DCFFF5",
                  borderRadius: "100px",
                  padding: "2px 10px 2px 10px",
                  color: "#20C997"
                }}>+0.6%</span> From 4.6%</Typography>
              </Box>
            </Grid>
        </Grid>
        <Box sx={{
          marginTop: "32px",
          borderRadius: "12px",
          backgroundColor: "white",
          padding: "0px 0px 24px 0px",
          width: isMobile ? "270px" : "100%"
        }}>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <Typography sx={{
              fontSize: "18px",
              fontWeight: "600",
              fontFmily: "Inter",
              // position: "relative",
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingLeft: "24px"
            }}>Performance</Typography>
            <LongMenu />
          </Box>
          <Divider />
          <Chart />
        </Box>
        <Box sx={{
          marginTop: "32px",
          borderRadius: "12px",
          backgroundColor: "white",
          padding: "0px 0px 0px 0px",
          width: isMobile ? "270px" : "100%"
        }}>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <Typography sx={{
              fontSize: "18px",
              fontWeight: "600",
              fontFmily: "Inter",
              // position: "relative",
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingLeft: "24px"
            }}>Installed Apps</Typography>
            <LongMenu />
          </Box>
          <Divider />
          <StickyHeadTable />
        </Box>
      </Box>
    </Box>
    </>
  );
}
