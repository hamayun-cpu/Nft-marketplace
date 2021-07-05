async function getUsers() {
  try {
    const result = await fetch('../db/db.json');
    const data = await result.json();
    return data;
  } catch(e) {
    return null;
  }
}

export default getUsers;