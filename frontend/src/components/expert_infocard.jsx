//专家个人主页的信息卡片
import { Row, Col, Tag, Flex, Modal } from "antd";
import { Link } from "react-router-dom";
import { addConsultation } from "../services/consultationService";
import { useState } from "react";

const ExpertInfoCard = ({ expert }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (e) => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    addConsultation(expert.id)
      .then((res) => {
        alert("Payment successful, you can start chatting now!");
        location.href = `/consultation?receiverId=${expert.id}`;
      })
      .catch((e) => {
        alert(e);
        console.log(e);
        if (e == "Insufficient balance!") location.href = `/user`;
      });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Row justify="space-between" align="middle" className="my-10">
      <Col>
        <img
          loading="lazy"
          src={expert.avatar}
          alt="Profile"
          className="border-white border-solid shadow-lg aspect-square rounded-full w-[260px] object-cover mr-10"
        />
      </Col>
      <Flex vertical flex={"1"} justify={"space-between"} className="h-[300px]">
        <Row justify="space-between" align="middle">
          <h1 className="text-5xl tracking-tight text-black">{expert.name}</h1>
          <button
            style={{
              width: "180px",
              height: "70px",
              fontSize: "26px",
              color: "white",
              borderRadius: "16px",
              border: "none",
            }}
            className="cursor-pointer bg-rose-400 hover:bg-rose-700 hover:scale-110 transition-transform duration-300 ease-in-out"
            onClick={showModal}
          >
            Chat Now!
          </button>
          <Modal
            title="Consultation Confirmation"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>{`You are going to consult ${expert.name},it will cost you $${expert.price},are you sure?`}</p>
          </Modal>
        </Row>
        <p className="my-4 text-2xl leading-8 text-black whitespace-normal min-h-40">
          {expert.aboutMe}
        </p>
        <Row justify="start" align="middle">
          <h2 className="my-auto text-2xl leading-7 text-black">Specialty:</h2>
          {expert.specialities?.map((item, index) => (
            <Link to={`/expert?tag=${item.id}`} key={index}>
              <Tag.CheckableTag
                key={index}
                className="mx-4 px-5 py-1 rounded border-zinc-500 text-center"
              >
                {item.content}
              </Tag.CheckableTag>
            </Link>
          ))}
        </Row>
      </Flex>
    </Row>
  );
};

export default ExpertInfoCard;
