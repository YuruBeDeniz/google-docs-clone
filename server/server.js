const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

//every time our client connects it'll run this io connection and it'll give us
//socket: this socket is how we communicate back to the client
io.on("connection", socket => {
    socket.on("send-changes", delta => {
      socket.broadcast.emit("receive-changes", delta)
      console.log(delta);
    })
   // console.log("Our client connected to our server!!");
})