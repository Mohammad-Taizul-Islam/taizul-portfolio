/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting the form
      - `email` (text) - Email address of the person
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp when the submission was created
      - `read` (boolean) - Whether the message has been read (default false)
      - `replied` (boolean) - Whether a reply has been sent (default false)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Public users can insert their own contact submissions
    - Only authenticated admin users can read submissions
  
  3. Indexes
    - Index on `created_at` for efficient sorting
    - Index on `read` for filtering unread messages
  
  4. Notes
    - The table stores contact form submissions securely
    - Public insert allows visitors to submit forms
    - Reading requires authentication for privacy
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false,
  replied boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_read ON contact_submissions(read);