
const cards = [
    { id: 1,  urgent: "Urgent hiring", department:"Audit",                  positionLevel: "Manager",              position: "Manager - Audit", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 2,  urgent: "Urgent hiring", department:"Audit",                  positionLevel: "Associate Manager",    position: "Associate Manager - Audit", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 3,  urgent: "Urgent hiring", department:"Audit",                  positionLevel: "Senior Associate",     position: "Senior Associate - Audit", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 4,  urgent: "Urgent hiring", department:"Audit",                  positionLevel: "Associate",            position: "Associate - Audit", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 5,  urgent: "Urgent hiring", department:"Accounting",             positionLevel: "Manager",              position: "Manager - Accounting", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 6,  urgent: "Urgent hiring", department:"Accounting",             positionLevel: "Associate Manager",    position: "Associate Manager - Accounting", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 7,  urgent: "Urgent hiring", department:"Accounting",             positionLevel: "Senior Associate",     position: "Senior Associate - Accounting", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 8,  urgent: "Urgent hiring", department:"Accounting",             positionLevel: "Associate",            position: "Associate- Accounting", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 9,  urgent: "Urgent hiring", department:"IT AUDIT",               positionLevel: "Manager",              position: "Manager - IT Audit", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 10, urgent: "Urgent hiring", department:"IT AUDIT",               positionLevel: "Associate Manager",    position: "Associate Manager - IT Audit", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 11, urgent: "Urgent hiring", department:"IT AUDIT",               positionLevel: "Senior Associate",     position: "Senior Associate - IT Audit", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 12, urgent: "Urgent hiring", department:"IT AUDIT",               positionLevel: "Associate",            position: "Associate- IT Audit", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 13, urgent: "Urgent hiring", department:"TAX",                    positionLevel: "Manager",              position: "Manager - Tax", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 14, urgent: "Urgent hiring", department:"TAX",                    positionLevel: "Associate Manager",    position: "Associate Manager - Tax", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 15, urgent: "Urgent hiring", department:"TAX",                    positionLevel: "Senior Associate",     position: "Senior Associate - Tax", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 16, urgent: "Urgent hiring", department:"TAX",                    positionLevel: "All",                  position: "Associate - Tax", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 17, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "Human Resource Manager", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 18, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "Human Resource Supervisor", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 19, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "Senior Recruiter", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 20, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "Recruitment Specialist", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 21, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "Human Resource Specialist", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 22, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "Compensation & Benefits Specialist", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 23, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "Accounting Manager", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 24, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "Accounting Supervisor", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 25, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "Senior Accountant", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 26, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "Accounting Assistant", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 27, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "IT Administrator", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 28, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "IT Support & Implementation Specialist", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 29, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "Marketing Assistant", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
    { id: 30, urgent: "Urgent hiring", department:"Business Operations",    positionLevel: "All",                  position: "Administrative Assistant", company: "Vasquez BPO, Inc", address: "Quezon City", works: ["Full-time", "Monday to Friday"], easyapply: "Easy Apply", context: "From customer-facing functions to back-end operations, a great company recognizes all roles matter. While we expect to excel in our core operations, behind the scene activities can be even more critical and should be given equal importance." },
];

// On Click Search Button
document.querySelector('button').addEventListener('click', function(event) {
    var search = document.getElementById("search").value;
    var position = document.getElementById("position").value;
    var department = document.getElementById("department").value;
    // console.log(search,position,department)
    reloadCards(position,department,search)
});

// On Load
const data = localStorage.getItem('data');
reloadCards("All", (data == "" ? "All" : data),"");
displayMessage();

//Load Cards Function
function reloadCards(positionLevel,department,search){
    var newCards = cards.filter( x => 
        x.positionLevel == (positionLevel == "All" ? x.positionLevel : positionLevel) && 
        x.department == (department == "All" ? x.department : department) &&
        x.position.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
    // clickCard(newCards[0]?.id)
    newCards.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.addEventListener("click", function(event) {
            var rightCard = document.querySelector("#careers-job-data .right .card");
            var applynow = document.querySelector("#careers-job-data .right .applynow");
            
            if (!event.target.classList.contains("applyNowEvent")) {
                // rightCard.classList.remove("hidden");
                // applynow.classList.add("hidden");
                applynow.classList.remove("hidden");
            }
            // clickCard(card.id);
        });
    
        const urgentPara = document.createElement("p");
        urgentPara.classList.add("urgent");
        urgentPara.textContent = card.urgent;
        cardDiv.appendChild(urgentPara);
    
        const positionPara = document.createElement("p");
        positionPara.classList.add("position");
        positionPara.textContent = card.position;
        cardDiv.appendChild(positionPara);
    
        const companyPara = document.createElement("p");
        companyPara.classList.add("company");
        companyPara.textContent = card.company;
        cardDiv.appendChild(companyPara);
    
        const addressPara = document.createElement("p");
        addressPara.classList.add("address");
        addressPara.textContent = card.address;
        cardDiv.appendChild(addressPara);
    
        // const worksDiv = document.createElement("div");
        // worksDiv.classList.add("work");
        // card.works.forEach(work => {
        //     const worksDiv0 = document.createElement("div");
        //     const workPara = document.createElement("p");
        //     workPara.classList.add("full");
        //     workPara.textContent = work;
        //     worksDiv.appendChild(worksDiv0);
        //     worksDiv0.appendChild(workPara);
        // });
        // cardDiv.appendChild(worksDiv);
    
        // const easyApplyPara = document.createElement("p");
        // easyApplyPara.classList.add("easyapply");
        // easyApplyPara.textContent = card.easyapply;
        // cardDiv.appendChild(easyApplyPara);
    
        // const contextPara = document.createElement("p");
        // contextPara.classList.add("context");
        // contextPara.textContent = card.context;
        // cardDiv.appendChild(contextPara);
    
        const applyButton = document.createElement("button");
        applyButton.classList.add("applyNowEvent")
        applyButton.textContent = "Apply Now";
        cardDiv.appendChild(applyButton);
        applyButton.addEventListener("click", function() {

            var rightCard = document.querySelector("#careers-job-data .right .card");
            var applynow = document.querySelector("#careers-job-data .right .applynow");

            // comment temporary
            // rightCard.classList.add("hidden");
            // applynow.classList.remove("hidden");

            // new added temporary
            // rightCard.classList.remove("hidden");
            // applynow.classList.add("hidden");

            applynow.classList.remove("hidden");
        });
    
        cardContainer.appendChild(cardDiv);
    });
}


//click apply now event on right card
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("applyRightCard")) {
        var rightCard = document.querySelector("#careers-job-data .right .card");
        var applynow = document.querySelector("#careers-job-data .right .applynow");
        // rightCard.classList.add("hidden");
        // applynow.classList.remove("hidden");
    }
});


// Click Cards Function
function clickCard(id) {
    var card = cards.find(x=>x.id == id)
    document.querySelector(".right .applynow .position").textContent = card.position
    document.querySelector(".right .card .position").textContent = card.position
    document.querySelector(".right .card .company-address .company").textContent = card.company
    document.querySelector(".right .card .company-address .address").textContent = card.address
    document.querySelector(".right .card .job-details .type").textContent = card.works[0]
    document.querySelector(".right .card .job-details .location").textContent = card.address
    document.querySelector(".right .card .job-details .postion").textContent = card.postion
    document.querySelector(".right .card .job-details .description").textContent = card.context
}

function displayMessage() {
    var position = document.getElementById('position').value;
    var department = document.getElementById('department').value;

    if (position === 'All') {
        document.getElementById('position').options[0].text = 'POSITION LEVEL';
    } else {
        document.getElementById('position').options[0].text = 'All';
    }

    if (department === 'All') {
        document.getElementById('department').options[0].text = 'DEPARTMENT';
    } else {
        document.getElementById('department').options[0].text = 'All';
    }
}