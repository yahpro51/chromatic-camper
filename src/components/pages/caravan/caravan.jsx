import React from "react";
import { Caravancon, FDwrapper } from "./style";
import Wallappercomponent from "./wallpaper";
import Footercomponent from "../motor/footer";
import {
  Card,
  Cardbtn,
  Carddown,
  Cardup,
  Cardwrapp,
  Datacon,
  Dataline,
  Datanav,
  Datanavleft,
  Datanavright,
  Datanavwrapp,
  Datarightcon1,
  Datarightcon2,
  DownPrice,
  Rightcon1input,
  Rightcon1text,
  Rightcon2input,
  Rightcon3input,
  Uptext,
  Comparebtn,
  Compareend,
  Comparemid,
  Comparetext,
  Filterbtns,
  Filtercompare,
  Filtercon,
  Filterline,
  Filterminicon,
  Filtertext1,
  Filtertext2,
  Filtertextline,
  From,
  From2,
  Fromto,
  Fromto2,
} from "../motor/style";
import { caravans } from "./mock";
import grid from "../../../assets/datanavgrid.svg";
import list from "../../../assets/datanavlist.svg";
import top100Films1 from "../MUI/top100Films";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import top100Films2 from "../MUI/top100Films2";
import comparecar1 from "../../../assets/filter-compare-1.png";
import comparecar2 from "../../../assets/filter-compare-2.png";
import comparecar3 from "../../../assets/filter-compare-3.png";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const Caravancomponent = () => {
  console.log(caravans);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  console.log(caravans);
  const [open1, setOpen1] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  console.log(caravans);
  const [open2, setOpen2] = React.useState(true);

  const handleClick2 = () => {
    setOpen2(!open2);
  };
  console.log(caravans);
  const [open3, setOpen3] = React.useState(true);

  const handleClick3 = () => {
    setOpen3(!open3);
  };
  console.log(caravans);
  const [open4, setOpen4] = React.useState(true);

  const handleClick4 = () => {
    setOpen4(!open4);
  };
  return (
    <Caravancon>
      <Wallappercomponent />
      <FDwrapper>
      <Filtercon>
      <Filterminicon>
        <Filtertextline>
          <Filtertext1>Cost of car</Filtertext1>
          <Filterline></Filterline>
        </Filtertextline>
        <Fromto>
          <From>
            <div>from</div>
            <input type="text" />
          </From>
          <From>
            <div>to</div>
            <input type="text" />
          </From>
        </Fromto>
      </Filterminicon>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <Filtertextline>
            <Filtertext2>Brand</Filtertext2>
            <Filterline></Filterline>
          </Filtertextline>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <Fromto2>
                <From2>
                  <input type="checkbox" />
                  <div>Aidal</div>
                </From2>
                <From2>
                  <input type="checkbox" />
                  <div>Knal</div>
                </From2>
                <From2>
                  <input type="checkbox" />
                  <div>Escape</div>
                </From2>
              </Fromto2>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick1}>
          <Filtertextline>
            <Filtertext2>Company</Filtertext2>
            <Filterline></Filterline>
          </Filtertextline>
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <Fromto2>
                <From2>
                  <input type="checkbox" />
                  <div>escape</div>
                </From2>
                <From2>
                  <input type="checkbox" />
                  <div>Aidal</div>
                </From2>
              </Fromto2>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick2}>
          <Filtertextline>
            <Filtertext2>License Type</Filtertext2>
            <Filterline></Filterline>
          </Filtertextline>
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <Fromto2>
                <From2>
                  <input type="checkbox" />
                  <div>1 Year</div>
                </From2>
                <From2>
                  <input type="checkbox" />
                  <div>2 Year</div>
                </From2>
                <From2>
                  <input type="checkbox" />
                  <div>1.5 Year</div>
                </From2>
              </Fromto2>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick3}>
          <Filtertextline>
            <Filtertext2>Number of Travelers</Filtertext2>
            <Filterline></Filterline>
          </Filtertextline>
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <Fromto2>
                <From2>
                  <input type="checkbox" />
                  <div>2</div>
                </From2>
                <From2>
                  <input type="checkbox" />
                  <div>3~4</div>
                </From2>
                <From2>
                  <input type="checkbox" />
                  <div>5+</div>
                </From2>
              </Fromto2>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick4}>
          <Filtertextline>
            <Filtertext2>Location</Filtertext2>
            <Filterline></Filterline>
          </Filtertextline>
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <Fromto2>
                <From2>
                  <input type="checkbox" />
                  <div>Ulsan</div>
                </From2>
                <From2>
                  <input type="checkbox" />
                  <div>Busan</div>
                </From2>
                <From2>
                  <input type="checkbox" />
                  <div>Seoul</div>
                </From2>
              </Fromto2>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Filterbtns>
        <button style={{ backgroundColor: "#FF7A00" }}>Cancel</button>
        <button style={{ backgroundColor: "#006DAB" }}>Search</button>
      </Filterbtns>
      <Filtercompare>
        <Comparetext>Compare</Comparetext>
        <Compareend>
          <Comparemid>
            <img src={comparecar1} alt="" />
            <div>
              <img src={comparecar2} alt="" />
            </div>
            <div>
              <img src={comparecar3} alt="" />
            </div>
          </Comparemid>
          <Comparebtn>
            <button>Compare</button>
          </Comparebtn>
        </Compareend>
      </Filtercompare>
    </Filtercon>
        <Datacon>
          <Datanavwrapp>
            <Datanav>
              <Datanavleft>
                <div>Item</div>
                <div style={{ color: "#006DAB" }}>{caravans.length}</div>
              </Datanavleft>
              <Datanavright>
                <Datarightcon1>
                  <Rightcon1text>Sort by</Rightcon1text>
                  <Rightcon1input>
                  <div className="input">
                  <Autocomplete
                    disablePortal
                    options={top100Films2}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Sort by" />
                    )}
                  />
                </div>
                  </Rightcon1input>
                </Datarightcon1>
                <Datarightcon2>
                  <Rightcon2input>
                    <div className="input">
                      <Autocomplete
                        disablePortal
                        options={top100Films1}
                        sx={{ width: 150 }}
                        renderInput={(params) => (
                          <TextField {...params} label="Quantity" />
                        )}
                      />
                    </div>
                  </Rightcon2input>
                </Datarightcon2>
                <Datarightcon2>
                  <Rightcon3input>
                    <div className="grid">
                      <img src={grid} alt="" />
                    </div>
                    <div>
                      <img src={list} alt="" />
                    </div>
                  </Rightcon3input>
                </Datarightcon2>
              </Datanavright>
            </Datanav>
            <Dataline></Dataline>
          </Datanavwrapp>
          <Cardwrapp>
            {caravans.map((value, index) => {
              return (
                <Link to={`/caravandetails/${value.id}`} style={{textDecoration: `none`}}><Card key={value.id}>
                  <Cardup>
                    <img
                      src={value.car.photo}
                      alt=""
                      style={{ width: "210px", borderRadius: "20px" }}
                    />
                    <Uptext>
                      <div className="bigtext">{value.car.name}</div>
                      <div className="smalltextwrapp">
                        <div className="brandname">{value.car.company}</div>
                        <div className="star-rate">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M12.8023 5.35442C12.7656 5.24643 12.6981 5.15154 12.6081 5.08146C12.5182 5.01138 12.4096 4.96919 12.2959 4.96009L8.97035 4.69584L7.53127 1.51026C7.48544 1.40766 7.41089 1.32051 7.31663 1.25934C7.22237 1.19817 7.11241 1.16559 7.00004 1.16553C6.88767 1.16547 6.77768 1.19793 6.68335 1.25899C6.58902 1.32006 6.51438 1.40712 6.46844 1.50968L5.02935 4.69584L1.70377 4.96009C1.59203 4.96894 1.48522 5.0098 1.39609 5.07777C1.30697 5.14574 1.23932 5.23795 1.20122 5.34336C1.16313 5.44877 1.15622 5.56293 1.1813 5.67217C1.20639 5.78141 1.26242 5.88111 1.34269 5.95934L3.80027 8.35509L2.9311 12.1188C2.90471 12.2327 2.91317 12.3519 2.95538 12.461C2.99759 12.57 3.07161 12.6639 3.16782 12.7303C3.26403 12.7968 3.37801 12.8328 3.49494 12.8337C3.61188 12.8346 3.72639 12.8003 3.8236 12.7353L6.99985 10.6178L10.1761 12.7353C10.2755 12.8013 10.3926 12.8353 10.5119 12.8327C10.6311 12.83 10.7467 12.791 10.8431 12.7207C10.9395 12.6505 11.012 12.5524 11.051 12.4396C11.0899 12.3269 11.0934 12.205 11.061 12.0902L9.9941 8.35684L12.6401 5.97568C12.8134 5.81934 12.8769 5.57551 12.8023 5.35442Z"
                              fill="#FF7A00"
                            />
                          </svg>
                          <div>{value.car.star_rate}</div>
                        </div>
                      </div>
                    </Uptext>
                  </Cardup>
                  <Carddown>
                    <DownPrice>{value.cost_krw}</DownPrice>
                    <Cardbtn>
                      <button>Order</button>
                      <button>Compare</button>
                    </Cardbtn>
                  </Carddown>
                </Card>
                </Link>
              );
            })}
          </Cardwrapp>
        </Datacon>
      </FDwrapper>
      <Footercomponent />
    </Caravancon>
  );
};

export default Caravancomponent;
