let text=document.getElementById("textinput").value;
let btn=document.getElementById("btn");
let from=document.getElementById("fromitem");
let listitem=document.getElementById("listitem");



from.addEventListener("submit",myfun);
function myfun(e)
{
   let text=document.getElementById("textinput").value;
   let listitem=document.getElementById("listitem");
   e.preventDefault();
   let li=document.createElement("li");
   let div1=document.createElement("div");
   let div2=document.createElement("div");
   let div3=document.createElement("div");
   let div4=document.createElement("div");
   let i1=document.createElement("i");
   let i2=document.createElement("i");
   li.className="list";
   div1.className="let";
   div2.className="icons";
   div4.className="cross";
   i1.className="fa-sharp fa-solid fa-pen-to-square";
   i2.className="fa-sharp fa-solid fa-xmark";
   div3.setAttribute("onclick","replace(event)")
   div4.setAttribute("onclick","remove(event)")
   div1.innerHTML=text;
   li.append(div1);
   li.append(div2);
   div2.append(div3);
   div2.append(div4);
   div3.append(i1);
   div4.append(i2);
   listitem.append(li);
};

      // heading color changer

let body=document.querySelector("body");
body.addEventListener("click",myspan);
function myspan(e)
{
   var span=document.querySelector(".span");
   span.style.color="rgb("+e.clientX+","+e.clientY+",100)";
};


     //removing element
function remove(e)
{
   e.target.parentNode.parentNode.parentNode.remove();
}


       // edit

 function replace(e)
 {
let count=e.target.parentElement.parentElement.parentNode.firstElementChild;
count.innerHTML=`<input type="text" id="te" placeholder="Edit..." autocomplete="off" style="outline:none;border:none;width:150px; padding:5px 8px;border-radius:10px;font-family:Britannic Bold; font-size:15px;font-weight:bold;"> <button style="outline:none;border:none; padding:5px 8px;border-radius:10px;font-family:Britannic Bold;fontt-size:15px;font-weight:bold;background-color: rgba(58,248,39,0.8);cursor: pointer;border:1px solid black;" class="btn" onclick="mysub(event)"> Done </button>`;
let btn=document.querySelector(".btn");
btn.addEventListener("click" , mysub)

function mysub()
{
   let count=e.target.parentElement.parentElement.parentNode.firstElementChild;
   let texx=document.getElementById("te").value;
   count.innerHTML=`${texx}`;
  
}
}
