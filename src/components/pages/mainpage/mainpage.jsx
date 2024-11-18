import React from "react";
import {
  Home1,
  Home2,
  Home2videos,
  Home3,
  Home3left,
  Home3leftcamper,
  Home3leftright,
  Home3lefttexts,
  Home3photo,
  Home3right,
  Hometile,
  Mainpagecon,
} from "./style";
import video1 from "./assets/video1.svg";
import video2 from "./assets/video2.svg";
import video3 from "./assets/video3.svg";
import video4 from "./assets/video4.svg";
import video5 from "./assets/video5.svg";
import video6 from "./assets/video6.svg";
import video7 from "./assets/video7.svg";
import photo1 from "./assets/photo1.svg"
import photo2 from "./assets/photo2.svg"
import photo3 from "./assets/photo3.svg"
import photo4 from "./assets/photo4.svg"
import photo5 from "./assets/photo5.svg"
import photo6 from "./assets/photo6.svg"
import Footercomponent from "../motor/footer";
import Carouselcomponent from "./carousel";
import Carousel2component from "./carousel2";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal1 from '@mui/material/Modal';
import Modal2 from '@mui/material/Modal';
import Modal3 from '@mui/material/Modal';
import Modal4 from '@mui/material/Modal';
import Modal5 from '@mui/material/Modal';
import Modal6 from '@mui/material/Modal';
import Modal7 from '@mui/material/Modal';
import Modal8 from '@mui/material/Modal';

const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
 transform: 'translate(-50%, -50%)',
borderRadius:'20px',
  bgcolor: 'background.paper',
  boxShadow: 24,
p: 4,
};
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
 transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',
  boxShadow: 24,
p: 4,
borderRadius:'20px',
};
const style3 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
 transform: 'translate(-50%, -50%)',
 borderRadius:'20px',
  bgcolor: 'background.paper',
  boxShadow: 24,
p: 4,
};
const style4 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
 transform: 'translate(-50%, -50%)',
 borderRadius:'20px',
  bgcolor: 'background.paper',
  boxShadow: 24,
p: 4,
};
const style5 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
 transform: 'translate(-50%, -50%)',
 borderRadius:'20px',
  bgcolor: 'background.paper',
  boxShadow: 24,
p: 4,
};
const style6 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
 transform: 'translate(-50%, -50%)',
 borderRadius:'20px',
  bgcolor: 'background.paper',
  boxShadow: 24,
p: 4,
};
const style7 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
 transform: 'translate(-50%, -50%)',
 borderRadius:'20px',
  bgcolor: 'background.paper',
  boxShadow: 24,
p: 4,
};
const style8 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
 transform: 'translate(-50%, -50%)',
 borderRadius:'20px',
  bgcolor: 'background.paper',
  boxShadow: 24,
p: 4,
};

const Mainpagecomponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);
  const [open5, setOpen5] = React.useState(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);
  const [open6, setOpen6] = React.useState(false);
  const handleOpen6 = () => setOpen6(true);
  const handleClose6 = () => setOpen6(false);
  const [open7, setOpen7] = React.useState(false);
  const handleOpen7 = () => setOpen7(true);
  const handleClose7 = () => setOpen7(false);
  
  return (
    <Mainpagecon>
      <Carouselcomponent/>
      <Home1>
        <Hometile>Recommend</Hometile>
        <Carousel2component/>
      </Home1>
      <Home2>
        <Hometile>
          Videos <div></div>
        </Hometile>
        <Home2videos>
    <div>
      <Button onClick={handleOpen}><homeVideo>
            <img src={video1} alt="" />
          </homeVideo></Button>
      <Modal1
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          New Best Luxury Campervan has an Incredible Bathroom and 9-speed Automatic Transmission Karmann 2024
          </Typography>
          <iframe width="790" height="360" src="https://www.youtube.com/embed/WwPyPlX0hJA" title="New Best Luxury Campervan has an Incredible Bathroom and 9-speed Automatic Transmission Karmann 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal1>
    </div>
    <div>
      <Button onClick={handleOpen1}><homeVideo>
            <img src={video1} alt="" />
          </homeVideo></Button>
      <Modal2
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          New Kia WKNDR Is the Craziest Camper Van Ever: It Generates Power While Standing Still!          
          </Typography>
          <iframe width="790" height="360" src="https://www.youtube.com/embed/c3RNeoiGpzk" title="New Kia WKNDR Is the Craziest Camper Van Ever: It Generates Power While Standing Still!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal2>
    </div>
    <div>
      <Button onClick={handleOpen2}><homeVideo>
            <img src={video2} alt="" />
          </homeVideo></Button>
      <Modal3
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style3}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          New SMALLEST but BIGGEST Luxury Campervan of 2024 - GiottiLine Siena 322 Privilege by Rapido
          </Typography>
          <iframe width="790" height="360" src="https://www.youtube.com/embed/9NpSU-j6eV8" title="New SMALLEST but BIGGEST Luxury Campervan of 2024 - GiottiLine Siena 322 Privilege by Rapido" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal3>
    </div>
    <div>
      <Button onClick={handleOpen3}><homeVideo>
            <img src={video3} alt="" />
          </homeVideo></Button>
      <Modal4
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style4}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          New BEST Small Luxury Campervan with Perfect Bathroom - NEW Fiat Ducato Karmann Dexter 580
          </Typography>
          <iframe width="790" height="360" src="https://www.youtube.com/embed/cPCvPZ3uhdg" title="New BEST Small Luxury Campervan with Perfect Bathroom - NEW Fiat Ducato Karmann Dexter 580" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal4>
    </div>
    <div>
      <Button onClick={handleOpen4}><homeVideo>
            <img src={video4} alt="" />
          </homeVideo></Button>
      <Modal5
        open={open4}
        onClose={handleClose4}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style5}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          New 2025 camper from 5k KARAT GREDIA
          </Typography>
          <iframe width="790" height="360" src="https://www.youtube.com/embed/wQw3qcXEIAM" title="New 2025 camper from 5k KARAT GREDIA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal5>
    </div>
    <div>
      <Button onClick={handleOpen5}><homeVideo>
            <img src={video5} alt="" />
          </homeVideo></Button>
      <Modal6
        open={open5}
        onClose={handleClose5}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style6}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          All-New 2024 Airstream Rangeline Class B Camper Van | Sleeps 4
          </Typography>
          <iframe width="790" height="360" src="https://www.youtube.com/embed/EDf24rHVc2Q" title="All-New 2024 Airstream Rangeline Class B Camper Van | Sleeps 4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal6>
    </div>
    <div>
      <Button onClick={handleOpen6}><homeVideo>
            <img src={video6} alt="" />
          </homeVideo></Button>
      <Modal7
        open={open6}
        onClose={handleClose6}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style7}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          4X4 VAN TOUR | Inside this AWARD-WINNING Mercedes Sprinter: the Project Yonder, Freedom 4X!
          </Typography>
          <iframe width="790" height="360" src="https://www.youtube.com/embed/uA7ib691Vd8" title="4X4 VAN TOUR | Inside this AWARD-WINNING Mercedes Sprinter: the Project Yonder, Freedom 4X!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal7>
    </div>
    <div>
      <Button onClick={handleOpen7}><homeVideo>
            <img src={video7} alt="" />
          </homeVideo></Button>
      <Modal8
        open={open7}
        onClose={handleClose7}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style8}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          FIRST LOOK: VW's 2024 California Camper Van! | Top Gear
          </Typography>
          <iframe width="790" height="360" src="https://www.youtube.com/embed/sD2coVgw1Ms" title="FIRST LOOK: VW's 2024 California Camper Van! | Top Gear" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>
      </Modal8>
    </div>
        </Home2videos>
      </Home2>
      <Home3>
        <Hometile>Blogs <div></div></Hometile>
        <Home3leftright>
            <Home3left>
                <Home3leftcamper>Camper</Home3leftcamper>
                <Home3lefttexts>
                    <div className="yellow">@Camper_1</div>
                    <div className="long">Camping truly is for everyone, from your oldest <br /> family member to little campers just trekking <br /> out for the first time. Whether your plan is to <br /> relax, explore or reconnect, CAMPER <br /> campgrounds are a great place to create <br /> memories with those you love.</div>
                </Home3lefttexts>
            </Home3left>
            <Home3right>
                <Home3photo><img src={photo1} alt="" /></Home3photo>
                <Home3photo><img src={photo2} alt="" /></Home3photo>
                <Home3photo><img src={photo3} alt="" /></Home3photo>
                <Home3photo><img src={photo4} alt="" /></Home3photo>
                <Home3photo><img src={photo5} alt="" /></Home3photo>
                <Home3photo><img src={photo6} alt="" /></Home3photo>
            </Home3right>
        </Home3leftright>
      </Home3>
      <Footercomponent/>
    </Mainpagecon>
  );
};

export default Mainpagecomponent;
