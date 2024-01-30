import React, { useEffect, useState } from 'react'
import { loadAllCategories } from '../services/category-service'
import { toast } from 'react-toastify';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const CategorySideMenu = () => {

    const [categories,setCategories]=useState([]);
    


 useEffect(()=>{
    loadAllCategories().then(data=>{

     console.log(data)
     setCategories(data)

     }).catch((error)=>{

        console.log(error)

     toast.error("error in loading categories !!")

     },[])
},[])

  return (
    <div>
      <ListGroup>
        <ListGroupItem tag={Link} to={'/'} action={true} className='border-0'>
            All Blogs
        </ListGroupItem>

        {categories && categories.map((cat,index)=>{


            return (
                <ListGroupItem className='border-0 shadow-0 mt-1'  tag={Link} to={'/categories/'+cat.categoryId} key={index} action={true}>{cat.categoryTitle}</ListGroupItem>
            )
        })}
      </ListGroup>


    </div>
  )
}

export default CategorySideMenu
