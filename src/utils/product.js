import data from '../db/db.json'

async function getUserById(id) {
  try {
    let index = data.findIndex(x => x.id === id);
    return data[index];
  } catch(e) {
    return null;
  }
}

export { getUserById };