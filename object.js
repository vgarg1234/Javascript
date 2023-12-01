// Object:- In Object the data will store in key value pair.


var student=
{
    Name : "Vatsal",
    Course: "B.tech",
    City : " Mathura",
    College: "GLA UNIVERSITY",
    Age: 20,

}

console.log(student.Name);

console.log(student["Age"]);

x="Age"; student[x]
console.log(x);

for(var Age in student);{
    console.log(`${""}: ${student[""]}`);
}






