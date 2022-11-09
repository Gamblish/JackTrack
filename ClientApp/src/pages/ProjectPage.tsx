import React, { FC, useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchProject } from '../store/action-creators/project'
import '../styles/TasksPage.css'




const ProjectPage: FC = () => {


	const { fetchMissions,fetchProject } = useActions()
	const { missions } = useTypedSelector(state => state.mission)
	const {	projects,loading} = useTypedSelector(state => state.project)
	const [projectId,setNum] = useState(0)


	useEffect(() => {
		(fetchProject());
		
		
	}, [])

	useEffect(()=>{
		setNum(Number(projects?.at(0)?.id))
	},[projects])

	useEffect(()=>{
		

		(fetchMissions(Number(projects?.find((value,index)=>value.id==projectId)?.id)));
		
	},[projectId])

	return (
		<div className='TasksPage'>
			<Link to="/">Home</Link>
			<div className='ProjectsPanel'>
			{
				projects.map(project => 
				project.id==projectId?null:<div key={project.name} className="ChooseProject" onClick={()=> setNum(project.id)}>
					{project.name}
				</div>)
			}
			</div>
			{missions.map(mission =>
				<div key={mission.id} className="Task">

				<div className='Task_Number'>
				#{mission.id}
				</div>
				<div className='Task_Name'>
				{mission.name}	
				</div>	

				<div className='Task_Description'>
					{mission.description}
				</div>
			 	</div>
			)}

		</div>)
}







export default ProjectPage;