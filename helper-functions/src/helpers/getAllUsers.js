export const getUsers = (param) => {
  return fetch(`https://jsonplaceholder.typicode.com/${param}`).then(
    (response) => response.json()
  );
};
