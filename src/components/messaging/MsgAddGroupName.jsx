const AddGroupName = ({handleChange}) => {
  return (
    <div>
      <div className="AddGroupName">
        <div className="input-Group">
          <div className="input-form">
            <input
              type="text"
              placeholder="Add Group Name"
              className="form-control"
              onChange={(event) => {handleChange(event.target.value)}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGroupName;
