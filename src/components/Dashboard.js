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
              <h4>
                A responsive sidebar menu designed with React and Bootstrap.
              </h4>
            </CardBody>
          </Card>
        </div>

        <div className="row mb-5 col-md-11 justify-content-around">
          <Card className="col-3 bg-custom text-white text-center">
            <p className="mt-2 mb-3">
              <a href="#install" className="text-white text-bold">
                Installation
              </a>
            </p>
          </Card>

          <Card className="col-3 bg-custom text-white text-center ">
            <p className="mt-2 mb-3">
              <a href="#faq" className="text-white text-bold">
                F.A.Q.
              </a>
            </p>
          </Card>

          <Card className="col-3 bg-custom text-white text-center ">
            <p className="mt-2 mb-3">Releases</p>
          </Card>
        </div>

        <div className="col-11 col-md-5 col-xl-4 m-auto">
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

        <div className="col-11 col-md-5 col-xl-4 m-auto">
          <Card>
            <CardHeader className="bg-custom text-custom text-bold">
              About
            </CardHeader>
            <CardBody>
              <p>
                Reat-Sidebar was designed for my blog's admin panel. I wanted a
                sidebar that was mainly icons but expanded from an icon sidebar
                to a sidebar with titles and icons. The design originaly came
                from{" "}
                <a
                  href="https://www.youtube.com/watch?v=CXa0f4-dWi4"
                  alt="Brian Design"
                >
                  Brian Design.
                </a>{" "}
              </p>
              <p>
                However, his design didn't fit my needs. It was primarily a top
                menu expanding sidebar. I modified it to be a column menu with
                just icons. The top menu you see is fully removable and not
                dependent on the side menu at all. For questions about features
                please continue reading the F.A.Q below.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="row justify-content-around mt-5" id="install">
          <Card className="col-11 col-lg-9 p-3 bg-custom">
            <p className="text-custom text-bold">Installation instructions</p>
            <Card className="mb-4">
              <CardHeader className="bg-secondary text-white">
                How to install - New project
              </CardHeader>
              <CardBody>
                If you wish to build a new project starting with this then all
                you have to do is clone the repo. There is no sense in reposting
                these instructions. <br />
                Please{" "}
                <a
                  href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"
                  alt="How to Clone Repo"
                >
                  follow this GitHub guild.
                </a>
              </CardBody>
            </Card>

            <Card className="mb-4">
              <CardHeader className="bg-secondary text-white">
                How to install - Existing project
              </CardHeader>
              <CardBody>
                <p>
                  It's pretty simple to install into an existing project but
                  there a few things you might need to know before hand to
                  reduce any possible frustation.
                </p>
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item">
                    The styles inside app.css is required.
                  </li>
                  <li className="list-group-item">
                    If you are not keeping the same file structure then be sure
                    to edit your imports.
                  </li>
                  <li className="list-group-item">
                    Sidebar-data.js is required and is how the mobile menu AND
                    sidebar menu get their links and icons
                  </li>
                  <li className="list-group-item">
                    Any components that render with this menu need to be given a
                    css class name of "main-render" on the primary div of your
                    return statement
                  </li>
                  <li className="list-group-item">
                    Be sure to check your depencies against this project to make
                    sure you are not missing any.
                  </li>
                </ol>
              </CardBody>
            </Card>
          </Card>
        </div>
        <div className="row justify-content-around mt-5" id="faq">
          <Card className="col-11 col-lg-9 p-3 bg-custom">
            <p className="text-custom text-bold">Frequently Asked Questions</p>
            <Card className="mb-4">
              <CardHeader className="bg-secondary text-white">
                How do i change the colors?
              </CardHeader>
              <CardBody>
                It's really simple. Open the app.css file and at the top there
                are css variables declared. The following table explains the
                colors:
                <ul className="list-group">
                  <li className="list-group-item">
                    "
                    <span className="text-danger text-bold">
                      --bg-color-custom
                    </span>
                    " is the primary background color. If you would like to add
                    this color to any other component its assigned with "
                    <span className="text-danger text-bold">bg-custom</span>"
                  </li>
                  <li className="list-group-item">
                    "
                    <span className="text-danger text-bold">
                      --text-color-custom
                    </span>
                    " is the primary text color. If you would like to add this
                    color to any other component its assigned with "
                    <span className="text-danger text-bold">text-custom</span>"
                  </li>
                  <li className="list-group-item">
                    "<span className="text-danger text-bold">--hover-bg</span>"
                    is the background color shown when you hover over a menu
                    link.
                  </li>
                  <li className="list-group-item">
                    "
                    <span className="text-danger text-bold">
                      --hover-border
                    </span>
                    " is the left border color that you see when you hover over
                    a menu link.
                  </li>
                  <li className="list-group-item">
                    "
                    <span className="text-danger text-bold">
                      --dropdown-custom-color
                    </span>
                    " and "
                    <span className="text-danger text-bold">
                      --dropdown-custom-text
                    </span>
                    " is the primary colors for the dropdown aspect of the menu.
                  </li>
                  <li className="list-group-item">
                    "
                    <span className="text-danger text-bold">
                      --dropdown-hover-color
                    </span>
                    " and "
                    <span className="text-danger text-bold">
                      --dropdown-hover-border
                    </span>
                    " is the primary colors for the dropdown HOVER aspect of the
                    menu.
                  </li>
                  <li className="list-group-item">
                    "
                    <span className="text-danger text-bold">
                      --mobile-menu-bg-color
                    </span>
                    " is the primary color for the mobile menu background around
                    the links.
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="mb-4">
              <CardHeader className="bg-secondary text-white">
                Why is my components rendering with incorrect spacing for the
                menu?
              </CardHeader>
              <CardBody>
                Your return statement inside the component needs to have a
                {" <div>"}
                inside with the class name of{" "}
                <span className="text-bold text-danger">main-render</span>.
                <p>
                  Example:{"  "}
                  <span className="text-bold text-danger">
                    {"return (<div className='main-render'> </div>)"}
                  </span>
                </p>
              </CardBody>
            </Card>

            <Card className="mb-4">
              <CardHeader className="bg-secondary text-white">
                How do i edit the links of the menu?
              </CardHeader>
              <CardBody>
                <p>Open the file componets/menu/sidebar-data.js</p>
                <p>
                  Inside this file you will see the links and their structure.
                  This is the only place that keeps the link info besides
                  setting your routes
                </p>
              </CardBody>
            </Card>

            <Card className="mb-4">
              <CardHeader className="bg-secondary text-white">
                How do i modify the icons?
              </CardHeader>
              <CardBody>
                <p>Open the file componets/menu/sidebar-data.js</p>
                <p>
                  First you need to find your icons and import them. I use react
                  icons found{" "}
                  <a
                    href="https://react-icons.github.io/react-icons"
                    alt="React Icons"
                  >
                    HERE
                  </a>
                </p>
                <p>
                  Once you found your icon modify the selected link's icon line.
                  If you are using react icons then the icons are imported
                  according their names. E.G. for Bootstrap Icons react-icons
                  names them BsNameoficon. So for the alarm icon it would be
                  "BsAlarm".
                </p>
                <p>So for the icon you would put "BsIcons.BsAlarm"</p>
                <p>
                  If your selected icon is not imported you will need to import
                  them similar to this{" "}
                  <span className="text-danger text-bold">
                    {"import * as BsIcons from 'react-icons/bs'"}
                  </span>
                </p>
              </CardBody>
            </Card>
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
