import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/LoginPage'
import PrivateRoute from './components/PrivateRoute'
import { useActions } from './hooks/useActions'
import { useTypedSelector } from './hooks/useTypedSelector'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'

function App() {
	const { loading, user } = useTypedSelector(state => state.user)
	const { fetchAuth } = useActions()
	useLayoutEffect(() => {

		fetchAuth()
	}, [])





	return (
		<div>

			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage/>}/>
					<Route path='/login' element={<Login />} />
					<Route path='project' element={<PrivateRoute component={<ProjectPage/>} />} />
					<Route path="*" element={<NotFoundPage />}/>



				</Routes>

			</BrowserRouter>

		</div>
	)
}

export default App