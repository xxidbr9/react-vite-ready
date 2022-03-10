import React, { useState } from 'react'
import { useEffect } from 'react';
function App() {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() =>{
    console.log(selectedFile)
  },[selectedFile])
  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      </form>
    </div>
  )
}

export default App
