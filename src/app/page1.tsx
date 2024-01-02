import "./globals.css";
import { useNavigate } from 'react-router-dom'

export default function Page1() {
  const navigate = useNavigate()
  const handleClick = (e:any) =>{
      navigate('/connect')
  }

  return (
    <div className="App" onClick={handleClick}>
      <header className="App-header">
        <img src='logo.jpg' className="App-logo" alt="logo"  />
      </header>
    </div>
  );
}
