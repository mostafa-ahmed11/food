var search = location.search;
var id = search.replace(`?item=`,``);
var link="https://www.themealdb.com/api/json/v1/1/filter.php?c=";
var htmlContiner =document.getElementById("viwecategory");
var categoryname =document.getElementById("categoryname");
var showMore = document.getElementById("showMore")
var x=8;
call();
function call(){
    fetch(link+id)
.then((res)=>res.json() )
.then((json)=>{
    
    contaner = ``;
    for (const item of json.meals.slice(0,x)) {
        contaner += `<div class="col-md-3 text-light">
        <div>
        <a href="info.html?item=${item.strMeal}"><img src="${item.strMealThumb}" class="w-100 rounded-1" alt=""></a>
          <h3 class="text-center">${item.strMeal}</h3>
        </div>
        </div>`
    }
 htmlContiner.innerHTML=contaner;
 categoryname.innerText=id;
});
}
function viweallCateogry(){
    x=1000;
    call();
    showMore.classList.add("d-none");
}
function calls(){
    var choose = document.getElementById("select").value;
    var page ="info.html?item=";
    location.href=page+choose;
}

