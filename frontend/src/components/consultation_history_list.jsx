import React, { useEffect, useState } from "react";
import ConsultationHistoryCard from "./consultation_history_card";
import { Link } from "react-router-dom";
import { getOtherUserById } from "../services/userService";

export default function ConsultationHistoryList() {
  const [n, setN] = useState(3);
  const [expanded, setExpanded] = useState(false);
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    for (let i = 1; i <= 3; i++) {
      getOtherUserById(i).then((res) => {
        setExperts((prev) => [...prev, res]);
      });
    }
  }, []);

  const handleClick = () => {
    setExpanded(!expanded);
    if (n === 2) {
      setN(6);
    } else {
      setN(2);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <header className="text-2xl text-center text-black max-w-[84px] m-auto mt-3">
        History:
      </header>

      {experts.slice(0, n).map((expert) => (
        <Link to={`/expert/${expert.id}/consultation`} key={expert.id}>
          <React.Fragment key={expert.id}>
            <ConsultationHistoryCard expert={expert} />
          </React.Fragment>
        </Link>
      ))}

      {/* <Row justify="left" style={{ marginTop: "0px" }}>
        <Button onClick={handleClick} hoverable>
          <Row align="middle">
            <CommentOutlined style={{ marginRight: "10px" }} />
            <h3>{expanded ? "收起聊天" : "全部聊天"}</h3>
          </Row>
        </Button>
      </Row> */}
    </div>
  );
}
