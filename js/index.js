document.addEventListener("DOMContentLoaded", function() {

    document.getElementsByName("submit")[0].onclick = coDanhHam;
       
        var name_error = document.querySelector("form[name='FormIndex'] span[name='title-error']");

    function coDanhHam() {
     	var name = document.querySelector("form[name='FormIndex'] input[name='title']").value;
     	if (name.length === 0) {
     		name_error.innerHTML = "Invalid name";
     		name_error.classList.add("text-danger");
     		return;
     	}else{
     		name_error.innerHTML = "";
     	}
    }

});