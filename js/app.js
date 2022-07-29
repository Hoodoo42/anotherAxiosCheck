function recipeFail(error) {
  document.body.insertAdjacentHTML(`afterbegin`, `<h3>Error!</h3>`);
}

function recipeSucess(response) {
   
    document.body.insertAdjacentHTML(`afterbegin`, `
    <h3>${response[`data`][]}</h3>`);

}

axios
  .request({
    url: `https://www.themealdb.com/api/json/v1/1/random.php`
  })
  .then(recipeSucess)
  .catch(recipeFail);
