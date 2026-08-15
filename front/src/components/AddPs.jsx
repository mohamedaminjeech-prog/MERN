import { useState } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { addps } from "../JS/Actions/PsActions";

const AddPs = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [ps, setps] = useState({
    title: "",
    description: "",
    price: "",
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setps({
      ...ps,
      [name]: name === "price" ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addps({
        title: ps.title,
        description: ps.description,
        price: Number(ps.price),
        photo: ps.photo,
      }),
    );

    setOpen(false);
    setps({
      title: "",
      description: "",
      price: "",
      photo: "",
    });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition"
      >
        Add PS
      </button>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
        width={700}
      >
        <div className="p-4">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Add New PS
          </h1>

          <p className="text-gray-500 mb-8">
            Add a PS item to your marketplace.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  name: "title",
                  label: "Title",
                  placeholder: "PlayStation 5",
                },
                {
                  name: "description",
                  label: "Description",
                  placeholder: "PS console description",
                },
                {
                  name: "price",
                  label: "Price",
                  placeholder: "799",
                  type: "number",
                },
                {
                  name: "photo",
                  label: "Photo URL",
                  placeholder: "https://image.com/ps.jpg",
                },
              ].map((field) => (
                <div
                  key={field.name}
                  className={
                    field.name === "description" ? "md:col-span-2" : ""
                  }
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>

                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={ps[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              ))}
            </div>

            {ps.photo && (
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">Preview</p>

                <img
                  src={ps.photo}
                  alt="ps preview"
                  className="w-full h-48 object-cover rounded-lg border"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-8 bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg text-lg font-medium transition"
            >
              Save PS
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddPs;
