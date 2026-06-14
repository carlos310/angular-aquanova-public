// src/infrastructure/adapter/authService.ts
export async function login(email: string, password : string) {
  const res = await fetch("http://localhost:4000/api/usuarios/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password  })
  });
  if (!res.ok) throw new Error("Error en login");
  const data = await res.json();
  localStorage.setItem("token", data.token);
}

export async function getMe() {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:4000/api/usuarios/me", {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error("Error obteniendo usuario");
  return res.json();
}
