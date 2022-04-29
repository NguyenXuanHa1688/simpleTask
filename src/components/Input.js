import { useState } from "react"

const Input = ({ onAdd }) => {
  const [text, setText] = useState('')
  const inProgress = useState(true)
  
  const onSubmit = (e) => {
    e.preventDefault()
    onAdd({text, inProgress})

    setText('')
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div>
        <label className="form__label" htmlFor="todo">~ Today I need to do <a href="/tasklistdone">THIS</a> ~</label>
        <input className="form__input"
             type="text" 
             id="todo" 
             name="to-do"
             size="30"
             value={text}
             onChange={(e) => setText(e.target.value)}
             required/> 
        <input type="hidden" className="inProgress" value={inProgress}/>     
        <button className="button"><span>Submit</span></button>              
      </div>

    </form>
    )

}

export default Input