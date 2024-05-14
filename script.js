const fruits = ["Apple","Orange", "Grapes"];
document.getElementById("outputarray").innerHTML=fruits;

function addElement(){
    let addedElement = document.getElementById("add");
    fruits.push(add.value);
    document.getElementById("outputarray").innerHTML=fruits;
}


function removeElement(){
    let removeableElement = document.getElementById("remove");
    let decision = fruits.includes(removeableElement.value);
    let indexOfElement = fruits.indexOf(removeableElement.value);
    
    if (decision==true)
        {
            delete fruits[indexOfElement];
            document.getElementById("outputarray").innerHTML=fruits;
        }
        else
        {
            alert("No such record!");
            
        }  
}

function ascending(){
    fruits.sort();
    document.getElementById("outputarray").innerHTML=fruits;

}

function descending(){
    fruits.sort().reverse();
    document.getElementById("outputarray").innerHTML=fruits;

}