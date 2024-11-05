import React from 'react';
import HomePage from './pages/Home_Page/home_page';
import Animate from './animations/LotiLogo';
import './index.css';
// import NewHomePage from './pages/newHomePage'; 
import Layout from './pages/Landing_Page/landing_page';
// import CustomCursor from './componants/ui_componants/custom_cursor';
function App() {
  return (
     <div>
      {/* <HomePage /> */}
      {/* <NewHomePage/> */}
      {/* <CustomCursor/> */}
    
    <Layout>
    <HomePage />
  </Layout>
  </div>
  
  );
}

export default App;
