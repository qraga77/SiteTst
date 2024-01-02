function pages(arg){
	if (arg)  { $("#page").load("page" + arg + ".html"); }
}

document.addEventListener("DOMContentLoaded", function() {
  	 $("#page").load("page01.html");
  	 
});