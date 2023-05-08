import Image from "next/image";
import { TestimonyContainer } from "./feedback.styles";
import feedbackImage from "../../public/assets/testimony1.jpg";
import { SectionHeaderText } from "@/styles/globals.styles";

const FeedBackSection = () => {
  return (
    <TestimonyContainer>
      <SectionHeaderText>
        {"Here's is what people are are saying about us..."}
      </SectionHeaderText>
      <div>
        <div>
          <Image
            src="/assets/testimony1.jpg"
            alt="feedbacks"
            width={390}
            height={390}
          />
        </div>
        <div>
          <Image
            src="/assets/testimony8.jpg"
            alt="feedbacks"
            width={390}
            height={390}
          />
        </div>
        <div>
          <Image
            src="/assets/testimony4.jpg"
            alt="feedbacks"
            width={390}
            height={390}
          />
        </div>
      </div>
    </TestimonyContainer>
  );
};

export default FeedBackSection;
