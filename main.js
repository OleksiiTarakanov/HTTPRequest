(function () {
  document.querySelector('.search').addEventListener('click', function () {

    let fSearch = document.forms['bookSearch'];
    let inpVal = fSearch.tr.value;
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.itbook.store/1.0/search/${inpVal}`);
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.status);
        document.querySelector('.text').innerHTML = xhr.responseText;
      } 
    }
    console.log(xhr.status);
    console.log(inpVal);
    xhr.send();
    fSearch.reset();

  });
})();