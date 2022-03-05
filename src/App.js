import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import StudentList from "./StudentList/StudentList";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.hatchways.io/assessment/students")
      .then((res) => {
        let newStudentData = [];
        res.data.students.map((student) => {
          let addTags = student;
          addTags.tags = [];
          newStudentData.push(addTags);
        });
        setData(newStudentData);
      })
      .catch((err) => console.log(err));
  }, []);

  function addTag(tagName, index) {
    const tagForStudentData = [...data];
    tagForStudentData[index].tags.push(tagName);
    setData(tagForStudentData);
  }

  return (
    <div className="App">
      <StudentList data={data} addTag={addTag} />
    </div>
  );
}

export default App;