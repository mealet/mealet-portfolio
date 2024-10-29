"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Spinner } from "@nextui-org/spinner";

export default function Projects() {
  const [data, setData] = useState([{ name: "", link: "", description: "" }]);
  const [isLoading, setLoading] = useState(true);
  const projects_json =
    "https://raw.githubusercontent.com/mealet/mealet-portfolio/refs/heads/master/projects.json?raw=true";

  useEffect(() => {
    fetch(projects_json)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <Spinner className="scale-125" size="lg" />
      </div>
    );
  if (!data) return <p>No data</p>;

  return (
    <section className="flex flex-col gap-5 justify-center text-center md:justify-start md:text-left pb-5">
      <h1 className="text-3xl font-bold md:pl-1">
        Projects <br />
        <p className="text-lg font-normal text-default-500">Click to visit</p>
      </h1>
      <div className="sm:inline-flex sm:flex-col md:grid gap-3 lg:grid-cols-3 md:grid-cols-2">
        {data.map((project) => (
          <Link
            key={project.name}
            className="hover:scale-[102%] transition-all ease-in-out duration-300"
            href={project.link}
          >
            <Card className="w-[100%]">
              <CardHeader className="flex gap-3">
                <p className="text-2xl font-semibold">{project.name}</p>
              </CardHeader>

              <Divider />

              <CardBody className="p-5 h-[9rem]">
                <p className="font-light text-lg">{project.description}</p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
