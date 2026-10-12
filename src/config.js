
function requiredEnv(name) {
  const value = process.env[name];

  if (!value || !value.trim()) {
    throw new Error(`Variavel obrigatoria ausente: ${name}`);
  }

  return value;
}

const config = {
  database: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT || 3306),
    name: requiredEnv("DB_NAME"),
    user: requiredEnv("DB_USER"),
    password: requiredEnv("DB_PASSWORD")
  },
  payment: {
    apiKey: requiredEnv("PAYMENT_API_KEY")
  },
  internal: {
    token: requiredEnv("INTERNAL_API_TOKEN")
  }
};

module.exports = config;