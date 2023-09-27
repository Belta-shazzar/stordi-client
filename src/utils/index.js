import store from "../store";

export async function handleAuthResponse(response) {
  const { success, message, data } = response.data;
  const statusDetail = { success, message };

  if (!success) {
    return statusDetail;
  }

  const user = {
    data: data.user,
    token: data.token,
  };

  const token = `Bearer ${user.token}`;
  console.log("Here we go: ", token);

  await store.dispatch("addUser", user);
  await store.dispatch("notes", token);
  // await store.dispatch("categories", token);
  return statusDetail;
}
