function angkaPalindrome(num) {
    num += 1;
    var found = false;
    while(found === false){
        string = num.toString();
        allgood = true;
        for(x=0;x<Math.floor(string.length/2);x++){
          if(string[x] != string[string.length-1-x]){
                allgood = false;
                break;
          }
      }
      if(allgood === true){
          found = true;
      }else{
          num += 1;
      }
  }
  return(num);
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  
  