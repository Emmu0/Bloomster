import React from "react";

const Recap = ({ data }) => {
  // let links = [];
  // if (data) {
  //   let linksItem = data.split(",");
  //   linksItem.map((vl, ky) => {
  //     if (vl) {
  //       try {
  //         let url = new URL(vl);
  //         links.push(url?.href);
  //       } catch (e) { }
  //     }
  //   });
  // }

  return (
    <div className="d-flex align-items-start flex-wrap referencedata">
      <p className="flex w-100 mb-3">
        <ul className="p-2 w-100">
          <div
            className="refeneceancortxt"
            dangerouslySetInnerHTML={{
              __html: data && data,
            }}
          />
          {/* {links.length > 0 &&
            links.map((vl, ky) => (
              <li>
                <a href={vl} target='_blank'>
                  {vl}
                </a>
              </li>
            ))} */}
        </ul>
        <span className="AudioIcon">
          {/* <img src={image.Audioicon} alt="" /> */}
        </span>
      </p>
    </div>
  );
};

export default Recap;
