import React from 'react'
import { Header as HeaderComp, Segment } from 'semantic-ui-react'


const fixedMenuStyle = {
   backgroundColor: '#fff',
   border: '1px solid #ddd',
   boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
   position: 'fixed',
   top: '0',
   left: '0',
   width: '100%',
   zIndex: '99'
}


const Header = () => {
   return (
      <Segment className='sticky-header' style={fixedMenuStyle} >
         <HeaderComp as='h2'  >
            Online shop
         </HeaderComp>
      </Segment>
   )
}

export default Header;
