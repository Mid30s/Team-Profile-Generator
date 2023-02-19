// manager section
const managerSection = managers => {
    return `
    ${managers
            .map(({ name, id, email, officeNumber }) => {
                return `
            <div class="column card is-one-quarter my-5 p-0">
                <header class="card-header has-background-primary is-flex-direction-column p-5 ">
                    <h2 class="title title is-size-4 mb-0 has-text-white">
                      <b>${name.toUpperCase()}</b> 
                    </h2>

                    <h2 class="title is-size-3 has-text-weight-bold mt-3 has-text-white">                       
                        Team Leader
                        <i class="fa-solid fa-people-roof ml-3"></i>
                    </h2>
                </header>

                <div class="card-content p-5">
                    <ul class="content has-text-weight-bold">
                        <li class="content-item">
                            <p class="is-size-4"><b>ID:</b> ${id}</p>
                        </li>
                        <li class="content-item"> 
                            <p class="is-size-4"><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
                        </li>
                        <li class="content-item">
                            <p class="is-size-4"><b>Office Number:</b> ${officeNumber}</p>
                        </li>    
                    </ul>
                </div>
            </div>
            `;
        })
        .join('')
    }`
}

// Engineer section
const engineerSection = engineers => {
    return `
    ${engineers
            .map(({name, id, email, github}) => {
                return `
            <div class="column card is-two-fifths m-3 p-0">
                <header class="card-header has-background-info is-flex-direction-column p-5 ">
                    <h2 class="title title is-size-4 mb-0 has-text-white has-text-weight-bold">
                    ${name.toUpperCase()} 
                    </h2>

                    <h2 class="title is-size-3 has-text-weight-bold mt-3 has-text-white">                       
                        Engineer
                        <i class="fa-solid fa-laptop-code ml-4"></i>
                    </h2>
                </header>

                <div class="card-content p-5 has-text-weight-bold">
                    <ul class="content ">
                        <li class="content-item">
                            <p class="is-size-4"><b>ID:</b> ${id}</p>
                        </li>
                        <li class="content-item"> 
                            <p class="is-size-4"><b>Email:</b> <a href="mailto:${email}">${email}</a> </p>
                        </li>
                        <li class="content-item">
                            <p class="is-size-4"><b>Github:</b> <a href="https://github.com/${github}">${github}</a></p>
                        </li>    
                    </ul>
                </div>             
            </div>
            `;
        })
        .join('')
    }`
}

// Intern section
const internSection = interns => {
    return `
    ${interns
            .map(({name, id, email, school}) => {
                return `
            <div class="column card is-two-thirds m-3 p-0">
                <header class="card-header has-background-warning is-flex-direction-column p-5">
                    <h2 class="title title is-size-4 mb-0 has-text-grey has-text-weight-bold">
                    ${name.toUpperCase()}
                    </h2>

                    <h2 class="title is-size-3 has-text-weight-bold mt-3 has-text-grey">  
                        Intern
                        <i class="fa-solid fa-graduation-cap ml-4"></i>
                    </h2>
                </header>

                <div class="card-content p-5 has-text-weight-bold">
                    <ul class="content">
                        <li class="content-item">
                            <p class="is-size-4"><b>ID:</b> ${id}</p>
                        </li>
                        <li class="content-item"> 
                            <p class="is-size-4"><b>Email:</b> <a href="mailto:${email}">${email}</a> </p>
                        </li>
                        <li class="content-item">
                            <p class="is-size-4"><b>School:</b> ${school.toUpperCase()}</p>
                        </li>    
                    </ul>
                </div>
            </div>
            `;
        })
        .join('')
    }`
}

//html template
function generateHTML(managers, engineers, interns) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="assets/css/style.css">

    <title>Team Profile Generator</title>
<body>
    <div class="container is-fluid px-0">
        <div class="navbar is-link is-justify-content-center">
            <h1 class="title is-1 my-5 py-3 has-text-white">Team Profile Generator</h1>
        </div>
    </div>

    <main class="container is-fluid px-0">
        <div class="columns is-justify-content-center has-background-primary-light leader px-6">
            ${managerSection(managers)}
        </div>

        <div class="columns is-tablet">
            <div class="column has-background-info-light is-two-thirds engineer">
                <div class="columns is-tablet is-justify-content-space-between is-flex-wrap-wrap px-6 mx-6 mt-1">
                   ${engineerSection(engineers)}
               </div>
            </div>

            <div class="column has-background-warning-light is-one-third intern">  
                <div class="columns is-mobile is-flex-wrap-wrap is-justify-content-center mt-1">
                   ${internSection(interns)}
               </div>
            </div>
       </div>
    </main>
</body>
</html>
`;

};

  
module.exports = generateHTML;
  