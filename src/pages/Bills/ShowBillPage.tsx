import { useParams } from "react-router-dom";

function ShowBillPage() {
  const { billsId } = useParams();
  return <div>Show Bill {billsId}</div>;
}

export default ShowBillPage;
