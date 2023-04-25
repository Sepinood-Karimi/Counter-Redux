import supabaseApiService from "./service";

const signIn = async (email, password) => {
  const { data, error } = await supabaseApiService.auth.signInWithPassword({
    email: email,
    password: password,
  });
};

export default signIn;
