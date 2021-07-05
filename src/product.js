import image3 from './assets/pic3.jpg';
import { getUserById } from './utils/product';
const Product = (props) => {

  let productId = this.props.match.params.id;
  console.log(props);

  const nft = getUserById(productId);

  return (
    // <div class="card w-o h-100 m-auto pad-75">
    //   <img class="card-img-top h-50" src={image3} alt="Card cap"/>
    //   <div class="card-body">
    //     <h5 class="card-title">{nft.title}</h5>
    //     <p class="card-text"> {nft.description}</p>
    //     <button class="btn btn-primary">{nft.price}</button>
    //   </div>
    // </div>
    <h1>1</h1>
  );
}

export default Product;