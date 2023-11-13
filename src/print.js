 function printMe(){
    console.log('I get called from print.js!');
    alert("wow this is amazing")

    const btn = document.querySelector(".myButton");
    btn.style.cssText=`padding: 10px 20px;`
}

export default printMe;