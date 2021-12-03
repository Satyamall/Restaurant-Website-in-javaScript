
window.addEventListener("load",()=>{
    const btn = document.getElementById("btn1");
    const fn = ()=>{
           searchFood();
       }
       const debouncedCallback = debouncer(()=>fn(),2000)
       btn.addEventListener("click",debouncedCallback)
    //    btn.addEventListener("click",searchFood);
})

function debouncer(fn, delay){
    let id ;
    return ()=>{
      id && clearTimeout(id);
      id = setTimeout(()=>fn(),delay);
   }
}

const foodData = async (foodName)=>{
    try{
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
      const data = await res.json();
      console.log(data);
      showData(data,foodName);
    }
    catch(err){

    }

}

const searchFood=()=>{
    // e.preventDefault();

    const search = document.getElementById("search1").value;
    foodData(search);
}

function showData(data,foodName){
   const result = document.getElementById("resultItem");
   result.innerHTML = "";
   const content = document.getElementById("search-content");
   content.innerHTML = "";
   const h2= document.createElement("h2");
   h2.textContent = `Your Searching Meal ${foodName}`;
   h2.style.textAlign="center";
   content.append(h2);
   if(data.meals ===null)
   {
       content.innerHTML="";
       h2.textContent = `No Search Meal found for ${foodName}`;
       content.append(h2);
   }
   else{
       result.innerHTML = data.meals.map((food)=>{
           return `<div class="item">
           <img src="${food.strMealThumb}" alt="${food.strMeal}">
           <h3 class="food-name">${food.strMeal}</h3>
           </div>`
       })
   }   

}

const foodItem=async(foodName,boxId)=>{
    try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        const data = await res.json();
        displayData(data,boxId);
      }
      catch(err){
  
      }
}


const displayData=(data,boxId)=>{
    const result = document.getElementById(boxId);
    result.innerHTML = data.meals.map((food)=>{
        return `<div class="item">
        <img src="${food.strMealThumb}" alt="${food.strMeal}">
        <h3 class="food-name">${food.strMeal}</h3>
        </div>`
    })
}

foodItem("sweet","box-1")
foodItem("Burger","box-2")
foodItem("Pizza","box-3")
foodItem("Biryani","box-4")
foodItem("veg-biryani","box-5")
foodItem("chicken","box-6")
foodItem("Beef","box-7")
foodItem("meat","box-8")
foodItem("veg","box-9")
foodItem("food","box-10")