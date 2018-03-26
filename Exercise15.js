function groupAnimals(animals) {
  animals.sort();
  var arrResult=[];
  var arrKecil=[];
    if (animals.length>0){
        var huruf=animals[0][0];
    }

    for(var i=0; i<animals.length; i++){
        if (animals[i][0]===huruf){
            arrKecil.push(animals[i])
        }
        else if (animals[i][0]!=huruf){
            arrResult.push(arrKecil);
            arrKecil = [];
            huruf = animals[i][0];
            arrKecil.push(animals[i]);
        }
    }
    arrResult.push(arrKecil);
    return arrResult;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]