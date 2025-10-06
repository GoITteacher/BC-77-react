/**
 * - Union
 * - Літеральні типи ( "pending", "shipped", "delivered", "canceled")
 */

let error: string | null = null;

type Status = "pending" | "shipped" | "delivered" | "canceled";

let status: Status = "pending";

status = "pending";

type Delivery = "drone" | "courier" | "pickup";
type DeliveryTime = "morning" | "afternoon" | "evening";

interface Order {
  username: string;
  email: string;
  total: number;
  delivery: Delivery;
  deliveryTime: DeliveryTime;
}

const order: Order = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  total: 120,
  delivery: "courier",
  deliveryTime: "afternoon",
};
