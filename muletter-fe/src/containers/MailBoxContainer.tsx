import React from "react";
import { ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import MailBoxComponent from "../components/MailBoxComponent";
import MailBoxConnector from "../store/mailbox/connector";

type Props = ConnectedProps<typeof MailBoxConnector>;

function MailBoxContainer({ getMail }: Props) {
  const { id } = useParams();

  React.useEffect(() => {
    getMail(id as string);
  }, [getMail, id]);

  return <MailBoxComponent id={id} />;
}

export default MailBoxConnector(MailBoxContainer);
