import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import SideBar from "./SideBar";
import Map from "./Map";

const App = () => {
  const [center, setCenter] = useState([16.89804, 80.10301]);
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([
    { title: "test0", description: "description0", coords: [0, 0] },
  ]);
  const [coords, setCoords] = useState([]);
  const closeForm = () => {
    setShowForm(!showForm);
    setCoords([]);
  };
  const openForm = (gotLat, gotLng) => {
    if (showForm) return;
    setShowForm(!showForm);
    setCoords([gotLat, gotLng]);
  };

  const getData = () => {
    fetch("http://localhost:9999/mappoints", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  const delete0 = (index) => {
    fetch("http://localhost:9999/mappoints/" + data[index]._id, {
      method: "delete",
    }).then(() => {
      getData();
    });
  };

  const update0 = (index) => {};

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.App}>
      <SideBar
        className={styles.sidebar}
        showForm={showForm}
        closeForm={closeForm}
        data={data}
        setdata={setData}
        coords={coords}
        setcenter={setCenter}
        delete={delete0}
        update={update0}
      />
      <Map
        className={styles.map}
        data={data}
        center={center}
        openForm={openForm}
      />
    </div>
  );
};

export default App;
