//your JS code here. If required.
const li = document.getElementsByTagName("li");

let ind = 0;
for(let i=0; i<li.length; i++){
  if(li[i].id === "level"){
  ind = i;
  break;
    }
}
console.log(ind+1);