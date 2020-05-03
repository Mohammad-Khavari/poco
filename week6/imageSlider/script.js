let images =[];

//2.fetch the images from external site via API:
fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
//3. parse the JSON response of API:
     .then(response => response.json())
     .then(data => {
// 4. loop through JSON objects and get url
         for( let i=0; i< 10; i++){
             let obj = data[i];
//5.store url in variable
             images.push(obj.url);
         }
        console.log(images);
     });

let counter = 0;
let imgTag = document.getElementsByTagName("img")[0];
let prevBtn = document.getElementsByTagName("button")[0];
let nextBtn = document.getElementsByTagName("button")[1];

imgTag.src=images[counter];

prevBtn.addEventListener("click",slideToPrev);
nextBtn.addEventListener("click",slideToNext);

function slideToNext(){
    //console.log(counter+" >");
    counter++;
    if(counter === images.length){
        counter = 0;
    }
    if(counter < images.length){
        let nextSlide = images[counter];
        imgTag.src = nextSlide;
    }
}

function slideToPrev(){
    //console.log(counter+" <");
    counter--;    
    if(counter < 0){
        counter = images.length-1;
    }
    if(counter >= 0){
        let prevSlide = images[counter];
        imgTag.src = prevSlide;
    }
}

function slide(){
   
    let currentSlide = images[counter];
}