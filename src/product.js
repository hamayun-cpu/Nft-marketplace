import image3 from './assets/pic3.jpg';
import { getUserById } from './utils/product';
import { useParams } from 'react-router'
// import useSWR from 'swr';

const Product = (props) => {
  let { id } = useParams();
  // const { data: nft, error } = useSWR('./utils/product.js', getUserById(id));
  // if(error) return "Error!";
  // if(!nft) return "Loading!";

  const nft = getUserById(id);

  console.log(nft);
  return (
    <div class="card w-o h-100 m-auto pad-75">
      <img class="card-img-top h-50" src={image3} alt="Card cap"/>
      <div class="card-body">
        <h5 class="card-title">{nft.title}</h5>
        <p class="card-text"> {nft.description}</p>
        <button class="btn btn-primary">{nft.price}</button>
      </div>
    </div>
  );
}

export default Product;