import data from '../db/db.json'

async function getUsers() {
  try {
    const dat = data;
    return dat;
  } catch(e) {
    return null;
  }
}

function getUserById(id) {
  let dat = data;
  return dat[id-1];
}

export { getUsers, getUserById };
