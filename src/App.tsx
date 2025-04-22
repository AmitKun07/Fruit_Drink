
import './App.css'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import Header from "./components/Header";


// function App() {

//   const handleClick = () =>{
//       alert("You clicked");
//   };

//   return (
    
//     <div className="flex flex-col items-center justify-center min-h-svh">
//       <div className='flex flex-row'>

//       <Input className='flex w-[300px]' />
//       <Button onClick={handleClick}>Click me</Button>
//       </div>
//     </div>
//   )
// }

// export default App


import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import BelowBannerSection from "./components/BelowBannerSection";
import FruitPic from "./components/FruitPic";
import OrangePic from "./components/OrangePic";
import Footer from "./components/Footer";
import Cards from "./components/Cards";


function App() {
  return (
    <div className="space-y-20">
      <Header />
      <BannerSection/>
      <BelowBannerSection/>
      <Cards/>
      <FruitPic/>
      <OrangePic/>
      <Footer/>
     
      
      
      {/* Other components will follow here */}
    </div>
  );
}

export default App;
