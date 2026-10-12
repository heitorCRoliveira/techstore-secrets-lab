if (!process.env.PAYMENT_API_KEY) {
  throw new Error("PAYMENT_API_KEY nao configurada");
}

console.log("Configuracao da API validada.");