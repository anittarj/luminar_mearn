var products = {
    p_code: 100,
    p_name: "apple",
    p_price: 250,
    aval_qty: 50
}

// print product name
console.log(products.p_name);

// update stock as current stock + 30
products.aval_qty += 30;
console.log(products.aval_qty);

// check for discount key is present
console.log("discount" in products);

// add a discount of 10%
products["discount"] = '10%';
console.log(products);

// check if batch_code is present ; if not add batch_code = est_2k21_09
if ("batch_code" in products) {
    console.log("true");
}
else {
    batch_code = "est_2k21_09"
}
console.log(products);