
const getEmployees = () => {
    return fetch("http://localhost:3000/employees?_expand=department&_expand=computer")
        .then(response => response.json())
}


export default getEmployees