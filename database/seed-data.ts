interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pendiente: Non ad pariatur excepteur labore nulla ullamco.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "En-progreso: Commodo id laborum irure est excepteur et ipsum dolor exercitation ipsum exercitation.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Terminada: Do duis consequat reprehenderit ut velit labore dolore ad.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
