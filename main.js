// External - File ngoài
// Internal - Mở thẻ <script></script>
// Inline - Code trong thẻ luôn

// let student1 = "Nguyễn Thị Zun Zun";
// let student2 = "Nguyễn Văn Thu";
// let student3 = "Phát Xít Đức";
// let student4 = "Hồng Liên Xô";
//
// document.write(student1 + "<br>");
// document.write(student2 + "<br>");
// document.write(student3 + "<br>");
// document.write(student4 + "<br>");

//Lười, không muốn khai báo nhiều
// let students = ["Zun","Thu","Phát","Hồng"];
//Mảng thì chứa các phần tử
//Các phần tử thì có 2 chỉ số:
// Độ dài mảng - students.length
// - Vị trí - Bắt đầu từ 0 -> length - 1;
// - Giá trị
// alert(students[0]);
// document.write(students);
//
// for (let i = 0; i < students.length; i++) {
//     document.writeln("Student "+(i+1)+": " + students[i]);
// }

let values = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
let suites = ["C","D","H","S"];

// let str = "";
// for (let i = 0; i < values.length; i++) {
//     for (let j = 0; j < suites.length; j++) {
//         let img = "card-deck/images/"+values[i]+suites[j]+".jpg";
//        str += `<img width="100px" height="auto" src="${img}" alt=""/>`;
//         // str += "<img src='${img}'>";
//     }
// }
// // document.getElementById('cards').innerHTML = str;
// document.write(str)

let students = ["Zun","Thu","Phát","Hồng"];
students[students.length] = "Tuấn";
students[students.length] = "Hà";

//Thêm vào đầu
for (let i = students.length; i > 0 ; i--) {
    students[i] = students[i-1];
}

students[0] = "Thành";

//Thêm vào vị trí index
let index = 2
for (let i = students.length; i > index ; i--) {
    students[i] = students[i-1];
}

students[index] = "Huy";
console.log(students)

//Xoá cuối
students.length--;
console.log(students);

//Xoá đầu
for (let i = 0; i < students.length; i++) {
    students[i] = students[i+1];
}
students.length--;
console.log(students);

//Xoá ở vị trí index2
let index2 = 2;
for (let i = index2; i < students.length; i++) {
    students[i] = students[i+1];
}
students.length--;
console.log(students);


let arr1 = [];

let arr2 = new Array();//Đối tượng

let arr3 = new Array(100).fill(0);
console.log(arr3);
