import { useState } from "react";

const About = () => {
  let [visible, setVisible] = useState(false);
  const changeVis = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
    <div>
      <h1>About me</h1>
      <h3>Chris Reinhart</h3>
      {visible ? <h4>chris@email.com</h4> : "Click on the button to"}
      <button className="btn btn-primary btn-sm" onClick={changeVis}>
        Show email
      </button>
    </div>
  );
};

export default About;

// alt we could use onClick{()=> setVisible(true)}   as an inline function
