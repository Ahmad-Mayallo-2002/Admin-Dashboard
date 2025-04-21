type Transactions = {
  id: string;
  user: string;
  type: string;
  amount: number;
  status: string;
  method: string;
  color: string;
};

export const transactions: Transactions[] = [
  {
    id: "TXN001",
    user: "John Doe",
    type: "Credit",
    amount: 120.5,
    status: "Completed",
    method: "Credit Card",
    color: "var(--green)",
  },
  {
    id: "TXN002",
    user: "Jane Smith",
    type: "Debit",
    amount: 75.0,
    status: "Pending",
    method: "PayPal",
    color: "var(--heading-color)",
  },
  {
    id: "TXN003",
    user: "Michael Johnson",
    type: "Credit",
    amount: 250.0,
    status: "Completed",
    method: "Bank Transfer",
    color: "var(--green)",
  },
  {
    id: "TXN004",
    user: "Emily Brown",
    type: "Debit",
    amount: 30.99,
    status: "Failed",
    method: "UPI",
    color: "var(--red)",
  },
  {
    id: "TXN005",
    user: "Chris Evans",
    type: "Credit",
    amount: 499.99,
    status: "Completed",
    method: "Credit Card",
    color: "var(--green)",
  },
  {
    id: "TXN006",
    user: "Sophia Green",
    type: "Debit",
    amount: 89.5,
    status: "Completed",
    method: "PayPal",
    color: "var(--green)",
  },
  {
    id: "TXN007",
    user: "Liam White",
    type: "Credit",
    amount: 300.0,
    status: "Pending",
    method: "Bank Transfer",
    color: "var(--heading-color)",
  },
];
