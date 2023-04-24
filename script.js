let fetchDataBtn = document.querySelector('#fetchdata')
let result = document.querySelector('#result')
let getData = function() {
  result.innerText = 'Loading....'
    fetch('https://api.blublu.io/public/banks')
      .then(res => res.json())
      .then(data => {
          result.innerText = JSON.stringify(data,null, 2)
      for (let bank of data.banks){
        document.body.innerHTML = '';
      for (let bank of data.banks) {
        document.body.innerHTML+= '<div><input type="button" value="'+ bank.bank_name +'">Code: '+bank.code+'</div>';
}
            }
        })

        .catch(error => console.log(error))}
    fetchDataBtn.addEventListener('click', getData)