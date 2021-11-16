var student={
    roll:100,
    name:"anitta",
    course:"bca",
    total:750
}

// print student name
console.log(student.name);

// print course name of student 
console.log(student.course);

// check for grade key is present or not
console.log("grade" in student);

// add new key value pair (grade,a+)
student["grade"]="A+"
console.log(student);

// add 20 marks of bonus
student["total"]=student.total+20
console.log(student);

// update student total to 800
student.total=800
console.log(student);

// 
if("batch" in student){
    console.log("true");
}
else{
    student.batch="mearnstack_aug";
}
console.log(student);

for(let key in student){
    console.log(key);
    console.log(student[key]);
}