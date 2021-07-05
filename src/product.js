import image3 from './assets/pic3.jpg';
import Axios from 'axios';
import { useEffect } from 'react';
const product = () => {


  return (
    <div class="card w-o h-100 m-auto pad-75">
      <img class="card-img-top h-50" src={image3} alt="Card cap"/>
      <div class="card-body">
        <h5 class="card-title">Black Thor</h5>
        <p class="card-text"> its a gaming character BLACK Thor who is the character of Assasin creed with great powers</p>
        <button class="btn btn-primary">1 ETH</button>
      </div>
    </div>
  );
}

export default product;