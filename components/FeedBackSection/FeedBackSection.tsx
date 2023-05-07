import Image from "next/image";
import { TestimonyContainer } from "./feedback.styles";
import feedbackImage from "../../public/assets/testimony1.jpg";

const FeedBackSection = () => {
  return (
    <TestimonyContainer>
      <div>
        <Image
          src="/assets/testimony1.jpg"
          alt="feedbacks"
          width={300}
          height={500}
        />
      </div>
    </TestimonyContainer>
  );
};

export default FeedBackSection;
