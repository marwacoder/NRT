import React from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { Button, Paper, CssBaseline, makeStyles, Link, Typography, Stepper, Step, StepLabel } from '../../mui';
import { PaystackButton } from 'react-paystack';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        SetInsSOFT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  payStackButton: {
    width: "100%",
    height: 35,
    marginBottom: 10
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));




export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const publicKey = "pk_test_bf99abedb1efc78dc364d4c056b986c1e67470b2"
  const amount = 100000
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const steps = ['Contact address', 'Payment details', 'Review your Booking'];

const getStepContent=(step)=> {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm name={name} email={email} phone={phone}
        setEmail={setEmail} setName={setName} setPhone={setPhone}/>;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => handleNext(),
    onClose: ()=> ""
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main >
        <Paper  elevation={0}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                  {getStepContent(activeStep)}
                  {activeStep ===1 && <PaystackButton className={classes.payStackButton} {...componentProps}/>}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                    )}
                   
                  { activeStep !== 1 && <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNext}
                    className={classes.button}
                    >
                      
                     Next
                  </Button>}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
