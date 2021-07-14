import { getSalesNft } from './utils/products'
import { getBidNft } from './utils/products';
import useSWR from 'swr';
import Countdown from 'react-countdown';
import ReactPlayer from 'react-player';
import timeHelper from './utils/timeHelper'

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

  let date = new Date(Date.now());
  console.log(date);

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
              <div class="card w-o h-550 m-auto">

              { nft.type === 'pic' &&
                <img class="card-img-top h-60" src={nft.media}  alt="Card cap"/>
              }

              { nft.type === 'vid'  &&
                <ReactPlayer class="card-img-top h-60" url={nft.media}
                  controls = {false}
                  muted = {true}
                  width = {'20.9rem'}
                  playing = {true}
                  loop = {true}
                />
              }

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
      <div class="container mb-2">
        <div class="row">
          {bidNfts.map((nft) => (
            <div class="col-sm mt-3">
              <div class="card w-o h-550 m-auto">
              { nft.type === 'pic' &&
                <img class="card-img-top h-60" src={nft.media}  alt="Card cap"/>
              }

              { nft.type === 'vid'  &&
                <ReactPlayer class="card-img-top h-60" url={nft.media}
                  controls = {false}
                  muted = {true}
                  width = {'20.9rem'}
                  playing = {true}
                  loop = {true}
                />
              }
                <div class="card-body">
                  <h5 class="card-title"><a href={`/product/${nft.id}`} class="color-black">{nft.title}</a></h5>
                  <p class="card-text">{nft.description}</p>
                  <div class="d-flex justify-content-between">
                    <button class="btn btn-primary">{nft.price}</button>
                    <span class="btn btn-info">
                      <Countdown date={timeHelper(nft.time)} renderer={renderer} ></Countdown>
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