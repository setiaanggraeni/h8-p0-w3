// point 1
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
console.log (input);

// point 2
input.splice(2, 0, "Provinsi ");
input.splice(5, 1);
input.splice(6, 0, "Pria");
input.splice(7, 0, "SMA Internasional Metro");
console.log (input);

// point pisah tgl bln
var tanggal = input[4].split("/");
console.log(tanggal);

// point angka kebaca bulan
var lahirBulan = tanggal[1];
var bulan = '';
switch(lahirBulan) {
  case 01: bulan = 'January';
    break;
  case 02: bulan = 'February';
    break;
   case 03: bulan = 'March';
     break;
  case 04: bulan = 'April';
    break;
    case 05: bulan = 'May';
      break;
  case 06: bulan = 'June';
    break;
    case 07: bulan = 'July';
      break;
  case 08: bulan = 'August';
    break;
    case 09: bulan = 'September';
      break;
  case 10: bulan = 'October';
    break;
    case 11: bulan = 'November';
      break;
  case 12: bulan = 'Desember';
    break;
  default:  { console.log('Salah Input Bulan'); }
}
console.log (bulan);

// point decending
var tanggalDecending=tanggal;
tanggalDecending.sort(function(value0, value1, value2) { return value0, value1 < value2});
console.log(tanggalDecending);

// point join
var tanggal;
console.log(tanggal.join('-')); 

// to string and slice
var input;
console.log(input.toString());
var inputTerbaru = input[1].slice(0,15);
console.log(inputTerbaru);