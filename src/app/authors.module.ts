export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

export const authors: Author[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    gender: "Male",
    ipAddress: "192.168.1.10"
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    gender: "Female",
    ipAddress: "192.168.1.11"
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    gender: "Male",
    ipAddress: "192.168.1.12"
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Williams",
    email: "emily.williams@example.com",
    gender: "Female",
    ipAddress: "192.168.1.13"
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@example.com",
    gender: "Male",
    ipAddress: "192.168.1.14"
  }
];
