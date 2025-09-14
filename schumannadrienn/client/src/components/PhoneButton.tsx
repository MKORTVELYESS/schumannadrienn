import PhoneIcon from "@mui/icons-material/Phone";

export default function PhoneButton() {
  return (
    <a
      href="tel:+36704103545"
      className="flex-1 border border-gray-200 py-2 rounded-lg text-center"
    >
      <PhoneIcon /> +36 70 410 3545
    </a>
  );
}
