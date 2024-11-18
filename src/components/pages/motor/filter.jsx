import React from "react";
import {
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
} from "./style";
import comparecar1 from "../../../assets/filter-compare-1.png";
import comparecar2 from "../../../assets/filter-compare-2.png";
import comparecar3 from "../../../assets/filter-compare-3.png";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Filtercomponent = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = React.useState(true);

  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const [open3, setOpen3] = React.useState(true);

  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const [open4, setOpen4] = React.useState(true);

  const handleClick4 = () => {
    setOpen4(!open4);
  };
  

  return (
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
  );
};

export default Filtercomponent;
