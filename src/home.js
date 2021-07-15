import { getSalesNft } from './utils/products'
import { getBidNft } from './utils/products';
import useSWR from 'swr';
import Countdown from 'react-countdown';
import ReactPlayer from 'react-player';
import timeHelper from './utils/timeHelper'


function Home() {
  //variables
  const { data: Salesnfts, error } = useSWR('./utils/products.js', getSalesNft);
  const bidNfts = getBidNft();

  //try catching data/error
  if(error) return "Error!";
  if(!Salesnfts) return "Loading!";

  //functions
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return "biding Ended";
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  return (
    <div className="mt-12">
      <div className="d-flex justify-content-center">
        <h1>Sales</h1>
      </div>
      <div className="container">
        <div className="row">
          {Salesnfts.map((nft) => (
            <div className="col-sm mt-3" key={nft.id}>
              <div className="card w-o h-550 m-auto">
                { nft.type === 'pic' &&
                  <img className="card-img-top h-60" src={nft.media}  alt="Card cap"/>
                }
                { nft.type === 'vid'  &&
                  <ReactPlayer className="card-img-top h-60" url={nft.media}
                    controls = {false}
                    muted = {true}
                    width = {'20.9rem'}
                    playing = {true}
                    loop = {true}
                  />
                }
                <div className="card-body">
                  <h5 className="card-title"><a href={`/product/${nft.id}`} className="color-black">{nft.title}</a></h5>
                  <p className="card-text">{nft.description}</p>
                  <button className="btn btn-primary">{nft.price}</button> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <h1>Bids</h1>
      </div>
      <div className="container mb-2">
        <div className="row">
          {bidNfts.map((nft) => (
            <div className="col-sm mt-3" key={nft.id}>
              <div className="card w-o h-550 m-auto">
                { nft.type === 'pic' &&
                  <img className="card-img-top h-60" src={nft.media}  alt="Card cap"/>
                }

                { nft.type === 'vid'  &&
                  <ReactPlayer className="card-img-top h-60" url={nft.media}
                    controls = {false}
                    muted = {true}
                    width = {'20.9rem'}
                    playing = {true}
                    loop = {true}
                  />
                }
                <div className="card-body">
                  <h5 className="card-title"><a href={`/product/${nft.id}`} className="color-black">{nft.title}</a></h5>
                  <p className="card-text">{nft.description}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary">{nft.price}</button>
                    <span className="btn btn-info">
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