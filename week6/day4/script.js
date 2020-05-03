let input = document.querySelector("input");
input.addEventListener("change", getDimensions);

function getDimensions(){
    console.log(this);
    let dimensions= [];
    for(let i=0; i<this.file.length;i++){
        let file = this.file[i];
    }
    let  promise = new Promise((resolve, reject) => {
        let src = window.URL.createObjectURL(file);
        let image = new Image;

        image.onload = function(){
            resolve(image.width)
            console.log(image.width);
            console.log(image.height);
        }
        image.src = src;
        window.URL.revokeObjectURL(src);
    });
    dimensions.push(promise);
    console.log(dimensions);
    Promise.all(dimensions).then(function(dims){
       console.log(dims)
    });
}

/**
 * let images = [];
 * fetch("").then(response => response.json)
 */