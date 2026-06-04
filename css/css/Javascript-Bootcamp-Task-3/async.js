
const studentDatabase = [
    {
        id: 1,
        firstName: "JIM SEKATANE",
        lastName: "MALAPANE",
        email: "JIMSEKATANE@GMAIL.COM",
        course: "DATA SCIENCE",
        age: 34
    },
    {
        id: 2,
        firstName: "Lerato",
        lastName: "MOLOI",
        email: "lerato.moloi@YAHOO.com",
        course: "COMPUTER SCIENCE",
        age: 24
    },
    {
        id: 3,
        firstName: "Sipho",
        lastName: "Dlamini",
        email: "sipho.dlamini@gmail.com",
        course: "Information Technology",
        age: 21
    },
    {
        id: 4,
        firstName: "Zanele",
        lastName: "Petersen",
        email: "zanele.petersen@gmail.com",
        course: "Business Analytics",
        age: 23
    },
    {
        id: 5,
        firstName: "Kagiso",
        lastName: "Mthembu",
        email: "kagiso.mthembu@gamil.com",
        course: "Software Engineering",
        age: 25
    }

function demonstrateSynchronousExecution() {
    const outputDiv = document.getElementById('syncOutput');
    
    
    outputDiv.innerHTML = '';
    

    outputDiv.innerHTML += '<p style="margin:5px 0;" Step-1 - The function is starting</p>';
    
    
    outputDiv.innerHTML += '<p style="margin:5px 0;">Step-2 - The Process is in action</p>';
    

    outputDiv.innerHTML += '<p style="margin:5px 0;">Step-3 - The function reached the final stage</p>';

}


document.addEventListener('DOMContentLoaded', function() {
    const syncBtn = document.getElementById('syncDemoBtn');
    if (syncBtn) {
        syncBtn.addEventListener('click', demonstrateSynchronousExecution);
    }
});


function displayAllStudents() {
    const outputDiv = document.getElementById('studentOutput');
    
    
    outputDiv.innerHTML = '<div style="text-align:center; color:#667eea;">⏳ Loading student records... Please wait 3 seconds</div>';
    
    
    setTimeout(function() {
        
        outputDiv.innerHTML = ''
        
        studentDatabase.forEach(function(student) {
            const studentCard = document.createElement('div');
            studentCard.className = 'student-item';
            studentCard.innerHTML = `
                <strong> ID:</strong> ${student.id}<br>
                <strong> Name:</strong> ${student.firstName} ${student.lastName}<br>
                <strong> Email:</strong> ${student.email}<br>
                <strong> Course:</strong> ${student.course}<br>
                <strong> Age:</strong> ${student.age}
                <hr style="margin:8px 0;">
            `;
            outputDiv.appendChild(studentCard);
        });
        
        
        const footer = document.createElement('div');
        footer.style.textAlign = 'center';
        footer.style.marginTop = '10px';
        footer.style.fontSize = '12px';
        footer.style.color = '#27ae60';
        footer.innerHTML = ' All ${studentDatabase.length} student records loaded successfully!';
        outputDiv.appendChild(footer);
    }, 3000);
}


document.addEventListener('DOMContentLoaded', function() {
    const loadBtn = document.getElementById('loadStudentsBtn');
    if (loadBtn) {
        loadBtn.addEventListener('click', displayAllStudents);
    }
});