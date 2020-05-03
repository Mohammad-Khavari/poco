// let array = [
//     ['A','B','C'],
//     ['D','E',]
// ];
// let copy =[];
// function transpose(a){
//     for(let i=0;i<a.length;++i){
//         for(let j=0;j<a[i].length;++j){
//         if(a[i][j]===undefined) continue;
//         if(copy[j]===undefined) copy[j]=[];
//         copy[j][i]=a[i][j];
//         }
//     }return copy;
// }
// console.log(transpose(array));
// document.write( transpose(array) )




let array0 = [[1,2,3,4],[1,2,3,4]];

let result = []
function tran(array1){
  
    for(var i=0; i<array1.length;i++){

        for (var x = 0; x < array1[i].length; x++){
            if (array1[i][x]=== undefined)continue;
            if(result[x] === undefined ) copy[j]=[];

            result[i][x] = array1[x][i];
        }
    }
    return result;
}
   console.log(tran(array0))



// function tran(array1){
//     let array2 = array1.length
//     for(var i=0; i<array1.length;i++){
//          array2.push([]);

//     };
//     for(var i = 0; i<array1.length;i++){
//         for(var x=0; x<array2.length; x++){
//             array2[x].push[array1[i][x]]

//         };
//     };
//     return array2;
// }







// function needed:  1 for comparison
// declaring the 2 inputs 
// check if the inputs are valid. yes continue. no give feedback not accepted values.
// 





// //comparison function for two string 
// function hammingDistance(str1,str2){
//     let diffrences = 0;
//     str1 = "ABCFGTHYGDHYE";
//     str2 = "DGTBVFGMIHJUS";
//     if(str1.length === str2.length){
        
//         // console.log("inside if statement");
//         let arry1 = str1.split("");
//         // console.log(arry1);
//         let arry2 = str2.split("");
//         // console.log(arry2);
//         for(let i=0; i < arry1.length; i++){
            
//             // console.log("inside for loop");

//             if( arry1[i] !== arry2[i]){
//                 // console.log("inside comparison")
//                 diffrences++;

//             }
//             // console.log("outside of the comparison if")
//         }
//         return diffrences;
//     }
    
//     alert("Input is not valid! They don't have the  the same length!");

// }


// console.log(hammingDistance());



// function intToRom(number){
//     if ( typeof number !== 'number')
//     return false;
// }
// var dig = String(+num).split("")
