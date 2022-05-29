// Store cart items in local storage with key: "items"
fetch("https://grocery-masai.herokuapp.com/items").then(res=>res.json()).then(result=>{
    displayItems(result.data);

    let items  = localStorage.getItem('items')|| '[]';
    items = JSON.parse(items);

    document.querySelector("#item_count").innerHTML = items.length;
});

function displayItems(data){
    data.map(v=>{
 const container=document.createElement("div")

 const image=document.createElement("image")
 image.setAttribute("src",v.image)

 const item_name =document.createComment("p")
 item_name.innerHTML=v.item_name
 
 const price=document.createComment("p")
 price.innerHTML=v.price
 

    })
}