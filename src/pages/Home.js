import { useEffect } from "react";
import styled from "@emotion/styled";
import OverlayLoader from "../components/OverlayLoader";
import { Button } from "semantic-ui-react";
import Gallery from "../components/Gallery";
import { useFetchAndSave } from "../hooks/useFetchAndSave";
import mq from "../helpers";
import ErrorModal from "../components/ErrorModal";

const ButtonContainer = styled.div`
  max-width: 280px;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  ${mq({
    width: ["85%", "40%"],
  })}
`;

const config = {
  url: "/images/search",
  params: { limit: 10, order: "Rand", include_breeds: true },
};

export default function Home() {
  const [images, error, loading, fetch, reset] = useFetchAndSave(
    "images",
    config
  );

  useEffect(() => {
    if (!images) fetch(config);
  }, [images, fetch]);

  return (
    <>
      <OverlayLoader active={loading}>
        <Gallery cards={images} />
        <ButtonContainer>
          <Button fluid primary onClick={() => fetch(config)}>
            load more
          </Button>
          <Button
            fluid
            secondary
            onClick={() => {
              reset();
            }}
          >
            reset
          </Button>
        </ButtonContainer>
        <ErrorModal active={error} />
      </OverlayLoader>
    </>
  );
}
