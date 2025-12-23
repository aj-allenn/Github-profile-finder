



export default function User({user}){

    const {avatar_url,followers,following,public_repos,url}=user;
    return <div className="user">
         <div>
            <img src={avatar_url} className="avatar" alt="User" />
         </div>
         <div>
            <a href={`https://github.com/${login}`}>{name || login}</a>
         </div>
    </div>
}