import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Giovana",
      role: "Developer",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg",
    },
    {
      name: "Alexa",
      role: "Director of Eng.",
      img: "https://images.pexels.com/photos/2862885/pexels-photo-2862885.jpeg",
    },
    {
      name: "Melanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg",
    },
    {
      name: "Clarissa",
      role: "The Devops Guy",
      img: "https://images.pexels.com/photos/2878373/pexels-photo-2878373.jpeg",
    },
    {
      name: "Lily",
      role: "Senior",
      img: "https://images.pexels.com/photos/2098707/pexels-photo-2098707.jpeg",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
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
