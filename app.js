const ws = new WebSocket("wss://chat-backend.mr-migle2-0.workers.dev");

ws.onmessage = e => {
  const li = document.createElement("li");
  li.textContent = e.data;
  document.getElementById("chat").appendChild(li);
};

function send() {
  const input = document.getElementById("msg");
  if (!input.value) return;
  ws.send(input.value);
  input.value = "";
}

