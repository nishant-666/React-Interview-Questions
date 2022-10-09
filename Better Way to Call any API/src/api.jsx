export const getData = (param) => {
  fetch(`https://jsonplaceholder.typicode.com/${param}`)
    .then((response) => response.json())
    .then((json) => console.log(json));
};
