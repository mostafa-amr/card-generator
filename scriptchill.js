var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
var Imagepar = urlParams.get('img');
console.log(Imagepar)
var divImage = document.createElement("div");
divImage.className='imagec'
var Image = document.createElement("img");
Image.src=Imagepar
divImage.appendChild(Image)
document.body.appendChild(divImage)
var myParam = urlParams.get('text');
console.log(myParam)
var divText = document.createElement("div");
var Text = document.createElement("p");
Text.innerText=myParam
divText.appendChild(Text)
document.body.appendChild(divText)
function Close(){

    window.close()
}
