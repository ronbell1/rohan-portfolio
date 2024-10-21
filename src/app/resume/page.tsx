import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Journey so far</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m an engineering student who enjoys{" "}
        <Highlight>exploring creativity</Highlight> through music, technology,
        and leading initiatives like PR and media efforts in various college
        clubs and startups. I&apos;m passionate about{" "}
        <Highlight>building innovative projects</Highlight> that make an impact
        in both the tech and creative fields.
      </Paragraph>

      <WorkHistory />
    </Container>
  );
}
