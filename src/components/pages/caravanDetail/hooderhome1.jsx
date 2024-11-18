import React from 'react'
import { DowncardLeft, DowncardLefttexttwrapp, DowncardRight, DowncardRighttextwrapp, Home1Down, Home1Downcard, Home1DowncardWrapp, Home1Line, Home1Up, Home1Uptext, HooderHome1 } from './style';
import { Rightcon2input } from '../motor/style';
import { Autocomplete, TextField } from '@mui/material';
import top100Films1 from '../MUI/top100Films2';
import { caravans } from '../caravan/mock';


const Hooderhome1 = () => {
  return (
<HooderHome1>
          <Home1Up>
           <Home1Uptext>
            <div className='text1'>Premium Review</div>
            <div className='text2'>{caravans.length}</div>
           </Home1Uptext>
            <Rightcon2input>
                    <div className="input">
                      <Autocomplete
                        disablePortal
                        options={top100Films1}
                        sx={{ width: 180 }}
                        renderInput={(params) => (
                          <TextField {...params} label="Best" />
                        )}
                      />
                    </div>
                  </Rightcon2input>
          </Home1Up>
          <Home1Down>
            <Home1DowncardWrapp>
                {caravans.map((value)=>{ 
                  return(
                  <Home1Downcard key={value.id}>
                  <DowncardLeft>
                    <img src={value.car.photo} alt="" style={{width:"150px"}}/>
                    <DowncardLefttexttwrapp>
                      <div className='text1'>Car Name: {value.car.name}</div>
                      <div className='text2'>Brand: {value.car.company}</div>
                      <div className='text3'>{value.car.text1}, {value.car.text2}</div>
                    </DowncardLefttexttwrapp>
                  </DowncardLeft>
                  <DowncardRight>
                    <DowncardRighttextwrapp>
                      <div className='text1'>ID:</div>
                      <div className='text2'>{value.id}</div>
                    </DowncardRighttextwrapp>
                    <DowncardRighttextwrapp>
                      <div className='text1'>Date:</div>
                      <div className='text2'>20**.**.**</div>
                    </DowncardRighttextwrapp>
                    <DowncardRighttextwrapp>
                      <div className='text1'>Viewed:</div>
                      <div className='text2'>999</div>
                    </DowncardRighttextwrapp>
                  </DowncardRight>
                </Home1Downcard>)}
                )}
                <Home1Line></Home1Line>
            </Home1DowncardWrapp>
          </Home1Down>
        </HooderHome1>
  )
}

export default Hooderhome1
