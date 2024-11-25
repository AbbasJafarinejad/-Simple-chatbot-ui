import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        <h1 className="text-xl text-center font-bold text-gray-800 mb-4">Simple Chatbot</h1>
        <div className="h-64 overflow-y-auto bg-blue-100 p-4 rounded-lg shadow-inner">
          <p className="text-gray-700 font-serif">Bot: Hello! How can I help you?</p>
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
