import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import List from "../components/List";
import Link from "../components/Link";

export default function ProjectDetail ({username}) {
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        if(username && name) {
            (async function () {
                const data = await fetch(`https://api.github.com/repos/${username}/${name}`);
                const result = await data.json();
    
                if(result) {
                    setProject(result);
                    setLoading(false);
                }
            })()
        }
    }, [username, name])

    console.log(project);
    const items = [
        {
            field: 'clone_url',
            value: <Link url={project.clone_url} title={project.clone_url} />
        },
        {
            field: 'language',
            value: project.language
        },
    ];

    return <div className="Project-container">
        <h2>Project: {project.name}</h2>
        {
            loading ? (
                <span>Loading...</span>
            ) : (
                <div>
                    <List items={items} />
                </div>
            )
        }
    </div>
}