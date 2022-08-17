import "./App.css";

function App() {
  return (
    <div className="container-fluid bg-secondary flex-start">
      <div className="row">
        <div className="col-12 bg-primary d-block d-sm-block d-md-none d-lg-none">
          <div className=" bg-primary">asdfasdfasdf</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 col-lg-3 col-xlg-2 bg-primary d-none d-sm-none d-md-block">
          <div className="box-inner bg-primary">asdf</div>
        </div>
        <div className="col-12 col-md-7 col-lg-9 col-xlg-10 bg-warning">
          asdf
        </div>
      </div>
    </div>
  );
}

export default App;
