import React from 'react'
import { Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import TrophyIcon from '@mui/icons-material/EmojiEvents';
import AddShopingCardIcon from '@mui/icons-material/AddShoppingCart';

const ButtonComponent = () => {
  return (
    <div>
      <Button variant='contained'color='secondary' sx={{margin:20,borderRadius:15}}>Click me</Button>
      <Button variant='outlined' startIcon={<TrophyIcon/>}>Delete</Button>
      <Button variant='contained' startIcon={<DeleteIcon/>} sx={{marginLeft:6}}>Delete</Button>
      <IconButton color='primary' sx={{marginLeft:6}} aria-label='add to shopping cart'>
      <AddShopingCardIcon/>
      </IconButton>
    </div>
  )
}

export default ButtonComponent