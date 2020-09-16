import React, {useState ,useEffect} from 'react';

import api from './services/api'

import './App.css';

import Header from './components/Header';

import hello from './img/ola.jpeg';



function App(){
const [projects, setProjects] = useState([]);

useEffect(()=> {
    api.get('projects').then(response => {
    setProjects(response.data);
    });
}, []);

    async function handleAddproject(){
         //setProjects([... projects , `novo projeto ${Date.now()}` ]);  
        const response = await api.post('projects' , {
           title: `novo projeto ${Date.now()}`,
           owner: `josé luis`  
         });   

         const projects = response.data;

         setProjects([...projects, project]);
     }
          
    return(
     <>
    <Header title= "Projects"/>

     <img width='300px' src={hello} />

    <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
    </ul>
        <button type="button" onClick={handleAddproject}>adicionar projeto</button>
    </>
    );
} 

export default App;