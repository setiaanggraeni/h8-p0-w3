var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
console.log ("Nama Id: " + (input[0][0]));
console.log ("Nama Lengkap: " + (input[0][1]));
console.log ("TTL: " + (input[0][2] + " "+ (input[0][3])));
console.log ("Hobby: " + (input[0][4]));
console.log ("");
console.log ("");
console.log ("Nama Id: " + (input[1][0]));
console.log ("Nama Lengkap: " + (input[1][1]));
console.log ("TTL: " + (input[1][2] + " "+ (input[1][3])));
console.log ("Hobby: " + (input[1][4]));
console.log ("");
console.log ("");
console.log ("Nama Id: " + (input[2][0]));
console.log ("Nama Lengkap: " + (input[2][1]));
console.log ("TTL: " + (input[2][2] + " "+ (input[2][3])));
console.log ("Hobby: " + (input[2][4]));
console.log ("");
console.log ("");
console.log ("Nama Id: " + (input[3][0]));
console.log ("Nama Lengkap: " + (input[3][1]));
console.log ("TTL: " + (input[3][2] + " "+ (input[3][3])));
console.log ("Hobby: " + (input[3][4]));

/*

bisa juga pakai ini untuk yang TTL, tapi hasilnya ada komanya.

input[0].pop();
input[0].shift(0);
input[0].shift(0);
console.log ("TTL: " + (input[0]));

*/