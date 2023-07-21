import { useEffect, useState } from "react";
import Link from '../components/Link';
import './Projects.css';
import List from "../components/List";
import {Link as RouterLink} from 'react-router-dom'

export default function Projects({username}) {
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async function () {
            const projects = await fetch(`https://api.github.com/users/${username}/repos`);
            const result = await projects.json();

            if(result) {
                setProjects(result);
                setLoading(false);
            }
        })()
    }, [username])

    return (
        <div className="Projects-container">
            <h2>Projects</h2>
            {
                loading ? (
                    <span>Loading...</span>
                ) : (
                    <div>
                        <List items={projects.map((project) => ({
                            field: project.name, 
                            value: <RouterLink to={`${project.name}`}>{project.name}</RouterLink>
                            }))} />
                    </div>
                )
            }
        </div>
    )
}