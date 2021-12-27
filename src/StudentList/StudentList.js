import Student from "../Students/Student";
import "./StudentList.css"
import { useEffect, useState} from 'react';

function StudentList ({ data, addTag }){
    const [filteredStudents, setFilteredStudents] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [tagFilter, setTagFilter] = useState("");

    useEffect(() => {
        if(tagFilter === ""){
          setFilteredStudents(data);  
        } else {
          // filters the results based to what is been written in the search input
          const filtered = data.filter(item => {
            return (
               item.tags.some((tag) => tag.toLowerCase().indexOf(tagFilter.toLowerCase()) !== -1)
            )
          })
          setFilteredStudents(filtered)
        }
      },[tagFilter, data])
      useEffect(() => {
        if(searchTerm === ""){
          setFilteredStudents(data);  
        } else {
          const filtered = data.filter(student => {
            let fullName = (student.firstName + student.lastName).toLowerCase().trim()
            return (
              fullName.includes(searchTerm)
            )
          })
          setFilteredStudents(filtered)
        }
      },[searchTerm, data])

    return (
        <div>
            <div className="search-box">
              <input className="input-search"
                type="search"
                placeholder="Search by name"
                onChange={e => setSearchTerm(e.target.value)}
              />
              <input className="input-search"
                type="search"
                placeholder="Search by tag"
                onChange={e => setTagFilter(e.target.value)}
              />
            </div>
            <div className="StudentList">
            {filteredStudents && filteredStudents.map((item, i) => (
                <Student key={i} item={item} addTag={addTag} index={i}/>
                ))}
            </div>
        </div>
    )
}

export default StudentList;