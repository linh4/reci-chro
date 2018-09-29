document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.search');
  const show = document.querySelector('#show-page');

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form)
    let name = formData.get('search')
    fetchRecipes(name)
    .then(myJson => {
      show.innerHTML = '';
      form.reset();
      let recipe = myJson.hits.forEach(info)
    })

    function info(r) {
      let div = document.createElement('div')
      div.innerHTML = `<img src="${r.recipe.image}"><h2>${r.recipe.label}</h2>`;
      div.innerHTML += `<p>Calories: ${Math.round(r.recipe.calories)}</p>`;
      div.innerHTML += `<a href = "${r.recipe.url}" target="_blank">Recipe Link</a>`
      div.classList.add('recipe-box');
      show.appendChild(div);
    }
  });

});
