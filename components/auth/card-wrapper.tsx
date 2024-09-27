"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import HeaderGeneral from "../general/headergeneral";
import BackButton from "./back-button";

interface CardWrapperProps {
  label: string;
  title: string;
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
}

const CardWrapper = ({
  label,
  title,
  backButtonHref,
  backButtonLabel,
  children,
}: CardWrapperProps) => {
  return (
    <Card className="xl:w-1/4 md:w-1/2 shadow-md bg-stone-50 text-black">
      <CardHeader>
        <HeaderGeneral label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
