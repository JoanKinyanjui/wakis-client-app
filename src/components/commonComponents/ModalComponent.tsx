import { Box, Modal } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex';
import React, { ReactNode } from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    borderRadius:"20px",
    border:'1px solid transparent',
    outline:"none",
  };

type modalProps ={
    children : ReactNode;
    open:boolean;
    handleClose: () =>void;
}

function ModalComponent({children ,open, handleClose}:modalProps) {
  return (
    <div>
 <Modal
    aria-labelledby="keep-mounted-modal-title"
    aria-describedby="keep-mounted-modal-description"
    open={open}
    onClose={handleClose}
    >
<Box sx={style}>
    <div className='w-[290px] xs:w-[350px] sm:w-[400px] md:w-[500px]  mx-auto bg-grey_102 rounded-[20px] md:rounded-[20px] p-5 md:p-8'>
        {children}
    </div>
</Box>
    </Modal>
    </div>
  )
}

export default ModalComponent
