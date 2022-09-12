import React, { useState } from "react";
import ReactDOM from "react-dom/client";


let studentList = JSON.parse(localStorage.getItem('studentList')) || initializeStudentListInLocalStorage()
function initializeStudentListInLocalStorage() {
  let sl = [
    {
      firstName: "Misty",
      lastName: "Knight",
      sId: "234",
      school: "Queens College",
      major: "Law",
    },
    {
      firstName: "Jessica",
      lastName: "Jones",
      sId: "434",
      school: "Brooklyn College",
      major: "CS",
    },
    {
      firstName: "Colleen",
      lastName: "Wing",
      sId: "233",
      school: "Queens College",
      major: "CS",
    },
    {
      firstName: "Dare",
      lastName: "Devil",
      sId: "876",
      school: "CCNY",
      major: "Law",
    },
    {
      firstName: "Luke",
      lastName: "Cage",
      sId: "323",
      school: "CCNY",
      major: "Math",
    },
  ]
  localStorage.setItem('studentList', JSON.stringify(sl))
  return sl
}

function StudentInfo(props) {
  return (
    <div className="studentInfoSection border border-primary rounded col-lg-3 col-md-5 col-sm-12 col-xs-12  m-3 p-2 position-relative">
      <div>
        {props.lastName}, {props.firstName}
      </div>
      <button onClick={e => {
        props.deleteAction(props.sId)
      }} className="border border-0 bg-transparent text-danger position-absolute top-0 end-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
      <ul>
        <li>
          <strong>ID:</strong> {props.sId}
        </li>
        <li>
          <strong>School:</strong> {props.school}
        </li>
        <li>
          <strong>Major:</strong> {props.major}
        </li>
      </ul>
    </div>
  );
};

function StudentForm({ action }) {
  return (
    <form id="studentInputForm" className="row justify-content-center">
      <input className="col-lg-6 col-sm-12 m-1" id="firstNameInput" type="text" placeholder="First Name" />
      <input className="col-lg-6 col-sm-12 m-1" id="lastNameInput" type="text" placeholder="Last Name" />
      <input className="col-lg-6 col-sm-12 m-1" id="idInput" type="text" placeholder="ID" />
      <input className="col-lg-6 col-sm-12 m-1" id="schoolInput" type="text" placeholder="School" />
      <input className="col-lg-6 col-sm-12 m-1" id="majorInput" type="text" placeholder="Major" />
      <input className="col-lg-6 col-sm-12 m-1" onClick={action} type="submit" />
    </form>
  )
}

function getStudentInfo() {
  return {
    firstName: document.querySelector('#firstNameInput').value,
    lastName: document.querySelector('#lastNameInput').value,
    sId: document.querySelector('#idInput').value,
    school: document.querySelector('#schoolInput').value,
    major: document.querySelector('#majorInput').value
  }
}

function removeValuesInForm(){
  document.querySelector('#firstNameInput').value  = ''
  document.querySelector('#lastNameInput').value  = ''
  document.querySelector('#idInput').value = ''
  document.querySelector('#schoolInput').value = ''
  document.querySelector('#majorInput').value = ''
}

function ClassList() {
  const [studentInfoList, setStudentInfoList] = useState(studentList);
  const addStudentToList = (e) => {
    e.preventDefault()
    let studentInfo = getStudentInfo()
    if (!studentInfo.sId) {
      alert("Please enter valid student ID")
      return;
    } else {
      for (let student of studentInfoList) {
        if (studentInfo.sId === student.sId) {
          alert("Please enter valid student ID")
          return;
        }
      }
    }
    removeValuesInForm()
    // Do not use state.push() then setState, does not work
    let updatedStudentList = [...studentInfoList, studentInfo]
    localStorage.setItem('studentList', JSON.stringify(updatedStudentList))
    setStudentInfoList(updatedStudentList)
  }

  const deleteStudent = sId => {

    let updatedStudentList = studentInfoList.filter(student => student.sId != sId)
    localStorage.setItem('studentList', JSON.stringify(updatedStudentList))
    setStudentInfoList(updatedStudentList)
  }

  return (
    <div className="container">
      <h1 className="text-center">Welcome to CTP</h1>
      <StudentForm action={addStudentToList} />

      <p className="text-center">List of Students</p>
      <div className="row justify-content-center">
        {studentInfoList.map(student => <StudentInfo {...student} key={student.sId} deleteAction={deleteStudent} />)}
      </div>
    </div>
  );
}


function CountApp() {
  const [numClick, setNumClick] = useState(0);

  return (
    <div>
      <h1>You have clicked {numClick} times</h1>
      <button onClick={e => {
        setNumClick(numClick + 1)
      }}
      >Click me</button>
    </div>
  )
}

const htmlContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(htmlContainer);

root.render(<ClassList />)
