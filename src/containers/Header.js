import React from 'react'
import { Header as HeaderComp, Segment } from 'semantic-ui-react'


const Header = () => {
   return (
      <Segment clearing>
         <HeaderComp as='h2'  >
            Fake shop
         </HeaderComp>
      </Segment>
   )
}

export default Header;
