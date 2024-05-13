var search = location.search;
var id = search.replace(`?item=`,``);
var link="https://www.themealdb.com/api/json/v1/1/search.php?s=";
var htmlContiner =document.getElementById("viweitem")
fetch(link+id)
.then((res)=>res.json() )
.then((json)=>{
    
    contaner = ``;
    for (const item of json.meals.slice(0,1)) {
        contaner += `<div class="col-md-6">
        <img class="img-fluid rounded-1 w-100" src="${item.strMealThumb}" alt="">
       </div>
       <div class="col-md-6">
       <ul class="text-light mt-5 fs-3 list-unstyled">
         <li><span class=" text-warning fw-bold">Name</span> : ${item.strMeal}</li>
         <li><span class=" text-warning fw-bold">category</span> : ${item.strCategory}</li>
         <li><span class=" text-warning fw-bold">area</span> : ${item.strArea}</li>
         <li><span class=" text-warning fw-bold">describtion</span> : ${item.strInstructions.substr(0,300)}</li>
         <li><span class=" text-warning fw-bold">Youtube link</span> : <a class="  text-danger" target="_blank" href="${item.strYoutube}">click to viwe</a></li>
       </ul>
       </div>`
    }
 htmlContiner.innerHTML=contaner;
 
})
function call(){
  var choose = document.getElementById("select").value;
  var page ="info.html?item=";
  location.href=page+choose;
}
