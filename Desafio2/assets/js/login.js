
var name;

function saveName() {
    name = document.getElementById("name").value;
    console.log(name)

}


function getName(){
    const text = document.createElement("p");
    text.innerHTML = 'Hello, ' + name;

    document.getElementById("home").appendChild(text);
    text.classList.add("title")
}

