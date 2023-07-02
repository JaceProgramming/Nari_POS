import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedMenus, setSelectedMenus] = useState([]);

  const handleMenuSelect = (menu) => {
    if (selectedMenus.includes(menu)) {
      // Deselect the menu item
      setSelectedMenus((prevSelectedMenus) =>
        prevSelectedMenus.filter((selectedMenu) => selectedMenu !== menu)
      );
    } else {
      // Select the menu item
      setSelectedMenus([...selectedMenus, menu]);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    selectedMenus.forEach((menu) => {
      total += menu.price;
    });
    return total;
  };

  //가격 정리
  let TEN0 = 10000;
  let S0 = 6000;
  let F8 = 4800;
  let F6 = 4600;
  let F5 = 4500;
  let F4 = 4400;
  let F2 = 4200;
  let F0 = 4000;
  let TH8 = 3800;
  let TH6 = 3600;

  const menuList = [
    { id: 1, name: "우유생크림", price: F2 },
    { id: 2, name: "딸기우유", price: F4 },
    { id: 3, name: "슈크림", price: F5 },
    { id: 4, name: "초코우유", price: F6 },
    { id: 5, name: "인절미", price: F6 },
    { id: 6, name: "크림브륄뤠", price: F6 },
    { id: 7, name: "돼지바", price: F8 },
    { id: 8, name: "밤라떼", price: F8 },
    { id: 9, name: "레몬생크림", price: F8 },
    { id: 10, name: "생크림카스테라", price: F8 },
    //
    { id: 11, name: "황치즈", price: TH6 },
    { id: 12, name: "애플잼 크럼블", price: TH8 },
    { id: 13, name: "피넛 딸기잼 크럼블", price: TH8 },
    { id: 14, name: "솔티 초코칩", price: TH8 },
    //
    { id: 15, name: "아이스크림 S", price: F0 },
    { id: 16, name: "아이스크림 M", price: S0 },
    { id: 17, name: "아이스크림 L", price: TEN0 },
  ];

  const menuGroups = [
    menuList.slice(0, 10),
    menuList.slice(10, 14),
    menuList.slice(14, 17),
  ];

  return (
    <div className="app">
      <div className="calculator">
        <p className="CalCulName">의정부 나리꼬모 포스기</p>
        <div className="selection-summary">
          <p>
            Selected Menus: {selectedMenus.map((menu) => menu.name).join(", ")}
          </p>
          <p>Total Selected: {selectedMenus.length}</p>
        </div>
        <div className="total">
          <p>Total: ${calculateTotal()}</p>
        </div>
        <div className="keypad">
          {menuGroups.map((group, index) => (
            <div key={index} className="menu-column">
              {group.map((menu) => (
                <div
                  key={menu.id}
                  className={`menu-item ${
                    selectedMenus.includes(menu) ? "selected" : ""
                  }`}
                  onClick={() => handleMenuSelect(menu)}
                >
                  {menu.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
