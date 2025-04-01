import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Aqui você implementaria a lógica real para enviar o email
    // Por exemplo, usando um serviço como SendGrid, Mailgun, etc.

    // Simulando um processamento bem-sucedido
    console.log("Mensagem recebida:", { name, email, subject, message })

    return NextResponse.json({ message: "Mensagem enviada com sucesso!" }, { status: 200 })
  } catch (error) {
    console.error("Erro ao processar mensagem:", error)
    return NextResponse.json({ message: "Erro ao enviar mensagem" }, { status: 500 })
  }
}

