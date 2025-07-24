document.addEventListener("DOMContentLoaded", () => {
  const patientForm = document.getElementById("patientForm");
  const patientList = document.getElementById("patientList");
  const resultList = document.getElementById("resultList");
  const processButton = document.getElementById("processButton");

  let patients = [];

  patientForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value, 10);
    const symptoms = document.getElementById("symptoms").value;

    const patient = { name, age, symptoms, priority: age };
    patients.push(patient);

    updatePatientList();
    patientForm.reset();
  });

  processButton.addEventListener("click", () => {
    // Sort patients by priority (age) in descending order
    patients.sort((a, b) => b.priority - a.priority);

    updateResultList();
  });

  function updatePatientList() {
    patientList.innerHTML = "";
    patients.forEach((patient) => {
      const li = document.createElement("li");
      li.textContent = `${patient.name} - Age: ${patient.age} - Symptoms: ${patient.symptoms}`;
      patientList.appendChild(li);
    });
  }

  function updateResultList() {
    resultList.innerHTML = "";
    patients.forEach((patient) => {
      const li = document.createElement("li");
      li.textContent = `Processing patient: ${patient.name}, Age: ${patient.age}, Symptoms: ${patient.symptoms}`;
      resultList.appendChild(li);
    });
  }
});
