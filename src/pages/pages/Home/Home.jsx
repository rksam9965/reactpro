import React, { useState } from 'react'
import './home.css'
import Header from '../../../components/navbar/Header/header'
import ExploreMenu from '../../../components/navbar/ExploreMenu/ExploreMenu'
import FoodList from '../../../components/FoodList/FoodList'

const home = () => {
  const [category,setCategory] = useState("ALL");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodList category={category }></FoodList>
    </div>
  )
}

export default home
