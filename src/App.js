// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
// npm install @mui/icons-material
import './App.css';
import Card from './Component/Card';
import MUiCard from './Component/MUI-Card';
import ResponsiveAppBar from './Component/ResponsiveAppbar';

function App() {
  return (
    <>
      <ResponsiveAppBar />

      <div className="App">
      <Card name={"Rose"}  profession={"Vocalist"}
       image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfWEYHATuXQMtqoZSlF8wmdehh5aFUK9J_w&usqp=CAU'} 
       agency={"BlackPink"} />        
      <Card name={"Lisa"}  profession={"Dancer"} 
      image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWSLfOFsDRX4gj6GKiuc2A1JnjJtFXU_CMA&usqp=CAU'} 
      agency={"BlackPink"} />               
      
      <Card name={"Jimin"}  profession={"Dancer"} 
      image={'https://www.cheatsheet.com/wp-content/uploads/2019/10/BTS-.jpg?w=769&h=1024&strip=all&quality=89'}
       agency={"BtS"} />               

    <MUiCard />
    <MUiCard />
    <MUiCard />

      
      <Card name={"JungKook"}  profession={"Dancer"} 
      image={'https://wallpapers.com/images/hd/jungkook-dicon-photoshoot-na65e6llti8iphql.jpg'} 
      agency={"BtS"} />               
     
      <Card name={"Jennie"}  profession={"Rapper"} 
      image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrwAniLB_3_7ehXHYvoYZm6MRcVcy_GdtJw&usqp=CAU'} 
      agency={"BlackPink"} />        


      <Card name={"Jiso"}  profession={"Vocalist"} 
      image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgHGcvQsrWdIqN52KH6u8JmYGjXNMoXXsYtUOYdWghzPa4Fgozvdlx6rtTfI87G-A-x_4&usqp=CAU'} 
      agency={"BlackPink"} /> 


      </div>

    </>
  );
}

export default App;

