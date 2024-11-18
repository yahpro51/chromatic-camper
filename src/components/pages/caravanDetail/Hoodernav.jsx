import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DowncardLeft, DowncardLefttexttwrapp, DowncardRight, DowncardRighttextwrapp, Home1Down, Home1Downcard, Home1DowncardWrapp, Home1Line, Home1Up, Home1Uptext, HooderHome1 } from './style';
import { Rightcon2input } from '../motor/style';
import { Autocomplete, TextField } from '@mui/material';
import top100Films1 from '../MUI/top100Films2';
import { caravans } from '../caravan/mock';
import { useParams } from 'react-router-dom';
import Hooderhome1 from './hooderhome1';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      //hidden={value !== index}
     // id={`full-width-tabpanel-${index}`}
      //aria-labelledby={``}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let {id} = useParams();
  const dataById = caravans.find((data)=> data.id === parseInt(id))
console.log(caravans)
caravans.map((value)=>value.car)
  return (
    <Box sx={{ background: '#FAFAFA', width:`100%`}}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          centered={false}
          aria-label="full width tabs example"
        >
          <Tab label="Item Reviews" {...a11yProps(0)} sx={{width: 170}}/>
          <Tab label="Q&A" {...a11yProps(1)} sx={{width: 170, marginLeft:`4%`}}/>
          <Tab label="FAQ" {...a11yProps(2)} sx={{width: 170}}/>
          <Tab label="Contacts" {...a11yProps(3)} sx={{width: 170}}/>
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme}>
      <Hooderhome1/>
       
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        Item Three
      </TabPanel>

    </Box>
  );
}