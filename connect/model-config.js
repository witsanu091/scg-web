const BASE_URL = "http://127.0.0.1:8000/";

export default class User {
  Register = (data) => {
    return new Promise(async (resolve, reject) => {
      var header = new Headers();
      header.append("Content-Type", "application/json");

      var requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data),
      };

      fetch(BASE_URL + "api/users", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          //   console.log(result, "result");
          if (result.status == "success") {
            resolve(result);
          } else {
            reject("เกิดข้อผิดพลาด");
          }
        })
        .catch((error) => {
          console.log(error, "error");

          reject(error);
        });
    });
  };

  GetUser = () => {
    return new Promise(async (resolve, reject) => {
      var header = new Headers();
      header.append("Content-Type", "application/json");
      var requestOptions = {
        method: "GET",
        headers: header,
      };
      fetch(BASE_URL + "api/users", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result, "result");
          if (result.status == "success") {
            resolve(result);
          } else {
            reject("เกิดข้อผิดพลาด");
          }
        })
        .catch((error) => {
          console.log(error, "error");
          reject(error);
        });
    });
  };

  Update = (data, id) => {
    return new Promise(async (resolve, reject) => {
      var header = new Headers();
      header.append("Content-Type", "application/json");

      var requestOptions = {
        method: "PUT",
        headers: header,
        body: JSON.stringify(data),
      };

      fetch(BASE_URL + "api/users/" + id, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          //   console.log(result, "result");
          if (result.status == "success") {
            resolve(result);
          } else {
            reject("เกิดข้อผิดพลาด");
          }
        })
        .catch((error) => {
          console.log(error, "error");

          reject(error);
        });
    });
  };

  Delete = (id) => {
    console.log(id, "id");

    return new Promise(async (resolve, reject) => {
      var header = new Headers();
      header.append("Content-Type", "application/json");

      var requestOptions = {
        method: "DELETE",
        headers: header,
      };

      fetch(BASE_URL + "api/users/" + id, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result, "result");
          if (result.status == "success") {
            resolve(result);
          } else {
            reject("เกิดข้อผิดพลาด");
          }
        })
        .catch((error) => {
          console.log(error, "error");

          reject(error);
        });
    });
  };

  Setsha512 = (key) => {
    return new Promise((resolve, reject) => {
      const pass = crypto.subtle
        .digest("SHA-512", new TextEncoder("utf-8").encode(key))
        .then((buf) => {
          return Array.prototype.map
            .call(new Uint8Array(buf), (x) => ("00" + x.toString(16)).slice(-2))
            .join("");
        })
        .catch((error) => {
          reject(error);
        });
      resolve(pass);
    });
  };
}
