import { PageLayout } from "@/components/page-layout";
import { Container } from "@/components/container";
import { MemorialHeader } from "@/components/memorial-header";
import { MemorialInfo } from "@/components/memorial-info";
import { MemorialBio } from "@/components/memorial-bio";
import { MemorialQuotes } from "@/components/memorial-quotes";
import { MemorialMedia } from "@/components/memorial-media";
import { MemorialPhotos } from "@/components/memorial-photos";
import { MemorialWords } from "@/components/memorial-words";
import { MemorialContacts } from "@/components/memorial-contacts";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <PageLayout>
      <MemorialHeader
        fullName="Александр Викторович Карпук"
        birthDate="1968-02-13"
        deathDate="2025-08-12"
        photoUrl="http://127.0.0.1:54331/storage/v1/object/public/memorial-media/memorials/52091a5b-f518-4d3b-824e-97fc11ab31e0/photo/1755016740203_main_image_3.png"
        birthPlace="Солигорск, Беларусь"
        deathPlace="Брест, Беларусь"
      />
      <Container>
        <MemorialInfo />
        <MemorialBio />
      </Container>
      <MemorialQuotes />
      <Container>
        <MemorialMedia />
        <MemorialPhotos />
        <MemorialWords />
        <MemorialContacts />
      </Container>
      <Footer />
    </PageLayout>
  );
}