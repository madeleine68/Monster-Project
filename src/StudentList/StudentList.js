import Student from "../Students/Student";
import "./StudentList.css";
import { useEffect, useState } from "react";

function StudentList({ data, addTag }) {
  const [filterByName, setFilterByName] = useState([]);
  const [filterByTag, setFilterByTag] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  useEffect(() => {
    if (tagFilter === "") {
      setFilterByTag(data);
    } else {
      // filters the results based to what is been written in the search input
      const filtered = data.filter((item) => {
        return item.tags.some(
          (tag) => tag.toLowerCase().indexOf(tagFilter.toLowerCase()) !== -1
        );
      });
      setFilterByTag(filtered);
    }
  }, [tagFilter, data]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilterByName(data);
    } else {
      const filtered = data.filter((student) => {
        let fullName = (student.firstName + student.lastName)
          .toLowerCase()
          .trim();
        return fullName.includes(searchTerm);
      });
      setFilterByName(filtered);
    }
  }, [searchTerm, data]);
  
  let filteredStudents = [];
  filterByName.forEach((item) => {
    if (filterByTag.includes(item)) {
      filteredStudents.push(item);
    }
  });
  return (
    <div>
      <div className="search-box">
        <input
          className="input-search"
          type="search"
          placeholder="Search by name"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase().trim())}
        />
        <input
          className="input-search"
          type="search"
          placeholder="Search by tag"
          onChange={(e) => setTagFilter(e.target.value)}
        />
      </div>
      <div className="StudentList">
        {filteredStudents?.map((item, i) => (
          <Student key={i} item={item} addTag={addTag} index={i} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
