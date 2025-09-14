import PhoneButton from "./PhoneButton";

import type { FormEvent } from "react";
import { useState } from "react";
interface SendEmailResponse {
  success: boolean;
}

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data: SendEmailResponse = await res.json();

      if (data.success) {
        setStatus({ message: "Üzenet sikeresen elküldve!", success: true });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus({ message: "Hiba történt, próbáld újra!", success: false });
      }
    } catch (err) {
      console.error(err);
      setStatus({ message: "Hiba történt, próbáld újra!", success: false });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="bg-white p-6 rounded-2xl shadow" onSubmit={handleSubmit}>
      {status && (
        <div
          className={`mb-4 text-sm ${
            status.success ? "text-green-600" : "text-rose-600"
          }`}
        >
          {status.message}
        </div>
      )}
      <label className="block text-sm text-gray-600">Név</label>
      <input
        className="mt-1 w-full border rounded-md px-3 py-2"
        placeholder="Pl. Kovács Anna"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label className="block text-sm text-gray-600 mt-4">Email</label>
      <input
        className="mt-1 w-full border rounded-md px-3 py-2"
        placeholder="kovacs.anna@schumannadrienn.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label className="block text-sm text-gray-600 mt-4">Üzenet</label>
      <textarea
        className="mt-1 w-full border rounded-md px-3 py-2 h-28"
        placeholder="Rövid leírás a problémádról és preferált időpontok."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <div className="mt-4 flex gap-3">
        <button
          type="submit"
          disabled={loading}
          className={`flex-1 py-2 rounded-lg text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-rose-600"
          }`}
        >
          Üzenet küldése
        </button>
        <PhoneButton />
      </div>
    </form>
  );
}
