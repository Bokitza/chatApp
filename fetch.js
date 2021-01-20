const data = {
  fields: { User: "yoav", Content: "hi this is a test :P" },
};

const submitButton = document.querySelector("#submitMsg");
submitButton.addEventListener("click", function () {
  fetch("https://api.airtable.com/v0/apppE0nnnFxJNhCjG/Table%201", {
    method: "POST", // or 'PUT'
    headers: {
      Authorization: "Bearer key3AHJQkA3Gkjagf",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function sayHi() {
  console.log("hi");
}

let counter = 0;
setInterval(getMessages, 800);

function getMessages() {
  fetch("https://api.airtable.com/v0/apppE0nnnFxJNhCjG/Table%201", {
    method: "GET", // or 'PUT'
    headers: {
      Authorization: "Bearer key3AHJQkA3Gkjagf",
    },
  }).then((response) =>
    response.json().then((data) => {
      const msgs = document.querySelectorAll(".msg");
      for (message of msgs) {
        message.remove();
      }
      const messages = data.records;
      messages.forEach((msg) => {
        const createdAt = new Date(msg.createdTime).toLocaleString("he");
        console.log(createdAt);

        const feed = document.querySelector("#feed");

        const date = msg.createdTime;
        const content = msg.fields.Content;
        const user = msg.fields.User;

        const header = document.createElement("h1");
        header.classList.add("msg");
        const contentDiv = document.createElement("h2");
        contentDiv.classList.add("msg");

        contentDiv.textContent = content;
        header.textContent = user;
        feed.appendChild(header);
        feed.appendChild(contentDiv);
      });
    })
  );
}
