export const pricingPlans = [
  {
    name: "starter",
    price: 59,
    features: [
      { type: "Team members", value: "2", available: true },
      { type: "Cloud storage", value: "20GB", available: true },
      { type: "Integration help", available: false },
      { type: "Sketch Files", available: false },
      { type: "API Access", available: false },
      { type: "Complete documentation", available: false },
    ],
    colors: {
      bg: "#fff",
      text: "gray.500",
    },
  },
  {
    name: "premium",
    price: 89,
    features: [
      { type: "Team members", value: "10", available: true },
      { type: "Cloud storage", value: "40GB", available: true },
      { type: "Integration help", available: true },
      { type: "Sketch Files", available: true },
      { type: "API Access", available: false },
      { type: "Complete documentation", available: false },
    ],
    colors: {
      bg: "var(--black)",
      text: "#fff",
    },
  },
  {
    name: "enterprise",
    price: 99,
    features: [
      { type: "Team members", value: "Unlimited", available: true },
      { type: "Cloud storage", value: "100GB", available: true },
      { type: "Integration help", available: true },
      { type: "Sketch Files", available: true },
      { type: "API Access", available: true },
      { type: "Complete documentation", available: true },
    ],
    colors: {
      bg: "#fff",
      text: "gray.500",
    },
  },
];
