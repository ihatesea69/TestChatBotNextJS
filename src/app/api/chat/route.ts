import { OpenAI } from "openai";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

// Khởi tạo client OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // Kiểm tra đăng nhập
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Bạn cần đăng nhập để sử dụng tính năng này" },
        { status: 401 }
      );
    }

    // Lấy dữ liệu từ request
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Định dạng tin nhắn không hợp lệ" },
        { status: 400 }
      );
    }

    // Chuyển đổi định dạng tin nhắn cho OpenAI API
    const formattedMessages = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    // Gọi API OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 500,
    });

    // Lấy phản hồi từ OpenAI
    const message = response.choices[0].message.content;

    // Trả về kết quả
    return NextResponse.json({ message });
  } catch (error) {
    console.error("Lỗi OpenAI API:", error);
    return NextResponse.json(
      { error: "Có lỗi xảy ra khi xử lý yêu cầu của bạn" },
      { status: 500 }
    );
  }
}
