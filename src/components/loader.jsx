import "../style/loader.css";

const Loader = (props) => {
  return (
    <div className="wrapper" {...props}>
      <div className="spinner" style ={{"background":"black"}}></div>
      <p>{props.children}</p>
    </div>
  );
};

export default Loader;
