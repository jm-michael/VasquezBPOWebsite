//click apply now event on right card
document.addEventListener("click", function(event) {

    localStorage.setItem('data',"");

    if (event.target.classList.contains("6th-Accounting")) {
    localStorage.setItem('data',"Accounting");
    } 

    else if (event.target.classList.contains("6th-Audit")) {
        localStorage.setItem('data',"Audit");
    } 
    
    else if (event.target.classList.contains("6th-ITAudit")) {
        localStorage.setItem('data',"IT AUDIT");
    } 
    
    else if (event.target.classList.contains("6th-Tax")) {
        localStorage.setItem('data',"TAX");
    } 
    
    else if (event.target.classList.contains("6th-View-All")){
        localStorage.setItem('data',"All");
    }

    if (localStorage.getItem("data")) {
        window.location.href = "careers-job-board.html"
    }
});