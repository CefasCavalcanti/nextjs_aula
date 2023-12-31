import { FormattedCustomersTable } from "../lib/definitions";
import CustomersTable from "../ui/customers/table";

export default function Page() {
    const customers: FormattedCustomersTable[] = [{ email: "cefas", id: "1", image_url: "", name: "cefas", total_invoices: 12, total_paid: "1", total_pending: "12" }];
    return <div>
        <CustomersTable customers={[...customers]} />
    </div>
}