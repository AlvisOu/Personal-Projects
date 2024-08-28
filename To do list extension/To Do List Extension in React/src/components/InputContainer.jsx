import React from "react"

/*
*   props:
*       -addTask: function that adds a task
*/
export default function InputContainer(props){

    const [input, setInput] = React.useState("")

        //tracks form changes and updates state variable input
        function handleChange(event){
            const newTask = event.target.value
            setInput(newTask)
        }

        //calls addTask and resets input
        function handleClick(){
            props.addTask(input)
            setInput("")
        }

        return (
            <div className="input--field">
                
                <input 
                    type="text" 
                    id="form"
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