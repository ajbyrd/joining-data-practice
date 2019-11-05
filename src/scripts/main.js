import getEmployees from "./fetchCall.js"
import renderDOM from "./employeeCardDOM.js"

getEmployees()
    .then(response => renderDOM.renderEmployeeCards(response))