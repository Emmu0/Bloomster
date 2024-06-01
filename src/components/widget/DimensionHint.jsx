/** @format */

import React, { useState } from "react";
import { TIPS } from "../../utils/DataObjects";
import { useDispatch } from "react-redux";
import { resetLoginResponse, showModal } from "../../redux/actions";

const DimensionHint = ({ skip, next, data }) => {
	let buttonLabel = "Next";
	const dispatch = useDispatch();
	TIPS.map((vl, ky) => {
		if (data?.key === vl.key) {
			if (ky + 1 === TIPS.length) {
				buttonLabel = "Finish";
			}
		}
	});

	console.log('@@ : TIPS ', TIPS, data);

	const [hintIndex, setHintIndex] = useState(0);

	const _nextBtn = (key, label, classNm) => {
		let hintInd = hintIndex + 1;
		setHintIndex(hintInd);
		next(hintInd, classNm);
		dispatch(resetLoginResponse());
		if (buttonLabel === "Finish") {
			dispatch(showModal());
		}
	};

	const _skip = (type) => {
		skip(type);
		dispatch(resetLoginResponse());
		dispatch(showModal());
	};

	return (
		<div
			className="modal fade d-block show guidepopups"
			id="guidePopup2"
			role="dialog"
			aria-labelledby="exampleModalCenterTitle"
			aria-hidden="true"
		>
			<div className="modal-dialog  modal-lg">
				<div className="modal-content">
					<div className={`GuidePopupWrap ${data?.classNME}`}>
						<h3>{data?.key}</h3>

						<p
							className="mt-2 mb-3"
							dangerouslySetInnerHTML={{ __html: data?.value }}
						/>
						<div className="flex">
							{buttonLabel == "Next" && (
								<button
									type="button"
									onClick={() => _skip(data?.key)}
									className="btn btn-primary"
								>
									Skip
								</button>
							)}
							<div className="">
								<span className="ActiveGuide text-light">
									{data?.currenttooltip} of {TIPS?.length}
								</span>
							</div>{" "}
							<button
								type="button"
								onClick={() => _nextBtn(data?.key, buttonLabel, data?.classNME)}
								className="btn btn-primary "
							>
								{buttonLabel}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DimensionHint;
