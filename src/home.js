import image1 from './assets/pic1.jpeg';
import getUsers from './utils/products'
import useSWR from 'swr';

const Home = () => {
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
                <button class="btn btn-primary">{nft.price}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;