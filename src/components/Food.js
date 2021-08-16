import React from 'react'
import Card from './Card'
import '../App.css'
import barbie from './images/barbie.jpg'
import pizza from './images/pizza.jfif'
import pizzaone from './images/pizzaone.jfif'
import chettinad from './images/chettinad.jfif'

import imagefour from './images/imagefour.jfif'

import five from './images/fiveimage.jfif'

import six from './images/six.jfif'

import seven from './images/seven.jfif'

import eight from './images/eight.jfif'

const Food=(props)=>{
    return(
        <div className="App">
         <Card name="SN Pizza & Snacks" subtitle="Pizza,Fast Food,Sandwich" img={pizza}/>
         <Card name="Angel Fast Food" subtitle="Chettinad,Chinese,Fast Food" img={pizzaone}/>
         <Card name="Selvam Chettinad Mess" subtitle="South Indian,Chinese,Chettinad" img={chettinad}/>
         <Card name="RHR Restaurant" subtitle="South Inian,Chinese,North Indian" img={imagefour}/>
         <Card name="Hotel Chola" subtitle="Biriyani,South Indian,Chinese" img={five}/>
         <Card name="Rock N Roll" subtitle="Lebanese,FastFood,Desserts" img={six}/>
         
         <Card name="Subway" subtitle="HealthyFood,Fastfood,Sandwich" img={seven}/>
         <Card name="KFC" subtitle="Burger,Fast Food,Beverages" img={eight}/>
         <Card name="Pizza Hut" subtitle="Pizza,FastFood,Desserts" img={pizza}/>
         <Card name="Boom Cafe" subtitle="Cafe,FastFood,Beverages"img={chettinad}/>
         <Card name="McDonald's" subtitle="Burger,Fatfood,Beverages" img={five}/>
         <Card name="Aroma bakery" subtitle="Pizza,Fast Food,Desserts" img={six}/>
         <Card name="Bakingo" subtitle="Bakery,Desserts,Beverages" img={pizzaone}/>
         <Card name="Falooda Hut" subtitle="Desserts,Ice cream,Beverages" img={eight}/>
         
         <Card name="Biggies Burger" subtitle="Burger,FastFood" img={five}/>
         <Card name="Lassi Factory" subtitle="Pizza,Fast Food,Sandwich" img={imagefour}/>
        </div>
    )
}

export default Food;