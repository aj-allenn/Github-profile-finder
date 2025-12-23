



// export default function User({user}){

//     const {avatar_url,followers,following,name,public_repos,url}=user;
//     return <div className="user">
//          <div>
//             <img src={avatar_url} className="avatar" alt="User" />
//          </div>
//          <div>
//             <a href={`https://github.com/${login}`}>{name || login}</a>
//             <p>User joined on {`${createdData.getDate()} ${createdDate.toLocaleString('en-us',{
//                 month:'short' 
//               })} ${createdDate.getFullYear()}`}</p>
//          </div>
//          <div>
//             <div>
//                 <p>Public Repose</p>
//                 <p>{public_repos}</p>
//             </div>
//             <div>
//                 <p>Followers</p>
//                 <p>{followers}</p>
//             </div>
//          </div>
//     </div>
// }

export default function User({ user }) {

    if (!user) return null;   // ✅ safety check

    const {
        avatar_url,
        followers,
        following,
        name,
        public_repos,
        login,
        created_at
    } = user;   // ✅ added missing fields

    const createdDate = new Date(created_at); // ✅ fixed date handling

    return (
        <div className="user">

            <div>
                <img src={avatar_url} className="avatar" alt="User" />
            </div>

            <div>
                <a href={`https://github.com/${login}`} target="_blank">
                    {name || login}
                </a>

                <p>
                    User joined on{" "}
                    {`${createdDate.getDate()} 
                    ${createdDate.toLocaleString("en-us", { month: "short" })} 
                    ${createdDate.getFullYear()}`}
                </p>
            </div>

            <div>
                <div>
                    <p>Public Repos</p>
                    <p>{public_repos}</p>
                </div>

                <div>
                    <p>Followers</p>
                    <p>{followers}</p>
                </div>

                <div>
                    <p>Following</p>
                    <p>{following}</p>
                </div>
            </div>

        </div>
    );
}
