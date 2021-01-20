function postMsg(username, message) {
  const data = { fields: { User: username, Content: message } };

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
}

fetch(
  "https://api.airtable.com/v0/apppE0nnnFxJNhCjG/Table%201?api_key=key3AHJQkA3Gkjagf"
);

const submit = document.querySelector("#submitMsg");

submit.addEventListener("click", function () {
  const msg = document.querySelector("#msg").value;
  const userName = document.querySelector("#username").value;
  postMsg(userName, msg);
});
