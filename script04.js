var _a;
function generateResume() {
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var location = document.getElementById('location').value;
    var institution = document.getElementById('institution').value;
    var year = document.getElementById('year').value;
    var skills = document.getElementById('skills').value;
    var company = document.getElementById('company').value;
    var role = document.getElementById('role').value;
    var duration = document.getElementById('duration').value;
    var resumeHTML = "\n<div id=\"resume-content\">\n<h3>Personal Information</h3>\n<p>Name: <span id=\"edit-name\" contenteditable=\"true\">".concat(name, "</span></p>\n<p>Contact: <span id=\"edit-contact\" contenteditable=\"true\">").concat(contact, "</span></p>\n<p>Location: <span id=\"edit-location\" contenteditable=\"true\">").concat(location, "</span></p>\n\n<h3>Education</h3>\n<p>Institution: <span id=\"edit-institution\" contenteditable=\"true\">").concat(institution, "</span></p>\n<p>Year: <span id=\"edit-year\" contenteditable=\"true\">").concat(year, "</span></p>\n\n<h3>Skills</h3>\n<p>Skills: <span id=\"edit-skills\" contenteditable=\"true\">").concat(skills, "</span></p>\n\n<h3>Experience</h3>\n<p>Company: <span id=\"edit-company\" contenteditable=\"true\">").concat(company, "</span></p>\n<p>Role: <span id=\"edit-role\" contenteditable=\"true\">").concat(role, "</span></p>\n<p>Duration: <span id=\"edit-duration\" contenteditable=\"true\">").concat(duration, "</span></p>\n/div>\n    ");
    document.getElementById('resume-output').innerHTML = resumeHTML;
}
{
    var resumeContent = (_a = document.getElementById('resume-output')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    if (resumeContent) {
        console.log("Saved Resume Content:", resumeContent);
        alert("Changes saved! Check the console for details.");
    }
    else {
        alert("No resume content found to save.");
    }
}
