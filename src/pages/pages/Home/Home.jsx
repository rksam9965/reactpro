import React, { useState } from 'react'
import './home.css'
import Header from '../../../components/navbar/Header/Header'
import ExploreMenu from '../../../components/navbar/ExploreMenu/ExploreMenu'
import FoodList from '../../../components/FoodDisplay/FoodDisplay'
import FoodDisplay from '../../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../../components/AppDownload/AppDownload'

const home = () => {
  const [category,setCategory] = useState("ALL");
  return (
    <div >
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category }/>
      <AppDownload/>
    </div>
  )
}

export default home
