import React from "react"

export default function InputContainer(props){

    const [input, setInput] = React.useState("")

        function handleChange(event){
            const newTask = event.target.value
            setInput(newTask)
        }

        function handleClick(){
            props.addTask(input)
            setInput("")
        }

        return (
            <div className="input--field">
                
                <input 
                    type="text" 
                    className="input--box" 
                    placeholder="Enter Task" 
                    onChange={handleChange}
                    value = {input}
                />

                <button 
                className="input--btn" 
                onClick={() => handleClick()}
                >
                    <i className="fa-solid fa-plus"></i>
                </button>

            </div>
    )
    
}