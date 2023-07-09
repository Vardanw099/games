import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { instance } from "../api";
function Content({ categoryName }) {
  const [data, setdata] = useState([]);
  const [fdata, setfdata] = useState([]);
  const [fromTo, setfromTo] = useState(0);
  const [popup, setpopup] = useState(false);
  const [popupinfo, setpopupinfo] = useState({});
  useEffect(() => {
    instance
      .get(`/games`)
      .then((res) => (setdata(res.data), setfdata(res.data)));
  }, []);

  useEffect(() => {
    if (categoryName !== "All") {
      let filtereddata = data.filter((item) => {
        return item.genre === categoryName;
      });
      setfdata(filtereddata);
      console.log(filtereddata);
    } else {
      setfdata(data);
    }
  }, [categoryName]);

  const pageChange = ({ selected }) => {
    setfromTo(selected * 12);
  };

  const search = (e) => {
    let val = e.target.value;
    let filtereddata = data.filter((item) => {
      return item.title.toLowerCase().includes(val.toLowerCase());
    });
    setfdata(filtereddata);
  };

  const popupOpen = (i) => {
    setpopupinfo(i);
    setpopup(!popup);
  };

  return (
    <div className="col-lg-10 lgcontent">
      <div
        style={{ top: window.scrollY }}
        className={popup ? "popup" : "dispnone"}
      >
        <div onClick={() => setpopup(!popup)} className="bigpopup"></div>
        <div className="popupcont">
          <h1>{popupinfo.title}</h1>
        </div>
      </div>
      {/* <input type="text" onChange={search} /> */}
      <div className="content">
        {fdata.slice(fromTo, fromTo + 12).map((item) => (
          <div className="product" key={item.id}>
            {/* <img src={item.thumbnail} alt="" /> */}
            <div
              className="zoom"
              style={{
                width: "220px",
                height: "200px",
                background: `url(${item.thumbnail})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100% ",
              }}
            ></div>
            <div onClick={() => popupOpen(item)} className="forpop"></div>
            <div className="productInfo">
              <p className="title">{item.title}</p>
              <a className="play" target="blank" href={item.game_url}>
                Play now
              </a>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        pageCount={Math.ceil(fdata.length / 12)}
        onPageChange={pageChange}
        pageRangeDisplayed={5}
        className="paginate"
        previousLinkClassName="prevPage"
        nextLinkClassName="nextPage"
      />
    </div>
  );
}

export default Content;
