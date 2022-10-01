import Profile from "./profile/Profile";
import Img from './avatar.jpg'

function App() {
      const imgStyle ={ width: '30px'}

   const handleClick =(name)=>{
        alert(name);
    }
  return (
    
    <div >
     <Profile fullName='chaimae daoudi' profession='etudiant' handleClick={handleClick}><img style={imgStyle} src={Img}/></Profile>
    </div>
  );
}

export default App;
