

function generateResume() :void{
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;
    const duration = (document.getElementById('duration') as HTMLInputElement).value;

   
    const resumeHTML = `
<div id="resume-content">
<h3>Personal Information</h3>
<p>Name: <span id="edit-name" contenteditable="true">${name}</span></p>
<p>Contact: <span id="edit-contact" contenteditable="true">${contact}</span></p>
<p>Location: <span id="edit-location" contenteditable="true">${location}</span></p>

<h3>Education</h3>
<p>Institution: <span id="edit-institution" contenteditable="true">${institution}</span></p>
<p>Year: <span id="edit-year" contenteditable="true">${year}</span></p>

<h3>Skills</h3>
<p>Skills: <span id="edit-skills" contenteditable="true">${skills}</span></p>

<h3>Experience</h3>
<p>Company: <span id="edit-company" contenteditable="true">${company}</span></p>
<p>Role: <span id="edit-role" contenteditable="true">${role}</span></p>
<p>Duration: <span id="edit-duration" contenteditable="true">${duration}</span></p>
/div>
    `;

    
    document.getElementById('resume-output')!.innerHTML = resumeHTML;
}

function saveChanges() :void;{
    const resumeContent = document.getElementById('resume-output')?.innerHTML;

   
    if (resumeContent) {
      
        console.log("Saved Resume Content:", resumeContent);
        alert("Changes saved! Check the console for details.");
    } else {
        alert("No resume content found to save.");
    }
}
