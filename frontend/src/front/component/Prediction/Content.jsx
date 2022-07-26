import { Link } from "react-router-dom";
// import Item from "./Item";

function Content({
  keys,
  onHandleSubmit,
  onHandleCheckbox,
  predictionHandle,
  prediction,
  match,
  posts
}) {
  function generateId() {
    return (
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36)
    );
  }
  return (
    <div className="container-fluid Appp ">
      <div className="contents text-capitalize">
        <hr />

        <Link to="/Robot-Care/predict">
          <div className="mainPredict">
            <button className="btnd" onClick={predictionHandle}>
              <span>Predict</span>
            </button>
          </div>
        </Link>
        {/* ------------------------------------------------- */}
        <div className="pre">
          <div className="container">
            <div className="row">
              <div className="content col col-sm-12 sym form-group form-check col-6">
                <legend
                  style={{
                    color: "white",
                    textAlign: "left",
                    padding: "8px",
                    textShadow:
                      "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                  }}
                >
                  <h2 className="h2 text-capitalize id">{match.params.key}</h2>
                </legend>
                <form onSubmit={onHandleSubmit}>
                  <div
                    className="form-row"
                    style={{ margin: "auto", width: "90%", padding: "5px" }}
                  >
                    {keys[match.params.key].map((el, index) => (
                      <div
                        key={index + generateId()}
                        style={{ display: "inline-block" }}
                        className="form-group form-check  col-sm-12 col-md-6 col-lg-4 "
                      >
                        <div
                          className="chh col d-flex px-2  "
                          style={{
                            margin: "5px",
                            textAlign: "left",
                            width: "100%",
                            padding: "5px",
                           
                          }}
                        >
                          <input
                            className="  mx-2 chh"
                            type="checkbox"
                            id={el}
                            name={el}
                            value={el}
                            onChange={(e) => onHandleCheckbox(e.target)}
                            defaultChecked={posts[`${el}`] === 1 ? true : false}
                          />
                          <label className=" " htmlFor={el}>
                            {el}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
