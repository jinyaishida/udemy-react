/**
 *  const, let等の変数宣言
 */

//  var val1 = "var変数";
//  console.log(val1)

//  // var変数は上書き可能
//  val1 = "var変数を上書き";
//  console.log(val1)

//  // var変数は再宣言可能
//  var val1 = "var変数を再宣言";
//  console.log(val1)

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言"

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "jun",
//   country: "japan",
// };
// val4.name = "jak";
// val4.addrres = "tokyo"
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * アロー関数
 */

//従来
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("成功"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("アロー関数成功"));

// //省略
// const func3 = (str) => str;

// console.log(func3("省略"));

// //複数
// const func4 = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(func4(10, 20));

/**
 * テンプレート文字列
 * 初期値
 */

// const sayHello = (name = "初期値") => console.log(`こんにちは！${name}さん！`);
// sayHello("ishida")
