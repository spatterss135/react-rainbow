import React, { useState } from 'react'

function NewColor(props){
    let [input, setInput] = useState('')
    return (
        <form
        input = {input}
        onSubmit={props.addColor}>
        <input type="text" 
        onChange={(e)=> {
            console.log(input, e.target.value)
            setInput(e.target.value)}}
         />
        <button type="submit">Submit!</button>
    </form>
    )
}

export default NewColor


// import React, { useState } from 'react'

// function ColorForm(props){
//     let [input, setInput] = useState('')

//     return (
//         <div>

//         </div>
//     )
// }