import "./Student.css";
import { useMemo, useState } from "react";
import { ReactComponent as Plus} from './plus.svg';
import { ReactComponent as Minus} from './minus.svg';
import TagForm from "../TagManagment/TagForm";
import Tag from "../TagManagment/Tag";

function Student ({ item, addTag, index }){

    const avg = useMemo(() => {
        const average = item.grades.reduce((sum, curr) => sum + Number(curr), 0) /
        item.grades.length;
        return average;
    },[item.grades])

    const [gradeList, setGradeList] = useState(false)
    function toggleShowGrades() {
        setGradeList(!gradeList)
    }
    return (
        <div className="student-list">
            <img src={item.pic} alt={item.firstName} />
            <div className="student-information">
                <h1>{item.firstName} {item.lastName}</h1>
                <p>Email: {item.email}</p>
                <p>Company: {item.company}</p>
                <p>Skill: {item.skill}</p>
                <p>Average: {avg}%</p>
                <div className="grade-list">
                {
                  gradeList &&
                    <div>
                        <table className="item-info-grades">
                            <tbody>
                                {item.grades.map((grade, index) => {
                                    return <tr key={index}>
                                        <td style={{ width: '70px' }}>Test {index + 1}:</td>
                                        <td>{grade}%</td>
                                        <td></td>
                                    </tr>
                                    }
                                )}
                            </tbody>
                        </table>
                        </div>
                    }
                </div>
                {item.tags.length > 0 && 
                     item.tags.map((tag, index) => {
                        return <Tag key={index.toString()} tag={tag} />;
                        })
                    }
                <TagForm index={index} addTag={addTag} />   
            </div> 
           
            <div className="toggle">
                {gradeList ? 
                <Minus onClick={toggleShowGrades} />
                :
                <Plus onClick={toggleShowGrades}/> 
                }
            </div>        
        </div>
    )
}

export default Student;