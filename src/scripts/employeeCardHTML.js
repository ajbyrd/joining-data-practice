const employeeCard = {

    makeEmployeeComponent(employeeInfo) {

        return `
      <article class="employee">
      <header class="employee__name">
          <h1>${employeeInfo.name}</h1>
      </header>
      <section class="employee__department">
          Works in the ${employeeInfo.department.department} department
      </section>
      <section class="employee__computer">
          Currently using a ${employeeInfo.computer.computer}
      </section>
  </article>
      `
    }
}


export default employeeCard