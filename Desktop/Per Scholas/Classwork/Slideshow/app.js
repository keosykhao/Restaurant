var images = ['/images/picOne.jpeg','/images/picTwo.jpeg','/images/picThree.jpeg',
'/images/picFour.jpeg','/images/picFive.jpeg']

var currentPic = 0;
var changePicture = (x) => {
    currentPic += x 
    if(currentPic > images.length - 1){
        currentPic = 0;
    }
    if(currentPic < 0){
        currentPic = images.length - 1
    }
    document.getElementById("img").src = images[currentPic]
    console.log()

}
