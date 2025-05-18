import "./StartThread.css";


export default function StartThread() {

  return (

    <label className="start-thread">
      <div className="start-thread-input">
        <input type="text" placeholder="Start a Thread..." />
      </div>
      <button className="post-button">Post</button>
  </label>
)
}