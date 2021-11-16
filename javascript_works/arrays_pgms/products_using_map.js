var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],
    [106,"goodday",20,70],
    [107,"parle",20,70]
]

// // print number of items in shop
// var c=0;
// var count=products.map((item)=>(item[0])?c=c+1:c)
// console.log(c);

// // print number of available items
// var l=0;
// var avail_products=products.map((item)=>(item[3]>0)?l+=1:l)
// // console.log(avail_products);
// console.log(l);

// // print all product names only
// var item_name=products.map((item)=>item[1]);
// console.log(item_name);

// // print all available products
// var avail_items=products.filter((item)=>(item[3]>0))
// console.log(`available products are`,avail_items);

// // print out of stock products name
// var out_of_stock=products.filter((item)=>(item[3]==0)).map((item)=>item[1])
// console.log(`names of products which are out of stock`,out_of_stock);

// // add offer 5 rs for all products whose stock > 50
// var off_products=products.filter((item)=>(item[3]>50)).map((item)=>([item[1],item[2]-5]))
// console.log(off_products);

// // sort the products price wise in descending order
// products.sort((item1,item2)=>item2[2]-item1[2])
// console.log(products);

// // sort the products stock wise in descending order
// products.sort((item1,item2)=>item2[3]-item1[3])
// console.log(products);

// // print the costly product from the array
// var costly_prdct=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
// console.log(costly_prdct);

// // print the cheapest product from the array
// var low_cost_product=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
// console.log(low_cost_product);

// // reduce.right

// // find - returns the first occurance of that element in the array

// // check whether treat product is present in the array 
// var search_item=products.find(itme=>itme[1]=="treat")
// console.log(search_item);

// // check whether product cost 20 is present in the array
// var search_item=products.find(itme=>itme[2]==20)
// console.log(search_item);

// //check whether we could purchase a product below 10 rupees - return boolean value T/F
// var is_available=products.some(item=>item[2]<10)
// console.log(is_available);

// //print all the names of products from the array
// products.map(item=>item[1]).forEach(names=>console.log(names))

// // print products rupees > 30
// products.filter(item=>item[2]>30).forEach(price=>console.log(price))


