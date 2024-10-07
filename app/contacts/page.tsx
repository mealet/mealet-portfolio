import ContactCard from "./contact_card";

export default function Contacts() {
  return (
    <section className="flex flex-col gap-4 justify-center items-center text-center lg:justify-normal lg:items-start lg:text-center">
      <h1 className="text-3xl font-bold md:pl-1">Contacts</h1>
      <ContactCard />
    </section>
  );
}
