var _a;
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var addrElement = document.getElementById("address");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById("username");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        addrElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var address = addrElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Profile Picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var resumeOutput = "\n        <h2>Curriculum Vitae</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\"><br>") : "", "\n        <p><strong>Full Name :</strong> ").concat(name_1, "</p><br>\n        <p><strong>Email Address :</strong> ").concat(email, "</p><br>\n        <p><strong>Contact Number :</strong> ").concat(phone, "</p><br>\n        <p><strong>Residential Address :</strong> ").concat(address, "</p><br>\n        <p><strong>Academic Qualifications :</strong><br> ").concat(education, "</p><br>\n        <p><strong>Work Experience :</strong><br> ").concat(experience, "</p><br>\n        <p><strong>Professional Skills :</strong><br> ").concat(skills, "</p><br>\n      ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // PDF Download Button
            var downloadButton_1 = document.createElement('button');
            downloadButton_1.textContent = 'Download PDF';
            downloadButton_1.onclick = function () {
                var elementToConvert = document.getElementById("resumeOutput");
                if (elementToConvert) {
                    html2pdf().from(elementToConvert).save("".concat(name_1.replace(/\s+/g, '_'), "_resume.pdf"));
                    downloadButton_1.style.display = 'none';
                }
            };
            resumeOutputElement.appendChild(downloadButton_1);
            resumeOutputElement.style.display = 'block';
        }
        else {
            console.error("Resume output element not found");
        }
    }
    else {
        console.error("One or more input fields are missing");
    }
});
