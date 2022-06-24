const makeTeam = team => {
   
    const generateManagerCard = manager => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.id}</li>
          <a href = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${manager.email}" target= "_blank"><li class="list-group-item">${manager.email}</li></a>
          <li class="list-group-item">${manager.officeNumber}</li>
        </ul>
        </div>
        `
    }

    const generateEngineerCard = engineer => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${engineer.id}</li>
          <a href = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${engineer.email}" target= "_blank"><li class="list-group-item">${engineer.email}</li></a>
          <a href = "https://github.com/${engineer.github}" target = "_blank"><li class="list-group-item">https://github.com/${engineer.github}</li></a>
        </ul>
        </div>
        `
    }

    const generateInternCard = intern => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${intern.id}</li>
          <a href = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=:${intern.email}" target= "_blank"><li class="list-group-item">${intern.email}</li></a>
          <li class="list-group-item">${intern.school}</li>
        </ul>
        </div>
        `
    }

    const html = []; 

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManagerCard(manager))    
    )

    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineerCard(engineer))    
    )

    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateInternCard(intern))    
    )

    return html.join("")
}

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- bootstrap link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">


    <title>Team Memeber Generator</title>
</head>
<body>
  <header class = "d-flex align-items-center justify-content-center bg-danger text-white fs-1" style = "height: 13vh">My Team</header>
    ${makeTeam(team)}
</body>
</html>
    `
}
