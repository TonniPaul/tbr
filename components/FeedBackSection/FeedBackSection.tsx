import Image from "next/image";
import { TestimonyContainer } from "./feedback.styles";
import feedbackImage from "../../public/assets/testimony1.jpg";
import { SectionHeaderText } from "@/styles/globals.styles";

const FeedBackSection = () => {
  return (
    <TestimonyContainer>
      <SectionHeaderText> FEEDBACKS AND REVIEWS</SectionHeaderText>
      <h3>FEEDBACKS</h3>
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
