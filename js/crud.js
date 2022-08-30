///////////////////////////////////////////////////////////////////////
// ----------------------- CRUD Operations -------------------------//
/////////////////////////////////////////////////////////////////////

async function CRUD(url, method, objectToPost, handlingResult) {
  let first = await fetch(url, prepareRequestOptions(method, objectToPost));
  let second = await first.json();
  handlingResult(second);
}

//TODO Authentication is handled here
function prepareRequestOptions(method, objectToPost) {
  switch (method) {
    case "GET":
      return {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      };
    case "POST":
      return {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: objectToPost }),
      };
    case "PUT":
      return {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: objectToPost }),
      };
    case "DELETE":
      return {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      };
    default:
      throw `No options prepared for handling a ${method} method`;
  }
}