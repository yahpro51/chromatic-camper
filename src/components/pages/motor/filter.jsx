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
import comparecar1 from "../../../assets/filter-compare-1.png"
import comparecar2 from "../../../assets/filter-compare-2.png"
import comparecar3 from "../../../assets/filter-compare-3.png"

const Filtercomponent = () => {
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
      <Filterminicon>
        <Filtertextline>
          <Filtertext2>Brand</Filtertext2>
          <Filterline></Filterline>
        </Filtertextline>
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
            <div>escape</div>
          </From2>
        </Fromto2>
      </Filterminicon>
      <Filterminicon>
        <Filtertextline>
          <Filtertext2>Company</Filtertext2>
          <Filterline></Filterline>
        </Filtertextline>
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
      </Filterminicon>
      <Filterminicon>
        <Filtertextline>
          <Filtertext2>License</Filtertext2>
          <Filterline></Filterline>
        </Filtertextline>
        <Fromto2>
          <From2>
            <input type="checkbox" />
            <div>1 year</div>
          </From2>
          <From2>
            <input type="checkbox" />
            <div>2 year</div>
          </From2>
          <From2>
            <input type="checkbox" />
            <div>1.5 year</div>
          </From2>
        </Fromto2>
      </Filterminicon>
      <Filterminicon>
        <Filtertextline>
          <Filtertext2>Number fo travelers</Filtertext2>
          <Filterline></Filterline>
        </Filtertextline>
        <Fromto2>
          <From2>
            <input type="checkbox" />
            <div>2</div>
          </From2>
          <From2>
            <input type="checkbox" />
            <div>3-4</div>
          
          </From2>  
          <From2>
              <input type="checkbox" />
              <div>5+</div>
            </From2>
        </Fromto2>
      </Filterminicon>
      <Filterminicon>
        <Filtertextline>
          <Filtertext2>Location</Filtertext2>
          <Filterline></Filterline>
        </Filtertextline>
        <Fromto2>
          <From2>
            <input type="checkbox" />
            <div>Seoul</div>
          </From2>
          <From2>
            <input type="checkbox" />
            <div>Korea</div>
          </From2>
          <From2>
            <input type="checkbox" />
            <div>Busan</div>
          </From2>
        </Fromto2>
      </Filterminicon>
      <Filterbtns>
        <button style={{ backgroundColor: "#FF7A00" }}>Cancel</button>
        <button style={{ backgroundColor: "#006DAB" }}>Search</button>
      </Filterbtns>
      <Filtercompare>
        <Comparetext>Compare</Comparetext>
        <Compareend>
        <Comparemid>
          <img src={comparecar1} alt="" />
          <div><img src={comparecar2} alt="" /></div>
          <div><img src={comparecar3} alt="" /></div>
        </Comparemid>
        <Comparebtn><button>Compare</button></Comparebtn>
        </Compareend>
      </Filtercompare>
    </Filtercon>
  );
};

export default Filtercomponent;
