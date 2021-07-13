import { getAllIds } from "./utils/products";
import SelectSearch from 'react-select-search';
import { fuzzySearch } from "react-select-search";

let toggleValue = false;

function toggle() {
  if (toggleValue) {
    toggleValue = false;
  }
  else {
    toggleValue = true;
  }
}

const Update = () => {
  let ids = getAllIds();
  return (
    <div class="d-flex justify-content-center mt-5 pad-75">
      <form>
        <SelectSearch
          options={ids}
          search
          filterOptions={fuzzySearch}
          placeholder="Select Nft by Id"
        />

        <label>
          <input type="checkbox" id="myCheck" onChange={toggle()}/>
          For bid?
        </label> <br></br>

        {toggleValue &&
          <label>
            Bid Price: 
            <input type="number" id="bidPrice"/>
          </label>
        }
        <br></br>

        {!toggleValue &&
          <label>
            Sale Price: 
            <input type="number" id="salePrice"/>
          </label>
        }
        
        <br></br>

        <input type="submit" value="Submit" />
      </form>
   </div>
  );
}

export default Update;