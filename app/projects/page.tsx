'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"
import { Link } from "@nextui-org/link"
import { Button } from "@nextui-org/button"
import { Spinner } from "@nextui-org/spinner"

export default function Projects() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const projects_json = "https://raw.githubusercontent.com/mealet/mealet-portfolio/refs/heads/master/projects.json?raw=true";

  useEffect(() => {
    fetch(projects_json)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
  }, [])

  if (isLoading) return <div className="flex justify-center items-center"><Spinner size="lg" className="scale-125"></Spinner></div>;
  if (!data) return <p>No data</p>;

  return (
    <section className="flex flex-col gap-5 max-w-[1200px] sm:justify-center sm:text-center md:justify-start md:text-left pb-5">
      <h1 className="text-3xl font-bold md:pl-1">Projects <br/>
        <p className="text-lg font-normal text-default-500">Click to visit</p>
      </h1>
      <div className="grid justify-center md:grid-cols-2 xl:grid-cols-3 gap-y-10">
        {data.map((project) => (
          <Link href={project.link} className="hover:scale-[102%] transition-all ease-in-out duration-300">
            <Card className="w-[350px] h-[200px] p-2">
              <CardHeader className="flex gap-3">
                <p className="text-2xl font-semibold">{project.name}</p>
              </CardHeader>

              <Divider />

              <CardBody>
                <p className="font-light text-lg">
                  {project.description}
                </p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
