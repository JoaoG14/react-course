import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Giovana",
      role: "Developer",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg",
    },
    {
      id: 3,
      name: "Alexa",
      role: "Director of Eng.",
      img: "https://images.pexels.com/photos/2862885/pexels-photo-2862885.jpeg",
    },
    {
      id: 4,
      name: "Melanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg",
    },
    {
      id: 5,
      name: "Clarissa",
      role: "The Devops Guy",
      img: "https://images.pexels.com/photos/2878373/pexels-photo-2878373.jpeg",
    },
    {
      id: 6,
      name: "Lily",
      role: "Senior",
      img: "https://images.pexels.com/photos/2098707/pexels-photo-2098707.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id){
        return {...employee, name: newName, role: newRole }
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
