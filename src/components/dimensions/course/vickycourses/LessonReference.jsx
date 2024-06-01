const LessonReference = ({ data }) => {
  return (
    <>
      <div className="d-flex align-items-start flex-wrap referencedata">
        <p className="flex w-100 mb-3">
          <ul className="p-2 w-100">
            <div
              className="refeneceancortxt"
              dangerouslySetInnerHTML={{
                __html: data?.series?.reference && data?.series?.reference,
              }}
            />
          </ul>
        </p>
      </div>
    </>
  );
};

export default LessonReference;
