const from = 0;
const to = 10;
const start = "&from=" + from;
const end = "&to=" + to;

function fetchRecipes(name) {
  return fetch(`https://api.edamam.com/search?q=${name}&app_id=40511119&app_key=ef36201a4e68b398295a867bfcb3f89a${start}&${end}`)
  .then(r => r.json());
}
