import { useState } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { updatePs } from "../JS/Actions/PsActions";

const EditPs = ({ id, ps }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: ps?.title || "",
    description: ps?.description || "",
    price: ps?.price || "",
    photo: ps?.photo || "",
  });

  const showModal = () => {
    setFormData({
      title: ps?.title || "",
      description: ps?.description || "",
      price: ps?.price || "",
      photo: ps?.photo || "",
    });
    setIsModalOpen(true);
  };

  const handleCancel = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  const handleEditPs = () => {
    if (!id) return;

    dispatch(
      updatePs(id, {
        title: formData.title,
        description: formData.description,
        price: Number(formData.price),
        photo: formData.photo,
      })
    );

    setIsModalOpen(false);
  };

  return (
    <div className="flex-1">
      <button
        onClick={showModal}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-medium transition"
      >
        Edit
      </button>

      <Modal
        title="Edit PS"
        open={isModalOpen}
        onOk={handleEditPs}
        onCancel={handleCancel}
        okText="Save Changes"
        cancelText="Cancel"
        okType="primary"
      >
        <div className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 min-h-25"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditPs;
