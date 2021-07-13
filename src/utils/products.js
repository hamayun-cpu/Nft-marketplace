import data from '../db/db.json'

async function getSalesNft() {
  try {
    const result = data.filter(word => word.buyable === true);
    return result;
  } catch(e) {
    return null;
  }
}

function getBidNft() {
  const result = data.filter(word => word.buyable === false);
  return result;
}

function getUserById(id) {
  let dat = data;
  return dat[id-1];
}

export { getSalesNft, getUserById, getBidNft };
