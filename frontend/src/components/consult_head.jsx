import { Link } from "react-router-dom";

function Avatar({ src, alt }) {
  return <img className="avatar" src={src} alt={alt} />;
}

function UserInfo({ name, status }) {
  return (
    <div className="user-info">
      <h2 className="user-name">{name}</h2>
      <div className="user-status">
        <span className="status-indicator"></span>
        <span className="status-text">{status}</span>
      </div>
    </div>
  );
}

function VideoButton() {
  return (
    <button className="call-button hover:scale-110 transition-transform duration-300 ease-in-out">
      <img className="call-icon" src="/videoIcon.png" alt="Video icon" />
      <span className="call-text">Video</span>
    </button>
  );
}

function ConsultHead({ receiver, rid }) {
  //这里的receiver是专家或者用户的信息
  return (
    receiver && (
      <>
        <div className="user-card">
          <Avatar src={receiver.avatar} alt={`avatar`} />
          <UserInfo
            name={receiver.name || receiver.username} //这里的receiver.name是专家的名字，receiver.username是用户的名字
            status={"Online"}
          />
          <Link to={`/videochat/${rid}`}>
            <VideoButton className="video-button" />
          </Link>
        </div>

        <style jsx>{`
          .user-card {
            display: flex;
            justify-content: space-between;

            max-width: 1000px;
            gap: 20px;
            font-weight: 600;
            padding: 10px 10px;
            position: absolute;
            top: 40px;
            left: 710px;
          }

          @media (max-width: 991px) {
            .user-card {
              flex-wrap: wrap;
              padding: 0 20px;
            }
          }

          .avatar {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 50%;
          }

          .user-info {
            display: flex;
            flex-direction: column;
          }

          .user-name {
            color: #000;
            font-size: 20px;
            font-family: Inter, sans-serif;
            margin: 0;
          }

          .user-status {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            color: #000;
            line-height: 150%;
          }

          @media (max-width: 991px) {
            .user-status {
              white-space: initial;
            }
          }

          .status-indicator {
            width: 10px;
            height: 10px;
            background-color: #68d391;
            border-radius: 50%;
          }

          .status-text {
            font-family: Inter, sans-serif;
          }

          .call-button {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 18px;
            background-color: #b2ddff;
            color: #1570ef;
            font-size: 16px;
            font-family: Inter, sans-serif;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            position: absolute;
            top: 20px;
            left: 785px;
          }

          .call-icon {
            width: 24px;
            height: 24px;
          }

          .call-text {
            margin: auto 0;
          }
        `}</style>
      </>
    )
  );
}
export default ConsultHead;
