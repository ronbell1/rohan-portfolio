import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Rohan</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a aspiring web-developer that loves{" "}
        <Highlight>building websites</Highlight> and am currently exploring
        various fields within technology. My journey in web development began
        with a curiosity about how websites are made, and now I am dedicated to
        creating engaging and user-friendly online experiences.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Currently I&apos;m studying at SRM University{" "}
        <Highlight>2023-2027</Highlight> where I am honing my skills in
        programming languages, design principles, and web technologies. I enjoy
        collaborating on projects, learning from others, and continuously
        improving my craft.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
