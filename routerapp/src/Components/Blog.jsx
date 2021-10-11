import React from 'react';
import { Link , Switch , useRouteMatch , Route } from 'react-router-dom'; 
import Dogs  from './Dogs'; 
import Cars from './Cars'; 
import Recipies from './Recipies'; 
import Paramet from './Paramet';

const Blog=()=> { 
    const { path, url } = useRouteMatch;
    return (
        <div>
           <ul> 
               <li><Link to= {`${url}/recipies`}>Recipies</Link></li> 
               <li><Link to= {`${url}/dogs`}>Dogs</Link></li> 
               <li><Link to= {`${url}/cars`}>Cars</Link></li> 
               </ul> 
      

    
      <Switch> 
          <Route path={`${path}/recipies`}><Recipies/></Route> 
          <Route path={`${path}/dogs`}><Dogs/></Route> 
          <Route path={`${path}/cars`}><Cars/></Route> 
          <Route path={`${path}/:Param`}><Paramet/></Route>
      </Switch> 
      
     
        </div>
    )
}

export default Blog
