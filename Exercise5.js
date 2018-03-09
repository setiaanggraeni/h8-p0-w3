function palindrome (kata) {
    var hasilBalikKata='';
    for(var balikKata = kata.length - 1; balikKata >= 0 ; balikKata--) {
        hasilBalikKata += kata[balikKata];
    }
// console.log(hasilBalikKata);
if ( kata === hasilBalikKata) {
    return true;
 }
   else {
    return false;
    }
}
console.log( palindrome('katak'));
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false