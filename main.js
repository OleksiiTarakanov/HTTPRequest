(function(){
    document.querySelector('.search').addEventListener('click',function(){
        let fSearch = document.forms['bookSearch'];
        let inpVal = fSearch.tr.value;
        let xhr = new XMLHttpRequest();
        xhr.open('GET',`https://it-ebooks-api.info/v1/search/${inpVal}`);
        document.querySelector('.text').innerHTML += xhr.responseText;
        console.log(xhr.status);
        console.log(inpVal);
        xhr.send();
        fSearch.reset();
        
    });
})();