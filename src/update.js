import { getAllIds } from "./utils/products";
import SelectSearch from 'react-select-search';
import { fuzzySearch } from "react-select-search";
import { useState } from "react";

const Update = () => {
  let ids = getAllIds();

  const [toggleValue, setStatus] = useState("");
  const [bidPrice, setBidPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [idd, setIdd] = useState("");

  function toggle() {
    if (toggleValue) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // for bid price
    if(toggleValue) {
      if(bidPrice && idd){
        console.log(bidPrice);
        console.log(idd);
        window.alert("Form submitted");
      } else {
        window.alert("Form not submitted");
      }
    } 
    // for sale price 
    else {
      if(salePrice && idd){
        console.log(salePrice);
        console.log(idd);
        window.alert("Form submitted");
      } else {
        window.alert("Form not submitted");
      }
    }
  }

  return (
    <div className="d-flex justify-content-center mt-5 pad-75">
      <form className = 'd-flex flex-column align-items-center border rounded p-5' onSubmit={handleSubmit}>
        <SelectSearch
          options={ids}
          search
          filterOptions={fuzzySearch}
          placeholder="Select Nft by Id"
        
          onChange={ setIdd} 
        />

        <label className="mt-3">
          <input type="checkbox" id="myCheck" onChange={ (event) => toggle()}/>
          For bid?
        </label> <br></br>

        {toggleValue &&
          <label>
            Bid Price: 
            <input className="ml-2" type="number" id="bidPrice" onChange={ (event) => setBidPrice(event.target.value)} />
          </label>
        }
        <br></br>

        {!toggleValue &&
          <label>
            Sale Price: 
            <input className="ml-2" type="number" id="salePrice" onChange={ (event) => setSalePrice(event.target.value)} />
          </label>
        }

        <br></br>

        <input type="submit" value="Submit" className="btn btn-primary w-100"/>
      </form>
   </div>
  );
}

export default Update;