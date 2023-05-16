import Link from "next/link";
import { useRouter } from "next/router";

export const HeaderText = ({
  target,
  text,
}: {
  target: string;
  text: string;
}) => {
  const router = useRouter();
  const current = router.pathname;
  return (
    <Link href={target}>
      <div
        className={`
              whitespace-nowrap
              text-[1.1rem]
              ml-[3rem]
              font-bold
              ${
                current === target
                  ? "text-GreenLight-30"
                  : "text-black hover:text-GrayScale-40"
              }`}
      >
        {text}
      </div>
    </Link>
  );
};
