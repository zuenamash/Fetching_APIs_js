fetch('http://localhost:5500/products')
.then(function(response) {
    return response.json();
})
.then(function(goods) {
 console.log(goods);

let prod = document.getElementById('products')
goods.forEach(goodsList=> {
    let display = document.createElement('li')
    display.innerText = `${goodsList.name}`
    display.style.cssText = `
    display:flex;
    style: none;
    font-size: 18px;
    padding:10px;
    display: inline; 
    width: 100px; 
    height: 100px;
    padding: 5px;
    border: 1px solid white;
    background-color: olive;
      
      
    `
    prod.appendChild(display)
})
})
.catch(function(error){
 console.log('error',error);
});
document.getElementById("products").style.cssText = `
  display: flex; 
`;

fetch('http://localhost:5500/products/fruits')
.then(function(response) {
    return response.json();
})
.then(function(matunda) {
 console.log(matunda);

let products = document.getElementById('fruList')
matunda.forEach(goodsList=> {
    let listItem = document.createElement('li')
    listItem.innerText = `${goodsList.name}`
    listItem.style.cssText = `
    display:flex;
    style: none;
    padding:10px;display: inline-block;
    width: 100px;
    height: 100px;
    font-size: 18px;
    padding: 5px;
    border: 1px solid white;
    background-color: orange;
    `
    products.appendChild(listItem)
})
})
.catch(function(error){
 console.log('error',error);
});
document.getElementById("fruList").style.cssText = `
  display: flex; 
`;

fetch('http://localhost:5500/products/vegetables')
.then(function(response) {
    return response.json();
})
.then(function(vegetable) {
 console.log(vegetable);

let products = document.getElementById('vegList')
vegetable.forEach(vegLst=> {
    let greens = document.createElement('li')
    greens.innerText = `${vegLst.name}`
    greens.style.cssText = `
    display:flex;
    style: none;
    display_contentent:center;
    padding:10px;display: inline-block;
    width: 100px;
    font-size: 18px;
    height: 100px;
    padding: 5px;
    border: 1px solid white;
    background-color: darkgreen
    `
    products.appendChild(greens)
})
})
.catch(function(error){
 console.log('error',error);
});
document.getElementById("vegList").style.cssText = `
  display: flex; 
`;