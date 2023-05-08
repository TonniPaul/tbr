import { InfiniteRotate, LoaderContainer } from "./loader.styles";
import Image from "next/image";

const Loader = () => {
  return (
    <LoaderContainer>
      <div>
        <InfiniteRotate>
          <Image src="/assets/tbr-sm.png" alt="logo" width={100} height={100} />
        </InfiniteRotate>
        <p>Shop smart, save more with Thrifts By Ronn.</p>
      </div>
    </LoaderContainer>
  );
};

export default Loader;
