import React from "react";
import { useSelector } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react'



const ProductComponent = () => {
   const products = useSelector((state) => state.allProducts.products)
   const { id, title } = products[0]
   console.log(id, title)
   return (

      <Card.Group>
         <Card >
            <Image style={{ height: '400px' }} />
            <Card.Content>
               <Card.Header>
                  {title}
               </Card.Header>
            </Card.Content>
         </Card>
      </Card.Group>
   )
}

export default ProductComponent;

// <div className="four column wide">
//    <div className="ui link cards">
//       <div className="card">
//          <div className="image">
//             <div className="content">
//                <div className="header">{title}</div>
//             </div>
//          </div>
//       </div>
//    </div>
// </div>