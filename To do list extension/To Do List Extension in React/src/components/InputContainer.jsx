import React from "react"

export default function InputContainer(props){

    const [input, setInput] = React.useState("")

        return (
        <div className="input--field">
            
            <input 
                type="text" 
                className="input--box" 
                placeholder="Enter Task" 
                onChange={handleChange()}
                value = {input}
            />

            <button 
            className="input--btn" 
            onClick={() => props.addTask()}
            >
                <i className="fa-solid fa-plus"></i>
            </button>

        </div>
    )
    
}