import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://xmxfayjchurskbonjjpp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteGZheWpjaHVyc2tib25qanBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NDExNDQsImV4cCI6MjAyNTExNzE0NH0.CTSEjlPMJ6qu2MMTbE3CWUbiMzGeWCDDz5-SWrCdUY4'
export const supabase = createClient(supabaseUrl, supabaseKey)



//const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
//const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
//export const supabase = createClient(supabaseUrl, supabaseAnonKey)