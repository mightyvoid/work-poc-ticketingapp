import React, { Component } from 'react';
import Button from '@mui/material/Button';
import { Avatar, TextField, Typography,Link} from '@mui/material';
import { Grid,Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles,ThemeProvider,createMuiTheme } from '@mui/material';
import { createTheme } from '@mui/material/styles'
import BottomBar from '../../../commons/footer/footer';



class LoginView extends Component {
    render() {
        const theme = createTheme({
            typography:{
                fontFamily:'roboto'
            }
        })

        const paperStyle = {padding:20,height:'70vh',margin:'20px auto',width:'30%'}
        return (
            <>
            <Typography variant='h3' align='center' margin={'3%'}>Welcome to TicketBookingApp</Typography>
            
            <Grid>
                <Paper elevation='15' style={paperStyle}>
                <Grid align='center' >
                <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'primary.main',p: 2}} >Login to continue</Typography>
                <Avatar sx={{ p: 2 }}><PersonIcon /></Avatar>
                <TextField sx={{ m: 2 }} variant="outlined" label="User_ID" placeholder='user101'></TextField><br/>
                <TextField sx={{ m: 2 }} variant="outlined" label="Password"></TextField><br/>
                <Button sx={{ m: 2 }} variant="contained" color="secondary">Login</Button>
                <Typography sx={{ m: 2 }}>
                    <Link href='/signup'>New user? Signup here.</Link>
                </Typography>
                </Grid>
                </Paper>
                
            </Grid>
            <BottomBar/>
            </>

        );
    }
}

export default LoginView;