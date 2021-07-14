import image1 from './assets/pic1.jpeg';
import { getSalesNft } from './utils/products'
import { getBidNft } from './utils/products';
import useSWR from 'swr';
import Countdown from 'react-countdown';

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return "biding Ended";
  } else {
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};

function Home() {
  const { data: Salesnfts, error } = useSWR('./utils/products.js', getSalesNft);
  const bidNfts = getBidNft();

  if(error) return "Error!";
  if(!Salesnfts) return "Loading!";

    return (
    <div className="mt-12">
      <div class="d-flex justify-content-center">
        <h1>
          Sales
        </h1>
      </div>
      <div class="container">
        <div class="row">
          {Salesnfts.map((nft) => (
            <div class="col-sm mt-3">
              <div class="card w-o h-100 m-auto">
                <img class="card-img-top h-50" src={image1}  alt="Card cap"/>
                <div class="card-body">
                  <h5 class="card-title"><a href={`/product/${nft.id}`} class="color-black">{nft.title}</a></h5>
                  <p class="card-text">{nft.description}</p>
                  <button class="btn btn-primary">{nft.price}</button> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="d-flex justify-content-center mt-5">
        <h1>
          Bids
        </h1>
      </div>
      <div class="container">
        <div class="row">
          {bidNfts.map((nft) => (
            <div class="col-sm mt-3">
              <div class="card w-o h-100 m-auto">
                <img class="card-img-top h-50" src={image1}  alt="Card cap"/>
                <div class="card-body">
                  <h5 class="card-title"><a href={`/product/${nft.id}`} class="color-black">{nft.title}</a></h5>
                  <p class="card-text">{nft.description}</p>
                  <div class="d-flex justify-content-between">
                    <button class="btn btn-primary">{nft.price}</button>
                    <span class="btn btn-info">
                      <Countdown date={Date.now() + (nft.time*60000)} renderer={renderer} ></Countdown>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
  
}

export default Home;