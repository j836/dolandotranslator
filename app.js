const txtinput = document.querySelector('.txt-input');
const translatebtn = document.querySelector('.translate-btn');
console.log(translatebtn)
const txtoutput = document.querySelector('.txt-output')
console.log(txtoutput);





const serverurl = "https://api.funtranslations.com/translate/dolan.json";

function generateURL(text) {
    return serverurl + "?" + "text=" + text;
}


function clickHandler() {
    //  alert('Here we go');
    if(txtinput.value === undefined || txtinput.value === "") {
        window.alert('Empty input!!Please enter text to get its translation');
    }
    fetch(generateURL(txtinput.value))
    .then(response => response.json())
    .then(json => {txtoutput.innerText = json.contents.translated});
}
translatebtn.addEventListener('click', clickHandler);

