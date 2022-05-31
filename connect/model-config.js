const BASE_URL = "http://localhost:9000/";

export default class User {
  Register = (data) => {
    return new Promise(async (resolve, reject) => {
      var hearder = new Headers();
      hearder.append("Content-Type", "application/json");

      var formdata = JSON.stringify({ data });
      var requestOptions = {
        method: "POST",
        headers: hearder,
        body: formdata,
      };

      fetch(BASE_URL + "user/saveUser", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result, "result");
          if (result.message == "success") {
            alert("บันทึกสำเร็จ");
            resolve(result);
          } else {
            alert("เกิดข้อผิดพลาด");
            reject("เกิดข้อผิดพลาด");
          }
        })
        .catch((error) => {
          console.log(error, "error");
          alert("เกิดข้อผิดพลาด");
          reject(error);
        });
    });
  };

  GetUser = () => {
    fetch(BASE_URL + "user/getUser")
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "result");
        if (result.message == "success") {
          resolve(result);
        } else {
          reject("เกิดข้อผิดพลาด");
        }
      })
      .catch((error) => {
        console.log(error, "error");
        reject(error);
      });
  };
}
