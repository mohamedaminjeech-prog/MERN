import { Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePs } from "../JS/Actions/PsActions";


const DeletePs = ({ id }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeletepS = () => {
    dispatch(deletePs(id));
    setIsModalOpen(false);
    navigate(-1);
  };
  return (
    <div className="flex-1">
      <button
        onClick={showModal}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition"
      >
        Delete
      </button>
      <Modal
        title="Delete Ps"
        open={isModalOpen}
        onOk={handleDeletepS}
        onCancel={handleCancel}
        okType="danger"
      >
        <p>Are you sure you want to delete this ps?</p>
      </Modal>
    </div>
  );
};

export default DeletePs;
