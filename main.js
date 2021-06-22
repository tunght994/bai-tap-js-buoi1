// BÀI TẬP 1
var luongNL = 100000
var soNL = 2
var luongNV = luongNL * soNL
console.log(luongNV)
// BÀI TẬP 2
var a = 1
var b = 1
var c = 1
var d = 1
var e = 1
var tong = (a + b + c + d + e) / 5
console.log(tong)

// BÀI TẬP 3
var giaUSD = 23500
var soUSD = 2 
var tienVND = giaUSD * soUSD
console.log(tienVND)
// BÀI TẬP 4
var cd = 2 
var cr = 3
var chuvi = cd * cr
var dientich = (cd + cr) * 2
console.log(chuvi)
console.log(dientich)
// BÀI TẬP 5
var number = 12;
var tong = 0;

tong += number % 10;
number = Math.floor(number / 10);
tong += number % 10;
tong += Math.floor(number / 10);

console.log(tong);