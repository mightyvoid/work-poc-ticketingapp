import React, { Component } from 'react';
import Button from '@mui/material/Button';
import { Avatar, TextField, Typography,Link} from '@mui/material';
import { Grid,Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme } from '@mui/material/styles'
import BottomBar from '../../../commons/footer/footer';


class SignUpView extends Component {
    render() {
        const theme = createTheme({
            typography:{
                fontFamily:'roboto'
            }
        })

        const paperStyle = {padding:20,height:'70vh',margin:'20px auto',width:'30%'}
        return (
            <>
            <Typography variant='h4' align='center' margin={'3%'}>Hello, just a click away from joining us.</Typography>
            
            <Grid>
                <Paper elevation='15' style={paperStyle}>
                <Grid align='center' >
                <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'secondary.main',p: 2}} >SignUp form</Typography>
                <Avatar sx={{ p: 2 }}><PersonIcon /></Avatar>
                <TextField sx={{ m: 2 }} variant="outlined" label="User_ID" placeholder='Username of choice'></TextField><br/>
                <TextField sx={{ m: 2 }} variant="outlined" label="Password" placeholder='New password'></TextField><br/>
                <Button sx={{ m: 2 }} variant="contained" color="secondary">Register</Button>
                <Typography sx={{ m: 2 }}>
                    <Link href='/'>Go Back to Login</Link>
                </Typography>
                <Typography sx={{ m: 2 }}>Register yourself with a userid and password and hit register.</Typography>
                </Grid>
                </Paper>
                
            </Grid>
            <BottomBar/>
            </>

        );
    }
}

export default SignUpView;