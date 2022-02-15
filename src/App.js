
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Loading } from './components/Loading/Loading'

import './global.scss';


function App() {
  return (
    <BrowserRouter>
		<Suspense fallback={Loading}>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
				</Routes>
		</Suspense>
			
	</BrowserRouter>
  );
}

export default App;
