export const prerender = false;

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const correo = data.get("correo");
  console.log(import.meta.env.SMTP_USER)

  const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: Number(import.meta.env.SMTP_PORT),
    secure: import.meta.env.SMTP_SECURE === "true",
    auth: {
      user: import.meta.env.SMTP_USER,
      pass: import.meta.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Web GetWebsy" <${import.meta.env.SMTP_USER}>`,
      to: "contacto@getwebsy.es", // puedes enviar a este mismo correo
      subject: "Nuevo mensaje desde tu sitio web",
      html: `
        <p><strong>Correo:</strong> ${correo}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error al enviar el correo:", err);
    const errorMessage = err instanceof Error ? err.message : String(err);

    return new Response(
      JSON.stringify({ success: false, message: errorMessage + " VAIR: " + import.meta.env.SMTP_HOST }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
  );
  }
};
