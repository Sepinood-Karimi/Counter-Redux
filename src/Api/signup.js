import supabaseApiService from "./service";

const signup = async (email, password) => {
  const { data, error } = await supabaseApiService.auth.signUp({
    email: email,
    password: password,
  });
};

export default signup;
