import React, { useEffect, useState } from "react";
import Button from "./Button";
import Div from "./Div";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./Redux/Reduxtest";
import { allpost } from "./Service/post";

const Test = () => {
  const dispatch = useDispatch();

  const { value } = useSelector((state) => state.Reduxtest);
  console.log(value);

  useEffect(() => {
    dispatch(allpost);
  }, []);

  const { isFetchingpost, allpostdata, isFeatchingpostfailed } = useSelector(
    (state) => state.postdata
  );

  const inc = () => {
    console.log("increase");
    dispatch(increment());
  };
  const dec = () => {
    console.log("decrease ");
    dispatch(decrement());
  };

  const view1 = (id) => {
    console.log(id);
    console.log(allpostdata[id]);
    document.getElementById("showh").innerHTML = allpostdata[id].title;
    document.getElementById("showp").innerHTML = allpostdata[id].content;
  };

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      {isFetchingpost && (
        <div
          className="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}

      <div className=" d-flex justify-content-evenly flex-wrap">
        {allpostdata.map((i, index) => (
          <div class="card text-start bg-primary text-light p-3 rounded m-3 col-5">
            <div key={i.id} class="card-body">
              <h4 class="card-title">{i.title}</h4>
              <p class="card-text">{i.content}</p>
              <Button
                className="btn btn-success"
                text="view"
                onClick={() => view1(index)}
                data_bs_toggle="modal"
                data_bs_target="#modalId"
              />
            </div>
          </div>
        ))}
      </div>

      <Div
        id="divid"
        className="col-11 text-light fw-bold d-flex justify-content-evenly mx-auto p-3 rounded bg-primary"
        text={
          <>
            <Button className="btn btn-success col-3" text="in" onClick={inc} />
            <p className="p-3 text-light fw-bold">{value}</p>
            <Button className="btn btn-success col-3" text="de" onClick={dec} />
          </>
        }
      />

      <button
        type="button"
        class="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#formmodal"
      >
        Launch
      </button>

      <div
        class="modal fade"
        id="formmodal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <form onSubmit={handleSubmit} class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitleId">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <label htmlFor="title">Title:</label>
                <input
                  className=" form-control"
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="content">Content:</label>
                <input
                  className=" form-control"
                  type="text"
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        class="modal fade"
        id="modalId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitleId">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <h1 id="showh"></h1>
                <p id="showp"></p>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
