import ErrorPage from "@/components/Error404/Error404";
import NoFooterLayout from "@/components/Layout/noFooterLayout";

const Error404 = () => {
  return (
    <NoFooterLayout>
      <ErrorPage />
    </NoFooterLayout>
  );
};

export default Error404