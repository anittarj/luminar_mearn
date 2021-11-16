var bill_details=[

    {bill_number:1000,date:"17-09-2021",amount:5000,payment_type:"card"},
    {bill_number:1001,date:"17-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1002,date:"17-09-2021",amount:6000,payment_type:"card"},
    {bill_number:1003,date:"17-09-2021",amount:2000,payment_type:"cash"},
    {bill_number:1004,date:"18-09-2021",amount:7000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1006,date:"18-09-2021",amount:3000,payment_type:"cash"},
    {bill_number:1007,date:"18-09-2021",amount:10000,payment_type:"card"},
    {bill_number:1008,date:"19-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1009,date:"19-09-2021",amount:6000,payment_type:"cash"},
]

// sales_report={17-09-2021:17000,18-09-2021:14000,19-09-2021:10000}
var sales_report={}
for(let bill of bill_details){
    let bill_date=bill.date
    let bill_amount=bill.amount
    if(bill_date in sales_report){
        sales_report[bill_date]+=bill_amount
    }
    else{
        sales_report[bill_date]=bill_amount
    }
}
console.log(sales_report);

// sort sales_report based on total collection
sales_report.sort((amt1,amt2)=>amt1[bill_amount]-amt2[bill_amount])
console.log(sales_report);