function tentukanDeretGeometri(arr) {
    var selisih = 0;
    var selisih2 = 0;
    for(var x=0; x<(arr.length-1); x++){
        selisih2 = arr[x+1] / arr[x];
        if(x !==0 && selisih2 !== selisih){
            return false;
        }else{
            selisih = selisih2;
        }
    }
    return true;
}
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false


