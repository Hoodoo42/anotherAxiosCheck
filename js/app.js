// function recipeFail(error) {
//   document.body.insertAdjacentHTML(`afterbegin`, `<h3>Error!</h3>`);
// }

// function recipeSucess(response) {
//   document.body.insertAdjacentHTML(
//     `afterbegin`,
//     `
//     <h3>${response[`data`]}</h3>`
//   );
// }

function chickenSuccess(response){
    document.body.insertAdjacentHTML(`afterbegin`, `
    <h1>${response[`data`][`meals`][4][`strMeal`]}</h1>
    <img src="${response[`data`][`meals`][4][`strMealThumb`]}">
    `)
}
function chickenFailure(error){
    document.body.insertAdjacentHTML(`afterbegin`, `<h3>Error</h3>`)
}




// axios
//   .request({
//     url: `https://www.themealdb.com/api/json/v1/1/random.php`,
//   })
//   .then(recipeSucess)
//   .catch(recipeFail);

axios.request({
  url: `https://www.themealdb.com/api/json/v1/1/filter.php`,
  params: {
    c: `Chicken`,
  }
}).then(chickenSuccess).catch(chickenFailure);
