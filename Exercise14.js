function mengelompokkanAngka(arr) {
    var genap = [];
     var ganjil = [];
     var bagiTiga = [];
     for(var x=0;x<arr.length;x++){
         if(arr[x]%2 === 0 && arr[x]%3 !== 0){
             genap.push(arr[x]);
       }
         if(arr[x]%2 == 1 && arr[x]%3 !== 0){
             ganjil.push(arr[x]);
       }
         if(arr[x]%3 === 0){
             bagiTiga.push(arr[x]);
       }
     }
   return([genap,ganjil,bagiTiga]);
   }
   
   // TEST CASES
   console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
   console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
   console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
   console.log(mengelompokkanAngka([])); // [ [], [], [] ]