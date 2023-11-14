 function defineElement (elementName,className,elementContent){
    // console.log('I get called from print.js!');
    // alert("wow this is amazing")
    
    const element = document.createElement(elementName || "div");
    element.classList.add(className || "nothing");
    element.innerText = elementContent || "";
    // element.setAttribute("placeholder","this is the text")
    return element;
}

export  {defineElement};