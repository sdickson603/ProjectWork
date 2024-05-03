export function LoginForm(params) {

    const handleChange = (event) => {
        let newCredentials = { ...params.credentials };
        newCredentials[event.target.name] = event.target.value;
        params.setCredentials(newCredentials);
    };

    return (
        <div className="box" style={{ maxWidth: "unset", wordBreak: "break-word", backgroundImage:'url("https://img.freepik.com/premium-photo/vintage-old-newspaper-grunge-texture-background-retro-paper_916191-188489.jpg?w=996")'}}>
            <div style={{ padding: "10px" }}>
                <span style={{ fontWeight: "bold", color: "white", fontSize: "30px"}} >{(params.currentUser) ? params.currentUser.user : "You aren't logged in. It's way more fun if you login."}</span>
            </div>
            <div className={(params.currentUser) ? "hidden" : "visible"} style={{padding: "10px"}}>
                <div>
                    <label htmlFor="user" style={{fontWeight: "bold", color: "white", fontSize: "20px"}}>User: </label>
                    <input type="text" size={10} id="user" name="user" value={params.credentials.user} onChange={handleChange} />
                </div>

                <div style={{paddingBottom: "10px", paddingTop: "10px"}}>
                    <label htmlFor="password" style={{fontWeight: "bold", color: "white", fontSize: "20px"}}>Password: </label>
                    <input type="text" size={10} id="password" name="password" value={params.credentials.password} onChange={handleChange} />
                </div>
                <span style={{textAlign: "left", fontWeight: "bold", color: "white", fontSize: "20px"}}> Only click here if you love reading articles.</span>
                <button onClick={params.login} className="button">
                    {(params.currentUser) ? "Logout" : "Heck ya! I'm logging in because I love reading articles."}
                </button>
            </div>

        </div>
    )
};