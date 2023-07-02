// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [result, setResult] = useState("");
//   const [ColorChanged, setColorChanged] = useState(false);

//   const handleClick = (e) => {
//     const buttonValue = e.target.name;
//     const operators = ["+", "-", "*", "/"];

//     console.log(operators.includes(buttonValue));

//     if (operators.includes(buttonValue) && result === "") {
//       // Prevent operators from being the first input
//       return;
//     }

//     setResult((prevResult) => prevResult + buttonValue);
//   };

//   const handleReset = () => {
//     setResult("");
//   };

//   const calculate = () => {
//     try {
//       // Use the Function constructor instead of eval()
//       const calculatedResult = new Function("return " + result)();
//       setResult(calculatedResult.toString());
//     } catch (error) {
//       setResult("Error");
//     }
//   };

//   const MinusColor = () => {
//     setColorChanged(!ColorChanged);
//   };

//   //가격 정리
//   let TEN0 = 10000;
//   let S0 = 6000;
//   let F8 = 4800;
//   let F6 = 4600;
//   let F5 = 4500;
//   let F4 = 4400;
//   let F2 = 4200;
//   let F0 = 4000;
//   let TH8 = 3800;
//   let TH6 = 3600;

// const menuList = [
//     { id: 1, name: "우유생크림", price: F2 },
//     { id: 2, name: "딸기우유", price: F4 },
//     { id: 3, name: "슈크림", price: F5 },
//     { id: 4, name: "초코우유", price: F6 },
//     { id: 5, name: "인절미", price: F6 },
//     { id: 6, name: "크림브륄뤠", price: F6 },
//     { id: 7, name: "돼지바", price: F8 },
//     { id: 8, name: "밤라떼", price: F8 },
//     { id: 9, name: "레몬생크림", price: F8 },
//     { id: 10, name: "생크림카스테라", price: F8 },
//     //
//     { id: 11, name: "황치즈", price: TH6 },
//     { id: 12, name: "애플잼 크럼블", price: TH8 },
//     { id: 13, name: "피넛 딸기잼 크럼블", price: TH8 },
//     { id: 14, name: "솔티 초코칩", price: TH8 },
//     //
//     { id: 15, name: "아이스크림 S", price: F0 },
//     { id: 16, name: "아이스크림 M", price: S0 },
//     { id: 17, name: "아이스크림 L", price: TEN0 },
//   ];

//   return (
//     <div className="app">
//       <div className="calculator">
//         <p className="CalCulName">나리꼬모 계산기</p>
//         <input type="text" value={result} readOnly />
//         <div className="keypad">
//           {/* Donut */}
//           <div className="row">
//             {/* 4.8 */}
//             <button
//               className="MenuBtn BtnColor"
//               name={F8}
//               onClick={handleClick}
//             >
//               <br />
//               4.8
//             </button>
//             <button
//               className="MenuBtn BtnColor"
//               name={F8}
//               onClick={handleClick}
//             >
//               레몬 생크림
//               <br />
//               4.8
//             </button>
//             <button
//               className="MenuBtn BtnColor"
//               name={F8}
//               onClick={handleClick}
//             >
//               밤라떼
//               <br />
//               4.8
//             </button>

//             {/* 4.6 */}
//             <button
//               className="MenuBtn BtnColor"
//               name={F6}
//               onClick={handleClick}
//             >
//               인절미
//               <br />
//               4.6
//             </button>
//             <button
//               className="MenuBtn BtnColor"
//               name={F6}
//               onClick={handleClick}
//             >
//               크림브륄레
//               <br />
//               4.6
//             </button>
//             <button
//               className="MenuBtn BtnColor"
//               name={F6}
//               onClick={handleClick}
//             >
//               초코우유
//               <br />
//               4.6
//             </button>
//             {/* 4.5 */}
//             <button
//               className="MenuBtn BtnColor"
//               name={F5}
//               onClick={handleClick}
//             >
//               슈크림
//               <br />
//               4.5
//             </button>
//             {/* 4.4 */}
//             <button
//               className="MenuBtn BtnColor"
//               name={F4}
//               onClick={handleClick}
//             >
//               딸기우유
//               <br />
//               4.4
//             </button>
//             {/* 4.2 */}
//             <button
//               className="MenuBtn BtnColor"
//               name={F2}
//               onClick={handleClick}
//             >
//               우유생크림
//               <br />
//               4.2
//             </button>
//           </div>
//           {/* Cookie */}
//           <div className="row">
//             <button className="MenuBtn" name={F5} onClick={handleClick}>
//               약과쿠키
//               <br />
//               4.5
//             </button>
//             <button className="MenuBtn" name={TH8} onClick={handleClick}>
//               애플잼 크럼블
//               <br />
//               3.8
//             </button>
//             <button className="MenuBtn" name={TH8} onClick={handleClick}>
//               피넛 딸기잼 크럼블
//               <br />
//               3.8
//             </button>
//             <button className="MenuBtn" name={TH8} onClick={handleClick}>
//               솔티 초코칩
//               <br />
//               3.8
//             </button>
//             <button className="MenuBtn" name={TH6} onClick={handleClick}>
//               황치즈
//               <br />
//               3.6
//             </button>

//             <button className="Invisible" name={TH6}>
//               <br />
//               <br />
//             </button>

//             <button className="MenuBtn" name={F0} onClick={handleClick}>
//               아이스크림 S
//               <br />
//               4.0
//             </button>
//             <button className="MenuBtn" name={S0} onClick={handleClick}>
//               아이스크림 M
//               <br />
//               6.0
//             </button>
//             <button
//               className={`MenuBtn ${ColorChanged ? "minus" : ""}`}
//               name={TEN0}
//               onClick={handleClick}
//             >
//               아이스크림 L
//               <br />
//               10.0
//             </button>
//           </div>
//           {/* Operator */}
//           <div className="row">
//             <button className="OperBtn reset" onClick={handleReset}>
//               AC
//             </button>
//             <button className="OperBtn plus" name="+" onClick={handleClick}>
//               &#43;
//             </button>

//             <button
//               className="OperBtn minus"
//               name="-"
//               onClick={(e) => {
//                 handleClick(e);
//                 MinusColor();
//               }}
//             >
//               &minus;
//             </button>
//             <button className="OperBtn equal" onClick={calculate}>
//               &#61;
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

/* App.css */
// .app {
//     display: flex;
//     align-items: center;
//     height: 100vh;
//   }

//   .calculator {
//     background-color: #f3f3f3;
//     border-radius: 10px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//     padding: 10px;
//     /* width:50%; */
//     /* max-width: 100%; */
//   }

//   .CalCulName {
//     text-align: right;
//   }

//   input[type="text"] {
//     width: 100%;
//     margin-bottom: 10px;
//     padding: 10px;
//     text-align: right;
//     font-size: 15px;
//     border: none;
//     background-color: #fff;
//     border-radius: 5px;
//   }

//   .keypad {
//     display: grid;
//     grid-template-columns: 2fr 2fr 1fr ;
//     grid-gap: 3px;

//   }

//   .MenuBtn, .OperBtn{
// width: 100%;
// padding: 10px;

// text-align: center;
// border-radius: 5px;
// cursor: pointer;

// border-color: black;
// border-width: 1px;
//   }

//   .MenuBtn {
// font-size: 15px;
// margin-bottom: 5px;
// background-color: #eee;
//   }

//   .OperBtn{
//     font-size: 20px;
//     height: 10%;
//     margin-bottom: 20px;
//   }

//   .reset {
//     background-color: #ffbd03;
//     color: black;
//   }

//   .plus {
//     background-color: #4681f4;
//     color: black;
//   }

//   .minus {
//     background-color: #dd7973;
//     color: black;
//   }

//   .equal {
//     background-color: #44d25c;
//     color: black;
//   }

//   .Invisible{
//     width: 100%;
//     padding: 10px;
//     font-size: 15px;
//     text-align: center;
//     border-radius: 5px;

//     margin-bottom: 5px;

//     background-color: #f3f3f3;
//     border-color: #f3f3f3;
//     border-width: 1px;
//   }
