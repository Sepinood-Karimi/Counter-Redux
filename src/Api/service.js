import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ovobeqwsivmokkmuwthe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92b2JlcXdzaXZtb2trbXV3dGhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0MjA2MDYsImV4cCI6MTk5Nzk5NjYwNn0.bCkRZuytgqiTTQFLLEUA2qhyQxRcfAUsmkMufliMozc";
const supabaseApiService = createClient(supabaseUrl, supabaseKey);

export default supabaseApiService;
