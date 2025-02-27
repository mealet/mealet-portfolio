import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import parse from "html-react-parser";

function getCitate(): string {
  "use client";

  const citates = [
    "<strong>Information</strong> is the only key to all doors, but it doesn't have a single implementation.",
    "<strong>Everyone</strong> has their own unique perspective on any given subject, and it can be influenced by various factors.",
    "<strong>As soon</strong> as everything seems to be going well in our lives, we often start looking for things to worry about.",
    "<strong>If something</strong> doesn't work, go Google it :D",
    "<strong>Open source</strong> code allows you to completely open your creation to the world, no matter how bad it is",
    "<strong>If you</strong> don't know, find out, otherwise don't even try",
  ];

  return citates[Math.floor(Math.random() * citates.length)];
}

export default function UserCard() {
  // Constants
  const avatar_link =
    "https://avatars.githubusercontent.com/u/110933288?s=400&u=a2c5fd751318efea89ffcc6c5eedd2b37c10d288&v=4";

  // Getting random citate

  let citate = getCitate();

  return (
    <div>
      <Card className="w-[330px] h-[180px] max-h-[200px]">
        <CardHeader className="flex gap-3">
          <Image height={50} radius="sm" src={avatar_link} width={50} />
          <div className="flex flex-col">
            <p className="text-md">Damir Stash</p>
            <p className="text-small text-default-500">mealet</p>
          </div>
        </CardHeader>

        <Divider />

        <CardBody>
          <p>{parse(citate)}</p>
        </CardBody>
      </Card>
    </div>
  );
}
