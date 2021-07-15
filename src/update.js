import { useState } from 'react';
import SelectSearch from 'react-select-search';
import { fuzzySearch } from 'react-select-search';
import { getAllIds } from './utils/products';

const Update = (props) => {
  //varibales
  let ids = getAllIds();
  const [toggleValue, setStatus] = useState("");
  const [bidPrice, setBidPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [idd, setIdd] = useState("");

  //funtions
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

  //JSX
  return (
    <div className="d-flex justify-content-center mt-5 pad-75">
      <form className = 'd-flex flex-column align-items-center border rounded p-5' onSubmit={handleSubmit}>
        <h3 className="mb-5">Convert Nft to Sale/Bid</h3>
        <SelectSearch
          options={ids}
          search
          filterOptions={fuzzySearch}
          placeholder="Select Nft by Id"
          onChange={ setIdd } 
        />
        <label className="mt-3">
          <input className="mx-2" type="checkbox" id="myCheck" onChange={ (event) => toggle()}/>
          For bid?
        </label> <br></br>
        {toggleValue &&
          <label>
            Bid Price: 
            <input className="mx-2" type="number" id="bidPrice" onChange={ (event) => setBidPrice(event.target.value)} />
            ETH
          </label>
        }
        <br></br>
        {!toggleValue &&
          <label>
            Sale Price: 
            <input className="mx-2" type="number" id="salePrice" onChange={ (event) => setSalePrice(event.target.value)} />
            ETH
          </label>
        }
        <br></br>
        <input type="submit" value="Submit" className="btn btn-primary w-100"/>
      </form>
   </div>
  );
}

export default Update;