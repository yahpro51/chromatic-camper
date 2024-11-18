import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import video1 from "../mainpage/assets/photo1.svg";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
 transform: 'translate(-50%, -50%)',
  
  bgcolor: 'background.paper',
  boxShadow: 24,
p: 4,

};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><homeVideo>
            <img src={video1} alt="" />
          </homeVideo></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          New Best Luxury Campervan has an Incredible Bathroom and 9-speed Automatic Transmission Karmann 2024
          </Typography>
          <iframe width="1058" height="595" src="https://www.youtube.com/embed/WwPyPlX0hJA" title="New Best Luxury Campervan has an Incredible Bathroom and 9-speed Automatic Transmission Karmann 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal>

    </div>
  );
}
