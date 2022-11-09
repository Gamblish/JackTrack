import React, { ReactNode, useEffect, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Navigate, Route } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { IUser } from '../store/types/user'

import LoadingPage from '../pages/LoadingPage'

const PrivateRoute = (props: any) => {
	const { user, loading } = useTypedSelector(state => state.user)

	const [result, setResult] = useState<any>()

	useEffect(() => {
		if (loading) {
			setResult(<LoadingPage />)
		} else {
			setResult((user === null) ? <Navigate to="/login" /> : props.component)

		}




	},
		[user, loading])




	return result






}

export default PrivateRoute