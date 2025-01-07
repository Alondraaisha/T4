document.write("------External script------<br>")
document.write("<h1>hello how are you ?</h1>")

// key words --> var , let , const
// var --> can be redeclared and reassign
// let --> can be redeclared but not reassign
// const --> cannot be redeclared and reassign

// globel and local scope...
/* 
1. globel scope : accesable to anywhere in script
2. local scope : accessable to perticuler function

------------------------------------------------------
~identifier : must start with _ $ ltter (case sensitive)

--------------------------------------------------------
CONST const can not reassign 

-------------------DATA TYPE---------------------------------
1. pre define data type (primitive) : number , string , boolean , undefine , null
2. user deifine data type (non primitive):

example 
m=10 (number)
m="aisha"(string)

== --> comapre value
=== --> check value and also data type.
*/

var x=20
function func1()
{
    var x=10
    document.write(x)
}
document.write(x+"<br>")
func1()

document.write("-------------------------------------------------------------------------<br>")
var a=10
function f1(){
    var b=20
    console.log(a,b)
}
f1()
console.log(a)
// console.log(b)
document.write("-------------------------------------------------------------------------<br>")
var a=100
var a=200
a=30
// let a =40
console.log(a)

document.write("-------------------------------------------------------------------------<br>")
let a1=20
console.log(a1)
// let a1=30
// here once we declare variable using let then after we cannot redeclare

// Const
// const ap=10
// function f2(){
//     ap=22 //TypeError: Assignment to constant variable.
//     console.log(ap)
// }
// f2()
const a2=10
function f3(){
    const a2=22 //TypeError: Assignment to constant variable.
    console.log(a)
}
f3()
