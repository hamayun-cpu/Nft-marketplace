import data from '../db/db.json'
async function getUsers() {
  try {

    const dat = data;
    return dat;
  } catch(e) {
    return null;
  }
}

export default getUsers;