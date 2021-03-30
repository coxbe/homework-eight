var userVarName = "Variable";
var  homeContent = "<h1>HOME</h1><p>This is a page.</p>"
var  aboutContent = "<h1>ABOUT</h1><p>Learn more about us.</p>"
var  productsContent = "<h1>PRODUCTS</h1><p>These are our products. </p>"
var  contactContent = "<h1>CONTACT</h1><p>This is where you can contact us.</p>"
// this is an example of a function, a set of instructions
function  init()  {
    // this is where the instructions go
    // console.log("init here" + userName)
    // console.log stops your website

$("nav a").click(function (e){
    // this is a click listener that will gete  the link id in nav, pure javascript way
    let btnId = this.id;
    let contentID = btnId + "Content";
// console.log("clicked", btnId);
$("#app").html(eval(contentID));


}
);

}

// JQuery: this checks for all  the elements to be read by the server
$(document).ready(function () {
// alert("HEY!! It works")
init();
});
