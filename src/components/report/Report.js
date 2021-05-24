import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Report = () => {
  const [data, setData] = useState({
    fileType: "",
    model: "",
    image: "",
  });

  const [dropDownValue, setDropDownValue] = useState([
    "Image",
    "Video",
    "Test",
  ]);

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const { fileType, model, image } = data;
  const isEnabled = fileType.length > 0 && model.length > 0 && image.length > 0;

  const formSubmit = () => {
    alert(
      `Selected type is ${data.fileType}. model is ${data.model}. and images is ${data.image}`
    );
  };
  
  return (
    <>
      <div classname="container">
        <Form onSubmit={formSubmit} className="form-group">
          <Form.Group className="container contact_div col-md-6 col-10 mx-auto">
            <h2>Welcome</h2>
            <Form.Label>File Type</Form.Label>
            <Form.Control
              as="select"
              className="form-control"
              value={data.fileType}
              name="fileType"
              onChange={InputEvent}
            >
              <option value="" disabled>
                select File Type
              </option>
              <option>Image</option>
              <option>video</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="container contact_div col-md-6 col-10 mx-auto">
            <Form.Label>Model</Form.Label>
            <Form.Control
              as="select"
              className="form-control"
              value={data.model}
              name="model"
              onChange={InputEvent}
            >
              <option>Select Model</option>
              <option>1</option>
              <option>2</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="container contact_div col-md-6 col-10 mx-auto">
            <Form.Label>Upload File</Form.Label>
            <Form.Control
              type="file"
              className="form-control"
              value={data.image}
              name="image"
              onChange={InputEvent}
            />
          </Form.Group>
          <br />
          <Form.Group className="container contact_div col-md-6 col-10 mx-auto">
            <button
              type="submit"
              className="btn btn-success"
              disabled={!isEnabled}
            >
              Submit
            </button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};
export default Report;
