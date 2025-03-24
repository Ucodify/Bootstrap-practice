//const array={1,2,3,4,5};
const even=(element)=>element/2===0;
console.log(array.some(even));
//onBlur
function myonBlur(){
    var x=document.getElementById("fname");
    x.value=x.value.toUpperCase();
}
const form = document.getElementById('form');
form.addEventListener('focus',(event)=>{
    event.target.style.background='purple';
    event.target.style.color='white';
},true);
form.addEventListener('blur',(event)=>{
    event.target.style.background='blue';
},true);
function onChange(){
    const x=document.querySelector("#fname")
    x.value=x.value.toUpperCase();
}
//@@@@@@@@ OnChange2
const selectElement=document.querySelector("ice-cream");
selectElement.addEventListener('change',(event)=>(
    const result=document.querySelector('result');
    result.textContent='You Like"S{event.targetvalue}"');
//@@@@@@ Onchange3
function prefferedBrowser(){
    prefer=document.form(0).browser.value;
    alert("You Prefer Browser Internet with"+prefer);
}
//@@@@@@ on Focus 1
function myfunction(x){
    x.style.background="yellow";
    x.style.color="red";
}
//@@@@@@ on Focus 2
let input= document.querySelector('input');
function inputBlur(){
    input.value='Focus has been lost';
}
function inputFocus(){
    input.value='Focus is here';
}
input.onblur=inputBlur;
input.onfocus=inputFocus;
//@@@@@ on Submit 1
function confirmInput(){
    fname=document.form(0).fname.value;
    alert('Hello'+fname);
}
//@@@@@ on Submit 2
const form=document.getElementById('form');
const error=document.getElementById('error');
const city=document.getElementById('city');
const email=document.getElementById('email');
const thanks=document.getElementById('thanks');
city.oninvalid=invalid;
email.oninvalid=invalid;
form.onsubmit=submit;

function invalid(event){
    error.removeAttribute('hidden');
}
function submit(event)
{
    form.setAttribute('hidden','');
    thanks.removeAttribute('hidden');
    event.preventDefault();
}
document.write("Hello Momin..!");
document.log("Hello Momin..!");
//DataTypes in Javascript
cost f;
let a;
var a;
var a=10;
var b="Momin";
var c=10.78;
var d=true;
let h=10;(scope within a function/(oflet)) 
functionadd(){
    var f=a+c;
}
document.write("Add a and c;"+f);
//concatenation me + ki bajaye, b use krskte hain
//document.write ki jaga console.log b use krskte hain alert b use krskte hain
console.log("Add a and c"+f);
document.write("Type of method check a"+typeof(a)+"</br/>");//number
document.write("Type of method check b"+typeof(b)+"</br/>");//String
document.write("Type of method check c"+typeof(c)+"</br/>");//number
document.write("Type of method check d"+typeof(d)+"</br/>");//boolean
alert("Add a and c:",f);
function sayHello(){
    //user-defined function/method
    let a=2;
    let b=5;
    let z;
    z=a+b;
    alert("Hello! This is our first function sum of a and b is:"+z);
    console.log("Hello! This is our....");
    document.write("Hello.....");
    document.getElementById(sumId);
    <p id="sumId">Show output of sum</p>
    console.log('Hello! This is our first function sum of a and b is: ${z}');
    console.log("Hello This is our first function sum of a and b is:",z);
    document.getElementById("sumId").innerHTML;
    document.querySelector("#sumId").innerHTML;
    document.getElementsByClassName("sumClass").innerHTML;
    <p class="sumclass">Show output</p>
    document.querySelector("sumClass").innerHTML;
    .overflow-fix{
        overflow:scroll;
        width:300px;
        length:300px;
    }
    function reverse(){
        var r=prompt;
    }
    function list(){
        var htm="<tr>";
        for(var i=0; i<arr.length;i++){
            htm+="<td>" + arr[i][0] + "</td>";
            htm+="<td>" + arr[i][1] + "</td>";
            htm+="<td>" + arr[i][2] + "</td>";
            htm+="<td>" + arr[i][3] + "</td>";
            htm+="<td>" + arr[i][4] + "</td>";
            htm+="<td>" + arr[i][5] + "</td>";
            htm+='<td><span onclick="remove(' + i + ')" style="cursor: pointer; color: red;">Delete</span></td>'
            htm+='<td><span onclick="edit(' + i + ')" style="cursor: pointer; color: red;">Edit</span></td>'
        }
        document.getElementById('row').innerHTML=htm;
    }
//*****Edit Function */
function edit(id){
    document.getElementById('fname').value = arr[id][0];
    document.getElementById('sname').value = arr[id][1];
    document.getElementById('phone').value = arr[id][2];
    document.getElementById('detail').value = arr[id][3];
    arr.splice(id,1);
    list();
}
//******Remove Function */
function remove(id){
    var result= confirm('Are you sure you want to delete it?');
    if(result==true){
        arr.splice(id,1)
        alert('Deleted!');
        list();
    }
}

}