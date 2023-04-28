let fetchDataBtn = document.querySelector('#fetchdata')
let result = document.querySelector('#result')
let getData = function() {
  result.innerText = 'Loading....'
    fetch('https://api.blublu.io/public/banks')
      .then(res => res.json())
      .then(data => {
          result.innerText = JSON.stringify(data,null, 2)
          document.body.innerHTML = '';    
      for (let bank of data.banks) {
        document.body.innerHTML+= '<div id = theBankName><input type="button" id = bankz value="'+ bank.bank_name +'"></div>';
        document.body.innerHTML+= '<div id = codes><input type="text" value = "Code: '+bank.code+'"</div>'
            }

            let targetDiv = document.getElementById("codes");
            let btn = document.getElementById("bankz");

            btn.onclick = function () {
              if (targetDiv.style.display !== "none") {
                targetDiv.style.display = "none";
              } else {
                targetDiv.style.display = "block";
              }
            };
            

        })

        .catch(error => console.log(error))}
    fetchDataBtn.addEventListener('click', getData)