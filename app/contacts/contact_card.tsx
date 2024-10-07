import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";

export default function ContactCard() {
  const avatar_link =
    "https://avatars.githubusercontent.com/u/110933288?s=400&u=a2c5fd751318efea89ffcc6c5eedd2b37c10d288&v=4";

  return (
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
        <p>
          Email -{" "}
          <Link href="mailto:workjason34@gmail.com">workjason34@gmail.com</Link>{" "}
          <br />
          Telegram - <Link href="https://mealet.t.me">@mealet</Link> <br />
          Github -{" "}
          <Link href="https://github.com/mealet/">github.com/mealet</Link>
        </p>
      </CardBody>
    </Card>
  );
}
