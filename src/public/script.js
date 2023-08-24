var socket = io();
let btn = document.getElementById("btn");
let inputMsg = document.getElementById("newMsg");
let inputList = document.getElementById("msgList");

btn.onclick = function () {
  socket.emit("msg_send", {
    msg: inputMsg.value,
  });
};

socket.on("msg_rev", (data) => {
  let limsg = document.createElement("li");
  limsg.innerText = data.msg;
  inputList.append(limsg);
});
