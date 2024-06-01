import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import VickyComingSoon from "../../widget/VickyComingSoon";
import { COMING_SOON } from "../../../utils/DataObjects";
import { ShimmerCategoryList } from "react-shimmer-effects";

const ExploreBasics = (resourceInnerData) => {
  const { getLessonResources } = useSelector((state) => state.collections);
  const dispatch = useDispatch();
  const [basicsData, setBasicsData] = useState();
  const [shimmerload, setShimmerload] = useState();

  useEffect(() => {
    if (getLessonResources) {
      setBasicsData(getLessonResources?.records[0]?.basics);
    }
  }, [getLessonResources]);

  useEffect(() => {
    if (resourceInnerData) {
      setTimeout(() => {
        setShimmerload(resourceInnerData);
      }, 1000);
    }
  }, [resourceInnerData]);
  return (
    <>
      {basicsData || shimmerload?.length > 0 ? (
        <div className='w-100 '>
          <div className='moduleWrap'>
            <div className='moduleList mb-4'>
              <div className='submoduleList' id='module'>
                <ul>
                  {basicsData &&
                    basicsData?.map((data, key) => (
                      <li className='d-flex justify-content-between'>
                        {key + 1 + ". "} {data.name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : shimmerload === undefined ? (
        <ShimmerCategoryList items={2} categoryStyle='STYLE_SIX' />
      ) : (
        <div className='p-5 m-auto resourcessc'>
          <VickyComingSoon description={COMING_SOON[2]?.description} />
        </div>
      )}
    </>
  );
};

export default ExploreBasics;
