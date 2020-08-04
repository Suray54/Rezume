import React, { Component } from "react";
import "./output.styles.scss";
import {
  firestore,
  convertClientSnapShotToMap,
  deleteClient,
} from "./../../firebase/firebase.utils";

export default class Output extends Component {
  state = {
    collections: [],
  };
  componentDidMount() {
    const showRef = firestore.collection("Client");
    showRef.onSnapshot(async (snapshot) => {
      console.log(snapshot);
      const contactMap = convertClientSnapShotToMap(snapshot);
      console.log(contactMap);
      this.setState({ collections: contactMap });
    });
  }
  handleDelete = (id) => {
    deleteClient(id);
  };

  render() {
    const { collections } = this.state;
    return (
      <div className=" output">
        <div className="row">
          <div className="col-md-12">
            <h2>
              List of <span>Contacts</span>
            </h2>
            <div className="client-header">
              <div className="header-block">
                <span>Name</span>
              </div>
              <div className="header-block">
                <span>Email</span>
              </div>
              <div className="header-block">
                <span>phone</span>
              </div>
              <div className="header-block">
                <span>message</span>
              </div>
              <div className="header-block">
                <span>Remove</span>
              </div>
            </div>

            {collections.map((collection) => (
              <div className="client-header" key={collection.id}>
                <div className="header-block">
                  <span>{collection.name}</span>
                </div>
                <div className="header-block">
                  <span>{collection.email}</span>
                </div>
                <div className="header-block">
                  <span>{collection.phone}</span>
                </div>
                <div className="header-block">
                  <span>{collection.message}</span>
                </div>
                <div className="header-block">
                  <button onClick={() => this.handleDelete(collection.id)}>
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
