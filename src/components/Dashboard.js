import { Card, CardBody, CardHeader } from "reactstrap";

function Dashboard() {
  return (
    <div className="bg-light shadow-lg main-render ">
      <div className="row justify-content-around">
        <div className="col-md-11  mt-5 mb-5">
          <Card className="bg-custom text-custom text-bold">
            <CardBody className="text-center">
              <h1> Welcome to React-SideBar</h1>
            </CardBody>
          </Card>
          <Card className="mt-3">
            <CardBody className="text-center">
              <h4> A responsive sidebar menu designed with React.</h4>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <CardHeader className="bg-custom text-custom text-bold">
              Custom Built Side Bar
            </CardHeader>
            <CardBody>
              <p>
                This side bar is custom built in React and can be implemented to
                any project with ease.
              </p>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">Reponsive</li>
                <li className="list-group-item">Icon Menu</li>
                <li className="list-group-item">Expanded Menu</li>
                <li className="list-group-item">Mobile Menu In bootstrap</li>
                <li className="list-group-item">Customize Colors and Icons</li>
              </ul>
            </CardBody>
          </Card>
        </div>

        <div className="col-md-4">
          <Card>
            <CardHeader className="bg-custom text-custom text-bold">
              Testing
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row mt-4 mb-4 justify-content-center">
        <div className="col-12 text-center">
          Free to use personal or commericial. Open source project by &nbsp;
          <a
            href="https://www.github.com/cwilliamson29"
            alt="Find me on GitHub"
          >
            Chris Williamson @ GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
