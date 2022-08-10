
let empPayrollList;


window.addEventListener("DOMContentLoaded", (event) => {
  empPayrollList = getEmployeePayrollDataFromStorage();
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
  localStorage.removeItem("editEmp");
});

const getEmployeePayrollDataFromStorage = () => {
  return localStorage.getItem("EmployeePayrollList")
    ? JSON.parse(localStorage.getItem("EmployeePayrollList"))
    : [];
};

const createInnerHtml = () => {
  const headerHtml =
    "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
    "<th>Salary</th><th>StartDate</th><th>Actions</th>";

  if (empPayrollList.length == 0) return;
  let innerHtml = `${headerHtml}`;

  for (const empPayrollData of empPayrollList) {
    innerHtml = `${innerHtml}
  <tr>
=======
  let innerHtml = `${headerHtml}`;
  if (empPayrollList.length != 0) {
    for (const empPayrollData of empPayrollList) {
      innerHtml = `${innerHtml}
    <tr>

    <td class="profile"><img alt="" src="${empPayrollData._profilePic}">
    </td>
    <td>${empPayrollData._name}</td>
    <td>${empPayrollData._gender}</td>
    <td>${getDeptHtml(empPayrollData._department)}</td>
    <td>${empPayrollData._salary}</td>
    <td>${empPayrollData._startDate}</td>
    <td>

      <img name="${
        empPayrollData._id
      }" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
      <img name="${

      <img class="buttons" id="${
        empPayrollData._id
      }" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
      <img class="buttons" id="${

        empPayrollData._id
      }" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
    </td>
  </tr>
    `;

    }

  }
  document.querySelector("#table-display").innerHTML = innerHtml;
};


const createEmployeePayrollJSON = () => {
   empPayrollListLocal = [
    {
      _name: "Narayan Mahadevan",
      _gender: "Male",
      _department: ["Engineer", "Sales"],
      _salary: "500000",
      _startDate: "29 oct 2019",
      _note: "",
      _id: new Date().getTime(),
      _profilePic: "../assets/profile-images/Ellipse -2.png",
    },
    {
      _name: "Kisalay Srivastava",
      _gender: "Male",
      _department: ["Engineer", "Finance"],
      _salary: "350000",
      _startDate: "6 Nov 2021",
      _note: "",
      _id: new Date().getTime(),
      _profilePic: "../assets/profile-images/Ellipse -3.png",
    },
    {
      _name: "Saran Yellanki",
      _gender: "Male",
      _department: ["HR", "Finance"],
      _salary: "450000",
      _startDate: "30 Sep 2021",
      _note: "",
      _id: new Date().getTime(),
      _profilePic: "../assets/profile-images/Ellipse -2.png",
    },
  ];
  return empPayrollListLocal;
};


const getDeptHtml = (deptList) => {
  deptHtml = "";
  for (const dept of deptList) {
    deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`;
  }
  return deptHtml;
};


const remove = (node) => {
  let empPayrollData = empPayrollList.find((empData) => empData._id == node.id);
  if (!empPayrollData) return;
  const index = empPayrollList
    .map((empData) => empData._id)
    .indexOf(empPayrollData._id);
  console.log(index);
  empPayrollList.splice(index, 1);
  localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
};