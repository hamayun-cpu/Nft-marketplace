import image1 from './assets/pic1.jpeg';
import { getUsers } from './utils/products'
import useSWR from 'swr';
import Countdown from "react-countdown";

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return "biding Ended";
  } else {
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};

function Home() {
  const { data: nfts, error } = useSWR('./utils/products.js', getUsers);

  if(error) return "Error!";
  if(!nfts) return "Loading!";


    return (
      <div class="container">
        <div class="row mt-75 mb-5">
          {nfts.map((nft) => (
            <div class="col-sm mt-3">
              <div class="card w-o h-100 m-auto">
                <img class="card-img-top h-50" src={image1}  alt="Card cap"/>
                <div class="card-body">
                  <h5 class="card-title"><a href={`/product/${nft.id}`} class="color-black">{nft.title}</a></h5>
                  <p class="card-text">{nft.description}</p>
                  <div class="d-flex justify-content-between">
                    <button class="btn btn-primary">{nft.price}</button>
                    <span class="btn btn-info">
                      <Countdown date={Date.now() + 5000} renderer={renderer} ></Countdown>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  
}

export default Home;