import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");
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
            <Employee
              name="Caleb"
              role="Intern"
              img="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Abby"
              role={role}
              img="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Jon"
              img="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Caleb"
              role="Intern"
              img="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee name="Abby" role={role} />
            <Employee name="Jon" />
            <Employee name="Jon" />
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
