import Header from "./Header";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "2px solid #ACACAC",
  textAlign: "center"
};

const Layout = props => (
  <>
    <Header />
    <div style={layoutStyle}>{props.children}</div>
    <div
      className="fab"
      style={{ position: "fixed", bottom: "5%", right: "2.5%" }}
      className="fab"
    >
      <Fab color="primary" size="large">
        <AddIcon />
      </Fab>
    </div>
  </>
);

export default Layout;
