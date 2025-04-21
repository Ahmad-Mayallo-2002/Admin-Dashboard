import { Image, SimpleGrid } from "@chakra-ui/react";
import coinbase from "../../assets/images/logos/gray-logos/logo-coinbase.svg";
import nasa from "../../assets/images/logos/gray-logos/logo-nasa.svg";
import netflix from "../../assets/images/logos/gray-logos/logo-netflix.svg";
import pinterest from "../../assets/images/logos/gray-logos/logo-pinterest.svg";
import spotify from "../../assets/images/logos/gray-logos/logo-spotify.svg";
import vodafone from "../../assets/images/logos/gray-logos/logo-vodafone.svg";

const images = [coinbase, nasa, netflix, pinterest, spotify, vodafone];

export default function CompaniesGrayImages() {
  return (
    <>
      <SimpleGrid
        my={16}
        columns={{ base: 1, md: 3, lg: 6 }}
        className="images"
        gapY={4}
      >
        {images.map((image, index) => (
          <Image
            w={{ base: "50%", md: "50%" }}
            mx="auto"
            src={image}
            key={index}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
