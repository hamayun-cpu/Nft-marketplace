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

function getAllIds() {
  let dat = [];
  data.forEach((element) => { dat.push({ name: element.id, value: element.id }) } )

  return dat;
}

function toggle() {
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked === true){
    return true;
  } else {
    return false;
  }
}

export { getSalesNft, getUserById, getBidNft, getAllIds, toggle };
