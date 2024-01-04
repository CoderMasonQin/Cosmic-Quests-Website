"use client";

import { use, useEffect } from "react";
import "./globals.css";
import { useRouter } from "next/navigation";

export default function Page1() {
  //const navigate = useNavigate()
  const router = useRouter()
  const handleClick = (e:any) =>{
      //navigate('/connect')
      router.push('/page2')
  }
  useEffect(() => {
    setTimeout(() => {
      router.push('/page2')
    }, 3000);
  }, []);

  return (
    <div className="App" onClick={handleClick}>
      <header className="App-header">
        <img src='logo.jpg' className="App-logo" alt="logo"  />
      </header>

    </div>
  );
}