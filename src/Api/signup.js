import supabaseApiService from "./service";

const signup = async (email, password) => {
  const response = await supabaseApiService.auth.signUp({
    email: email,
    password: password,
  });
  return response.data;
};

export default signup;
