"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Button } from '@mui/material';
import { StepIconProps } from '@mui/material/StepIcon';
import Icon from './Icon';
import Buttons from './Buttons';
import CustomerAddress from '../Checkout/CustomerAddress';
import DeliveryDetails from '../Checkout/DeliveryDetails';
import Payment from '../Checkout/Payment';
import { CheckoutModal } from "swypt-checkout";
import "swypt-checkout/dist/styles.css";
import ModalComponent from './ModalComponent';
import MpesaPaymentModal from '../Checkout/MpesaPaymentModal';
import BankPayment from '../Checkout/BankPayment';
import { useSelector } from 'react-redux';
import { useAppSelector } from '@/lib/hooks';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 136deg, #D9D9D9 0%, #860ECF 70%, #2A0540 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 136deg, #D9D9D9 0%, #860ECF 70%, #2A0540 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, #D9D9D9 0%, #860ECF 70%, #2A0540 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, #D9D9D9 0%, #860ECF 70%, #2A0540 100%)',
  }),
  [theme.breakpoints.down('sm')]: {
    width: 35,
    height: 35,
  },
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <Icon icon='mdi:address-marker-outline' />,
    2: <Icon icon='carbon:delivery' />,
    3: <Icon icon='tdesign:money' />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ['Customer Address', 'Delivery Address', 'Payment Method'];


export default function StepperComponent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedPaymentValue,setSelectedPaymentValue] = React.useState<string>("option1");
  const [open,setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const total = useAppSelector((state)=>state.cart.total);

  const handleNext = () => {
   if(activeStep === 2){
    if(selectedPaymentValue === "option1"){
      openSwyptCheckout();
    }else {
       handleOpen();
    }
    
   }else{
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
   }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <CustomerAddress />;
      case 1:
        return <DeliveryDetails />;
      case 2:
        return <Payment selectedPaymentValue={selectedPaymentValue}  setSelectedPaymentValue={setSelectedPaymentValue} />;
      default:
        return <div>Unknown Step</div>;
    }
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openSwyptCheckout = ()=>{
     setIsModalOpen(true)
  }

  return (
    <Stack sx={{ width: '100%',paddingTop:'20px'}} spacing={4}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon} ></StepLabel>
          </Step>
        ))}
      </Stepper>
      {renderStepContent(activeStep)}
      <div className='flex justify-between md:justify-end md:gap-10'>

        <Buttons
        buttonText='Back'
        onClick={activeStep=== 0 ? undefined : handleBack}
        className={activeStep === 0 ? 'text-grey_102 px-5 md:px-8 w-full' :'text-purple_01 px-5 md:px-8 w-full'}
        /> 
        <Buttons
        buttonText={activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
        onClick={handleNext}
        className='bg-black_101 dark:bg-purple_02 text-white_101 px-5 md:px-8 w-full'
        />         
      </div>
     <div className='z-[1000]'>
     <CheckoutModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      headerBackgroundColor="#2A0540" 
      businessName="Waki"
      merchantName="Waki"
      merchantAddress="0x6d19a24D93379D1bA58d28884fFBBEf1bc145387" 
      amount={total}
    />
     </div>
     <div>
      <ModalComponent   open={open} handleClose={handleClose}>
<div>
  {/* {selectedPaymentValue && selectedPaymentValue === "option1" ? 
  <MpesaPaymentModal />
:
  <BankPayment />
} */}
 {selectedPaymentValue && selectedPaymentValue === "option2" ? 
  <BankPayment />
:
null
}
</div>
      </ModalComponent>
     </div>
    </Stack>
  );
}

