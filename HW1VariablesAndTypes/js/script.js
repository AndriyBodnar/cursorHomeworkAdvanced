let firstPrice = 15.678;
let secondPrice = 123.965;
let thirdPrice = 90.2345;
let arrayPrice = [firstPrice, secondPrice, thirdPrice];

let maxPrice = Math.max(firstPrice, secondPrice, thirdPrice);
console.log(maxPrice);

let minPrice = Math.min(firstPrice, secondPrice, thirdPrice);
console.log(minPrice);

//let sumPrice = firstPrice + secondPrice + thirdPrice;
let sumPrice = arrayPrice[0] + arrayPrice[1] + arrayPrice[2];
console.log(sumPrice);

let floorPrice =
  Math.floor(firstPrice) + Math.floor(secondPrice) + Math.floor(thirdPrice);
console.log(floorPrice);

let floorPriceOutput = Math.floor(floorPrice / 100) * 100;
console.log(floorPriceOutput);

if (floorPriceOutput % 2 == 0) {
  var countable = "Even number";
  console.log(countable);
} else {
  countable = "Odd number";
  console.log(countable);
}

let cash = 500;
let remainder = cash - sumPrice;
console.log(remainder);

let avgPrice = (sumPrice / arrayPrice.length).toFixed(2);
console.log(avgPrice);

let discount = (Math.random() * 100).toFixed(0);
let discountPrice = (sumPrice * discount) / 100;
let salePrice = (sumPrice - discountPrice).toFixed(2);
let cost = sumPrice / 2;
let netProfit = (cost - discountPrice).toFixed(2);
console.log(discount);
console.log(discountPrice);
console.log(salePrice);
export console.log(cost);
console.log(netProfit);

let div = document.querySelector(".main__price");
div.innerHTML = `
    <p>Максимальна ціна: <span>${maxPrice}</span></p>
    <p>Мінімальна ціна: <span>${minPrice}</span></p>
    <p>Вартість всіх товарів:<span> ${sumPrice}</span></p>
    <p>Вартість товарів без копійок (заокруглення в меншу сторону):<span> ${floorPrice}</span></p>
    <p>Сума товарів заокруглена до сотень:<span> ${floorPriceOutput}</span></p>
    <p>Сума всіх товарів парна чи непарна -<span> ${countable}</span></p>
    <p>Сума решти з <span> 500 грн </span>: <span> ${remainder}</span></p>
    <p>Середнє значення цін, округлене до другого знаку після коми: <span> ${avgPrice}</span></p>
    <p>Знижка: <span> ${discount} %</span> </p>
    <p>Cобівартість: <span>  ${cost} </span> </p>
    <p>Чистий прибуток: <span>  ${netProfit} </span></p>
`;
