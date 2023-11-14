import './style.css';
import {defineElement} from './define.js';
import close_btn from './close_btn.png';

function component() {
    const element = defineElement('div',"searchHeader","");
    
    element.append(input,button);
    return element;
}
//defineElement(elementName,className,textContent)
const button = defineElement("button","btn","Add Me");
const input = defineElement("input","input-title","");
input.setAttribute("placeholder","Title");

const ul = defineElement("ul","ul","");

button.addEventListener("click",
// ()=>{console.log("not clickd")}
createList
)

function createList(){
    console.log("yea it's clicked");
    console.log(input.value);
    const li = defineElement("li","li","")
    const inputs = defineElement("input","input-titles","");
    inputs.value = input.value;
    const close = defineElement("div","close","");
    
    const image = defineElement("img","closeBtn","");
    image.setAttribute("src",close_btn)

    close.append(image);

    image.addEventListener("click",
    // ()=>{console.log("clicked on the image")}
    removeList
    )

    function removeList(){
        li.remove();
    }

    const checkBox = defineElement("input","input-checkbox","");
    checkBox.setAttribute("type","checkbox");

    checkBox.addEventListener("click",
    // ()=>{console.log("clicked checkbox")}
    checkboxFunction
    )

    function checkboxFunction(){
      if(checkBox.checked){
        console.log("yea it is checked");
        inputs.style.cssText="text-decoration:line-through"
      }
      else{
        inputs.style.cssText="text-decoration:none";
      }  
        
    }


    inputs.addEventListener("click",createTextArea,{once:true})
    // inputs.addEventListener("click",createTextArea)
    
    
    function createTextArea(){
        const inputArea = defineElement("textarea","textarea",""); 
        li.append(inputArea);
        
    }
    li.append(checkBox,inputs,close);
    ul.append(li);
}



document.body.append(component(),ul);