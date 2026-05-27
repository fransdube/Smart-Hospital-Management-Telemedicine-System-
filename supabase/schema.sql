-- AfyaConnect Supabase Schema for Laboratory and Billing (Draft)

-- Enum for user roles
CREATE TYPE user_role AS ENUM ('patient', 'doctor', 'admin');

-- Users table (extends Supabase auth.users or acts as public profile)
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY, -- References auth.users(id)
    full_name TEXT NOT NULL,
    role user_role NOT NULL DEFAULT 'patient',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Laboratory Tests table
CREATE TABLE public.lab_tests (
    id SERIAL PRIMARY KEY,
    patient_id UUID REFERENCES public.profiles(id),
    requested_by UUID REFERENCES public.profiles(id), -- Doctor or Admin who requested
    test_name TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('Pending', 'In Progress', 'Completed')) DEFAULT 'Pending',
    result TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE
);

-- Billing Invoices table
CREATE TABLE public.invoices (
    id SERIAL PRIMARY KEY,
    patient_id UUID REFERENCES public.profiles(id),
    generated_by UUID REFERENCES public.profiles(id), -- Admin/Finance staff
    service_description TEXT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('Pending', 'Paid')) DEFAULT 'Pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    paid_at TIMESTAMP WITH TIME ZONE
);

-- Payments table (to track individual payments, e.g., M-Pesa transactions)
CREATE TABLE public.payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    invoice_id INTEGER REFERENCES public.invoices(id),
    patient_id UUID REFERENCES public.profiles(id),
    amount DECIMAL(10, 2) NOT NULL,
    payment_method TEXT NOT NULL CHECK (payment_method IN ('M-Pesa', 'Card', 'Cash')),
    transaction_reference TEXT, -- e.g., M-Pesa receipt number
    status TEXT NOT NULL CHECK (status IN ('Pending', 'Completed', 'Failed')) DEFAULT 'Pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Setup Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lab_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Note: Specific RLS policies would be added here to restrict access based on user role.
