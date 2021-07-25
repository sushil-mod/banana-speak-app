var btnTrans=document.querySelector("#trans-btn");
var textInput=document.querySelector("#input-text");
var outputTxt=document.querySelector("#output-txt");

var serverUrl="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverUrl + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = textInput.value; 

   
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputTxt.innerText = translatedText; 
           })
        .catch(errorHandler)
};

btnTrans.addEventListener("click", clickHandler)