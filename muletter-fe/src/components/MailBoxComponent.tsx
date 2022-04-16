import { ContainerMar16 } from "./common/Container";
import { ContentTitle } from "./common/PageTitle";

type Props = {
  id?: string;
};

function MailBoxComponent({ id }: Props) {
  return (
    <ContainerMar16>
      <ContentTitle>{id}</ContentTitle>
    </ContainerMar16>
  );
}

export default MailBoxComponent;
