import React, { useRef, useEffect, useState } from 'react';
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { themeSettings } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Test from './components/Test';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useSelector } from 'react-redux';
import Menu from './components/Menu';
import Users from './components/Users';
import User from './components/User';
import Products from './components/Product';

function App() {
  const mode = useSelector((state) => state.themeToggler.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const menuRef = useRef(null);
  const [menuWidth, setMenuWidth] = useState(0);

  useEffect(() => {
    if (menuRef.current) {
      setMenuWidth(menuRef.current.offsetWidth);
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: 'flex' }}>
          <Menu ref={menuRef} /> 
          <div style={{ marginLeft: menuWidth, flex: 1 }}> 
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/test' element={<Test />} />
              <Route path='/users' element={<Users />} />
              <Route path='/users/:id' element={<User />} />
              <Route path='/products' element={<Products />} />
              
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
