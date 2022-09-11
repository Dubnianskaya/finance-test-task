import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Navigation } from '../Navigation';
import { ModalTitle } from './Modal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  bgcolor: '#002469',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function FormModal({open, setOpen}) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <ModalTitle>Register or Login to save favorits</ModalTitle>
            <Navigation />
        </Box>
      </Modal>
    </div>
  );
}

FormModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

