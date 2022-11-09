import React, { useEffect, useState } from 'react'

import { Formik, Field, Form } from "formik";
import { fetchData } from '../hooks/fetchHook';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IUser } from '../store/types/user';
import AuthForm from '../components/AuthForm';
import { Link, Navigate } from 'react-router-dom';
import '../styles/LoginPage.css'
import LoadingPage from './LoadingPage';
import { LogoSvg } from '../img/svgs';




const Login = () => {
	const { user, loading } = useTypedSelector(state => state.user)
	const [result, setResult] = useState<any>()
	useEffect(() => {

		if (loading) {
			setResult(<LoadingPage />)
		} else {
			user == null ? setResult(
				< div className='LoginPage'  >

					<LogoSvg />








					<AuthForm />





				</ div>
			) : setResult(<Navigate to="/" />)
		}
	}








		, [loading, user])

	return result
}



export default Login