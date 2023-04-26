import supabaseApiService from "./service";

const signIn = async (email, password) => {
  const response = await supabaseApiService.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return response.data;
};

export default signIn;
