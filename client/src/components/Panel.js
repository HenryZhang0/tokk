
const Panel = ({userData}) => {
  return (
    <div className='panel' style={panel}>
      


      {/* video embed */}
      {/* <div className="videoDiv" style = {videoDiv}>
        <video className = 'video' style = {video} src = "!https://v16-webapp.tiktok.com/57f35a7c687b30734adbe3a004b67b36/62303541/video/tos/useast2a/tos-useast2a-ve-0068c003/7fb88e4278bb4ceca7104aa76740d12a/?a=1988&br=3576&bt=1788&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33Hnz7ThfWdvDXq&l=202203150041260101890741480679ACA5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amRwNmg6Zm1lOzMzNzczM0ApOTtoaGUzOTtpN2Q2Nmc2NGdnczA2cjRfcmdgLS1kMTZzc2EuYTQ2YWEuXi4zM2A1YTE6Yw%3D%3D&vl=&vr="/>
      </div> */}
      


      {/* data stuff */}
      <div>
          <b>TIKTOK DATA</b>
          {typeof userData.most_common_hashtags === "undefined" ? (
            <p>Loading...</p>
            ) : (
              <div> 
                <p>{userData.username}</p>
                <img src = {userData.profilePicture} alt="Profile Picture" width="178" height="178"></img>
                <div id = "profilelink">
                  <p><a href= {"https://www.tiktok.com/@" + String(userData.id)} target="_blank">TikTok Profile</a></p>
                </div>
                <b>MOST COMMON HASHTAGS</b>
                <div >
                  {userData.most_common_hashtags.map((hasht, i) => <p key={i} style = {{margin: "3px 0"}}>{hasht[0]} - {hasht[1]}</p>)}
                </div>
              </div>
          )}

        </div>

    </div>
  )
}
const videoDiv = {
  height: '200px',
  backgroundColor: 'blue'
}
const video = {
    
  position: 'absolute',
  border: 'solid 1px red',
  height: '100%',
  width: '80%',
  padding: '10px'
}

const panel = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    borderRadius: '5px',
    height: '600px',
    width: '400px',
    margin: '10px',
}

export default Panel
