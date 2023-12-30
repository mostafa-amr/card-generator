var image
var text
var childd
function selectPhot(e){
var check = document.getElementsByTagName("img")
for(var i=0;i<check.length;i++){
    check[i].style.borderColor='transparent'
}
    image = document.getElementById(e)
    image.style.borderColor='red'
    console.log(image.src)
    }
    function selectarea(textTAg){
        text = document.getElementById(textTAg)
        
        // console.log(image.src)
        if(image && text.value){
          console.log('last try')
    childd = window.open(`child.html?img=${image.src}&text=${text.value}`,'','width=800,height =800');
        }
        else{
          alert('select image and type some text')
        }

    }