export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

// Instancia con tu clave
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const correo = formData.get("correo");

  if (!correo || typeof correo !== "string") {
    return new Response(JSON.stringify({
      success: false,
      message: "Correo no válido",
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { error } = await resend.emails.send({
      from: "GetWebsy Contacto <no-reply@getwebsy.es>", // ⚠️ usa uno verificado si tienes dominio
      to: "contacto@getwebsy.es",
      subject: "Nuevo contacto desde el sitio web",
      html: `<p><strong>Correo:</strong> ${correo}</p>`,
    });

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({
      success: false,
      message,
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
