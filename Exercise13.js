function targetTerdekat(arr) {
  var jarak=0;
    for (var i=0; i<arr.length; i++){
      if(arr[i]==="o"){
        var countO=i;
      }
      else if(arr[i]==="x"){
        var countX=i;
      }

      if (countX>countO){
        jarak=countX-countO;
        break;
      }
      else if (countX<countO){
        jarak=countO-countX;
        break;
      }
    }
    return jarak;
  }
    
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2








// function targetTerdekat(arr) {
//     var shortest = 0;
//     var shortest2 = 0;
//     var latest = " ";
//         for(var x=0; x<arr.length; x++){
//             if(latest !== " " && latest !== arr[x] && " " !== arr[x]){
//                 if(shortest2>shortest){
//                     shortest = shortest2;
//                 }
//                 shortest2 = 0;
//                 latest = arr[x];
//             }
//             else if(latest !== " " && latest === arr[x]){
//                 shortest2 = 0;
//             }
//             else if(latest !== " " && arr[x] === " "){
//                 shortest2 += 1;
//             }
//             else if(arr[x] !== " "){
//                 shortest2 += 1;
//                 latest = arr[x];
//             }
//         }
//     return(shortest);
//   }
    
//   // TEST CASES
//   console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
//   console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
//   console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
//   console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
//   console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2