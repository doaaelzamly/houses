import React from 'react';
import {NavBar, Footer} from '../../Components'

const Layout = ({children})=> {
return <>
<NavBar/>
 {children}
<Footer/>
</>
}

export default Layout