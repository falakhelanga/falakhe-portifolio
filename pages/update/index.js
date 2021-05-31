import axios from "axios";
import { useState } from "react";
const Update = () => {
  const [image, setImage] = useState();
  const [cv, setCv] = useState();
  const uploadHandler = async (e) => {
    const uploadedFile = e.target.files[0];
    const formData = new FormData();
    formData.append("file", uploadedFile);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const { data } = await axios.post("/api/upload", formData, config);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const imageUplader = async (e) => {
    const url = await uploadHandler(e);
    setImage(url);
  };
  const cvUplader = async (e) => {
    const url = await uploadHandler(e);
    setCv(url);
  };
  return (
    <div className="container text-white">
      <div>
        <labe>image</labe>
        <input
          type="file"
          onChange={(e) => {
            imageUplader(e);
          }}
        />
      </div>
      <div>
        <labe>cv</labe>
        <input
          type="file"
          onChange={(e) => {
            cvUplader(e);
          }}
        />
      </div>
    </div>
  );
};

export default Update;
