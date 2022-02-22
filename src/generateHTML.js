const generateManager = function (manager) {
    // create Manager card
    return `
    <div class="row-4 mt-4">
        <div class="card h-100 card-shadow">
            <div class="card-header" style="background-color: #323d5a;">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">supervisor_account</i>
            </div>
            <div class="card-body">
                <p class="id"><b>ID:</b> ${manager.id}</p>
                <p class="email"><b>Email:</b> <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office"><b>Office Number:</b> ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `
}

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="row-4 mt-4">
        <div class="card h-100 card-shadow">
            <div class="card-header" style= "background-color: #323d5a;">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop</i>
            </div>
            <div class="card-body">
                <p class="id"><b>ID:</b> ${engineer.id}</p>
                <p class="email"><b>Email:</b> <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github"><b>Github:</b> <a href="https://github.com/${engineer.github}" target= "_blank" rel= "noreferrer">www.github.com/${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="row-4 mt-4">
        <div class="card h-100 card-shadow">
            <div class="card-header" style="background-color: #323d5a">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">school</i>
            </div>
            <div class="card-body">
                <p class="id"><b>ID:</b> ${intern.id}</p>
                <p class="email"><b>Email:</b> <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school"><b>School:</b> ${intern.school}</p>
            </div>
        </div>
    </div>
    `
};

generateHTML = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// Generate HTML Page
const generateTeamPage = function (employeeCards) {
    return`

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center text-light" style="background-color: #00008b;" id="navbar-text">My Team</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${employeeCards}
                </div>
            </div>
        </main>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script> 
    </body>
    </html>
    `;
}

// Expot data to index.js for writing index.html
module.exports = generateHTML;