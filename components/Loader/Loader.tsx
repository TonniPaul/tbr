import { InfiniteRotate, LoaderContainer } from "./loader.styles";
import Image from "next/image";

const Loader = () => {
  return (
    <LoaderContainer>
      <InfiniteRotate>
        <Image src="/assets/tbr-sm.png" alt="logo" width={100} height={100} />
      </InfiniteRotate>
    </LoaderContainer>
  );
};

export default Loader;
