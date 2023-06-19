import { NextSeoProps } from "next-seo";

interface IUseConfig {
  title: string;
  description: string;
}

const useConfig = ({ title, description }: IUseConfig) => {
  const seoConfig: NextSeoProps = {
    title,
    description,
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/symbol.svg",
      },
    ],
    openGraph: {
      type: "website",
      title,
      description,
      images: [
        {
          url: "/symbol.svg",
        },
      ],
    },
  };
  return { seoConfig };
};

export default useConfig;
