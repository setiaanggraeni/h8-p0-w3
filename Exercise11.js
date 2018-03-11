function tentukanDeretAritmatika(arr) {
    var selisih = 0;
    var selisih2 = 0;
    for(var x=0; x<(arr.length-1) ;x++){
        selisih2 = arr[x+1]-arr[x];
        if(x !==0 && selisih2 !== selisih){
            return false;
        }else{
            selisih = selisih2;
        }
    }
    return true;
}
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false