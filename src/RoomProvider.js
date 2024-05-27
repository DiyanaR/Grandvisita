import React, { Component, createContext } from "react";
import roomsData from "./Rooms.json";

const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    popularRooms: [],
  };

  componentDidMount() {
    let rooms = this.formatData(roomsData);
    let popularRooms = rooms.filter(
      (room) =>
        room.slug === "card-family-deluxe" ||
        room.slug === "card-double-deluxe" ||
        room.slug === "card-single-deluxe"
    );
    this.setState(
      {
        rooms,
        popularRooms,
        sortedRooms: rooms,
        loading: false,
      },
      () => {
        console.log("popular Rooms: ", this.state.popularRooms);
      }
    );
  }

  formatData(items) {
    return items.map((item) => {
      let id = item.id;
      let images = item.images;
      let room = { ...item, images, id };
      return room;
    });
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
