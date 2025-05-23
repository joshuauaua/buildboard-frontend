import "/src/components/teamPage/QuickConnect.css";

export default function QuickConnect( ) {
  return (
    <>
      <div className="card">
        <p className="title">Quick Connect</p>
        <div className="user__container">
          <div className="user">
            <div className="image"></div>
            <div className="user__content">
              <div className="text">
                <span className="name">Name</span>
              </div>
              <button className="follow">Connect</button>
            </div>
          </div>
          <div className="user">
            <div className="image"></div>
            <div className="user__content">
              <div className="text">
                <span className="name">Name</span>
              </div>
              <button className="follow">Connect</button>
            </div>
          </div>
          <div className="user">
            <div className="image"></div>
            <div className="user__content">
              <div className="text">
                <span className="name">Name</span>
              </div>
              <button className="follow">Connect</button>
            </div>
          </div>
        </div>
        <a className="more" href="#">
          See more
        </a>
      </div>


    </>
  );
}
