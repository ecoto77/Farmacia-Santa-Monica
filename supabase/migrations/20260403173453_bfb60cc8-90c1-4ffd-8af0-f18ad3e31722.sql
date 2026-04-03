
-- Create storage bucket for promotion images
INSERT INTO storage.buckets (id, name, public) VALUES ('promotions', 'promotions', true);

-- Allow anyone to view promotion images
CREATE POLICY "Public read access for promotions" ON storage.objects FOR SELECT TO anon, authenticated USING (bucket_id = 'promotions');

-- Allow admins to upload promotion images
CREATE POLICY "Admins can upload promotion images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'promotions' AND public.has_role(auth.uid(), 'admin'::public.app_role));

-- Allow admins to delete promotion images
CREATE POLICY "Admins can delete promotion images" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'promotions' AND public.has_role(auth.uid(), 'admin'::public.app_role));
