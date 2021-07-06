import data from '../db/db.json'

function getUserById(id) {
  let dat = data;
  return dat[id-1];
}

export { getUserById };