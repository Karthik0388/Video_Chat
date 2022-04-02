const express = require("express");
const socket = require("socket.io");

const PORT = 5000;

const app = express();

// Listening a Port
const server = app.listen(PORT, err => {
  if (err) throw err;
  console.log(`The server is running on Port:${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let peers = [];
const broadcastEventTypes = {
  ACTIVE_USERS: "ACTIVE_USERS",
  GROUP_CALL_ROOMS: "GROUP_CALL_ROOMS",
};

io.on("connection", socket => {
  socket.emit("connection", null);
  console.log("new user connected");
  console.log(socket.id);
  
  socket.on("register-new-user", data => {
    peers.push({
      username: data.username,
      socketId: data.socketId,
    });
    console.log("regesterd new user");
    console.log(peers);

    io.sockets.emit("broadcast", {
      event: broadcastEventTypes.ACTIVE_USERS,
      activeUsers: peers,
    });
  });
// code for userDisconnection
  socket.on("disconnect", () => {
    console.log(`User Disconnected `);
    peers = peers.filter(peer => peer.socketId !== socket.id);
    io.sockets.emit("broadcast", {
      event: broadcastEventTypes.ACTIVE_USERS,
      activeUsers: peers,
    });
  });
});
