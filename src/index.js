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

/**
 * スプレッド構文
 * 配列の展開
 */
// const arr1 = [10, 20];
// const arr2 = [30, 40];

// const arr3 = [...arr1];
// arr3[0] = 100;
// console.log(arr3)
// console.log(arr1)

/**
 * mapとfilter
 */

//  const nameArr = ["田中", "鈴木", "石田"];

//  //returnされた結果に基づいて新しい配列を生成する
// //  const nameArr2 = nameArr.map((name)=>{
// //    return name;
// //  })
// //  console.log(nameArr2)

// //配列をループして処理をする
// nameArr.map((name) => console.log(name));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=> {
//   return num % 2 === 0
// });
// console.log(newNumArr)

// const newNameArr = nameArr.map((name)=> {
//   if(name === "石田") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr)

/**
 * 三項演算子
 */

//ある条件? 条件がtrueの時 : 条件がfalseの時

//  const num = "1300"
//  const formatNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
//  console.log(formatNum)

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "炎上中" : "まだ大丈夫";
};
console.log(checkSum(50, 90));

const num = null;
const fee = num || "金額未設定です";
console.log(fee);
