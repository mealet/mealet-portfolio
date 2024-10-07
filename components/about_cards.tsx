import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function AboutCards() {
  return (
    <div className="flex gap-5">
      <Card className="max-w-[600px]">
        <CardHeader>
          <h1 className="text-3xl font-bold">About Me</h1>
        </CardHeader>

        <Divider />

        <CardBody>
          <p className="text-lg gap-2 tracking-wider">
            Hello everyone, my name is <strong>Damir</strong>, I am a programmer
            and <br />
            web developer studying programming on my own. <br />
            I spend most of my time learning the intricacies of <br />
            languages, frameworks, libraries, etc.
          </p>
        </CardBody>
      </Card>

      <Card className="max-w-[600px]">
        <CardHeader>
          <h1 className="text-3xl font-bold">Tools I Use</h1> <br />
        </CardHeader>

        <Divider />

        <CardBody>
          <p className="text-lg gap-2 tracking-wider">
            {" "}
            For software development I&apos;m using
            <Popover color="primary" placement="right">
              <PopoverTrigger>
                <Button
                  className="text-lg ml-1"
                  color="primary"
                  radius="sm"
                  size="sm"
                  variant="light"
                >
                  Rust
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">
                    Rust is a general-purpose programming language emphasizing
                    performance, type safety, and concurrency
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            programming language.
          </p>
          <p className="text-lg gap-2 tracking-wider">
            For web development, I use
            <Popover color="primary" placement="right">
              <PopoverTrigger>
                <Button
                  className="text-lg ml-2 mr-2"
                  color="primary"
                  radius="sm"
                  size="sm"
                  variant="light"
                >
                  Javascript
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">
                    Javascript is the most popular programming language for
                    web-development
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            and
            <Popover color="primary" placement="right">
              <PopoverTrigger>
                <Button
                  className="text-lg ml-2 mr-2"
                  color="primary"
                  radius="sm"
                  size="sm"
                  variant="light"
                >
                  Typescript
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">
                    Typescript is Javascript superset which provides static
                    typed language
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            (or rather frameworks on them).
          </p>
          <p className="text-lg gap-2 tracking-wider">
            Version Control:
            <Popover color="primary" placement="right">
              <PopoverTrigger>
                <Button
                  className="text-lg ml-0"
                  color="primary"
                  radius="sm"
                  size="sm"
                  variant="light"
                >
                  Git
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">
                    Git is a distributed version control system that tracks
                    versions of files
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </p>
          <p className="text-lg gap-2 tracking-wider">
            Code Editor:
            <Popover color="primary" placement="right">
              <PopoverTrigger>
                <Button
                  className="text-lg ml-0"
                  color="primary"
                  radius="sm"
                  size="sm"
                  variant="light"
                >
                  Neovim
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">
                    Neovim is a fork of Vim that strives to improve the
                    extensibility and maintainability of Vim.
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
