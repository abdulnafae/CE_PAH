import React from 'react'

function DeleteAxios() {
    const[id, setId]=useState(' ');
    const[name, setName]=useState(' ');
    const handleIdChange=event=>{setId(event.target.value);};
    //const handleSubmit=event=>{setName(event.target.value);};
    const handleSubmit=event=>{
        event.preventDefault();
        axios.put(`http://localhost:3001/users/`)
    }
  return (
    <div>
      
    </div>
  )
}
