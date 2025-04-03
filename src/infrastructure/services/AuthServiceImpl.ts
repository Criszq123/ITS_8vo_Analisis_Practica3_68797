import { User } from "../../core/domain/User";
import { AuthService } from "../../core/ports/AuthService";

export class AuthServiceImpl implements AuthService {
  async login(email: string, password: string): Promise<User> {
    // Realiza la petición real al backend
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      // Intenta obtener el mensaje de error de la respuesta
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al iniciar sesión");
    }
    const data = await response.json();

    // Suponiendo que el backend devuelve un objeto con la información del usuario y el token
    localStorage.setItem("token", data.token);
    return data;
  }

  async logout(): Promise<void> {
    // Aquí puedes llamar a algún endpoint de logout si lo tienes, o simplemente borrar el token
    localStorage.removeItem("token");
  }
}
