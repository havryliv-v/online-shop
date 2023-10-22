
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Label, Header, Divider, Segment, Icon } from 'semantic-ui-react'

import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetails = () => {
   const product = useSelector((state) => state.product)
   const { title, image, price, category, description } = product
   const { productId } = useParams();
   const dispatch = useDispatch()

   const fetchProductDetail = async () => {
      const respronse = await axios
         .get(`https://fakestoreapi.com/products/${productId}`)
         .catch((err) => {
            console.log('Err', err)
         })
      dispatch(selectedProduct(respronse.data))
   }
   useEffect(() => {
      window.history.scrollRestoration = 'manual'
      if (productId && productId !== '') {
         fetchProductDetail()
      }
      return () => {
         dispatch(removeSelectedProduct())
      }
   }, [productId])
   return (
      <div className="ui grid container" style={{ marginTop: '90px' }}>
         {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
         ) : (

            <Segment>
               <Grid columns={2} relaxed='very'>
                  <Grid.Column>
                     <img className="ui fluid image" src={image} />

                  </Grid.Column>
                  <Grid.Column>
                     <h1>{title}</h1>
                     <Label as='a' color='teal' tag size="huge">
                        ${price}
                     </Label>
                     <Header as='h3' block brown color='yellow'>
                        {category}
                     </Header>
                     <p style={{ fontSize: '17px', color: 'grey' }}>{description}</p>
                     <Button animated='vertical' color='orange' style={{ width: '150px' }}>
                        <Button.Content hidden>Add to cart</Button.Content>
                        <Button.Content visible>
                           <Icon name='shop' />
                        </Button.Content>
                     </Button>
                  </Grid.Column>
               </Grid>

               <Divider vertical>And</Divider>
            </Segment>
         )}
      </div>
   )
}

export default ProductDetails;



