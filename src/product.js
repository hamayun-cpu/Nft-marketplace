import { getUserById } from './utils/products';
import { useParams } from 'react-router'
import Countdown from 'react-countdown';

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return "biding Ended";
  } else {
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};

const Product = (props) => {

  let { id } = useParams();

  const nft = getUserById(id);

  return (

    <div className = "mt-12">
      <div class="card w-o h-100 m-auto">
        <img class="card-img-top h-50" src={nft.picture}  alt="Card cap"/>
        <div class="card-body">
          <h5 class="card-title">{nft.title}</h5>
          <p class="card-text"> {nft.description}</p>
          <div class="d-flex justify-content-between">
            <button class="btn btn-primary">{nft.price}</button>
            {!nft.buyable &&  <span class="btn btn-info">
              <Countdown date={Date.now() + (nft.time*60000)} renderer={renderer} ></Countdown>
            </span>}
          </div>
          {nft.buyable && <button class="btn btn-primary mt-2">Buy</button>}
          {!nft.buyable && <button class="btn btn-primary mt-2">Bid</button>}
        </div>
      </div>
      {!nft.buyable &&
      <table class='mx-auto my-5'>
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
      <table class='mx-auto my-5'>
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