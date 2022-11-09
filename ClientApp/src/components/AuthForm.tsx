
import React, { useEffect } from 'react'

import { Formik, Field, Form } from "formik";
import { fetchData } from '../hooks/fetchHook';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IUser } from '../store/types/user';



const AuthForm = () => {
	const { setUser } = useActions()
	const { user, error } = useTypedSelector(state => state.user)




	return (
		<div className='AuthFormContainer'>

			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(value) => { setUser(value) }}>


				<Form className='AuthFormContainer_AuthForm'>
					<Field className='AuthFormContainer_AuthForm_Field' name="email" type="email" placeholder='Email' />
					<Field className='AuthFormContainer_AuthForm_Field' name="password" type="password" placeholder='Password' />
					<button className='AuthFormContainer_AuthForm_Button' type="submit">Submit</button>
					<div>{error}</div>
				</Form>
			</Formik>

		</div>
	)
}

export default AuthForm