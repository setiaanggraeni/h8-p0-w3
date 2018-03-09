function balikString(word) {
    var newWord = '';
      for(var sapaan = word.length - 1; sapaan >= 0 ; sapaan--) {
          newWord += word[sapaan]; 
      }
       return newWord;
  }
  console.log(balikString('hello world!'));