import React from 'react'

export default function LogIn() {
 const welcome = {
    title: "Log in to Snapchat",
    description: "Chat, Snap, and video call your friends. Watch Stories and Spotlight, all from your computer.",
    require:"Username or email address",
    button: "Log in",
    proceed: "or continue with downloading Snapchat WebApp",
    download: ``,
}

return (
  <>
    <div className="left">
      <h1>{welcome.title}</h1>
      <p>{welcome.description}</p>
      <p>{welcome.require}</p>
      <input type="text" placeholder="Enter your username or email" />
      <button>{welcome.button}</button>
      <p>{welcome.proceed}</p>
      <img src="/microsoft-logo.png" alt="Microsoft logo" className="Logo" />
      <p>Looking for the app? Get it <a href = "https://www.snapchat.com/download">here.</a></p>
    </div>
  </>
);
}