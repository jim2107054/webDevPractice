import {Typography} from '@mui/material'
import './App.css'

function App() {

  return (
    <>
      <div className="">
        <h1>mui tutorials</h1>
        <Typography variant='h5' sx={{color:'green', fontFamily:'monospace', fontWeight:'semibold', backgroundColor:'purple',padding:5, borderRadius:5}}>
          {/* By the help of sx prop, we can style the component */}
          Hi I'm a typography component
        </Typography>
      </div>
    </>
  )
}

export default App
