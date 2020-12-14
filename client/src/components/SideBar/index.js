import logo from "../../assets/logo.png";
import styles from "./style.module.css";
import Form from "../containers/Form";
import cns from "classnames";

const SideBar = (props) => {
  const addItem = (title, description) => {
    if (title && description) {
      const newData = {
        title: title,
        description: description,
        coords: props.coords,
      };
      fetch("http://localhost:9999/mappoints", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((res) => {
          props.setdata([...props.data, res]);
        });
    }
    props.closeForm();
  };

  const setcenter = (index) => {
    props.setcenter(props.data[index].coords);
  };

  return (
    <div className={props.className}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <Form addItem={addItem} showForm={props.showForm} />
      {props.data.map((item, index) => {
        return (
          <ul key={item.title} className={styles.items}>
            <li className={styles.item} onClick={() => setcenter(index)}>
              <div className={styles.title}>
                <h4 style={{ display: "inline" }}>Title:</h4> {item.title}
              </div>
              <div className={styles.description}>
                <h4>Description</h4>
                {item.description}
              </div>
              <button
                className={cns(styles.buttons, styles.update)}
                onClick={() => props.update(index)}
              >
                Update
              </button>
              <button
                className={cns(styles.buttons, styles.delete)}
                onClick={() => props.delete(index)}
              >
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default SideBar;
