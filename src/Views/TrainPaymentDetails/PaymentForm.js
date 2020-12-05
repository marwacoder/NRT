import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import {
    makeStyles
} from '../../mui'





const PaymentForm = (props) => {

  const {setName, setEmail, setPhone, name, email, phone} = props
  


  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField 
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name" label="Name" fullWidth />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            value={email}
            variant="outlined"
            required
            id="email"
            label="Email"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField required id="phone" variant="outlined"
            value={phone}
            label="phone" onChange={(e) => setPhone(e.target.value)} fullWidth />
        </Grid>
         <Grid item xs={12} md={6}>
          
        </Grid> 
        
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;