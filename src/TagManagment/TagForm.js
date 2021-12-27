import  { useState } from 'react'
import './TagForm.css'
// import PropTypes from 'prop-types'

function TagForm({ addTag, index }) {
    const [tagInput, setTagInput] = useState([])
    return (
        <div>

            <form
                onSubmit={e => {
                    e.preventDefault();
                    addTag(tagInput, index);
                    setTagInput("");
                }}
                >
                <input className='input-for-tag'
                    type="text"
                    value={tagInput}
                    placeholder="Add a Tag"
                    onChange={e => {
                        setTagInput(e.target.value);
                    }}
                    
                />
                </form>
            </div>
    )
}

// TagManager.propTypes = {
//     tagList: PropTypes.arrayOf(PropTypes.string),
//     createNewTag: PropTypes.func
// }

export default TagForm