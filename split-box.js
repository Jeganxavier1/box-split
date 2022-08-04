const box= document.querySelector(".box");
box.addEventListener("click",a)

function a (){
    const box= document.querySelector(".box");

    const div1 = document.createElement("div");
    div1.id="cell1";
    div1.addEventListener("click",b);
    const div2 = document.createElement("div");
    div2.id="cell2";
    div2.addEventListener("click",c);
    const div3 = document.createElement("div");
    div3.id="cell3";
    div3.addEventListener("click",d);
    const div4 = document.createElement("div");
    div4.id="cell4";
    div4.addEventListener("click",e);

    box.style.display="grid";
    box.style.gridTemplateColumns="100px 100px";
    box.style.gridTemplateRows="100px 100px";

    box.appendChild(div1);
    box.appendChild(div2);
    box.appendChild(div3);
    box.appendChild(div4);
    console.log(box)
}

function b(e){
    const smallDiv = document.getElementById("cell1");

    const smallDiv1 =document.createElement("div");
    smallDiv1.className="smallCell1";
    const smallDiv2 =document.createElement("div");
    smallDiv2.className="smallCell2";
    const smallDiv3 =document.createElement("div");
    smallDiv3.className="smallCell3";
    const smallDiv4 =document.createElement("div");
    smallDiv4.className="smallCell4";

    smallDiv.style.display="grid";
    smallDiv.style.gridTemplateColumns="50px 50px";
    smallDiv.style.gridTemplateRows="50px 50px";

    smallDiv.appendChild(smallDiv1);
    smallDiv.appendChild(smallDiv2);
    smallDiv.appendChild(smallDiv3);
    smallDiv.appendChild(smallDiv4);

    e.stopPropagation();
}
function c(e){
    const smallDiv = document.getElementById("cell2");

    const smallDiv1 =document.createElement("div");
    smallDiv1.className="smallCell1";
    const smallDiv2 =document.createElement("div");
    smallDiv2.className="smallCell2";
    const smallDiv3 =document.createElement("div");
    smallDiv3.className="smallCell3";
    const smallDiv4 =document.createElement("div");
    smallDiv4.className="smallCell4";

    smallDiv.style.display="grid";
    smallDiv.style.gridTemplateColumns="50px 50px";
    smallDiv.style.gridTemplateRows="50px 50px";

    smallDiv.appendChild(smallDiv1);
    smallDiv.appendChild(smallDiv2);
    smallDiv.appendChild(smallDiv3);
    smallDiv.appendChild(smallDiv4);
    e.stopPropagation();
}
function d(e){
    const smallDiv = document.getElementById("cell3");

    const smallDiv1 =document.createElement("div");
    smallDiv1.className="smallCell1";
    const smallDiv2 =document.createElement("div");
    smallDiv2.className="smallCell2";
    const smallDiv3 =document.createElement("div");
    smallDiv3.className="smallCell3";
    const smallDiv4 =document.createElement("div");
    smallDiv4.className="smallCell4";

    smallDiv.style.display="grid";
    smallDiv.style.gridTemplateColumns="50px 50px";
    smallDiv.style.gridTemplateRows="50px 50px";

    smallDiv.appendChild(smallDiv1);
    smallDiv.appendChild(smallDiv2);
    smallDiv.appendChild(smallDiv3);
    smallDiv.appendChild(smallDiv4);
    e.stopPropagation();
}
function e(e){
    const smallDiv = document.getElementById("cell4");

    const smallDiv1 =document.createElement("div");
    smallDiv1.className="smallCell1";
    const smallDiv2 =document.createElement("div");
    smallDiv2.className="smallCell2";
    const smallDiv3 =document.createElement("div");
    smallDiv3.className="smallCell3";
    const smallDiv4 =document.createElement("div");
    smallDiv4.className="smallCell4";

    smallDiv.style.display="grid";
    smallDiv.style.gridTemplateColumns="50px 50px";
    smallDiv.style.gridTemplateRows="50px 50px";

    smallDiv.appendChild(smallDiv1);
    smallDiv.appendChild(smallDiv2);
    smallDiv.appendChild(smallDiv3);
    smallDiv.appendChild(smallDiv4);
    e.stopPropagation();
}



