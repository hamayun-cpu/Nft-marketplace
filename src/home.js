import image1 from './assets/pic2.jpeg';
import image2 from './assets/pic1.jpeg';
import image3 from './assets/pic3.jpg';
import getUsers from './utils/products'
import useSWR from 'swr';

const Home = () => {
  const { data: nft, error } = useSWR('./utils/products.js', getUsers);

  if(error) return "Error!";
  if(!nft) return "Loading!";

  return (
    <div class="container">
      <div class="row mt-75">

        <div class="col-sm mt-3">
          <div class="card w-o h-100 m-auto">
            <img class="card-img-top h-50" src={image1} alt="Card cap"/>
            <div class="card-body">
              <h5 class="card-title">Black Thor</h5>
              <p class="card-text"> its a gaming character BLACK Thor who is the character of Assasin creed with great powers</p>
              <button class="btn btn-primary">1 ETH</button>
            </div>
          </div>
        </div>
        
        <div class="col-sm mt-3">
          <div class="card w-o h-100 m-auto">
            <img class="card-img-top h-50" src={image2} alt="Card cap"/>
            <div class="card-body">
              <h5 class="card-title">Devil Jin</h5>
              <p class="card-text">He is an individual under the control of Devil Gene. His power has gone beyond that of a regular human being.</p>
              <button class="btn btn-primary">7 ETH</button>
            </div>
          </div>
        </div>

        <div class="col-sm mt-3">
          <div class="card w-o h-100 m-auto">
            <img class="card-img-top h-50" src={image3} alt="Card cap"/>
            <div class="card-body">
              <h5 class="card-title">Mario</h5>
              <p class="card-text">One of the most Popular character of game Super Mario. We all played Mario and have so much emotional attachment to Mario</p>
              <button class="btn btn-primary">3 ETH</button>
            </div>
          </div>
        </div>

      </div>

      <div class="row mb-5">
        
        <div class="col-sm mt-3">
          <div class="card w-o h-100 m-auto">
            <img class="card-img-top h-50" src={image2} alt="Card cap"/>
            <div class="card-body">
              <h5 class="card-title">Devil Jin</h5>
              <p class="card-text">He is an individual under the control of Devil Gene. His power has gone beyond that of a regular human being.</p>
              <button class="btn btn-primary">7 ETH</button>
            </div>
          </div>
        </div>

        <div class="col-sm mt-3">
          <div class="card w-o h-100 m-auto">
            <img class="card-img-top h-50" src={image3} alt="Card cap"/>
            <div class="card-body">
              <h5 class="card-title">Mario</h5>
              <p class="card-text">One of the most Popular character of game Super Mario. We all played Mario and have so much emotional attachment to Mario</p>
              <button class="btn btn-primary">3 ETH</button>
            </div>
          </div>
        </div>

        <div class="col-sm mt-3">
          <div class="card w-o h-100 m-auto">
            <img class="card-img-top h-50" src={image1} alt="Card cap"/>
            <div class="card-body">
              <h5 class="card-title">Black Thor</h5>
              <p class="card-text"> its a gaming character BLACK Thor who is the character of Assasin creed with great powers</p>
              <button class="btn btn-primary">1 ETH</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;