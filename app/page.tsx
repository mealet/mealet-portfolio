import { Button, ButtonGroup } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Code } from "@nextui-org/code";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import UserCard from "@/components/user_card"
import AboutCards from "@/components/about_cards"
import { ClipboardIcon, FileIcon, CodeIcon } from "@/components/icons"

export default function Home() {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:mt-[60px] lg:py-10">
        <div className="inline-block max-w-xl justify-center">
          <span className={title({ size: "lg" })}>Hello, I'm&nbsp;</span>
          <span className={title({ color: "blue", size: "lg" })}>@mealet&nbsp;</span> <br />

          <div className={subtitle({ class: "mt-4" })}>
            Software & Web Developer
          </div>

          <div className="flex gap-3 mt-5">
            <a href="/projects"><Button color="primary" className="text-white text-lg">See my projects</Button></a>
            <a href="/about">
              <Button color="primary" variant="ghost" className="text-lg">
                About
              </Button>
            </a>
          </div>

        </div>

        <div className="flex mx-5 mt-6">
          <UserCard></UserCard>
        </div>
      </section>

      <br/>
      
      <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <Card className="max-w-[330px] p-1">
            <CardBody>
              <div class="flex gap-2">
                <ClipboardIcon size={45} />              
                <p className="text-[1.8rem] font-bold">More Practice</p>
              </div>
              <p className="text-[1rem] pl-2">
                My main principle is: practice is best choice for studying and learning new features
              </p>
            </CardBody>
          </Card>

          <Card className="max-w-[330px] p-1">
            <CardBody>
              <div class="flex gap-3">
                <FileIcon size={30} className="mt-1" />              
                <p className="text-[1.8rem] font-bold">Read The Docs</p>
              </div>
              <p className="text-[1rem] pl-2">
                Documentation is the best tool for getting information about a framework/library/language, etc.
              </p>
            </CardBody>
          </Card>

          <Card className="max-w-[330px] p-1">
            <CardBody>
              <div class="flex gap-3">
                <CodeIcon size={33} className="mt-1" />              
                <p className="text-[1.8rem] font-bold">Open Source</p>
              </div>
              <p className="text-[1rem] pl-2">
                Open source is the foundation for the development of programming.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* <section className="flex gap-4 justify-center items-center py-10 md:py-10"> */}
      {/*   <AboutCards></AboutCards> */}
      {/* </section> */}
    </>
  );
}
