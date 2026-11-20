
window.onload=function(){

    let loginForm=document.getElementById("indexForm");

    if(loginForm){

        loginForm.onsubmit=function(event){

            event.preventDefault();

            let email=loginForm.elements["email"].value.trim();
            let password=loginForm.elements["password"].value.trim();

            let valid=true;

            if(email===""){
                document.getElementById("errorLoginEmail").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorLoginEmail").style.display="none";
            }

            if(password===""){
                document.getElementById("errorLoginPassword").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorLoginPassword").style.display="none";
            }

            if(valid){
                window.location.href="finder-dashboard.html";
            }

        };
    }

//found report


    let reportForm=document.getElementById("reportForm");
    let reportTable=document.getElementById("reportTable");

    let editRow=null;

    if(reportForm){

        reportForm.onsubmit=function(event){

            event.preventDefault();

            let name=reportForm.elements["item_name"].value.trim();
            let category=reportForm.elements["category"].value;
            let description=reportForm.elements["description"].value.trim();
            let location=reportForm.elements["location"].value.trim();
            let date=reportForm.elements["found_date"].value;
            let availability=reportForm.elements["availability"].value;

            let valid=true;

            if(name===""){
                document.getElementById("errorItemName").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorItemName").style.display="none";
            }

            if(category===""){
                document.getElementById("errorCategory").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorCategory").style.display="none";
            }

            if(description===""){
                document.getElementById("errorDescription").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorDescription").style.display="none";
            }

            if(location===""){
                document.getElementById("errorLocation").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorLocation").style.display="none";
            }

            if(date===""){
                document.getElementById("errorFoundDate").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorFoundDate").style.display="none";
            }

            if(valid){

                if(editRow===null){

                    let row=reportTable.insertRow();

                    row.insertCell(0).textContent=name;
                    row.insertCell(1).textContent=category;
                    row.insertCell(2).textContent=location;
                    row.insertCell(3).textContent=date;
                    row.insertCell(4).textContent=availability;

                    row.dataset.description=description;

                    let actionCell=row.insertCell(5);

                    let editButton=document.createElement("button");

                    editButton.textContent="Edit";
                    editButton.className="edit";

                    editButton.onclick=function(){

                        reportForm.elements["item_name"].value=row.cells[0].textContent;
                        reportForm.elements["category"].value=row.cells[1].textContent;
                        reportForm.elements["location"].value=row.cells[2].textContent;
                        reportForm.elements["found_date"].value=row.cells[3].textContent;
                        reportForm.elements["availability"].value=row.cells[4].textContent;
                        reportForm.elements["description"].value=row.dataset.description;

                        editRow=row;

                        reportForm.querySelector('[type="submit"]').textContent="Save Changes";

                    };

                    actionCell.appendChild(editButton);

                    let deleteButton=document.createElement("button");

                    deleteButton.textContent="Delete";
                    deleteButton.className="danger";

                    deleteButton.onclick=function(){

                        if(editRow===row){
                            editRow=null;
                            reportForm.reset();
                            reportForm.querySelector('[type="submit"]').textContent="Submit";
                        }

                        row.remove();

                    };

                    actionCell.appendChild(deleteButton);

                }
                else{

                    editRow.cells[0].textContent=name;
                    editRow.cells[1].textContent=category;
                    editRow.cells[2].textContent=location;
                    editRow.cells[3].textContent=date;
                    editRow.cells[4].textContent=availability;

                    editRow.dataset.description=description;

                    editRow=null;

                    reportForm.querySelector('[type="submit"]').textContent="Submit";

                }

                reportForm.reset();

            }

        };
    }

//claim verification

    let claimForm=document.getElementById("claimForm");
    let claimTable=document.getElementById("claimTable");

    if(claimForm){

        claimForm.onsubmit=function(event){

            event.preventDefault();

            let item=claimForm.elements["claim"].value;
            let name=claimForm.elements["claimant_name"].value.trim();
            let decision=claimForm.elements["decision"].value;
            let notes=claimForm.elements["verification_notes"].value;
            let additionalInfo=claimForm.elements["additional_info"].value;

            let valid=true;

            if(item===""){
                document.getElementById("errorClaimItem").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorClaimItem").style.display="none";
            }

            if(name===""){
                document.getElementById("errorClaimantName").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorClaimantName").style.display="none";
            }

            if(decision===""){
                document.getElementById("errorDecision").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorDecision").style.display="none";
            }

            if(valid){

                let row=claimTable.insertRow();

                row.insertCell(0).textContent="C-"+claimTable.rows.length;
                row.insertCell(1).textContent=item;
                row.insertCell(2).textContent=name;
                row.insertCell(3).textContent=decision;
                row.insertCell(4).textContent=notes;
                row.insertCell(5).textContent=additionalInfo;

                let actionCell=row.insertCell(6);

                let deleteButton=document.createElement("button");

                deleteButton.textContent="Delete";
                deleteButton.className="danger";

                deleteButton.onclick=function(){
                    row.remove();
                };

                actionCell.appendChild(deleteButton);

                claimForm.reset();

            }

        };
    }

//handover appointment

    let appointmentForm=document.getElementById("appointmentForm");
    let appointmentTable=document.getElementById("appointmentTable");

    let returnDropdown=document.getElementById("returnAppointment");

    if(appointmentForm){

        appointmentForm.onsubmit=function(event){

            event.preventDefault();

            let claim=appointmentForm.elements["claim"].value;
            let date=appointmentForm.elements["date"].value;
            let time=appointmentForm.elements["time"].value;
            let location=appointmentForm.elements["location"].value.trim();
            let notes=appointmentForm.elements["meeting_notes"].value;
            let status=appointmentForm.elements["status"].value;

            let valid=true;

            if(claim===""){
                document.getElementById("errorApptClaim").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorApptClaim").style.display="none";
            }

            if(date===""){
                document.getElementById("errorApptDate").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorApptDate").style.display="none";
            }

            if(time===""){
                document.getElementById("errorApptTime").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorApptTime").style.display="none";
            }

            if(location===""){
                document.getElementById("errorApptLocation").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorApptLocation").style.display="none";
            }

            if(status===""){
                document.getElementById("errorApptStatus").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorApptStatus").style.display="none";
            }

            if(valid){

                let row=appointmentTable.insertRow();

                row.insertCell(0).textContent="A-"+appointmentTable.rows.length;
                row.insertCell(1).textContent=claim;
                row.insertCell(2).textContent=date;
                row.insertCell(3).textContent=time;
                row.insertCell(4).textContent=location;
                row.insertCell(5).textContent=status;
                row.insertCell(6).textContent="Not recorded";

                let actionCell=row.insertCell(7);

                // Delete button
                let deleteButton=document.createElement("button");

                deleteButton.textContent="Delete";
                deleteButton.className="danger";

                deleteButton.onclick=function(){

                    if(returnDropdown){

                        for(let i=0;i<returnDropdown.options.length;i++){

                            if(returnDropdown.options[i].value===row.cells[0].textContent){
                                returnDropdown.remove(i);
                                break;
                            }

                        }

                    }

                    row.remove();

                };

                actionCell.appendChild(deleteButton);

                if(returnDropdown){

                    let option=document.createElement("option");

                    option.value=row.cells[0].textContent;
                    option.textContent=row.cells[0].textContent+" - "+claim;

                    returnDropdown.appendChild(option);

                }

                appointmentForm.reset();

            }

        };
    }

    let returnForm=document.getElementById("returnForm");

    if(returnForm){

        returnForm.onsubmit=function(event){

            event.preventDefault();

            let appointment=returnForm.elements["appointment"].value;
            let returned=returnForm.querySelector('input[name="returned"]:checked');

            let valid=true;

            if(appointment===""){
                document.getElementById("errorReturnAppointment").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorReturnAppointment").style.display="none";
            }

            if(returned===null){
                document.getElementById("errorReturnStatus").style.display="block";
                valid=false;
            }
            else{
                document.getElementById("errorReturnStatus").style.display="none";
            }

            if(valid){

                if(appointmentTable){

                    for(let i=0;i<appointmentTable.rows.length;i++){

                        let row=appointmentTable.rows[i];

                        if(row.cells[0].textContent===appointment){

                            if(returned.value==="Yes"){
                                row.cells[6].textContent="Returned";
                            }
                            else{
                                row.cells[6].textContent="Not Returned";
                            }

                        }

                    }

                }

                alert("Return information submitted successfully!");

                returnForm.reset();

            }

        };
    }

};
