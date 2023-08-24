# Web socket tutorial

- In an ES module, you cannot use \_\_dirname, so follow
- following steps

- import path from 'path';
- import { fileURLToPath } from 'url';
- const \_\_filename = fileURLToPath(import.meta.url);

- const **dirname = path.dirname(**filename);

## For ES6 module refer this file

https://stackoverflow.com/questions/65721253/how-to-use-socket-io-in-node-js-with-es6-syntax

# For basic chatting

- For server

```
io.on("connection", (socket) => {
 console.log("Hello user ", socket.id);

 socket.on("msg_send", (data) => {
   io.emit("msg_rev", data);
 });
});

```

- For client

```
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

```
