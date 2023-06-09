import Link from "next/link";
import { useRouter } from "next/router";

export const HeaderText = ({
  target,
  text,
  ml = "3rem",
}: {
  target: string;
  text: string;
  ml?: string;
}) => {
  const router = useRouter();
  const current = router.pathname;
  return (
    <Link href={target} style={{ marginLeft: ml }}>
      <div
        className={`
              whitespace-nowrap
              text-[1.1rem]
              flex
              justify-center
              items-center
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
