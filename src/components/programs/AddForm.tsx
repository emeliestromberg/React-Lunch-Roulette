import React from "react";

interface Props {
  buttontext: string;
  link: string;
}

const AddPersonForm = (props) => {
  return (
    <>
      <section className="formSection">
        <div className="addPersonForm">
          <form action="">
            <label for="name">Name of frontier:</label>
            <br />
            <input type="text" name="name" id="name" placeholder="Enter name" />
            <br />
            <input className="submitb" type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </>
  );
};

export default AddPersonForm;
