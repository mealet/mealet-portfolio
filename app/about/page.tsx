'use client'

import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Link} from "@nextui-org/link";

export default function About() {
  const birthdayYear = 2009;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthdayYear;

  return (
    <section>
      <div className="pb-4">
        <h1 className="font-semibold text-3xl pl-3">About Me</h1>
        
        <br/>

        <div>
          <Accordion variant="splitted">
            <AccordionItem key="1" aria-label="Who Am I" title="Who Am I">
              <p>
                My name is <strong>Damir</strong>, and I'm {age} years Russian developer 👋<br/>
                I've started learning programming in 9 years and tried a lot of IT fields. <br/>
                First my projects was simple web pages, after that all my time was taken by <Link isExternal href="https://python.org" showAnchorIcon>Python</Link> (telegram & discord bots mainly). <br/>
                In January 2024 I've started learning <Link isExternal href="https://www.rust-lang.org" showAnchorIcon>Rust</Link> and did some interesting project on it.
              </p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Tools I Use" title="Tools I Use">
              <p>
                <span class="font-semibold text-lg">OS:</span> Arch Linux <br/>
                <span class="font-semibold text-lg">Desktop Enviroment:</span> GNOME 47 <br/>
                <span class="font-semibold text-lg">Code Editor:</span> Neovim <br/>
                <span class="font-semibold text-lg">VCS:</span> Git <br/>
              </p>
            </AccordionItem>

            <AccordionItem key="3" aria-label="Main Languages" title="Main Languages">
              <p>
                <ul>
                  <li>- Rust</li>
                  <li>- Javascript/Typescript</li>
                  <li>- Python</li>
                </ul>
              </p>
            </AccordionItem>

            <AccordionItem key="4" aria-label="Frameworks I Use" title="Favourite Frameworks">
              <p>
                <ul>
                  <li>- Tauri</li>
                  <li>- NextJS</li>
                  <li>- Svelte</li>
                </ul>
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
