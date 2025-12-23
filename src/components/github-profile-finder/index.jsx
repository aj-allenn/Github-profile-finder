import { useEffect, useState } from "react";
import User from './user.jsx'

export default function GithubProfileFinder() {

    const [useName, setUserName] = useState('shiji369');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData() {
        setLoading(true);

        const res = await fetch(
            `https://api.github.com/users/${useName}`
        );

        const data = await res.json();

        if (data) {
            setUserData(data);
            setLoading(false);
        }

        console.log(data);
    }

  
    useEffect(() => {
        fetchGithubUserData();
    }, []);

    function handleSubmit() {
        fetchGithubUserData();
    }

    if (loading) {
        return <h1>Loading data please wait</h1>;
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    type="text"
                    name="search-by-username"
                    placeholder="Search github username"
                    value={useName}
                    onChange={(event) => setUserName(event.target.value)}
                />

                <button onClick={handleSubmit}>Search</button>
            </div>

            {
               userData && <User user={userData}/>
            }
        </div>
    );
}
