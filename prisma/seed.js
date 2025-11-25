// Seed logic, sementara cuma config dan user
// Hanya jalan jika tidak ada data config dan user
const { PrismaClient } = require("../lib/generated/prisma");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const defaults = [
    { key: "BUP_BRIGJEN", value: "60" },
    { key: "BUP_MAYJEN", value: "61" },
    { key: "BUP_LETJEN", value: "62" },
    { key: "PENSIUN_USIA_PAMEN", value: "58" },
    { key: "PENSIUN_USIA_PAMA", value: "58" },
    { key: "PENSIUN_USIA_OTHER", value: "53" },
  ];

  const configCount = await prisma.config.count();
  if (configCount === 0) {
    for (const cfg of defaults) {
      await prisma.config.upsert({
        where: { key: cfg.key },
        update: { value: cfg.value },
        create: cfg,
      });
    }
    console.log("Seeded configs ✅");
  } else {
    console.log("Configs already seeded ✅");
  }

  const users = [
    {
      name: "Admin",
      email: "admin@example.com",
      password: process.env.SEED_ADMIN_PASSWORD || "admin123",
      role: "ADMIN",
    },
    {
      name: "User",
      email: "user@example.com",
      password: process.env.SEED_USER_PASSWORD || "user123",
      role: "USER",
    },
  ];

  const userCount = await prisma.users.count();
  if (userCount === 0) {
    for (const u of users) {
      const hashed = await bcrypt.hash(u.password, 10);
      await prisma.users.upsert({
        where: { email: u.email },
        update: { name: u.name, password: hashed, role: u.role },
        create: {
          name: u.name,
          email: u.email,
          password: hashed,
          role: u.role,
        },
      });
    }
    console.log("Seeded default users ✅");
  } else {
    console.log("Users already seeded ✅");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
