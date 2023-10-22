import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react'



const ProductComponent = () => {
   const products = useSelector((state) => state.allProducts.products)

   const renderList = products.map((product) => {
      const { id, title, price, category, image } = product
      const truncateTitle = title.length > 56 ? title.slice(0, 50) + '...' : title
      return (
         <Card key={id} link as={Link} to={`/product/${id}`} >
            <Image size="small" centered style={{ height: '180px', margin: '15px auto' }}>
               <img src={image} alt="title" style={{ height: '100%', width: '100%' }} />
            </Image>
            <Card.Content>
               <Card.Header style={{ minHeight: '70px' }}>
                  {truncateTitle}
               </Card.Header >
               <Card.Meta style={{ color: 'black', fontSize: '20px', fontWeight: 'bold', marginTop: '10px' }}>$ {price}</Card.Meta>
               <Card.Meta style={{ marginTop: '10px' }}>{category}</Card.Meta>
            </Card.Content>
         </Card>
      )
   })
   return (
      <Card.Group itemsPerRow='4' style={{ marginTop: '90px' }}>
         {renderList}
      </Card.Group>
   )
}

export default ProductComponent;


