export interface UserType {
    id: string;
    name: string;
    email: string;
    avatar: string | File | Blob;
    roles: string[];
    role: string;
    lastActivity: string;
    first_name: string;
    last_name: string;
    company_id: string;
}

export interface AlertType {
    open: boolean;
    user?: UserType;
}

export interface CompanyType {
    id: string;
    name: string;
    description: string;
    email: string;
    first_name: string;
    last_name: string;
    company_ids: string;
}