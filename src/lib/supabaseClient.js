
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bqacfwdvobrbpjlzbynn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYWNmd2R2b2JyYnBqbHpieW5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzODk3MzEsImV4cCI6MjA2NTk2NTczMX0._y6si8uAFNhDUbSYC1Mu1AEKH8xPRl02fgrPr7LeUsI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
