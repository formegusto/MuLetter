import { useParams } from "react-router-dom";
import { ContainerMar16 } from "./common/Container";
import { ContentTitle } from "./common/PageTitle";

function MailBoxComponent() {
  const { id } = useParams();
  return (
    <ContainerMar16>
      <ContentTitle>{id}</ContentTitle>
    </ContainerMar16>
  );
}

export default MailBoxComponent;
