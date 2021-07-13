import { getAllIds } from "./utils/products";
import SelectSearch from 'react-select-search';
import { fuzzySearch } from "react-select-search";

const Update = () => {
  let ids = getAllIds();
  return (
    <div class="d-flex justify-content-center mt-5 pad-75">
      <SelectSearch
        options={ids}
        search
        filterOptions={fuzzySearch}
        placeholder="Select your country"
      />

   </div>
  );
}

export default Update;