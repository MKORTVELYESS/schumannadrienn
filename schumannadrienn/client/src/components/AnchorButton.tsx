import clsx from "clsx";

interface ButtonLinkProps {
  href: string;
  textContent: string;
  className?: string;
}

const ButtonLink = ({ href, textContent, className }: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className={clsx(
        "text-white bg-rose-600 py-2 rounded-lg shadow hover:brightness-95 transition",
        className
      )}
    >
      {textContent}
    </a>
  );
};

export default ButtonLink;
