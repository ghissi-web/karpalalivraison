import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hmiakkgoynypnygfeyvy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtaWFra2dveW55cG55Z2ZleXZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMjQyMjEsImV4cCI6MjA2ODYwMDIyMX0.2rVbt4Po_4nvMO11Wcs9HgR1nxNlusWovY4tbxZaRbQ';

export const supabase = createClient(supabaseUrl, supabaseKey); 