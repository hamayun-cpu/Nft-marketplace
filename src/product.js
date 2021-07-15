import { getUserById } from './utils/products';
import { useParams } from 'react-router'
import Countdown from 'react-countdown';
import ReactPlayer from 'react-player'
import timeHelper from './utils/timeHelper'
import Popup from 'reactjs-popup';
import { useState } from 'react';

const Product = (props) => {
  //variables
  let { id } = useParams();
  const nft = getUserById(id);
  const [bidPrice, setBid] = useState("");

  //functions
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return "biding Ended";
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    if(bidPrice) {
      console.log(bidPrice);
      window.alert("bid successful");
    } else {
      window.alert("bid Unsuccessful");
    }
  }

  //JSX
  return (
    <div className = "mt-12">
      <div className="card w-o h-100 m-auto">
        { nft.type === 'pic' &&
          <img className="card-img-top h-50" src={nft.media}  alt="Card cap"/>
        }
        { nft.type === 'vid'  &&
          <ReactPlayer className="card-img-top h-50" url={nft.media}
            controls = {true}
            muted = {true}
            width= {'20.9rem'}
            playing = {true}
          />
        }
        <div className="card-body">
          <h5 className="card-title">{nft.title}</h5>
          <p className="card-text"> {nft.description}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">{nft.price}</button>
            {!nft.buyable &&
              <span className="btn btn-info">
                <Countdown date={timeHelper(nft.time)} renderer={renderer} ></Countdown>
              </span>
            }
          </div>
          {nft.buyable &&
            <Popup trigger={<button className="btn btn-primary mt-2"> Buy</button>}>
              <div className = "popup d-flex justify-content-center align-items-center flex-column">
                <span className="font-weight-bold text-uppercase">Price</span> {nft.price}
                <button className="btn btn-primary w-100 my-3">Buy</button>
              </div>
            </Popup>
          }
          {!nft.buyable &&
           <Popup trigger={<button className="btn btn-primary mt-2"> Bid</button>}>
              <div className = "popup d-flex justify-content-center align-items-center flex-column">
                <form>
                  <label>Bid Price
                    <input className="w-100" type="number" id="bidPrice" onChange={ (event) => setBid(event.target.value)} />
                  </label>
                  <button onClick={handleSubmit} type="submit" value="Submit" className="btn btn-primary w-100 my-3">Bid</button>
                </form> 
              </div>
            </Popup>
          }
        </div>
      </div>
      {!nft.buyable &&
        <table className='mx-auto my-5'>
          <tr>
            <th>Highest bid</th>
            <th>From</th>
          </tr>
          <tr>
            <td>20 ETH</td>
            <td>0x1235653234</td>
          </tr>
          <tr>
            <td>20 ETH</td>
            <td>0x1235653234</td>
          </tr>
          <tr>
            <td>20 ETH</td>
            <td>0x1235653234</td>
          </tr>
          <tr>
            <td>20 ETH</td>
            <td>0x1235653234</td>
          </tr>
        </table>
      }
      {nft.buyable &&
        <table className='mx-auto my-5'>
          <tr>
            <th>Sale History</th>
            <th>From</th>
            <th>To</th>
          </tr>
          <tr>
            <td>20 ETH</td>
            <td>0x1235653234</td>
            <td>0x1235653edc</td>
          </tr>
          <tr>
            <td>20 ETH</td>
            <td>0x1235653234</td>
            <td>0x1235653edc</td>
          </tr>
          <tr>
            <td>20 ETH</td>
            <td>0x1235653234</td>
            <td>0x1235653edc</td>
          </tr>
          <tr>
            <td>20 ETH</td>
            <td>0x1235653234</td>
            <td>0x1235653edc</td>
          </tr>
      </table>
      }
    </div>
  );
}

export default Product;